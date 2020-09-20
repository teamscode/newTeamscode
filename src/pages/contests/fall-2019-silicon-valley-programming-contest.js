import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "../index.css"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import {Image} from "semantic-ui-react"



import AboutIMG from "@images/avatars/about_team_header_image.jpg"
import CollageIMG from "@images/contest_images/blog_photo_dark.jpg"
import DarkIMG from "@images/darkgray.png"
import AudianIMG from "@images/sponsor_images/sponsor_audian.png"
import BrainiumIMG from "@images/sponsor_images/sponsor_brainium.png"
import BreakoutIMG from "@images/sponsor_images/sponsor_breakout.png"
import BugseeIMG from "@images/sponsor_images/sponsor_bugsee.png"
import BunBaoIMG from "@images/sponsor_images/sponsor_bunbao.jpg"
import CodeWithUsIMG from "@images/sponsor_images/sponsor_codewithus.png"
import CodeWizardsIMG from "@images/sponsor_images/sponsor_codewizards.jpg"
import CreativeLiveIMG from "@images/sponsor_images/sponsor_creativelive.jpg"
import CrelateIMG from "@images/sponsor_images/sponsor_crelate.png"
import DigiPenIMG from "@images/sponsor_images/sponsor_digipen.jpg"
import JetBrainsIMG from "@images/sponsor_images/sponsor_jetbrains.png"
import LionsIMG from "@images/sponsor_images/sponsor_lions.jpg"
import MakaboomIMG from "@images/sponsor_images/sponsor_makaboom.jpg"
import MathleticsIMG from "@images/sponsor_images/sponsor_mathletics.png"
import MSFTTealsIMG from "@images/sponsor_images/sponsor_msft_teals.png"
import PagliacciIMG from "@images/sponsor_images/sponsor_pagliacci.jpg"
import PSCSTAIMG from "@images/sponsor_images/sponsor_pscsta.png"
import ScirraIMG from "@images/sponsor_images/sponsor_scirra.png"
import SiliconLabsIMG from "@images/sponsor_images/sponsor_siliconlabs.png"
import SmartCodingSchoolIMG from "@images/sponsor_images/sponsor_smartcodingschool.png"
import TwilioIMG from "@images/sponsor_images/sponsor_twilio.png"
import T4KIMG from "@images/sponsor_images/sponsor_t4k.png"
import TopcoderIMG from "@images/sponsor_images/sponsor_topcoder.png"
import XCampIMG from "@images/sponsor_images/sponsor_x-camp2.png"

const ApplyPage = ({ data }) => {
  const title = "Contests"

  return (
  <StaticQuery
    query={graphql`
          query QueryThree {
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
        Fall 2019 Silicon Valley Programming Contest
        </span>
        <br/>
      </h1>
      <h2 class="ui inverted header">
        <span class="library">
        October 26th, 2019
        </span>
      </h2>
      <h2 class="ui inverted header">
        <span class="library">
        35 students
        </span>
      </h2>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">
  
  <div class="two column ui grid container">
    <div class="row">
      <div class="column">
      <h1>Winners</h1>
      <h3>Intermediate Division</h3>
      <p>1st - Farmer John &amp; Bessie The Cow [440 points]</p>
      <p>2nd - Desmos [390 points]</p>
      <p>3rd - 1234 [360 points]</p>
      <h3>Advanced Division</h3>
      <p>1st - TeamsCode Staff [720 points]</p>
      <p>2nd - Henry [540 points]</p>
      <p>3rd - Counsel of Water Sheep [410 points]</p>
      
      </div>
      <div class="column">
      <h2>Gold Sponsor</h2>
      <Image size="small" src={CodeWizardsIMG} />
      <Image size="small" src={MakaboomIMG} />
      <h2>Silver Sponsor</h2>
      <Image size="small" src={BugseeIMG} />
      <Image size="small" src={BunBaoIMG} />
      <h3>Bronze Sponsor</h3>
      <Image size="small" src={BreakoutIMG} />
      </div>
    </div>
  </div>
  <div class="ui container">
      <h1>Contest Files</h1>
      <p>link coming soon!</p>
      <h2>Sponsors</h2>
      <p><b>Gold Sponsor:</b> <a href="https://codewizardshq.com/">CodeWizards</a></p>
      <Image size="medium" src={CodeWizardsIMG} /><br />
      <p><b>About <u>CodeWizards</u>:</b></p>
      <p>With 1000’s of satisfied students, CodeWizardsHQ is the most effective way for your child to learn to code. They teach through online, instructor-led classes which meet at a set class time. Students learn popular programming languages like Python, Scratch, HTML/CSS, JavaScript, Java and more! Ages 8 - 18.</p>
      <p><b>Gold Sponsor: </b> <a href="https://makaboom.school/">Makaboom</a></p>
      <Image size="medium" src={MakaboomIMG} /><br />
      <p><b>About <u>Makaboom</u>:</b></p>
      <p>The vision of Makaboom is to lower the entry point of coding education and help children to find out about the joy of coding as a life skill through practical and hands-on projects in robotics and programming. We offer tech lab, afterschool classes, and competition team opportunities to inspire students to learn and grow through diverse learning experiences.</p>
      <p><b>Silver Sponsor:</b> <a href="https://www.bugsee.com/">Bugsee</a></p>
      <Image size="medium" src={BugseeIMG} /><br />
      <p><b>About <u>Bugsee</u>:</b></p>
      <p>Bugsee is a crash and bug reporting tool for mobile apps. Every report includes video, network calls, and logs leading up to the bug/crash.</p>
      <p><b>Silver Sponsor:</b> <a href="https://www.bunbao.com/">BunBao</a></p>
      <Image size="medium" src={BunBaoIMG} /><br />
      <p><b>About <u>BunBao</u>:</b></p>
      <p>BunBao is a food company that makes fresh, quality, wholesome bao zi handcrafted from scratch. They offer instant delivery and catering online at www.bunbao.com.</p>
      <p><b>Bronze Sponsor:</b> <a href="https://breakoutmentors.com/">Breakout Mentors</a></p>
      <Image size="medium" src={BreakoutIMG} /><br />
      <p><b>About <u>Breakout Mentors</u>:</b></p>
      <p>Breakout Mentors provides 1-on-1 personalized coding tutoring for ages 8-15 with mentors from Stanford, UC Berkeley, and more. They provide a project-based approach in Python, Java, etc with weekly sessions.</p>
      <br />
  
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
  </div>
    )} 
  />
)
}

export default ApplyPage
