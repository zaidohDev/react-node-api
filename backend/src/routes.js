const {Router} = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const routes = Router()
// verbos http: get, post, put, delete

// tipos de parametros:

//Query Params: request.query (filtros, ordenação, paginação ...)
//Route Params request.params (identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index)
routes.get('/show/:id', DevController.show)
routes.post('/devs', DevController.store)
routes.get('/search', SearchController.index)
routes.delete('/remove/:id', DevController.destroy)
routes.put('/update/:id', DevController.update)

module.exports = routes