import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"


import BusinessIMG from "@images/avatars/business.jpg"

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


const AboutPage = ({ data }) => {
  const title = "Sponsors"

  return (
  <StaticQuery
    query={graphql`
          query SponsorSiteQuery {
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
  <img class="about-landing-image"src={BusinessIMG} />
    <div class="introduction">
      <h1 class="ui inverted header">
        <span class="library">
          Sponsors
        </span>
        <span class="tagline">
          Benefactors that keep our organization running.
        </span>
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">
  
  
  <div class="ui vertical stripe intro segment">
    <div class="relaxed center ui container">
      <h1><center><br />Partners<br /></center></h1>
      <div class="ui two column center aligned divided relaxed grid container">
        <div class="row">
          <div class="column">
          <img src={XCampIMG} />
          </div>
          <div class="column">
          <img src={CodeWithUsIMG} />
          </div>
        </div>
        <h1><center>Platinum Sponsors<br /></center></h1>
        <div class="row">
          <div class="column">
          <img src={SmartCodingSchoolIMG} />
          </div>
          <div class="column">
          <img src={AudianIMG} />
          </div>
        </div>
      </div>

      <div class="ui two column center aligned vertically divided very relaxed grid container">
        <h1><center><br />Gold Sponsors<br /></center></h1>
        <div class="row">
          <div class="column">
            <img src={CodeWizardsIMG} />
          </div>
          <div class="column">
            <img src={JetBrainsIMG} />
          </div>
          <div class="column">
            <img src={PagliacciIMG} />
          </div>
          <div class="column">
            <img src={SiliconLabsIMG} />
          </div>
          <div class="column">
            <img src={DigiPenIMG} />
          </div>
          <div class="column">
            <img src={MakaboomIMG} />
          </div>
        </div>
      </div>
      <div class="ui two column center aligned vertically divided very relaxed grid container">
        <h1><center><br />Silver Sponsors</center></h1>
        <div class="row">
          <div class="column">
            <img src={PSCSTAIMG} />
          </div>
          <div class="column">
            <img src={BugseeIMG} />
          </div>
          <div class="column">
            <img src={CreativeLiveIMG} />
          </div>
          <div class="column">
            <img src={BunBaoIMG} />
          </div>
        </div>
      </div>
      <div class="ui two column center aligned vertically divided very relaxed grid container">
        <h1><center><br />Bronze Sponsors</center></h1>
        <div class="row">
          <div class="column">
            <img src={CrelateIMG} />
          </div>
          <div class="column">
            <img src={TwilioIMG} />
          </div>
          <div class="column">
            <img src={TopcoderIMG} />
          </div>
          <div class="column">
            <img src={BrainiumIMG} />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img src={ScirraIMG} />
          </div>
          <div class="column">
            <img src={MathleticsIMG} />
          </div>
          <div class="column">
            <img src={T4KIMG} />
          </div>
          <div class="column">
            <img src={BreakoutIMG} />
          </div>
        </div>
      </div>
      
      
      <div class="ui two column center aligned vertically divided relaxed grid container">
      <h1><center><br />Additional Sponsors</center></h1>
        <div class="row">
          <div class="column">
          <img src={MSFTTealsIMG} />
          </div>
          <div class="column">
          <img src={LionsIMG} />
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</div>







    </div>
  </div>
    )} 
  />
)
}

export default AboutPage
