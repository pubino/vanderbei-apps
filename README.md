# Vanderbei Java Applications

A collection of educational Java simulations and visualizations originally developed by [Robert Vanderbei](https://vanderbei.princeton.edu/) at Princeton University.

## Live Site

[https://pubino.github.io/vanderbei-apps/](https://pubino.github.io/vanderbei-apps/)

## Applications

This repository contains 28 refactored Java applications as git submodules:

### Optimization & Operations Research
- [twophase-sim](https://github.com/pubino/twophase-sim) - Two-phase simplex algorithm
- [pd-sim](https://github.com/pubino/pd-sim) - Primal-dual simplex method
- [affine-sim](https://github.com/pubino/affine-sim) - Affine scaling interior point method
- [nettool-sim](https://github.com/pubino/nettool-sim) - Network simplex optimization
- [shortpaths-sim](https://github.com/pubino/shortpaths-sim) - Dijkstra's shortest path
- [terrass-sim](https://github.com/pubino/terrass-sim) - Territory assignment optimization
- [newsboy-sim](https://github.com/pubino/newsboy-sim) - Newsvendor problem simulator

### Astronomy & Physics
- [galaxy-sim](https://github.com/pubino/galaxy-sim) - N-body gravitational simulation
- [galaxy-3d-sim](https://github.com/pubino/galaxy-3d-sim) - 3D galaxy simulation
- [saturn-sim](https://github.com/pubino/saturn-sim) - Saturn ring/moon dynamics
- [belbruno-sim](https://github.com/pubino/belbruno-sim) - Low-energy lunar transfer
- [starsystem-sim](https://github.com/pubino/starsystem-sim) - Binary star systems
- [janus-sim](https://github.com/pubino/janus-sim) - Janus-Epimetheus co-orbital moons
- [l4l5-sim](https://github.com/pubino/l4l5-sim) - Lagrange point dynamics
- [cluster-sim](https://github.com/pubino/cluster-sim) - Star cluster simulation
- [dustdisk-sim](https://github.com/pubino/dustdisk-sim) - Protoplanetary disk
- [dustatl2-sim](https://github.com/pubino/dustatl2-sim) - Dust at Sun-Earth L2
- [stability-sim](https://github.com/pubino/stability-sim) - Orbital stability analysis
- [gravity-sim](https://github.com/pubino/gravity-sim) - Two-body gravity simulation
- [starcharts-sim](https://github.com/pubino/starcharts-sim) - 3D constellation visualization

### Mathematics & Education
- [julia-sim](https://github.com/pubino/julia-sim) - Mandelbrot/Julia fractals
- [gauss-sim](https://github.com/pubino/gauss-sim) - Gaussian elimination
- [heat-sim](https://github.com/pubino/heat-sim) - Heat diffusion simulation
- [median-sim](https://github.com/pubino/median-sim) - Weiszfeld median algorithm
- [integra-sim](https://github.com/pubino/integra-sim) - Numerical integration
- [maze-sim](https://github.com/pubino/maze-sim) - Maze generation/solving
- [clock-sim](https://github.com/pubino/clock-sim) - Analog clock display
- [sail-sim](https://github.com/pubino/sail-sim) - Sailing simulation

## Building

Each submodule has its own Makefile:

```bash
cd <submodule>
make jar   # Build JAR file
make run   # Run the application
make app   # Build macOS .app bundle (optional)
```

## Requirements

- Java 14+

## License

Based on original work by Robert Vanderbei, Princeton University.
