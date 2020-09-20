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
import AudianIMG from "@images/sponsor_images/sponsor_audian.png"
import InternalIMG from "@images/community/internal-resources.png"
import LookingForwardIMG from "@images/community/looking-forward.png"
import TheIslanderIMG from "@images/community/theislander.jpg"
import BuildPCIMG from "@images/community/build_own_pc.jpg"
import ProgrammingLanguagesIMG from "@images/community/programming_languages.jpg"
import SmartCodingSchoolIMG from "@images/sponsor_images/sponsor_smartcodingschool.png"
import FreeContestIMG from "@images/community/free_contest.png"
import YeahIMG from "@images/community/our_new_blog.jpg"
import BusinessWireIMG from "@images/community/business_wire.jpg"
import BrownPaperTicketsIMG from "@images/community/brownpapertickets.jpeg"
import MIReporter from "@images/community/mireporter.jpg"
import AnalyzingReporterIMG from "@images/community/analyzing-registration.jpg"


const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query QueryThirteen {
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
          Community
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

      </div> 
      
    </div>
  </div>
  <div class="ui grid container">
 
    <div class="column">
        <div class="ui cards">


          <a class = "ui blue fluid card" href="/community/audian-with-one-goal">
          <div class="content">
            <div class="header">Audian and TeamsCode: Two Organizations With One Goal</div>
            <img class="ui small left floated image" src={AudianIMG}/>
            <div class="meta">
                <span class="meta">February 2, 2020<br /></span>
            </div>
            <span class="description">How Audian and TeamsCode share their commitment to support the CS community.<br /></span>
            </div>
            </a>


            <a class = "ui blue fluid card" href="/community/teamscode-internal-resources">
          <div class="content">
            <div class="header">TeamsCode's Internal Resources</div>
            <img class="ui small left floated image" src={InternalIMG}/>
            <div class="meta">
                <span class="meta">April 12, 2019<br /></span>
            </div>
            <span class="description">The tools we use to host our contests and manage our logistics.<br /></span>
            </div>
            </a>
          

          <a class = "ui blue fluid card" href="/community/looking-forward-with-teamscode">
          <div class="content">
            <div class="header">Looking Forward For TeamsCode</div>
            <img class="ui small left floated image" src={LookingForwardIMG}/>
            <div class="meta">
                <span class="meta">March 25, 2019<br /></span>
            </div>
            <span class="description">Planning for the rest of the school year and promoting further transparency.<br /></span>
            </div>
            </a>


            <a class = "ui blue fluid card" href="/community/analyzing-registration-data">
          <div class="content">
            <div class="header">Analyzing Registration Data from our Contests</div>
            <img class="ui small left floated image" src={AnalyzingReporterIMG}/>
            <div class="meta">
                <span class="meta">March 23, 2019<br /></span>
            </div>
            <span class="description">Taking a look at the demographics and preferences of participants from past MIHS programming contests.<br /></span>
            </div>
            </a>
          

          


            <a class = "ui green fluid card" href="http://mihsislander.org/2018/11/teamscode-provides-a-new-outlet-for-computer-science-education/">
          <div class="content">
            <div class="header">TeamsCode Provides a New Outlet for Computer Science Education</div>
            <img class="ui small left floated image" src={TheIslanderIMG}/>
            <div class="meta">
                <span class="meta">March 23, 2019<br /></span>
            </div>
            <span class="description">A press article by The Islander.<br /></span>
            </div>
            </a>

            <a class = "ui blue fluid card" href="/community/building-my-own-pc">
          <div class="content">
            <div class="header">Building My Own PC</div>
            <img class="ui small left floated image" src={BuildPCIMG}/>
            <div class="meta">
                <span class="meta">November 14, 2018<br /></span>
            </div>
            <span class="description">How and why I built my own PC, and why you should as well.<br /></span>
            </div>
            </a>

            <a class = "ui blue fluid card" href="/community/programming-contest-languages">
          <div class="content">
            <div class="header">Programming Contest Languages</div>
            <img class="ui small left floated image" src={ProgrammingLanguagesIMG}/>
            <div class="meta">
                <span class="meta">October 31, 2018<br /></span>
            </div>
            <span class="description">Learn about the benefits and drawbacks of the different programming languages used in competitive contests.<br /></span>
            </div>
            </a>
          

            <a class = "ui blue fluid card" href="/community/smart-coding-school-sponsor-feature">
          <div class="content">
            <div class="header">Sponsor Feature - Smart Coding School</div>
            <img class="ui small left floated image" src={SmartCodingSchoolIMG}/>
            <div class="meta">
                <span class="meta">October 9, 2018<br /></span>
            </div>
            <span class="description">Learn about Smart Coding School, the Co-host and Platinum sponsor of the MIHS Programming Contest.<br /></span>
            </div>
            </a>


            <a class = "ui blue fluid card" href="/community/audian-sponsor-feature">
          <div class="content">
            <div class="header">Sponsor Feature - Audian</div>
            <img class="ui small left floated image" src={AudianIMG}/>
            <div class="meta">
                <span class="meta">September 30, 2018<br /></span>
            </div>
            <span class="description">Learn about Audian, a Gold sponsor of the upcoming MIHS Programming Contest.<br /></span>
            </div>
            </a>


            <a class = "ui green fluid card" href="https://www.businesswire.com/news/home/20180927005316/en/Audian-Teams-TeamsCode-Support-Programming-Contest/">
          <div class="content">
            <div class="header">Audian Teams Up with TeamsCode to Support Programming Contest</div>
            <img class="ui small left floated image" src={TheIslanderIMG}/>
            <div class="meta">
                <span class="meta">September 27, 2018<br /></span>
            </div>
            <span class="description">A press article by Business Wire.<br /></span>
            </div>
            </a>


            <a class = "ui blue fluid card" href="/community/creating-our-first-free-event">
          <div class="content">
            <div class="header">Our First Free Event</div>
            <img class="ui small left floated image" src={FreeContestIMG}/>
            <div class="meta">
                <span class="meta">September 25, 2018<br /></span>
            </div>
            <span class="description">In order to share our passion for team coding competitions with as many students as possible, we have worked extra hard to create a free contest!<br /></span>
            </div>
            </a>


            <a class = "ui green fluid card" href="https://community.brownpapertickets.com/wp/teamscode-givingprogram/">
          <div class="content">
            <div class="header">Tech Savvy? You’ll Love Our Latest Giving Program Donation</div>
            <img class="ui small left floated image" src={BrownPaperTicketsIMG}/>
            <div class="meta">
                <span class="meta">September 18, 2018<br /></span>
            </div>
            <span class="description">A press article by Brown Paper Tickets.<br /></span>
            </div>
            </a>


            <a class = "ui blue fluid card" href="/community/introducing-fall-2018-mihs-contest">
          <div class="content">
            <div class="header">Fall 2018 MIHS Programming Contest</div>
            <img class="ui small left floated image" src={CollageIMG}/>
            <div class="meta">
                <span class="meta">September 16, 2018<br /></span>
            </div>
            <span class="description">Registration opens for what we hope is our biggest and best event yet.<br /></span>
            </div>
            </a>



            <a class = "ui blue fluid card" href="/community/our-new-blog">
          <div class="content">
            <div class="header">Our New Blog!</div>
            <img class="ui small left floated image" src={YeahIMG}/>
            <div class="meta">
                <span class="meta">August 23, 2018<br /></span>
            </div>
            <span class="description">Welcome to the TeamsCode blog! Stay tuned for updates on TeamsCode initiatives and learning tips for students, and more.<br /></span>
            </div>
            </a>


            <a class = "ui green fluid card" href="http://www.mi-reporter.com/news/two-mihs-sophomores-organize-coding-competition/">
          <div class="content">
            <div class="header">Two MIHS sophomores organize coding competition</div>
            <img class="ui small left floated image" src={MIReporter}/>
            <div class="meta">
                <span class="meta">April 19, 2017<br /></span>
            </div>
            <span class="description">A press article by MI Reporter.<br /></span>
            </div>
            </a>


            <a class = "ui green fluid card" href="http://mihsislander.org/2017/03/coding/">
          <div class="content">
            <div class="header">MIHS Programming COmpetition</div>
            <img class="ui small left floated image" src={TheIslanderIMG}/>
            <div class="meta">
                <span class="meta">March 21, 2017<br /></span>
            </div>
            <span class="description">A press article by The Islander.<br /></span>
            </div>
            </a>
          
          </div>
          


  </div>    
  </div> <br />
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
