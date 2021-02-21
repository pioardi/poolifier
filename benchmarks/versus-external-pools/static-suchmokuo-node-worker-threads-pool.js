// IMPORT LIBRARIES
/* eslint-disable node/no-missing-require */
const { DynamicPool, StaticPool } = require('node-worker-threads-pool')
// FINISH IMPORT LIBRARIES
// IMPORT FUNCTION TO BENCH
const functionToBench = require('./functions/json-stringify')
// FINISH IMPORT FUNCTION TO BENCH
const size = process.env.POOL_SIZE
const iterations = process.env.NUM_ITERATIONS
const data = {
  test: 'MYBENCH'
}

const pool = new StaticPool({
  size: Number(size),
  task: functionToBench
})

async function run () {
  const promises = []
  for (let i = 0; i < iterations; i++) {
    promises.push(pool.exec(data))
  }
  await Promise.all(promises)
  /* eslint-disable no-process-exit */
  process.exit()
}

run()
