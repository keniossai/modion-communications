module.exports = (req, res, next) => {
	if (
		!req.body.name ||
		!req.body.email ||
		!req.body.address ||
		!req.body.message
	) {
		return res.redirect('/')
	}

	next()
}
