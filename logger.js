//Logs original URL
module.exports = (req, res, next) => {
    console.log(req.originalUrl);
    next();
};