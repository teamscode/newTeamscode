import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "./index.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"



import AboutIMG from "@images/avatars/about_team_header_image.jpg"
import MIHSIMG from "@images/contest_images/MI_Logo.jpg"
import MVHSIMG from "@images/contest_images/mvhs_logo.png"
import CollageIMG from "@images/contest_images/blog_photo_dark.jpg"

import TwentyFourGame from "@docs/problem_pdfs/24_game.pdf"
import AlienMessage from "@docs/problem_pdfs/alien_message.pdf"
import AntiRPS from "@docs/problem_pdfs/anti_rps.pdf"
import AreaUnderTheCurves from "@docs/problem_pdfs/area_under_the_curves.pdf"
import Artifacts from "@docs/problem_pdfs/artifacts.pdf"
import BasePalindrome from "@docs/problem_pdfs/base_palindrome.pdf"
import Battery from "@docs/problem_pdfs/battery.pdf"
import BestBootCamps from "@docs/problem_pdfs/best_bootcamps.pdf"
import BestFootballTeam from "@docs/problem_pdfs/best_football_team.pdf"
import BinaryCode from "@docs/problem_pdfs/binary_code.pdf"
import Bookcase from "@docs/problem_pdfs/bookcase.pdf"
import BunnyIsland from "@docs/problem_pdfs/bunny_island.pdf"
import ChangingA2DArray from "@docs/problem_pdfs/changing_a_2d_array.pdf"
import Chess from "@docs/problem_pdfs/chess.pdf"
import ChoppingTrees from "@docs/problem_pdfs/chopping_trees.pdf"
import ClosestZipCodes from "@docs/problem_pdfs/closest_zip_codes.pdf"
import CollatzConjecture from "@docs/problem_pdfs/collatz_conjecture.pdf"
import CompoundInterest from "@docs/problem_pdfs/compound_interest.pdf"
import CountingTime from "@docs/problem_pdfs/counting_time.pdf"
import CupsandSwaps from "@docs/problem_pdfs/cups_and_swaps.pdf"
import Decoder from "@docs/problem_pdfs/decoder.pdf"
import DigitSearch from "@docs/problem_pdfs/digit_search.pdf"
import DistanceToShore from "@docs/problem_pdfs/distance_to_shore.pdf"
import Elephant from "@docs/problem_pdfs/elephant.pdf"
import EscapeRoom from "@docs/problem_pdfs/escape_room.pdf"
import Factorization from "@docs/problem_pdfs/factorization.pdf"
import FastTravel from "@docs/problem_pdfs/fast_travel.pdf"
import Fencing from "@docs/problem_pdfs/fencing.pdf"
import FindPrime from "@docs/problem_pdfs/find_prime.pdf"
import FlattenedCube from "@docs/problem_pdfs/flattened_cube.pdf"
import Frog from "@docs/problem_pdfs/Frog.pdf"


import InspirationalMessage from "@docs/problem_pdfs/inspirational_message.pdf"
const ContestsPage = ({ data }) => {
  const title = "Programming Practice"

  return (
  <StaticQuery
    query={graphql`
          query ExampleQuery {
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
  <img class="about-landing-image"src={CollageIMG} />
    <div class="introduction">
      <h1 class="ui inverted header">
        <span class="library">
          Programming Practice
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>Browse TeamsCode's collection of programming problems. To learn how to create and test your answer, please reference this pdf.</p>
        <p>If you want to download a zip file with all of the TeamsCode problems and input/outputs, click here.</p>
        <p><b>New Addition: </b>Test your solutions online here.</p>

      </div> 
      
    </div>
  </div>
  <div class="ui center aligned three column grid container">
      <div class="row">
          <div class="column">
        <div class="ui cards">
          <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Inspirational Message</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Small Car</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Triangle Creator</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Sorting Distances</div>
            <div class="meta">
                <span class="meta">Basic Sorting<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Distance to Shore</div>
            <div class="meta">
                <span class="meta">Basic Arithmetic<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Word Spelling</div>
            <div class="meta">
                <span class="meta">Searching Strings<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Compound Interest</div>
            <div class="meta">
                <span class="meta">Basic Arithmetic<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Magic Square</div>
            <div class="meta">
                <span class="meta">Array Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Texas Hold 'Em</div>
            <div class="meta">
                <span class="meta">Sorting and Searching<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Valid DNA</div>
            <div class="meta">
                <span class="meta">Analyzing Strings<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Frog</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Bookcase</div>
            <div class="meta">
                <span class="meta">Sorting<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Line Graph</div>
            <div class="meta">
                <span class="meta">Basic Arithmetic<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Chopping Trees</div>
            <div class="meta">
                <span class="meta">Basic Arithmetic<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Bunny Island</div>
            <div class="meta">
                <span class="meta">Recursion<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Hexagons</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Anti-RPS</div>
            <div class="meta">
                <span class="meta">Analyzing Strings<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Tournament</div>
            <div class="meta">
                <span class="meta">Basic Algebra<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Artifacts</div>
            <div class="meta">
                <span class="meta">Basic Arithmetic<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Cups and Swaps</div>
            <div class="meta">
                <span class="meta">Basic Math Analysis<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Elephant</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Merchant</div>
            <div class="meta">
                <span class="meta">Basic Arithmetic<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Secret Message</div>
            <div class="meta">
                <span class="meta">Analyzing Strings<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Pyramid</div>
            <div class="meta">
                <span class="meta">Basic Alegbra<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Odds and Evens</div>
            <div class="meta">
                <span class="meta">Sorting<br /></span>
            </div>
            </div>
            </a>

          </div>
          </div>







          <div class="column">
        <div class="ui cards">
          <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Find Prime</div>
            <div class="meta">
                <span class="meta">Basic Algorithms<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Counting Time</div>
            <div class="meta">
                <span class="meta">Unit Conversion<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Decoder</div>
            <div class="meta">
                <span class="meta">Decoder<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Playground</div>
            <div class="meta">
                <span class="meta">Basic Algorithms<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Best Football Team</div>
            <div class="meta">
                <span class="meta">Sorting and Data Storage<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Multiplying Ducks</div>
            <div class="meta">
                <span class="meta">Algorithm Creation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Changing a 2D Array</div>
            <div class="meta">
                <span class="meta">Array manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Alien Message</div>
            <div class="meta">
                <span class="meta">Array Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Pattern Sequence</div>
            <div class="meta">
                <span class="meta">Data Analysis<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">New Palindrome</div>
            <div class="meta">
                <span class="meta">Complex String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Digit Search</div>
            <div class="meta">
                <span class="meta">Analyzing Strings<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Lost Phone</div>
            <div class="meta">
                <span class="meta">Basic Algebra<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Intersecting Lines</div>
            <div class="meta">
                <span class="meta">Basic Algebra<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Roman Numerals</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Reverse Engineering</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Chess</div>
            <div class="meta">
                <span class="meta">Analyzing Strings<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Outlier</div>
            <div class="meta">
                <span class="meta">Analyzing Integers<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Street Crossing</div>
            <div class="meta">
                <span class="meta">Complex Algebra<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Trophies</div>
            <div class="meta">
                <span class="meta">Dynamic Programming<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Password</div>
            <div class="meta">
                <span class="meta">Brute Force Method<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Collatz Conjecture</div>
            <div class="meta">
                <span class="meta">String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Word Choice</div>
            <div class="meta">
                <span class="meta">Analyzing Strings<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Fencing</div>
            <div class="meta">
                <span class="meta">Array Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Unit Conversion</div>
            <div class="meta">
                <span class="meta">Advanced String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Area Under The Curves</div>
            <div class="meta">
                <span class="meta">Complex Math Analysis<br /></span>
            </div>
            </div>
            </a>

          </div>
          </div>








          <div class="column">
        <div class="ui cards">
          <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Underground Maze</div>
            <div class="meta">
                <span class="meta">Depth-First Search<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Best Bootcamps</div>
            <div class="meta">
                <span class="meta">Data Analysis<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Road Race</div>
            <div class="meta">
                <span class="meta">Dijkstra's Algorithm<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Closest ZIP Codes</div>
            <div class="meta">
                <span class="meta">Integer Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Hiking</div>
            <div class="meta">
                <span class="meta">Algorithm Design<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Sudoku</div>
            <div class="meta">
                <span class="meta">Array Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">L.C.S</div>
            <div class="meta">
                <span class="meta">Dynamic Programming<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Full Bookshelf</div>
            <div class="meta">
                <span class="meta">Complex Algorithm Design<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Binary Code</div>
            <div class="meta">
                <span class="meta">String/Binary Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Base Palindrome</div>
            <div class="meta">
                <span class="meta">Base and String Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Swap</div>
            <div class="meta">
                <span class="meta">Complex Algorithm Design<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Fast Travel</div>
            <div class="meta">
                <span class="meta">Shortest Path<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">24 Game</div>
            <div class="meta">
                <span class="meta">Integer Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Geometric Sequence</div>
            <div class="meta">
                <span class="meta">Analyzing Integers<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Factorization</div>
            <div class="meta">
                <span class="meta">String and Integer Manipulation<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Sequence</div>
            <div class="meta">
                <span class="meta">Dynamic Programming<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Tower</div>
            <div class="meta">
                <span class="meta">Dynamic Programming<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Traffic Lights</div>
            <div class="meta">
                <span class="meta">Dijkstra's Algorithm<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Mirrors and Lasers</div>
            <div class="meta">
                <span class="meta">Advanced Mathematics<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Battery</div>
            <div class="meta">
                <span class="meta">Dynamic Programming<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Escape Room</div>
            <div class="meta">
                <span class="meta">Depth-First Search<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Flattened Cube</div>
            <div class="meta">
                <span class="meta">Complex Algorithm Design<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Rubik's Cube</div>
            <div class="meta">
                <span class="meta">Dynamic Programming<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Target</div>
            <div class="meta">
                <span class="meta">Brute Force Method<br /></span>
            </div>
            </div>
            </a>

            <a class = "ui fluid card" href={InspirationalMessage} download>
          <div class="content"><div class="header">Markov Chain</div>
            <div class="meta">
                <span class="meta">Complex Algorithm Design<br /></span>
            </div>
            </div>
            </a>

          </div>
          </div>


      </div>
     
      
      
  </div> <br />
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
  <script type="text/javascript">
$('.ui.dropdown')
  .dropdown();
</script>
  </div>
    )} 
  />
)
}

export default ContestsPage
