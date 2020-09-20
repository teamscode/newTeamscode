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

import AdvancedScoreboardDoc from "@docs/fall_2019_mihs/advanced_scoreboard.pdf"
import IntermediateScoreboardDoc from "@docs/fall_2019_mihs/intermediate_scoreboard.pdf"
import ProblemPacketDoc from "@docs/fall_2019_mihs/intermediate_scoreboard.pdf"
import JudgesAnswerDoc from "@docs/fall_2019_mihs/judges_data.pdf"
import InputsDoc from "@docs/fall_2019_mihs/inputs.zip"

const ApplyPage = ({ data }) => {
  const title = "Contests"

  return (
  <StaticQuery
    query={graphql`
          query QueryTwo {
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
        Fall 2019 MIHS Programming Contest
        </span>
        <br/>
      </h1>
      <h2 class="ui inverted header">
        <span class="library">
        November 9th, 2019
        </span>
      </h2>
      <h2 class="ui inverted header">
        <span class="library">
        144 students
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
      <p>1st - exe [560 points]</p>
      <p>2nd - RAM [445 points]</p>
      <p>3rd - CurryCoders [440 points]</p>
      <h3>Advanced Division</h3>
      <p>1st - Void [650 points]</p>
      <p>2nd - #todo [550 points]</p>
      <p>3rd - TeamSha [500 points]</p>
      
      </div>
      <div class="column">
      <h2>Platinum Sponsor</h2>
      <Image size="small" src={AudianIMG} /><br />
      <h2>Gold Sponsor</h2>
      <Image size="small" src={DigiPenIMG} />
      <h3>Silver Sponsor</h3>
      <Image size="small" src={CreativeLiveIMG} />
      </div>
    </div>
  </div>
  <div class="ui container">
      <h1>Contest Files</h1>
      <a href={AdvancedScoreboardDoc} download="teamscode">Advanced Scoreboard</a><br />
      <a href={IntermediateScoreboardDoc} download="teamscode">Intermediate Scoreboard</a><br />
      <a href={ProblemPacketDoc} download="teamscode">Problem Packet</a><br />
      <a href={ProblemPacketDoc} download="teamscode">Judges Answer Packet</a><br />
      <a href={InputsDoc} download="teamscode">Input Text Files</a><br />
      

      <h2>Sponsors</h2>
      <p><b>Platinum Sponsor:</b> <a href="http://www.audian.com/">Audian</a></p>
      <Image size="medium" src={AudianIMG} /><br />
      <p><b>About <u>Audian</u>:</b></p>
      <p>Audian is a software company redefining the telecom industry. Our focus is on increasing our customers’ Telecompetance by leveraging the latest is software and technology to simplify the complexities once associated with telecom, giving back time and energy to focus on growing their business. We do this through highly scalable, self-service, cloud-based telecom solutions that enable customers to easily create and manage their business phone system.</p>
      <p><b>Gold Sponsor: </b> <a href="https://www.digipen.edu/">DigiPen</a></p>
      <Image size="medium" src={DigiPenIMG} /><br />
      <p><b>About <u>DigiPen</u>:</b></p>
      <p>Since 1988, DigiPen Institute of Technology has been preparing students to succeed as skilled engineers, artists, and designers in the growing technology industries. An educational pioneer, we were the first college in the world to offer a bachelor’s degree in video game technology and development. Today, we offer a wide range of technology-focused programs, all with an eye toward the career opportunities of tomorrow. Through a combination of academic rigor and interdisciplinary team-based projects, our educational model empowers students to be active learners, bold problem-solvers, and creators. Our programs are intentionally designed to reflect the standards and practices of the professional industries: Small teams with different backgrounds and skills collaborate to apply their knowledge, overcome challenges, and build amazing things together. These teams form the core of our tight-knit student and alumni community.</p>
      <p><b>Silver Sponsor:</b> <a href="https://www.creativelive.com/">CreativeLive</a></p>
      <Image size="medium" src={CodeWizardsIMG} /><br />
      <p><b>About <u>CodeWizards HQ</u>:</b></p>
      <p>CodeWizards HQ is the leading online coding school for kids and teens ages 8-18. We deliver the most fun and effective live, online coding classes which are designed to give our students the programming knowledge, skills, and confidence to thrive in a digital world.</p>
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
