const express = require("express");
const router = express.Router();
const Utilisateur = require("../modules/utlisateur");
const Role = require("../modules/role");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../../helpers/authMiddleware");

//gestion des users

router.get("/users", authMiddleware, (req, res) => {
  Utilisateur.find({})
    .populate("role")
    .populate("personnelId")
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json({ errors: [{ msg: "server error" }] });
    });
});

router.post(
  "/adduser",
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
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
    else {
      const { password, login, role, personnelId } = req.body;
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
              role,
              personnelId,
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
                      .then((user) => res.status(200).json(user))
                      .catch((err) =>
                        res.status(400).json({ errors: [{ msg: err }] })
                      );
                  }
                });
              }
            });
          }
        })
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  }
);

router.put(
  "/edituser",
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
    const { id, login, password, role } = req.body;
    if (password) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        else {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            else {
              Utilisateur.findByIdAndUpdate(id, {
                login,
                password: hash,
                role,
              })
                .then(() => {
                  Utilisateur.findById(id)
                    .populate("personnelId")
                    .populate("role")
                    .then((user) => res.status(200).json(user))
                    .catch((err) =>
                      res
                        .status(400)
                        .json({ errors: [{ msg: "erreur serveur" }] })
                    );
                })
                .catch(() =>
                  res.status(400).json({ errors: [{ msg: "erreur serveur" }] })
                );
            }
          });
        }
      });
    } else {
      Utilisateur.findByIdAndUpdate(id, {
        login,
        role,
      })
        .populate("personnelId")
        .populate("role")
        .then(() => {
          Utilisateur.findById(id)
            .populate("personnelId")
            .populate("role")
            .then((user) => res.status(200).json(user))
            .catch((err) =>
              res.status(400).json({ errors: [{ msg: "erreur serveur" }] })
            );
        })
        .catch(() =>
          res.status(400).json({ errors: [{ msg: "erreur serveur" }] })
        );
    }
  }
);

router.delete("/deleteuser/:id", (req, res) => {
  Utilisateur.findOneAndDelete({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "erreur serveur" }] })
    );
});

//gestion des roles

router.get("/roles", authMiddleware, (req, res) => {
  Role.find()
    .then((roles) => res.status(200).json(roles))
    .catch(() => res.status(400).json({ errors: [{ msg: "server error" }] }));
});

router.post("/addrole", (req, res) => {
  const { titre } = req.body;
  Role.find({ titre })
    .then((roles) => {
      if (roles.length) {
        res
          .status(403)
          .json({ errors: [{ msg: `le role "${titre}" existe déja` }] });
      } else {
        let newRole = new Role({
          titre,
        });
        newRole
          .save()
          .then(() =>
            res.status(200).json({
              results: [{ msg: `role : "${titre}" a été créer avec succées` }],
            })
          )
          .catch((err) =>
            res.status(500).json({ errors: [{ msg: err.message }] })
          );
      }
    })
    .catch((err) => res.status(500).json({ errors: [{ msg: err.message }] }));
});

router.put("/roles/edit/", authMiddleware, (req, res) => {
  const { id, titre } = req.body;
  Role.findByIdAndUpdate(id, { titre: titre })
    .then(() => {
      Role.findById(id)
        .then((role) => {
          res.status(200).json(role);
        })
        .catch((err) =>
          res.status(400).json({ errors: [{ msg: "server error" }] })
        );
    })
    .catch(() => res.status(400).json({ errors: [{ msg: "server error" }] }));
});

router.delete("/roles/delete/:id", authMiddleware, (req, res) => {
  Role.findByIdAndDelete(req.params.id)
    .then((role) => {
      Utilisateur.deleteMany({ role: role._id })
        .then(() => {
          res.status(200).json(role);
        })
        .catch((err) =>
          res
            .status(400)
            .json({ errors: [{ msg: "deleting users failed..." }] })
        );
    })
    .catch(() =>
      res.status(400).json({ errors: [{ msg: "deleting role failed..." }] })
    );
});

module.exports = router;
