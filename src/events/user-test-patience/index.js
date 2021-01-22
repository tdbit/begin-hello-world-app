let arc = require('@architect/functions')

async function userTestPatience (event) {
  let user = event
  console.log(user)
  return
}

exports.handler = arc.events.subscribe(userTestPatience)
