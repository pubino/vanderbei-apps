These applications were originally developed as Java Applets, designed to run in web browsers. Since [support for Java Applets has been discontinued](https://inside.java/2025/12/03/applet-removal/), each has been repackaged as a standalone desktop application.

The **Repack** column links to each application's repository, which includes:
- Source code updated for modern Java (14+)
- Build instructions via `make jar` to create an executable JAR
- Optional macOS app bundle via `make app`

| # | App Name | Description | Source | Repack |
|---|----------|-------------|--------|--------|
| 1 | Affine Scaling | Animated affine scaling interior point method | `affine_animate/` | [`affine-sim`](https://github.com/pubino/affine-sim) |
| 2 | Analog Clock | Real-time analog clock display with hour, minute, second hands | `ORF201/clock/` | [`clock-sim`](https://github.com/pubino/clock-sim) |
| 3 | Belbruno Transfer | Low-energy lunar transfer trajectories (weak stability boundary) | `astro/galaxy/Belbruno.java` | [`belbruno-sim`](https://github.com/pubino/belbruno-sim) |
| 4 | Dust at L2 | Dust particle dynamics at Sun-Earth L2 point | `astro/galaxy/DustAtL2.java` | [`dustatl2-sim`](https://github.com/pubino/dustatl2-sim) |
| 5 | Dust Disk | Protoplanetary dust disk dynamics | `astro/galaxy/DustDisk.java` | [`dustdisk-sim`](https://github.com/pubino/dustdisk-sim) |
| 6 | Galaxy | N-body gravitational simulation with multiple integrators | `astro/galaxy/Galaxy.java` | [`galaxy-sim`](https://github.com/pubino/galaxy-sim) |
| 7 | Galaxy 3D | 3D galaxy simulation with leapfrog integrator | `astro/galaxy/Galaxy3d.java` | [`galaxy-3d-sim`](https://github.com/pubino/galaxy-3d-sim) |
| 8 | Gaussian Elimination | Interactive Gaussian elimination with row operations | `CIV201/gauss_elim/` | [`gauss-sim`](https://github.com/pubino/gauss-sim) |
| 9 | Gravity Simulator | Two-body gravitational simulation (Earth-Moon orbital dynamics) | `ORF201/gravity/` | [`gravity-sim`](https://github.com/pubino/gravity-sim) |
| 10 | Heat Equation | Heat diffusion simulation with boundary conditions | `ORF201/heat/` | [`heat-sim`](https://github.com/pubino/heat-sim) |
| 11 | Integration | Numerical integration with rectangle/trapezoidal rules | `ORF201/integra/` | [`integra-sim`](https://github.com/pubino/integra-sim) |
| 12 | Janus-Epimetheus | Saturn's co-orbital moon pair horseshoe orbit simulation | `astro/galaxy/Janus.java` | [`janus-sim`](https://github.com/pubino/janus-sim) |
| 13 | Julia Set | Mandelbrot/Julia set fractal visualization | `julia/` | [`julia-sim`](https://github.com/pubino/julia-sim) |
| 14 | Lagrange L4/L5 | Trojan asteroid dynamics at Lagrange points with eccentricity | `astro/galaxy/L4L5.java` | [`l4l5-sim`](https://github.com/pubino/l4l5-sim) |
| 15 | Maze Generator | Maze generation and solving visualization | `ORF201/maze/` | [`maze-sim`](https://github.com/pubino/maze-sim) |
| 16 | Median | Weiszfeld median algorithm visualization | `ORF201/median/` | [`median-sim`](https://github.com/pubino/median-sim) |
| 17 | Network Simplex | Network flow optimization with audio feedback | `network/nettool/` | [`nettool-sim`](https://github.com/pubino/nettool-sim) |
| 18 | Newsboy Problem | Operations research newsvendor problem simulator | `newsboy/` | [`newsboy-sim`](https://github.com/pubino/newsboy-sim) |
| 19 | Orbital Stability | Floquet/monodromy matrix orbital stability analysis | `astro/galaxy/Stability.java` | [`stability-sim`](https://github.com/pubino/stability-sim) |
| 20 | Primal-Dual Simplex | Animated primal-dual simplex method for LP | `pd_animate/` | [`pd-sim`](https://github.com/pubino/pd-sim) |
| 21 | Sailing Simulator | Princeton sailing simulation with graphics | `sail/` | [`sail-sim`](https://github.com/pubino/sail-sim) |
| 22 | Saturn | Saturn ring/moon dynamics with static electricity effects | `astro/galaxy/Saturn.java` | [`saturn-sim`](https://github.com/pubino/saturn-sim) |
| 23 | Shortest Paths | Dijkstra's shortest path algorithm visualization | `network/shortpaths/` | [`shortpaths-sim`](https://github.com/pubino/shortpaths-sim) |
| 24 | Star Charts/Constellations3D | 3D constellation visualization and star chart generator | `StarCharts/` | [`starcharts-sim`](https://github.com/pubino/starcharts-sim) |
| 25 | Star Cluster | Globular/open star cluster N-body simulation | `astro/galaxy/Cluster.java` | [`cluster-sim`](https://github.com/pubino/cluster-sim) |
| 26 | Star System | Binary/multi-star system with dust, zoom, mass/velocity ratios | `astro/galaxy/StarSystem.java` | [`starsystem-sim`](https://github.com/pubino/starsystem-sim) |
| 27 | Territory Assignment | Territorial/geographic assignment optimization tool | `terrass/` | [`terrass-sim`](https://github.com/pubino/terrass-sim) |
| 28 | Two-Phase Simplex | Animated linear programming simplex algorithm solver | `twophase_animate/` | [`twophase-sim`](https://github.com/pubino/twophase-sim) |
