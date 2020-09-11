import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"



import AboutIMG from "@images/avatars/about_team_header_image.jpg"
import MIHSIMG from "@images/contest_images/MI_Logo.jpg"
import MVHSIMG from "@images/contest_images/mvhs_logo.png"
import CollageIMG from "@images/contest_images/blog_photo_dark.jpg"

const ContestsPage = ({ data }) => {
  const title = "Apply"

  return (
  <StaticQuery
    query={graphql`
          query ContestsQuery {
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
  <img class="about-landing-image"src={CollageIMG} />
    <div class="introduction">
      <h1 class="ui inverted header">
        <span class="library">
          Join Our Team!
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
      <h1>Making programming fun.</h1>
        <p>We understand that learning programming can be tedious. We give students valuable programming practice and team-building skills by organizing awesome programming contests. Snacks, pizza, medals, and prizes are always available!</p>
        <h2>Upcoming Contests</h2>
        <p>No upcoming contests, please check back later!</p>
        <h2>Past Contests</h2>
        <Dropdown fluid huge button text="Pick a Contest" > 
        <Dropdown.Menu>
        <Dropdown.Item text='E-mail Collaborators' />
        </Dropdown.Menu>
        </Dropdown>

      </div> 
      
    </div>
  </div>
  <div class="ui center aligned doubling grid container">
      <div class="row">
          <div class="column">
        <div class="ui three cards">
          <a class = "ui card">
        <div class="image">
        <img src={AboutIMG} />
        </div>
          <div class="content"><a class="header">Summer 2020 Online Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date"><b>Youtube Live</b><br /></span>
                <span class="meta">July 25th, 2020<br /></span>
                <span class="meta">296 Students</span>
            </div>
            </div>
            </a>
          
          <div class = "ui card">
        <div class="image">
        <img src={MIHSIMG} />
        </div>
          <div class="content"><a class="header">Fall 2019 MIHS Programming Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date"><em>Co-Host: Audian</em><br /></span>
                <span class="date"><b>Mercer Island, WA</b><br /></span>
                <span class="meta">November 9th, 2019<br /></span>
                <span class="meta">144 Students</span>
            </div>
            </div>
            
            </div>
          
          
          <div class = "ui card">
        <div class="image">
        <img src={MVHSIMG} />
        </div>
          <div class="content"><a class="header">Summer 2020 Online Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date">Youtube Live<br /></span>
                <span class="meta">July 25th, 2020<br /></span>
                <span class="meta">296 Students</span>
            </div>
            </div>
            </div>
          </div>
          </div>
      </div>
      <div class="row">
          <div class="column">
        <div class="ui three cards">
          <div class = "ui card">
        <div class="image">
        <img src={AboutIMG} />
        </div>
          <div class="content"><a class="header">Summer 2020 Online Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date"><b>Youtube Live</b><br /></span>
                <span class="meta">July 25th, 2020<br /></span>
                <span class="meta">296 Students</span>
            </div>
            </div>
            </div>
          
          <div class = "ui card">
        <div class="image">
        <img src={MIHSIMG} />
        </div>
          <div class="content"><a class="header">Fall 2019 MIHS Programming Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date"><em>Co-Host: Audian</em><br /></span>
                <span class="date"><b>Mercer Island, WA</b><br /></span>
                <span class="meta">November 9th, 2019<br /></span>
                <span class="meta">144 Students</span>
            </div>
            </div>
            
            </div>
          
          
          <div class = "ui card">
        <div class="image">
        <img src={MVHSIMG} />
        </div>
          <div class="content"><a class="header">Summer 2020 Online Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date">Youtube Live<br /></span>
                <span class="meta">July 25th, 2020<br /></span>
                <span class="meta">296 Students</span>
            </div>
            </div>
            </div>
          </div>
          </div>
      </div>
      <div class="row">
          <div class="column">
        <div class="ui three cards">
          <div class = "ui card">
        <div class="image">
        <img src={AboutIMG} />
        </div>
          <div class="content"><a class="header">Summer 2020 Online Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date"><b>Youtube Live</b><br /></span>
                <span class="meta">July 25th, 2020<br /></span>
                <span class="meta">296 Students</span>
            </div>
            </div>
            </div>
          
          <div class = "ui card">
        <div class="image">
        <img src={MIHSIMG} />
        </div>
          <div class="content"><a class="header">Fall 2019 MIHS Programming Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date"><em>Co-Host: Audian</em><br /></span>
                <span class="date"><b>Mercer Island, WA</b><br /></span>
                <span class="meta">November 9th, 2019<br /></span>
                <span class="meta">144 Students</span>
            </div>
            </div>
            
            </div>
          
          
          <div class = "ui card">
        <div class="image">
        <img src={MVHSIMG} />
        </div>
          <div class="content"><a class="header">Summer 2020 Online Contest<br /><br /><br /></a>
            <div class="meta">
                <span class="date">Youtube Live<br /></span>
                <span class="meta">July 25th, 2020<br /></span>
                <span class="meta">296 Students</span>
            </div>
            </div>
            </div>
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
  <script type="text/javascript">
$('.ui.dropdown')
  .dropdown();
</script>
  </div>
    )} 
  />
)
}

export default ContestsPage
