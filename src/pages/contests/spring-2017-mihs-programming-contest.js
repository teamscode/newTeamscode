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

import AdvancedScoreboardDoc from "@docs/spring_2017_mihs/advanced_scoreboard.pdf"
import IntermediateScoreboardDoc from "@docs/spring_2017_mihs/intermediate_scoreboard.pdf"
import ProblemPacketDoc from "@docs/spring_2017_mihs/problem_set.pdf"
import JudgesAnswerDoc from "@docs/spring_2017_mihs/inputs_outputs.zip"
import InputsDoc from "@docs/spring_2017_mihs/judges_data.pdf"

const ApplyPage = ({ data }) => {
  const title = "Contests"

  return (
  <StaticQuery
    query={graphql`
          query QueryTwelve {
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
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
        Spring 2017 MIHS Programming Contest
        </span>
        <br/>
      </h1>
      <h2 class="ui inverted header">
        <span class="library">
        April 1st, 2017
        </span>
      </h2>
      <h2 class="ui inverted header">
        <span class="library">
        103 students
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
      <p>1st - Fuzzy Logic [Odle Middle School]</p>
      <p>2nd - Nieracol [Iinterlake High School]</p>
      <p>3rd - 1337 [Willows Preparatory School]</p>
      <h3>Advanced Division</h3>
      <p>1st - untitled.txt [Newport High School + Lakeside High School]</p>
      <p>2nd - Delete System32 [Newport High School]</p>
      <p>3rd - If Only David Was Here [Interlake High School]</p>
      
      </div>
      <div class="column">
      <h2>Sponsors</h2>
      <Image size="small" src={MSFTTealsIMG} />
      <Image size="medium" src={PSCSTAIMG} /><br />
      <Image size="medium" src={LionsIMG} />
      <Image size="medium" src={PagliacciIMG} /><br />
      </div>
    </div>
  </div>
  <div class="ui container">
      <h1>Contest Files</h1>
      <a href={AdvancedScoreboardDoc} download="teamscode">Advanced Scoreboard</a><br />
      <a href={IntermediateScoreboardDoc} download="teamscode">Intermediate Scoreboard</a><br />
      <a href={ProblemPacketDoc} download="teamscode">Problem Packet</a><br />
      <a href={JudgesAnswerDoc} download="teamscode">Judges Answer Packet</a><br />
      <a href={InputsDoc} download="teamscode">Input Text Files</a><br />
      
      <h1>Contest Photos</h1>
      <a href="https://drive.google.com/open?id=1AyF9actR2xeUIRPro66Zc98Z9T4EG-mb">Photo Album</a><br />
      

      <h2>Sponsors</h2>
      <Image size="small" src={MSFTTealsIMG} />
      <Image size="medium" src={PSCSTAIMG} /><br />
      <Image size="medium" src={LionsIMG} />
      <Image size="medium" src={PagliacciIMG} /><br />


  
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