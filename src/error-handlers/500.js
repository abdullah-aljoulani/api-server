'use strict'

module.exports = (error,req,res,next)=>{
res.status(500).json({
code: 500,
message: `Server error!! ${error.message}`,
URL: req.originalUrl,
body: req.body
})
}