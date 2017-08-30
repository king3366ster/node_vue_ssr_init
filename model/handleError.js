
let unhandledRejections = {}

process.on('unhandledRejection', (reason, p) => {
  unhandledRejections[p] = reason
})

process.on('rejectionHandled', (p) => {
  try{
    delete unhandledRejections[p]
  }catch(err){
    console.error("rejectionHandled", err)
  }
})

process.on('exit', () => {
  clearUnhandledRejections()
})

function clearUnhandledRejections () {
  try {
    for ( let p in unhandledRejections ) {
      let reason = unhandledRejections[p]
      console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason)
      delete reason
    }
  } catch (err) {

  } finally {
    unhandledRejections = null
  }
}

setInterval(clearUnhandledRejections, 0.01 * 60 * 1000)

process.on('uncaughtException', (err) => {
  console.error('Caught Exception:', err)
})
