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
import RachelIMG from "@images/avatars/rachel.jpg"
import AayushIMG from "@images/avatars/aayush.jpeg"
import AlbertIMG from "@images/avatars/albert.jpeg"
import AlexDIMG from "@images/avatars/alexD.jpg"
import EthanIMG from "@images/avatars/ethan.jpg"
import JayIMG from "@images/avatars/jay.jpg"
import StevenIMG from "@images/avatars/steven.jpg"
import HarryIMG from "@images/avatars/harry.jpg"
import HelenIMG from "@images/avatars/helen.jpg"

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
    <div class=" relaxed center ui container">
      <h1>Our Team</h1>
      <h2><u>Leadership</u></h2>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={SeanImg} />
        </div>
          <div class="content"><div class="header">Sean Yang</div>
          <div class="meta">
            <span class="date">Co-President</span>
          </div>
          <div class="description">
          <small>Sean is a senior at Monta Vista High School. Though he first began learning Java and Python in 3rd grade, he didn't get into competitive programming until high school. His academic interests include math, physics, and computer science. Outside of school, his hobbies include swimming, running, biking, and photography.
          </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={RyanImg} />
        </div>
          <div class="content"><div class="header">Ryan Hsu</div>
          <div class="meta">
            <span class="date">Co-President</span>
          </div>
          <div class="description">
            <small>
          Ryan is a senior at Mercer Island High School. He has learned both Java and Python starting in sophomore year. His academic interests include economics and history. In his freetime, he enjoys investing in stocks, building computers, and playing baseball.
          </small>
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={ConnerImg} />
        </div>
          <div class="content"><div class="header">Conner Yin</div>
          <div class="meta">
            <span class="date">Vice President</span>
          </div>
          <div class="description">
            <small>
          Conner Yin is a senior at Monta Vista High School. He is passionate about programming, but also loves the logistics and marketing side of planning contests. Outside of TeamsCode, he enjoys indulging in 3 AM cup noodles and playing board and card games with his friends, as well as composing songs and producing music videos for his youtube channel.
            </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={WinbertImg} />
        </div>
          <div class="content"><div class="header">Winbert Zhang</div>
          <div class="meta">
            <span class="date">Vice President</span>
          </div>
          <div class="description">
            <small>
          Winbert is a senior at Monta Vista High School. He has a background in competitive programming and web development. Other than computer science, he enjoys studying and teaching physics. Outside of school, he loves volunteering at local community service centers, competing in card game tournaments, and hanging out with friends.
          </small>
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
          <div class="content"><div class="header">Chris Elliot</div>
          <div class="meta">
            <span class="date">Co-Founder, Co-President 2017-2019</span>
          </div>
          <div class="description">
          <small>
          Chris Elliott is a student in the UPenn M&amp;T Program, studying computer science and business. In his free time, he likes to read and play tennis.
          </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={AlanImg} />
        </div>
          <div class="content"><div class="header">Alan Bi</div>
          <div class="meta">
            <span class="date">Co-Founder, Co-President 2017-2019</span>
          </div>
          <div class="description">
          <small>
          Alan Bi is a freshman at Duke University studying computer science and statistics. He started programming in ninth grade and has since enjoyed working on a variety of technical projects. Aside from programming, he also enjoys playing table tennis.
          </small>
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={JasonImg} />
        </div>
          <div class="content"><div class="header">Jason Zhang</div>
          <div class="meta">
            <span class="date">Co-President 2019-2020</span>
          </div>
          <div class="description">
          <small>
          Jason Zhang is a freshman at the University of Washington, studying computer science. He also enjoys math, history, and playing guitar.
          </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={AlexImg} />
        </div>
          <div class="content"><div class="header">Alex Patel</div>
          <div class="meta">
            <span class="date">Co-President 2019-2020</span>
          </div>
          <div class="description">
          <small>
          Alex Patel is a freshman at Stanford University. He is passionate about both programming and finance, and has led organizations teaching students about both. Outside of school, he enjoys playing tennis, golf, and piano, as well as exploring the stock market.
          </small>
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
          <div class="content"><div class="header">William Huang</div>
          <div class="meta">
            <span class="date">Director of Marketing</span>
          </div>
          <div class="description">
          <small>
          William Huang is a senior at Monta Vista High School in Cupertino, California. He started learning Java in his freshman year of high school, with a focus on creative design. Academically, he is interested in biology and chemistry, partaking in Science Olympiad. Outside of school, he loves painting, photography, singing, and playing Valorant.
          </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={VictorIMG} />
        </div>
          <div class="content"><div class="header">Victor Du</div>
          <div class="meta">
            <span class="date">Director of Technology</span>
          </div>
          <div class="description">
          <small>
          Victor is a senior at International School in Bellevue. He helps develop software for a variety of causes. In his free time, he enjoys learning about physics, modding video games, and reading alternate history fiction.
          </small>
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={LucaIMG} />
        </div>
          <div class="content"><div class="header">Luca Palermo</div>
          <div class="meta">
            <span class="date">Head of Problem Writing</span>
          </div>
          <div class="description">
          <small>
          Luca Palermo is a junior at Mercer Island High School in Washington. He started his passion for programming in third grade with Python and Java. Outside of school, he spends most of his time working as a lead cross-platform app developer for a local startup company but also enjoys playing piano and spending time with friends.
          </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={BillIMG} />
        </div>
          <div class="content"><div class="header">Bill Wang</div>
          <div class="meta">
            <span class="date">Head of Finance</span>
          </div>
          <div class="description">
          <small>
          Bill is a senior at Mercer Island High School. He first began learning Java in his sophomore year of high school. At school, he enjoys economics, psychology, and mock trial. In his free time, he likes to play the piano, hang out with friends, and play soccer.
          </small>
          </div>
          </div>
      </div>
      </div>
      <h2><u>Organizers</u></h2>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={RachelIMG} />
        </div>
          <div class="content"><div class="header">Rachel Chan</div>
          <div class="meta">
            <span class="date">Logistics Coordinator</span>
          </div>
          <div class="description">
          <small>Rachel is a sophomore at Monta Vista High School in Cupertino, California. She began learning programming two years back and is fluent in both Java and C++. Outside of school, she enjoys reading science fiction and participating in DECA conferences. With her passions in computer science, she’s excited to be a part of TeamsCode.</small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={AayushIMG} />
        </div>
          <div class="content"><div class="header">Aayush Sheth</div>
          <div class="meta">
            <span class="date">Logistics Coordinator</span>
          </div>
          <div class="description">
            <small>
            Aayush is a junior at Tesla STEM Highschool in Washington state. He started learning competitive programming four years ago and is well-versed in C++ and Java. Outside of school, he enjoys learning economics, piano, and soccer. Through TeamsCode, he hopes to develop his leadership and coordination skills.
            </small>
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={StevenIMG} />
        </div>
          <div class="content"><div class="header">Steven Luo</div>
          <div class="meta">
            <span class="date">Logistics Coordinator</span>
          </div>
          <div class="description">
            <small>
            Steven Luo is a junior at Evergreen Valley High School. He’s taken several programming classes, but started with C++ and Python in his freshman year. In his spare time, he enjoys playing the flute and piano, listening to music, and volunteering for The Evergreen Initiative, a nonprofit organization.
          </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={EthanIMG} />
        </div>
          <div class="content"><div class="header">Ethan Peng</div>
          <div class="meta">
            <span class="date">Logistics Coordinator</span>
          </div>
          <div class="description">
            <small>
            Ethan is a junior at Los Altos High School. He started learning programming two years ago, and competitive programming one year ago. He is excited to help bring quality contests to computer science students. Outside of programming, he plays tennis and watches Chinese dramas.
            </small>
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={AlbertIMG} />
        </div>
          <div class="content"><div class="header">Albert Huang</div>
          <div class="meta">
            <span class="date">Problem Writer</span>
          </div>
          <div class="description">
          <small>Albert is a sophomore at the Nueva School who is interested in creating and applying algorithms to problems in the community. To him, TeamsCode is the way to get more people interested in the thought process behind solving problems. He’s hoping to inspire others to apply technology to change the world.
          </small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={AlexDIMG} />
        </div>
          <div class="content"><div class="header">Alex Du</div>
          <div class="meta">
            <span class="date">Problem Writer</span>
          </div>
          <div class="description">
            <small>
            Alex is a freshman at Cupertino High School in California. He started competitive programming in C++ three years ago. Outside of programming, he does math, plays volleyball, and enjoys spending time with friends. He’s working to get more people into the world of competitive coding.
            </small>
          </div>
          </div>
      </div>
      </div>
      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={JayIMG} />
        </div>
          <div class="content"><div class="header">Jay Dharmadhikari</div>
          <div class="meta">
            <span class="date">Marketing Coordinator</span>
          </div>
          <div class="description">
            <small>
            Jay Dharmadhikari is a junior at Redmond High School in Redmond, WA. He has been interested in computer science, coding, and competitive programming since middle school. Outside of CS, he enjoys graphic design and music production.</small>
          </div>
          </div>
      </div>
      <div class = "ui card">
        <div class="image">
        <img src={HarryIMG} />
        </div>
          <div class="content"><div class="header">Harry Chen</div>
          <div class="meta">
            <span class="date">Back-End Developer</span>
          </div>
          <div class="description">
            <small>
            Harry is a freshman at Lynbrook High School in San Jose, California. He began to learn programming in 6th grade and started his competition career in the 7th. Harry has helped a start-up company to build Websites and to manage IT Infrastructures. In his free time, he likes to play tennis and hang out with friends.
            </small>
          </div>
          </div>
      </div>
      </div>

      <div class="ui two cards">
      <div class = "ui card">
        <div class="image">
        <img src={HelenIMG} />
        </div>
          <div class="content"><div class="header">Helen Feng</div>
          <div class="meta">
            <span class="date">Logistics Coordinator</span>
          </div>
          <div class="description">
          <small>Helen Feng is a junior at Evergreen Valley High School and is particularly interested in computer science and software development. With passion for using the creative process to make things become reality, Helen began programming in middle school. Outside of school, she enjoys making Discord bots, drawing, playing badminton, playing games, and solving real world problems with the power of technology under the New York Academy of Sciences. 
          </small>
          </div>
          </div>
      </div>
      
      </div>
    </div>
    <br /><br />
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

export default AboutPage
