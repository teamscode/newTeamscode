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
          query Query21 {
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
        Sponsor Feature - Audian
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>Learn about Audian, a Gold sponsor of the upcoming MIHS Programming Contest.</p>
        <p><em>Posted on September 30, 2018</em></p>
        <img class="ui large image"src={AudianIMG} />
        <p>At the upcoming Fall 2018 MIHS Programming Contest, we’re lucky to have Audian as our gold sponsor. Audian is a software company based in Kirkland, WA whose goal is to redefine the telecom industry by automating many of the outdated, time-consuming tasks that have traditionally been associated with telecom. Audian’s CEO, Brandon Bazemore, founded the company along with Pramod Venugopal in 2007 and since has grown the company many times over.</p>
        <p>Audian’s first production phone system in 2007 was able to reduce the complexity and cost of the normal phone system by over 60%. Over the years, constant improvements to their services and expansions to their team and headquarters has led to where they are today. They offer a variety of services, including Hosted Voice, SIP Trunking, and international calling. They also provide phones and other hardwire that can be purchased directly on their website. Caliber Real Estate, Parker Corporate Services, and Sound Mortgage are just a few Audian’s clients happy with their services.</p>
        <p>Thanks to Bazemore’s strong background in computer science, he was able to start Audian rather than simply using existing telecom solutions in the market. He describes, “Without a foundation in computer science and programming, our technologies and entire company would not exist, so we feel it is essential to continue supporting the next generation of innovators through TeamsCode.” Thanks to Audian’s and others’ support, we are now able to host our upcoming contest free of cost.</p>
        <p>To learn more about Audian, visit their website at https://www.audian.com.</p>
        <p></p>
        <p><em>Written by Alex Patel and Luca Palermo</em></p>
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
