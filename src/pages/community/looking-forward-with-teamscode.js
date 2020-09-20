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
import LookingForwardIMG from "@images/community/looking-forward.png"
import Image1 from "@images/community/internal-doc-sneak-peek.png"
import Image2 from "@images/community/catlin-gabel-contest.jpg"

import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query Query16 {
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
        Looking Forward with TeamsCode
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>Planning for the rest of the school year and promoting further transparency.</p>
        <p><em>Posted on March 25, 2019</em></p>
        <img class="ui large image"src={LookingForwardIMG} />
        <p></p>
        <p>On April 1st, 2017, TeamsCode hosted its first high school programming contest. Back then, we were called CodeMIHS, but we soon changed our name to TeamsCode to match our ambitions and our mission. We wanted to both grow the organization to multiple high schools and states, beyond MIHS, as well as promote a collaborative atmosphere where high schoolers can actually have fun learning to code.</p>
        <p>Two years later, we’re very happy with the progress we’ve made. However, we want to do more to encourage students to host their own events. There’s a few steps we’re looking to take in order to achieve this goal.</p>
        <h2>Transparency</h2>
        <p>We want to make the day-to-day operations at TeamsCode more available to the public. This includes TeamsCode’s finances, the contest-hosting process, internal communication, and much more. We pursued this goal recently with our last blog post, where we revealed the trends over the years in our MIHS Programming Contest registration data.</p>
        <p>Our organization stores all of its information in Google Drive; this is where you can find all past contest photos as well! We communicate in our Slack group, which now has over 30 members – however, many of these members have moved on after writing some initial programming lessons (be sure to check out our Learn page).</p>
        <p>In our Google Drive, we have an Onboarding Doc, that covers everything newcomers need to know about TeamsCode’s history, its structure, and contest-hosting process. While we’re not releasing the entire document yet (likely coming soon!), we have an in-depth, 7-page document covering how to host a programming contest. This is now available HERE!</p>
        <img class="ui large image"src={Image1} />
        <p>We intend to release more about TeamsCode’s internal processes in the future, as well as create a more streamlined process for anybody to host their own programming contest.</p>
        <h2>Improved Onboarding</h2>
        <p>When Alan and I founded TeamsCode, we didn’t know where to start. The only other contests were PSCSTA and PLU, and they had large teams of adults with connections to large companies and universities.</p>
        <p>With the help of many teachers and administrators, especially Henterson Carlisle at MIHS and Earl Bergquist at Garfield High School (as well as promotion support from the PSCSTA), we were able to discover the process and host the contest. However, we want to make sure the path for new students is much clearer.</p>
        <img class="ui large image"src={Image2} />
        <p>We hope to achieve part of this through further transparency of TeamsCode, but we know that we can do more. We are currently discussing how we can use our platform to potentially partner with other organizations, including the PSCSTA, to encourage more students to pursue a career in computer science.</p>
        <h2>Stability and Expansion</h2>
        <p>Our last goal is twofold: we want to maintain the events that we have (MIHS in Washington and CGS in Oregon) while growing TeamsCode to more locations.</p>
        <p>In the summer of 2018, we tried to pursue hosting an event in California. We emailed over fifty teachers and other contacts, but could not find anybody interested in supporting this idea.</p>
        <p>Finally, in September 2018, we found a friend of a friend at Harvard-Westlake High School who was interested in hosting an event with TeamsCode. However, due to the student’s increasingly daunting schedule, we were forced to abandon that project.</p>
        <p>We still have our goal of growth, but now we also have to manage an internal transition as TeamsCode’s founders (Chris and Alan) are moving on to college. We have many ideas, and are continuing to pursue collaboration with other students in order to grow the organization and host more events. We’re considering reaching out to Hack Club, hosting other events (including bootcamps, hackathons, or development challenges), and advertising our Programming Practice platform to reach more students. Most of all, we’re looking to continue building TeamsCode with an open mindset and an ambitious team.</p>
        <div class="ui divider"></div>
        <p>If you have an idea that you want to share, please reach out to support@teamscode.com, and we’ll respond promptly.</p>
        <p>Thanks for reading!</p>
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
