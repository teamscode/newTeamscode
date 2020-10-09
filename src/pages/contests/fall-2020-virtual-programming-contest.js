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
import Doc1 from "@docs/TC_CasesSols_Combined.zip"
import LogisticsPDF from "@docs/TeamsCode-Fall-2020-Logistics.zip"

const ApplyPage = ({ data }) => {
  const title = "Contests"

  return (
  <StaticQuery
    query={graphql`
          query Query33 {
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
        Fall 2020 Virtual Contest
        </span>
        <br/>
      </h1>
      <h2 class="ui inverted header">
        <span class="library">
        November 21st, 2020
        </span>
      </h2>
      <h2 class="ui inverted header">
        <span class="library">
        Registration Open
        </span>
      </h2>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">
  
  <div class="two column ui grid container">
    
  </div>
  <div class="ui container">
      <h1>Basic Information</h1>
      <h3>View detailed logistics about the contest in<a href={LogisticsPDF} download> our logistics document</a>.</h3>
      <p><b>Time: </b>1:00 - 5:00 PM</p>
      <p><b>Team Sizes: </b>1-4 people per team.</p>
      <p><b>Cost: </b>Free</p>
      <p><b>Languages: </b>Java, C++, C#, and Python</p>
      <p><b>Divisons: </b>Intermediate or Advanced</p>
      <h2>General Guidelines</h2>
      <p><b>Intermediate: </b>A division for programmers who have recently started programming and/or are in one programming class.</p>
      <p><b>Advanced: </b>A division for programmers with more experience, typically having finished one programming class and are fairly knowledgeable about a specific language.</p>
      <p><em>Note: These are guidelines, not rules. You may choose to sign up for either division.</em></p>
      <h2>Rules:</h2>
      <p>1. Each team member must be in middle school or high school.</p>
      <p>2. Teams must not receive any help from anyone outside the team.</p>
      <p>3. Teams may use multiple computers.</p>
      <p>4. Pre-written code is allowed, as well as online reference guides.</p>
      <h2>Schedule</h2>
      <p><b>1:00: </b>Keynote Speech, Introduction to rules and schedule.</p>
      <p><b>1:30: </b> Contest begins.</p>
      <p><b>4:30: </b>Announce winners. Raffle.</p>
      <p><b>5:00: </b>End of the contest.</p>
      <p>Exact logistics will be announced later, specifically, the medium through which we give speeches and announce winners and the exact distribution of prizes.</p>
      <h2>Scoring</h2>
      <p><b>Overview: </b>There will be many programming problems, sorted by difficulty from easiest to hardest. The points awarded is based off of number of test cases correct and difficulty of the problem. The correct output of for each test case of an easy problem awards 10 points, of a medium problem awards 20 points, of a difficult problem awards 30 points. Each problem will have three test cases, and temas will be restricted to two submissions for each problem. Submissions will be made through email.</p>
      <p>The three teams with the most amount of points will receive medals. If there is a tie in points, the winner is decided by the team that completed their last problem first.</p>
      <p><b>Input and Output: </b> Read input from text file and output to console (answers checked manually by judges).</p>
      <p><b>Sample Problem: </b>You are facing off against a golem. In order to beat it, you must cast a magic spell. You are given two numbers. Your task is to find the largest number possible either by adding or multiplying the two numbers together in order to cast the strongest spell.</p>
      <p><b>Input: </b>The first line contains an integer L. The following L lines will each contain two numbers, N1 and N2.</p>
      <p><b>Output: </b>For each set of two numbers, print the largest number possible through either adding or multiplying the two numbers together.</p>
      <p><b>Example Input:</b></p>
      <p>5<br />6 12<br />1 54<br />2 2<br />9 -17<br />-7 -7</p>
      <p><b>Example Output:</b></p>
      <p>72<br />55<br />4<br />-8<br />49</p>
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
