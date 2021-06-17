const transToController = require('../controllers');
const apiList = require('../mock')

const routes = apiList.map(api => (
  {
    ...api,
    controller: transToController(api.data)
  }
))

module.exports = routes;
