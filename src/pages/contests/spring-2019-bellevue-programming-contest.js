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
import ProblemPacketDoc from "@docs/spring_2019_bhs/problem_set.pdf"
import JudgesAnswerDoc from "@docs/fall_2019_mihs/judges_data.pdf"
import InputsDoc from "@docs/fall_2019_mihs/inputs.zip"

const ApplyPage = ({ data }) => {
  const title = "Contests"

  return (
  <StaticQuery
    query={graphql`
          query QueryFour {
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
        Spring 2019 BHS Programming Contest
        </span>
        <br/>
      </h1>
      <h2 class="ui inverted header">
        <span class="library">
        June 8th, 2019
        </span>
      </h2>
      <h2 class="ui inverted header">
        <span class="library">
        77 students
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
      <p>1st - The Coders [Eastlake High School]</p>
      <p>2nd - RAM [Newport High School]</p>
      <p>3rd - CurryCoders [Lakeside School]</p>
      <h3>Advanced Division</h3>
      <p>1st - Eastside Prep [Eastside Preparatory School]</p>
      <p>2nd - QuickSort [The Bear Creek School]</p>
      <p>3rd - Void [Tesla STEM High School]</p>
      
      </div>
      <div class="column">
      <h2>Platinum Sponsor</h2>
      <Image size="small" src={SmartCodingSchoolIMG} /><br />
      </div>
    </div>
  </div>
  <div class="ui container">
      <h1>Contest Files</h1>
      <a href={ProblemPacketDoc} download="teamscode">Problem Packet</a><br />
      <h1>Contest Photos</h1>
      <a href="https://drive.google.com/drive/folders/170IMhhWLjVNX2vsX_qRerTCA7iFF56Wd?usp=sharing">Photo Album</a><br />
      

      <h2>Sponsors</h2>
      <p><b>Platinum Sponsor:</b> <a href="http://www.smartcodingschool.com/">Smart Coding School</a></p>
      <Image size="medium" src={SmartCodingSchoolIMG} /><br />
      <p><b>About <u>Smart Coding School</u>:</b></p>
      <p>Smart Coding School is a computer science education school established in March 2016. We develop computer science and engineering curriculums and offer courses for middle school and high school students (12 ~ 18 years old), and mainly provide Java Programming, data structures and algorithms, AP Computer Science A Test Prep and USA Computing Olympiad (USACO) training courses. On the 2017 Computer Science A AP Test, 95% of our students received 5 out of 5 scores. Many of our students successfully got into the Platinum, Gold, and Silver levels in USA Computing Olympiad competition. In local coding competitions, our students took 2nd place in the advanced division and 1st place in the intermediate division. Smart Coding School is powered by passionate software engineers from local top hi-tech companies such as Amazon and Microsoft. We believe that early computer science education can make a big difference for students. Our passion is to inspire kids and teens to see things differently from engineering perspectives and to believe that they can make a big impact through technology. Smart Coding School is all about students and prepare students for the future with technology.</p>
      
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
