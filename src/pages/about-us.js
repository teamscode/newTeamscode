import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"


import MatthewImg from "@images/avatars/matthew.png"
import SeanImg from "@images/avatars/sean.png"
import RyanImg from "@images/avatars/ryan.jpg"
import ConnerImg from "@images/avatars/conner.jpg"
import WinbertImg from "@images/avatars/winbert.jpg"
import ChrisIMG from "@images/avatars/chris.jpg"
import AlanImg from "@images/avatars/alan.jpg"
import JasonImg from "@images/avatars/jason.jpg"
import AlexImg from "@images/avatars/alex.jpg"
import WilliamIMG from "@images/avatars/william.jpg"
import VictorIMG from "@images/avatars/victor.jpg"
import LucaIMG from "@images/avatars/luca.jpg"
import BillIMG from "@images/avatars/bill.jpg"
import AboutIMG from "@images/avatars/about_team_header_image.jpg"
const AboutPage = ({ data }) => {
  const title = "About Us"

  return (
  <StaticQuery
    query={graphql`
          query AboutSiteQuery {
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
          Our Organizaton
        </span>
        <span class="tagline">
          TeamsCode's mission, goals, and team.
        </span>
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">
  
  <div class="stackable very relaxed ui grid container">
    <div class="row">
      <div class="column">
        <p><b>TeamsCode</b> is a student-run 501(c)(3) non-profit that works to encourage middle school and high school students to study computer science. We work with teachers and sponsors to create awesome programming contests – both online and in-person!</p>
        <p>Chris Elliott and Alan Bi founded TeamsCode in the beginning of 2017. Both of them participated in local programming contests and noticed a lack of representation from their school. They set about to change that by organizing the first ever Mercer Island High School Programming Contest on April 1st, 2017. Since then, TeamsCode has expanded its influence across three states and hopes to continue growing.</p>
        <p>In addition to organizing programming contests, TeamsCode writes free, online programming lessons to create a lower entry barrier for computer science education. We also encourage students to sharpen their algorithmic skills by solving our past contest problems through Launch Test Run, an interactive system that judges code submissions in real-time!</p>
        <p>We are always open to students who are interested in helping us organize our contests. If you would like to join our team, <a href="https://teamscode.com/contests/create">apply here</a>! We'll see if you're a good fit for our team.</p>
      </div>
      
    </div>

    <div class="ui divider"></div>
    
  </div>
  <div class="ui vertical stripe intro segment">
    <div class="relaxed center ui container">
      <h1>Our Team</h1>
      <h2><u>Leadership</u></h2>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={SeanImg} />
        </div>
          <div class="content"><a class="header">Sean Yang</a>
          <div class="meta">
            <span class="date">Co-President</span>
          </div>
          <div class="description">
          Sean is a senior at Monta Vista High School. Though he first began learning Java and Python in 3rd grade, he didn't get into competitive programming until high school. His academic interests include math, physics, and computer science. Outside of school, his hobbies include swimming, running, biking, and photography.
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={RyanImg} />
        </div>
          <div class="content"><a class="header">Ryan Hsu</a>
          <div class="meta">
            <span class="date">Co-President</span>
          </div>
          <div class="description">
          Ryan is a senior at Mercer Island High School. He has learned both Java and Python starting in sophomore year. His academic interests include economics and history. In his freetime, he enjoys investing in stocks, building computers, and playing baseball.
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={ConnerImg} />
        </div>
          <div class="content"><a class="header">Conner Yin</a>
          <div class="meta">
            <span class="date">Vice President</span>
          </div>
          <div class="description">
          Conner Yin is a senior at Monta Vista High School. He is passionate about programming, but also loves the logistics and marketing side of planning contests. Outside of TeamsCode, he enjoys indulging in 3 AM cup noodles and playing board and card games with his friends, as well as composing songs and producing music videos for his youtube channel.
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={WinbertImg} />
        </div>
          <div class="content"><a class="header">Winbert Zhang</a>
          <div class="meta">
            <span class="date">Vice President</span>
          </div>
          <div class="description">
          Winbert is a senior at Monta Vista High School. He has a background in competitive programming and web development. Other than computer science, he enjoys studying and teaching physics. Outside of school, he loves volunteering at local community service centers, competing in card game tournaments, and hanging out with friends.
          </div>
          </div>
      </div>
      </div>
      <h2><u>Past Leadership</u></h2>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={ChrisIMG} />
        </div>
          <div class="content"><a class="header">Chris Elliot</a>
          <div class="meta">
            <span class="date">Co-Founder, Co-President 2017-2019</span>
          </div>
          <div class="description">
          Chris Elliott is a student in the UPenn M&amp;T Program, studying computer science and business. In his free time, he likes to read and play tennis.
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={AlanImg} />
        </div>
          <div class="content"><a class="header">Alan Bi</a>
          <div class="meta">
            <span class="date">Co-Founder, Co-President 2017-2019</span>
          </div>
          <div class="description">
          Alan Bi is a freshman at Duke University studying computer science and statistics. He started programming in ninth grade and has since enjoyed working on a variety of technical projects. Aside from programming, he also enjoys playing table tennis.
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={JasonImg} />
        </div>
          <div class="content"><a class="header">Jason Zhang</a>
          <div class="meta">
            <span class="date">Co-President 2019-2020</span>
          </div>
          <div class="description">
          Jason Zhang is a freshman at the University of Washington, studying computer science. He also enjoys math, history, and playing guitar.
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={AlexImg} />
        </div>
          <div class="content"><a class="header">Alex Patel</a>
          <div class="meta">
            <span class="date">Co-President 2019-2020</span>
          </div>
          <div class="description">
          Alex Patel is a freshman at Stanford University. He is passionate about both programming and finance, and has led organizations teaching students about both. Outside of school, he enjoys playing tennis, golf, and piano, as well as exploring the stock market.
          </div>
          </div>
      </div>
      </div>
      <h2><u>Lead Organizers</u></h2>
      <p><em>The Heads and Directors of our Organizer Team</em></p>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={WilliamIMG} />
        </div>
          <div class="content"><a class="header">William Huang</a>
          <div class="meta">
            <span class="date">Director of Marketing</span>
          </div>
          <div class="description">
          William Huang is a senior at Monta Vista High School in Cupertino, California. He started learning Java in his freshman year of high school, with a focus on creative design. Academically, he is interested in biology and chemistry, partaking in Science Olympiad. Outside of school, he loves painting, photography, singing, and playing Valorant.
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={VictorIMG} />
        </div>
          <div class="content"><a class="header">Victor Du</a>
          <div class="meta">
            <span class="date">Director of Technology</span>
          </div>
          <div class="description">
          Victor is a senior at International School in Bellevue. He helps develop software for a variety of causes. In his free time, he enjoys learning about physics, modding video games, and reading alternate history fiction.
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={LucaIMG} />
        </div>
          <div class="content"><a class="header">Luca Palermo</a>
          <div class="meta">
            <span class="date">Head of Problem Writing</span>
          </div>
          <div class="description">
          Luca Palermo is a junior at Mercer Island High School in Washington. He started his passion for programming in third grade with Python and Java. Outside of school, he spends most of his time working as a lead cross-platform app developer for a local startup company but also enjoys playing piano and spending time with friends.
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={BillIMG} />
        </div>
          <div class="content"><a class="header">Bill Wang</a>
          <div class="meta">
            <span class="date">Head of Finance</span>
          </div>
          <div class="description">
          Bill is a senior at Mercer Island High School. He first began learning Java in his sophomore year of high school. At school, he enjoys economics, psychology, and mock trial. In his free time, he likes to play the piano, hang out with friends, and play soccer.
          </div>
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
