const  filterProperties  = require('./exercicio1')
module.exports = filterPropertiesN
//exercicio 2

function filterPropertiesN(props, objs) {
    return objs.map(elem => filterProperties(props,elem))
  }

