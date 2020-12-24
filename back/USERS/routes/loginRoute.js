const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Utilisateur = require("../modules/utlisateur");
const jwt = require("jsonwebtoken");
const personnel = require("../../GRH/modules/personnel");
require("dotenv").config({ path: "./config/.env" });

router.post(
  "/login",
  [
    body("login", "Entrez un login valide : +6 caractéres").isLength({
      min: 6,
    }),

    body(
      "password",
      "Le password doit etre supérieur à 6 caractéres"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const { login, password } = req.body;
      Utilisateur.findOne({ login })
        .populate("roles")
        .then((user) => {
          if (!user) {
            return res
              .status(400)
              .json({ errors: [{ msg: "login incorrect !" }] });
          } else {
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (!isMatch) {
                return res
                  .status(400)
                  .json({ errors: [{ msg: "password incorrect !" }] });
              } else {
                let payload = {
                  userId: user._id,
                };
                jwt.sign(payload, process.env.SECRET, (err, token) => {
                  if (err) {
                    throw err;
                  } else {
                    res.status(200).send({ token });
                  }
                });
              }
            });
          }
        });
    }
  }
);

router.post(
  "/register",
  [
    body("CIN", "Entrez un numero valide de 8 chiffres").isLength({
      min: 8,
      max: 8,
    }),
    body("matricule", "Verifiez le matricule").isLength({ min: 10, max: 10 }),
    body("login", "Entrez un login valide : +6 caractéres").isLength({
      min: 6,
    }),

    body(
      "password",
      "Le password doit etre supérieur à 6 caractéres"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const { matricule, CIN, login, password } = req.body;
      personnel.findOne({ matricule, CIN }).then((pers) => {
        if (!pers) {
          return res.status(400).json({
            errors: [
              {
                msg: "Veuillez Verifier le matricule et le numéro de votre CIN",
              },
            ],
          });
        } else {
          Utilisateur.find({ login })
            .then((users) => {
              if (users.length) {
                res
                  .status(403)
                  .json({ errors: [{ msg: "Utilisateur existe déja" }] });
              } else {
                let newUser = new Utilisateur({
                  login,
                  password,
                  roles: ["5fdf57d200209128f8705454"],
                  personnelId: pers._id,
                });
                bcrypt.genSalt(10, (err, salt) => {
                  if (err) throw err;
                  else {
                    bcrypt.hash(password, salt, (err, hash) => {
                      if (err) throw err;
                      else {
                        newUser.password = hash;
                        newUser
                          .save()
                          .then(() => {
                            let payload = {
                              userId: newUser._id,
                            };
                            jwt.sign(
                              payload,
                              process.env.SECRET,
                              (err, token) => {
                                if (err) throw err;
                                else {
                                  res.status(200).json({
                                    token,
                                  });
                                }
                              }
                            );
                          })
                          .catch((err) =>
                            res
                              .status(400)
                              .json({ errors: [{ msg: "server error" }] })
                          );
                      }
                    });
                  }
                });
              }
            })
            .catch(() =>
              res.status(400).json({ errors: [{ msg: "server error" }] })
            );
        }
      });
    }
  }
);

module.exports = router;
