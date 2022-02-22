exports.getScores = (req, res) => {
  res.status(200).send({ data: {}, valid: true, msg: "Scores" });
};

exports.getScoreById = (req, res) => {
  const { id_score } = req.query;

  res.status(200).send({ data: { id_score }, valid: true, msg: "Scoressss" });
};
