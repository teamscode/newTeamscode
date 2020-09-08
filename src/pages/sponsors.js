import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"


import BusinessIMG from "@images/avatars/business.jpg"
import AboutIMG from "@images/avatars/about_team_header_image.jpg"
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
      <h1><center>Partners</center></h1>
      <h1><center>Platinum Sponsors</center></h1>
      <h1><center>Gold Sponsors</center></h1>
      <h1><center>Silver Sponsors</center></h1>
      <h1><center>Bronze Sponsors</center></h1>
      <h1><center>Additional Sponsors</center></h1>
      
      
      
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
