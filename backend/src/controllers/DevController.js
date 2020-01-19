const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = { 
  async index(req, res) {
    const listDev = await Dev.find()
    return res.json(listDev)
  },
  async show(req, res) {
    const dev = await Dev.findOne(req.params.id)
    return res.json(dev)
  },
  async  store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body
    let dev = await Dev.findOne({github_username})
    if (!dev) {
      const apiRes = await axios.get(`https://api.github.com/users/${github_username}`)
      const { name = login, avatar_url, bio} = apiRes.data
      const techsArray = parseStringAsArray(techs)
      const location = { type: 'Point', coordinates: [longitude, latitude ]}
      dev = await Dev.create({ github_username, name, avatar_url, bio, techs: techsArray, location })  
    }
    return res.json(dev)
  },
  async destroy(req, res) {
    await Dev.findOneAndDelete(req.params.id)
    return res.json({messagem: "Dev removido com sucesso"})
  },
  async update(req, res) {
    const dev = await Dev.findOneAndUpdate(req.params.id, req.body, {new: true})
    return res.json(dev)
  }  
}


