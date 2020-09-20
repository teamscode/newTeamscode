import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "../index.css"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"




import BuildPCIMG from "@images/community/build_own_pc.jpg"
import AudianIMG from "@images/sponsor_images/sponsor_audian.png"
import Image1 from "@images/community/smart_coding_school_graphic.png"
import ProgrammingLanguagesIMG from "@images/community/programming_languages.jpg"
import SmartCodingSchoolIMG from "@images/sponsor_images/sponsor_smartcodingschool.png"

import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query Query20 {
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
        Sponsor Feature - Smart Coding School
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>Learn about Smart Coding School, the Co-host and Platinum sponsor of the MIHS Programming Contest.</p>
        <p><em>Posted on October 9, 2018</em></p>
        <img class="ui large image"src={SmartCodingSchoolIMG} />
        <p>Smart Coding School, a computer science education school located in Bellevue, is the Co-host and Platinum sponsor for our Fall 2018 MIHS Programming Contest. Smart Coding School was founded in March 2016 by David Liu and has since helped dozens of students improve their Java programming skills. The school has over ten courses dedicated to various skills in Java – notably data structures and algorithms – and also teaches students to build simple Java-based games.</p>
        <p>The goals of Smart Coding School are very much aligned with those of TeamsCode. Both organizations are passionate about providing valuable resources and experiences to bring computer science skills to more students. From the Smart Coding school website, “Smart Coding School is all about students and prepare students for the future with technology.”</p>
        <img class="ui large image"src={Image1} />
        <p>The results of Smart Coding School are very impressive, as shown in the graphic above. The small class size and experienced instructors have led 91% of Smart Coding School to achieve a 5 on the 2017 AP Computer Science A. Furthermore, students are frequently promoted to Silver, Gold, and Platinum levels in the USACO after taking the course.</p>
        <p>We are grateful for the support Smart Coding School provided in making our fourth biannual programming contest. We are also very excited to announce David Liu (Smart Coding School founder) as the keynote speaker for our Fall 2018 MIHS Programming Contest!</p>
        <p>To learn more about Smart Coding School, visit their website at http://smartcodingschool.com/.</p>
        <p><em>Written by Chris Elliott</em></p>
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
