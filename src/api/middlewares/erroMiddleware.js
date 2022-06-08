module.exports = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status)
      .json({ message: err.message });
  }
  res.status(500).json({ message: 'Internal server error' });
};
