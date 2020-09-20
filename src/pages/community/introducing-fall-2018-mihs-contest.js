import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "../index.css"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"



import AboutIMG from "@images/avatars/about_team_header_image.jpg"
import MIHSIMG from "@images/contest_images/MI_Logo.jpg"
import MVHSIMG from "@images/contest_images/mvhs_logo.png"
import CollageIMG from "@images/contest_images/blog_photo_dark.jpg"
import AudianIMG from "@images/sponsor_images/sponsor_audian.png"
import Image1 from "@images/community/student_visit_audian.png"
import Image2 from "@images/community/audian_speech.jpg"

import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query Query23 {
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
  <img class="about-landing-image"src={DarkIMG} />
    <div class="introduction">
      <h1 class="ui inverted header">
        <span class="library">
        Fall 2018 MIHS Programming Contest
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>Registration opens for what we hope is our biggest and best event yet.</p>
        <p><em>Posted on September 16, 2018</em></p>
        <img class="ui large image"src={CollageIMG} />
        <p>Registration has opened for TeamsCode’s fourth biannual MIHS Programming Contest! Similar to past contests, this event will be held in the Mercer Island High School Commons on October 20th, 2018. Teams of 1-3 will have 3 hours to try and solve as many programming problems as they can, the winners will receive medals, and then all participants will have a chance to win prizes in the raffle. Snacks and pizza will be provided free of cost.</p>
        <p>Now, let’s get on to what makes this contest different from the rest:</p>
        <p>1. Awesome sponsorships from Smart Coding School, Audian, Pagliacci, and Crelate; check back soon for blog posts featuring Smart Coding School and Audian, our Platinum and Gold sponsors!</p>
        <p>2. New prizes and a unique problem set</p>
        <p>3. New prizes and a unique problem set</p>
        <p>4. Opening speech by Brandon Bazemore from Audian</p>
        <p>5. Last but not least, free registration for all participants!</p>
        <p>Check out the full details of the event at https://teamscode.com/mihs or register here.</p>
        <p>We hope to see you at the contest!</p>
        <p><em>Written by Alan Bi</em></p>
      </div> 
      
    </div>
  </div>
<br />
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
