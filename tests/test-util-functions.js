function waitExits (pool, numberOfExitEventsToWait) {
  let exitEvents = 0
  return new Promise(function (resolve, reject) {
    pool.workers.forEach(w => {
      w.on('exit', () => {
        exitEvents++
        if (exitEvents === numberOfExitEventsToWait) {
          resolve(exitEvents)
        }
      })
    })
  })
}

module.exports.waitExits = waitExits
