const data = require("../DatabaseController/data")

const apiRoute = require("express").Router()

apiRoute.get("/data", data)

module.exports = apiRoute;