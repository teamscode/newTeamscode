const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-posts-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/templates/posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/about-us.js"))),
  "component---src-pages-guidelines-design-principles-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/guidelines/design-principles.js"))),
  "component---src-pages-guidelines-overview-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/guidelines/overview.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/index.js"))),
  "component---src-pages-navbar-logo-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/Navbar/Logo.js"))),
  "component---src-pages-navbar-navbar-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/Navbar/Navbar.js"))),
  "component---src-pages-navbar-navbar-links-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/Navbar/NavbarLinks.js"))),
  "component---src-pages-styles-color-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/styles/color.js"))),
  "component---src-pages-styles-design-tokens-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/styles/design-tokens.js"))),
  "component---src-pages-styles-iconography-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/styles/iconography.js"))),
  "component---src-pages-styles-overview-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/styles/overview.js"))),
  "component---src-pages-styles-typography-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/styles/typography.js"))),
  "component---src-pages-sponsors-js": hot(preferDefault(require("/Users/JayD/Downloads/GitHub/newTeamscode/src/pages/sponsors.js")))
}

