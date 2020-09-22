import React from "react"
import Helmet from "react-helmet"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"



import AboutIMG from "@images/avatars/about_team_header_image.jpg"
import JavaIMG from "@images/lesson_images/java_lessons.png"
import ProblemIMG from "@images/lesson_images/programming_problems.png"
import USACOIMG from "@images/lesson_images/usaco.png"
import iOSIMG from "@images/lesson_images/ios.png"

const MailURL = "https://teamscode.us16.list-manage.com/subscribe/post?u=68ebd958a395d94f3d7ad5ada&amp;id=1b008420c1";
const LearnPage = ({ data }) => {
  const title = "Learn"

  return (
  <StaticQuery
    query={graphql`
          query LearnQuery {
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
  <img class="about-landing-image"src={AboutIMG} />
    <div class="introduction">
      <h1 class="ui inverted header">
        <span class="library">
          Learn
        </span>
        <span class="tagline">
        Browse a selection of computer science tutorials and lessons.
        </span>
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">
  
  <div class="stackable very relaxed ui grid container">
    
    <div class="ui divider"></div>
  </div>
  <div class="ui two column center aligned vertically divided very relaxed doubling grid container">
    <div class="row">
        <div class="four wide column">
            <img src={JavaIMG} />
        </div>
        <div class="column">
            <h1 align="left">AP Computer Science A</h1>
            <p align="left">In this course, readers will be taught the fundamentals of computer science in Java in order to prepare for the AP Computer Science A exam that takes place every year in May.</p>
        <a class = "ui big blue button" href="/ap-computer-science/what-is-programming">View</a>
        </div>
    </div>
    <div class="row">
        <div class="four wide column">
            <img src={ProblemIMG} />
        </div>
        <div class="column">
            <h1 align="left">Programming Practice</h1>
            <p align="left">Explore a collection of 75 programming challenges from previous TeamsCode programming contests!</p>
        <a class = "ui big blue button" href="/programming-practice">View</a>
        </div>
    </div>
    <div class="row">
        <div class="four wide column">
            <img src={USACOIMG} />
        </div>
        <div class="column">
            <h1 align="left">USACO Problems</h1>
            <p align="left">Learn how to approach competitive programming problems by reading through these writeups on how to solve select USACO problems.</p>
        <a class = "ui big blue disabled button" href="/">View</a>
        </div>
    </div>
    <div class="row">
        <div class="four wide column">
            <img src={iOSIMG} />
        </div>
        <div class="column">
            <h1 align="left"> iOS with Swift</h1>
            <p align="left">Learn how to program using the Swift programming language and develop apps for the iOS App Store.</p>
        <a class = "ui big blue disabled button" href="/">View</a>
        </div>
    </div>
    
  </div>
  <div class="ui vertical stripe intro segment">
    <div class=" relaxed center ui container">

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

export default LearnPage
