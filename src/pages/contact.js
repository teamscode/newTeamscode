import React from "react"
import Helmet from "react-helmet"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"



import AboutIMG from "@images/avatars/about_team_header_image.jpg"
import LogoIMG from "@images/logo.png"

const MailURL = "https://teamscode.us16.list-manage.com/subscribe/post?u=68ebd958a395d94f3d7ad5ada&amp;id=1b008420c1";
const ContactPage = ({ data }) => {
  const title = "Contact"

  return (
  <StaticQuery
    query={graphql`
          query ContactSiteQuery {
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
  <img class="about-landing-image"src={AboutIMG} />
    <div class="introduction">
      <h1 class="ui inverted header">
        <span class="library">
          Contact
        </span>
        <span class="tagline">
          Get in touch with us below.
        </span>
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">
  
  <div class="stackable very relaxed ui grid container">
    
    <div class="ui divider"></div>
  </div>
  <div class="ui two column center aligned vertically divided very relaxed doubling grid container">
    <div class="row">
        <div class="column">
            <h1 align="left">Get Support</h1>
            <p align="left">Have a question? Want to learn more about TeamsCode? Contact us at <a href="mailto:teamscode@gmail.com">support@teamscode.com.</a><br /></p>
            <h1 align="left"><br />Sponsorship Inquiries</h1>
            <p align="left">Want to sponsor TeamsCode? Contact us at <a href="mailto:teamscode@gmail.com">sponsors@teamscode.com</a>.</p>
            <h1 align="left"><br />Donate</h1>
            <p align="left">Click the button below to donate to our PayPal. Any support is appreciated!</p>
        </div>
        <div class="column">
            <h1 align="left">Join Our Team</h1>
            <p align="left">Interested in helping us host contests? Click <a href="/apply">here</a> for more information on what it takes!<br /></p>
            <h1 align="left"><br />Volunteer to Judge</h1>
            <p align="left">Interested in volunteering for an event? Contact us at <a href="mailto:judging@teamscode.com">judging@teamscode.com</a>.</p>
            
            
        </div>
    </div>
  </div>
  <div class="ui vertical stripe intro segment">
    <div class=" relaxed center ui container">

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







    </div>
  </div>
    )} 
  />
)
}

export default ContactPage
