const vandium = require('vandium')

module.exports = vandium.api()
  .GET((event) => {

    return "Handle GET request!"
  })
  .POST((event) => {

    return "Handle POST request!"
  })
  .PUT((event) => {

    return "Handle PUT request!"
  })
  .DELETE((event) => {

    return "Handle DELETE request!"
  })

