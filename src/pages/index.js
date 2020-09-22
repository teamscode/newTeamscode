import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"

import SUILogo from "@images/logo.png"
import DevicesImg from "@images/devices.png"
import ElyseImg from "@images/avatars/elyse.png"
import MatthewImg from "@images/avatars/matthew.png"
import KristyImg from "@images/avatars/kristy.png"
import MarkImg from "@images/avatars/mark.png"
import RachelImg from "@images/avatars/rachel.png"
import LenaImg from "@images/avatars/lena.png"
import MollyImg from "@images/avatars/molly.png"
import EveImg from "@images/avatars/eve.png"
import ThemingImg from "@images/icons/theming.png"
import PaintImg from "@images/icons/paint.png"
import BookImg from "@images/icons/book.png"
import LabImg from "@images/icons/lab.png"
import ToolboxImg from "@images/icons/toolbox.png"
import MobileImg from "@images/icons/mobile.png"
import HeartImg from "@images/icons/heart.png"
import RocketImg from "@images/icons/rocket.png"
import JasonImg from "@images/avatars/jason.jpg"
import BackgroundIMG from "@images/avatars/hs_background.jpg"
const IndexPage = ({ data }) => {
  const title = "Home"

  return (
  <StaticQuery
    query={graphql`
          query IndexSiteQuery {
            site {
              siteMetadata {
                title
                sidebar {
                  pages {
                    slug
                    title
                    pages {
                      slug
                      title
                    }
                  }
                }
              }
            }
          }
        `}
    render={data => (
  <div id="example" class="index">
    <Helmet
      title={
        title
          ? `${title} - ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title
      }
      meta={[
        {
          name: "description",
          content: "Documentation for Semantic UI Component Library",
        },
        {
          name: "keywords",
          content: "design system, style guide, documentation",
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div class="full height">
      <div class="following bar">
  <div class="ui container">
  <Navbar />
  </div>
</div>
<div class="masthead segment bg11">
  <div class="ui container">
  <img class="landing-image"src={BackgroundIMG} />
    <div class="introduction">
      
      
      
      <h1 class="ui inverted header">
        
        <span class="library">
        Welcome to TeamsCode.
        </span>
        
        <span class="tagline">
          We spread computer science education to high school students by organizing programming contests.
        </span>
      </h1>
      
      <div class="ui hidden divider"></div>
      
      <a href="/contests" class="ui huge inverted download button">
        Browse Contests
      </a>
    </div>
    <div class="inverted advertisement">
      
    </div>
  </div>
</div>





<div class="ui stripe community vertical segment">
  <div class="ui two column center aligned divided very relaxed stackable grid container">
    <div class="row">
      <div class="column">
        <h2 class="ui icon header">
          <img class="ui icon image" src={MobileImg} />
          Live Contests
        </h2>
        <p>We host live programming contests so students can learn coding and computer science, while eating free food and getting awesome raffle prizes!</p>
        <a class="ui large blue button" href="/contests">Find A Contest<i class="right chevron icon"></i></a>
      </div>
      <div class="column">
        <h2 class="ui icon header">
          <img class="ui icon image" src={BookImg} />
          Coding Lessons
        </h2>
        <p>TeamsCode provides multiple free online courses. The AP Computer Science course matches the concepts of the AP test, helping students everywhere earn their perfect score.</p>
        <a class="ui large blue button" href="/learn">Learn Programming<i class="right chevron icon"></i></a>
      </div>
    </div>
  </div>
</div>
<div class="ui alternate stripe vertical segment">
  <div class="ui stackable center aligned grid container">
    <div class="fourteen wide column">
      <h1 class="ui icon header">
        <img class="ui inline icon image" src={PaintImg} />
        Be a Creator
      </h1>
      <div class="ui stackable center aligned vertically padded grid">
        <div class="eight wide column">
          <p>We help interested high schoolers organize their own programming events - contests, hackathons, and bootcamps. Please complete this form if you're interested!</p>
          <a class="ui large blue button" href="/apply">
            Learn More
          </a>
        </div>
        <div class="ui divider"></div>
      </div>
    </div>
  </div>
</div>
<div class="ui stripe vertical segment">
  <div class="ui stackable center aligned grid container">
    <div class="fourteen wide column">
      <h1 class="ui icon header">
        <img class="ui inline icon image" src={ToolboxImg} />
        Made By Students
      </h1>
      <div class="ui stackable center aligned vertically padded grid">
        <div class="eight wide column">
          <p>TeamsCode is made for students, by students. We work with the Computer Science Teacher's Association to create events around the Pacific Northwest.</p>
          <a class="ui large blue button" href="/about-us">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <div class="ui inverted vertical footer segment">
    <div class="ui center aligned container">
      <div class="ui horizontal  small link list">
        <a class="ui massive black icon button" href="https://instagram.com/teamscode"><i class="instagram icon" /></a>
        <a class="ui massive black icon button" href="https://discord.gg/8pg89SS"><i class="discord icon" /></a>
        <a class="ui massive black icon button" href="https://www.facebook.com/teamscode"><i class="facebook icon" /></a>
        <a class="ui massive black icon button" href="https://github.com/teamscode"><i class="github icon" /></a>
        <a class="ui massive black icon button" href="https://twitter.com/TeamsCode"><i class="twitter icon" /></a>
      </div>
    </div>
  </div>
  </div>
    )} 
  />
)
}

export default IndexPage
