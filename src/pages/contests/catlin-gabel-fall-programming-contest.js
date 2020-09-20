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

import AdvancedScoreboardDoc from "@docs/fall_2018_cgs/scoreboard.pdf"
import IntermediatePacketDoc from "@docs/fall_2018_cgs/intermediate_problem_set.pdf"
import AdvancedPacketDoc from "@docs/fall_2018_cgs/advanced_problem_set.pdf"
import JudgesAnswerDoc from "@docs/fall_2018_cgs/inputs_outputs.zip"
import InputsDoc from "@docs/fall_2018_cgs/judges_data.pdf"

const ApplyPage = ({ data }) => {
  const title = "Contests"

  return (
  <StaticQuery
    query={graphql`
          query QuerySeven {
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
        Catlin Gabel Fall Programming Contest
        </span>
        <br/>
      </h1>
      <h2 class="ui inverted header">
        <span class="library">
        November 17th, 2018
        </span>
      </h2>
      <h2 class="ui inverted header">
        <span class="library">
        27 students
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
      <p>1st - NCS [Lincoln High School]</p>
      <p>2nd - Team 1541 [Catlin Gabel School]</p>
      <p>3rd - Loading... [Lake Oswego High School]</p>
      <h3>Advanced Division</h3>
      <p>1st - AC [Newport High School]</p>
      <p>2nd - speedycatfish [The Bear Creek School]</p>
      <p>3rd - team_name [Grant High School]</p>
      
      </div>
      <div class="column">
      <h2>Bronze Sponsor</h2>
      <Image size="small" src={BrainiumIMG} /><br />
      <Image size="small" src={ScirraIMG} /><br />
      <Image size="small" src={MathleticsIMG} /><br />
      <Image size="small" src={T4KIMG} /><br />
      </div>
    </div>
  </div>
  <div class="ui container">
      <h1>Contest Files</h1>
      <a href={AdvancedScoreboardDoc} download="teamscode">Scoreboard</a><br />
      <a href={IntermediatePacketDoc} download="teamscode">Intermediate Problem Set</a><br />
      <a href={AdvancedPacketDoc} download="teamscode">Advanced Problem Set</a><br />
      <a href={JudgesAnswerDoc} download="teamscode">Judges Answer Packet</a><br />
      <a href={InputsDoc} download="teamscode">Input Text Files</a><br />
      
      <h1>Contest Photos</h1>
      <a href="https://drive.google.com/drive/folders/1krjZLL68ndqJqJ3DI-RtTgwqkY_y5kcO?usp=sharing">Photo Album</a><br />
      

      <h2>Sponsors</h2>
      <p><b>Bronze Sponsor:</b><a href="http://www.brainiumstudios.com/"> Brainium</a></p><br />
      <Image size="medium" src={BrainiumIMG} /><br />
      <p><b>Bronze Sponsor:</b><a href="http://www.scirra.com/"> Scirra</a></p><br />
      <Image size="medium" src={ScirraIMG} /><br />
      <p><b>Bronze Sponsor:</b><a href="https://www.themathletics.com/"> Mathletics</a></p><br />
      <Image size="medium" src={MathleticsIMG} /><br />
      <p><b>Bronze Sponsor:</b><a href="https://www.tech4kidsclub.org/"> Tech For Kids Club</a></p><br />
      <Image size="medium" src={T4KIMG} /><br />

  
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
