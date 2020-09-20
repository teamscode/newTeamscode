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
import FreeContestIMG from "@images/community/free_contest.png"
import Image1 from "@images/community/teamscode_lessons.png"


import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query Query22 {
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
        Our First Free Event
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>In order to share our passion for team coding competitions with as many students as possible, we have worked extra hard to create a free contest!</p>
        <p><em>Posted on November 14, 2018</em></p>
        <img class="ui large image"src={FreeContestIMG} />
        <p><em>Source: Creative Stall from the Noun Project</em></p>
        <p>Since the Spring of 2017, we’ve hosted nearly 100 students at every MIHS Programming Contest; however, we’re always trying to introduce more students to computer science, promoting new discoveries and simply providing a fun experience. This fall, thanks to the help of our biggest sponsors – Smart Coding School and Audian – we are able to offer free registration to all participants!</p>
        <p>While this decision seems simple on the surface, creating a free event brings unique challenges. For one, the average attrition rate for hackathons is around 30-50%, according to MLH. To be fair, hackathons are different than programming contests – hackathons encourage students to come and generally create whatever they want, while programming contests are much more structured. This naturally leads to a greater attrition rate for hackathons since no registrants are really obligated to show up.</p>
        <p>However, even a 20% attrition rate for our programming contests could negatively affect our logistics. Given that the teams are assigned to specific sections along with judges, a no-show team leaves some judges with more teams than others. Furthermore, the space of the MIHS Commons is limited, so we want to verify that everybody that registers can indeed come.</p>
        <p>Ultimately, we’ve decided to add a de-registration form in an effort to encourage those who can’t attend to notify us. We’ve made this process as short and simple as possible – don’t worry, no long forms!</p>
        <p>Our efforts in creating this free contest are part of a larger mission to allow everybody to try coding in a supportive, team-focused environment. One of the most common worries is imposter syndrome: the idea that one “does not belong here.” To counter this idea, we’ve provided several contest resources on TeamsCode’s learn section.</p>
        <p></p>
        <img class="ui large image"src={Image1} />
        <p>You can find all of our past programming contest problems in the programming practice section of our website, and we will also be adding a problem submission system so students can practice before arriving at our events! Additionally, we have a completely free AP Computer Science course where students can learn new concepts and apply these at our contests.</p>
        <p>We encourage students to meet up with their team before coming to our contest, and actually practicing some of the problems – you’ll be surprised by how much you can learn! But either way, don’t forget: just by signing up for our contest, you’re already eligible for a prize through our raffle!</p>
        <p>If you have any questions about the MIHS Programming Contest, please feel free to contact us at contests@teamscode.com. We’re looking forward to seeing everybody there!</p>
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
