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
          query QueryFourteen {
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
        Audian and TeamsCode: Two Organizations With One Goal
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>How Audian and TeamsCode share their commitment to support the CS community.</p>
        <p><em>Posted on February 2, 2020</em></p>
        <img class="ui large image"src={AudianIMG} />
        <p>Audian is a locally founded company with a vision to redefine corporate telecommunications with the latest technology. With a wide variety of features and hardware, businesses can easily customize their telecom and phone systems, or as Audian calls it, improve their “telecompetance.” With an experienced, dedicated, and passionate team, Audian is quickly growing and is looking to continue its success.</p>
        <p>However, Audian’s appeal goes far past their products; they lead a philanthropic program, Audian Cares, to support our community through volunteering and financial and technical support. Through this program, they have been involved with TeamsCode for a number of years. Starting in October of 2018, Audian has supported us as a sponsor and provided us with guest judges and speakers. COO Janae Smith gave a great presentation about the emerging role of technology in our lives, which left a lasting impression on the contestants. After our Spring 2019 contest, they also extended an invite to the winners to visit with Audian CEO Brandon Bazemore and COO Janae Smith for a Q and A about Audian’s vision and how learning computer science skills at a young age can greatly benefit your future.</p>
        <img class="ui large image"src={Image1} />
        <p><em>Pictured: Winners of the MIHS Spring 2019 Contest visit Audian HQ</em></p>
        <p>Most recently, Audian was the Platinum Sponsor for TeamsCode’s MIHS Fall 2019 programming contest. Audian brought over judges as well as CEO Brandon Bazemore, who spoke about his experience with computer science, and the application of the field to his work at Audian.</p>
        <img class="ui large image"src={Image2} />
        <p><em>Pictured: Audian CEO Brandon Bazemore speaks to more than 140 student programmers</em></p>
        <p>Audian and TeamsCode share the love for supporting coders, especially locally, and providing an equal opportunity for students otherwise not able to develop computer science skills to learn and strengthen their knowledge for the greater benefit it will bring to our community, ease of life, and economy. The Audian team wants to help TeamsCode guide these students down a path of success in the computer science field and even just provide an outlet for anyone to have the ability to learn to code and express their abilities free of charge. Through this support and the services they provide to many others in both business and volunteering, Audian leads a company built off of altruism and philanthropy, and especially the recognition of the role computer science plays in the lives of today and our future. Seeing the Audian logo at our contests is a reminder of this.</p>
        <p>We look forward to continuing our great partnership with Audian, a company that not only shares TeamsCode’s passion for technology but also shares our passion for making technology accessible to all.</p>
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
