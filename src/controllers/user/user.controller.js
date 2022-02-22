exports.getAllUsers = (req, res) => {
  res.status(200).send({
    valid: true,
    data: { users: "users", items: [] },
    msg: "Get All user",
  });
};
