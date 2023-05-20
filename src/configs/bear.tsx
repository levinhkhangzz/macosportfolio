import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/levinhkhangzz/macosportfolio/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/levinhkhangzz/playground-macos"
      },
      {
        id: "oh-vue-icons",
        title: "Oh, Vue Icons!",
        file: "https://raw.githubusercontent.com/Renovamen/oh-vue-icons/master/README.md",
        icon: "i-fa-brands:vuejs",
        excerpt: "Importing icons from different icon packs in Vue easily...",
        link: "https://oh-vue-icons.js.org"
      },
      {
        id: "cube-solver",
        title: "Cube Solver",
        file: https://raw.githubusercontent.com/levinhkhangzz/Just-a-Cube/main/README.md",
        icon: "i-bx:cube",
        excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
        link: "https://cube.levinhkhang.xyz"
      }
    ]
  }
];

export default bear;
