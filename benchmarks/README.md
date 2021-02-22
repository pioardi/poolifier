# Poolifier Benchmarks

Welcome to poolifier benchmarks and thanks to look into this project.

## Folder Structure

The internal folder contains poolifier internal benchmarks.
The versus-external-pools folder contains benchmarks versus other Node.js pools.

## Poolifier vs other pools benchmark

To compare poolifier pools performance vs other pools performance we chose to use [hyperfine](https://github.com/sharkdp/hyperfine).
We chose to use this tool because it allows to run isolated Node.js processes so that each pool does not impact each other.

We will add more details on each function that we benchmark.

Those are our results:

- CPU Intensive task with 100k operations submitted to each pool [BENCH-100000.MD](./versus-external-pools/BENCH-100000.MD)

## How to run benchmarks

### Internal

To run the internal benchmark you just need to navigate to the root of poolifier project and run `npm run benchmark`

## Versus other pools

To run the benchmark versus other pools you will need to:

- [Install hyperfine](https://github.com/sharkdp/hyperfine#installation)
- Run the `./bench.sh` into the `versus-external-pools` folder