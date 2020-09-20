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
import Image1 from "@images/community/thomas_personal_pc.png"


import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query Query18 {
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
        Building My Own PC
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>How and why I built my own PC, and why you should as well.</p>
        <p><em>Posted on November 14, 2018</em></p>
        <img class="ui large image"src={BuildPCIMG} />
        <p><em>Source: Patrick Tomasso on Unsplash</em></p>
        <p>When I decided to get a new desktop computer, after some online research, I figured out that building my own PC would be cheaper and more customizable than buying a prebuilt computer. However, the wide array of different parts, brands and prices were a little bit overwhelming.</p>
        <p>In order to get a better idea of what parts I needed, I watched some youtube videos of people assembling computers. After that, I used a few key websites to organize and budget out my list of parts. First, pcpartpicker.com allows you to choose from among a huge catalog of different brands and models of each part, and also finds the best prices for parts among a number of different vendors. Another site, logicalincrements.com, allowed me to see suggestions for parts at a number of different budget tiers–it shows lists of parts that fit certain price ranges.</p>
        <p>When it came to actually picking parts, I compared models and brands at similar price points based on online reviews, forum posts on sites like reddit.com/r/buildapc, and specifications that were relevant to my needs. The most important parts of PC building are knowing what you want to do with your computer, and what your budget is. For example, I wanted to be able to play recent video games at decent quality settings, and a number of my decisions reflect that desire as opposed to, say, a video-editing build.</p>
        <p>There are plenty of guides to be found online that explain the best choices for different budgets and uses, so I won’t focus heavily on the details of each part. However, I would like to talk about the benefits of building a presumably expensive PC.</p>
        <p>Apart from the obvious advantages of building your own computer, like being able to customize it, it also provides you a lot of insight into how computers work. When comparing different parts based on their technical aspects, you become familiar with what that part does, and which brand or model can perform its function the best.</p>
        <p>The knowledge that comes from assembling your own PC can transfer to higher education fields like Information Technology, Computer Science, or Electrical Engineering. Finally, the planning involved in making a budget for a computer is applicable to many real-life scenarios. Taking the time to make a plan, look for deals or used parts, and deciding what you can and can’t afford are all necessary steps before making any large purchases.</p>
        <img class="ui large image"src={Image1} />
        <p>I’d encourage anyone with an interest in programming or other STEM areas to look into building their own PC as an easy and fun way to learn about computers.</p>
        <p><em>Written by Thomas Short</em></p>
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
