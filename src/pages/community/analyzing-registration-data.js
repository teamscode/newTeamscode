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
import AnalyzingReporterIMG from "@images/community/analyzing-registration.jpg"
import Image1 from "@images/community/participant-count.png"
import Image2 from "@images/community/team-sizes.png"
import Image3 from "@images/community/language-usage.png"
import Image4 from "@images/community/contest-divisions.png"
import Image5 from "@images/community/contest-schools.png"

import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query Query17 {
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
        Analyzing Registration Data from our Contests
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>Taking a look at the demographics and preferences of participants from past MIHS programming contests.</p>
        <p><em>Posted on March 23, 2019</em></p>
        <img class="ui large image"src={AnalyzingReporterIMG} />
        <p>On March 16, 2019, TeamsCode hosted its fifth biannual MIHS Programming Contest and seventh total event, bringing our total participant count to over 600. It’s fair to say that the organization has come a long way since its founding in 2017.</p>
        <p>Now, this also means that we have a lot of registration data. I figured this was a good opportunity to analyze the demographics of our participants and other interesting insights like what programming languages they choose, what team sizes they prefer, etc.</p>
        <p>I downloaded Excel sheets of the registration data from all five MIHS contests and went through each manually to clean out the data (such as removing names/emails and grouping all school spelling variations together). After doing this, I read the data into a Python Jupyter notebook and started playing around. Below are some of the things I discovered.</p>
        <p>If you want to play around with this data yourself, you can download the Excel data here.</p>
        <p><em>Note: due to the frequent last-minute changes in registration and no-shows, the data here may not be completely up to date and may not match exactly what is shown on teamscode.com’s results pages.</em></p>
        <p>First, let’s look at a graph of participant count:</p>
        <img class="ui large image"src={Image1} />
        <p>For the first three contests, participation hovered at around 100 students. However, after deciding to make our last two contests completely free, that number has soared to about 150 participants. Across all five contests, there have been 588 participants.</p>
        <p>Next, let’s examine team sizes:</p>
        <img class="ui large image"src={Image2} />
        <p>Out of a total of 255 teams, 134 teams consisted of three members, or just over half. 65 teams consisted of two members, and the remaining 56 were solo programmers. On average, there were 2.3 members per team.</p>
        <p>Among the programming languages teams chose, Java was by far the most popular (probably because it’s the one used in AP Computer Science). A whopping 183 teams, or 72%, chose Java, with Python taking second place at 55 teams. C#, C++, and Kotlin were next at 12, 4, and 1 teams respectively.</p>
        <img class="ui large image"src={Image3} />
        <p>The data related to divisions is pretty straightforward; 163 of teams, or 64%, signed up for the Intermediate division while the remaining 92 signed up for Advanced.</p>
        <img class="ui large image"src={Image4} />
        <p>Lastly, we can take a look at the schools our participants are from. In total, students have come from 54 schools across Washington, Oregon, and British Columbia. Among these schools, the most represented are as follows (with a couple of schools tied):</p>
        
        <img class="ui large image"src={Image5} />
        <p><em>Note: The graph doesn’t take into account teams that had members from two or more schools.</em></p>
        <p>The numbers and graphs that I’ve detailed here are all pretty simple; with a little more effort, one can probably find many more cool or useful insights about our TeamsCode participants. Feel free to mess with the data however much you want, and if you find anything particularly interesting, don’t hesitate to reach out to us at support@teamscode.com! We’d be happy to feature your findings in this blog post. For example, there’s still another set of data from the CGS programming contests in Oregon that haven’t been touched yet. And with several contests planned for the upcoming year, we’re hoping that many more will soon join the list.</p>
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
