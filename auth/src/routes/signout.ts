import express from "express";
const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  req.session = null; // destroy the session and nullify the JWT
  res.send({});
});

export { router as signoutRouter };
