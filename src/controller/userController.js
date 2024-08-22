const registerUser = (req, res) => {
  res.status(201).json({ message: "User registered successfully" });
};

const getUsers = (req, res) => {
  res.status(200).json({ users: [] });
};

module.exports = { registerUser, getUsers };
