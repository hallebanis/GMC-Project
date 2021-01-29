const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const Utilisateur = require("../modules/utlisateur");
const Demande = require("../../GRH/modules/demande");
const Personnel = require("../../GRH/modules/personnel");

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  Utilisateur.findById(req.userId)
    .populate("role")
    .populate("personnelId")
    .populate("demande")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json({ errors: [{ msg: err }] });
    });
});

router.get("/demande", authMiddleware, (req, res) => {
  Demande.find()
    .populate("personnelId")
    .then((demandes) => res.status(200).json(demandes))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

router.put("/demande", authMiddleware, (req, res) => {
  const { id, dateReception } = req.body;
  Demande.findByIdAndUpdate(id, { dateReception, etat: "lu" })
    .then(() => {})
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
  Demande.findById(id)
    .populate("personnelId")
    .then((demande) => res.status(200).json(demande))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

router.post("/demande", authMiddleware, (req, res) => {
  const { sujet, description, personnelId } = req.body;
  const dateEnvoie = Date.now();
  const etat = "envoyée";
  const demande = new Demande({
    sujet,
    description,
    personnelId,
    etat,
    dateEnvoie,
  });
  demande
    .save()
    .then((demand) => {
      Personnel.findByIdAndUpdate(personnelId, {
        $push: { demande: demand._id },
      })
        .then(() => {})
        .catch(() => {});
      res.status(200).json(demand);
    })
    .catch((err) => {
      res.status(400).json({ errors: [{ msg: err }] });
    });
});

router.get("/loadpersonnel/:id", authMiddleware, (req, res) => {
  const id = req.params.id;
  Personnel.findById(id)
    .populate("demande")
    .populate("absence")
    .populate("avance")
    .populate("contrat")
    .populate("diplome")
    .populate("embauche")
    .populate("pointage")
    .populate("pret")
    .populate("assignPrime")
    .then((pers) => {
      res.status(200).json(pers);
    })
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
