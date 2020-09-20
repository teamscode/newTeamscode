import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "../index.css"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"




import BuildPCIMG from "@images/community/build_own_pc.jpg"
import AudianIMG from "@images/sponsor_images/sponsor_audian.png"
import Image1 from "@images/community/programming_languages_makeup.png"
import ProgrammingLanguagesIMG from "@images/community/programming_languages.jpg"


import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query Query19 {
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
        Programming Contest Languages
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>Learn about the benefits and drawbacks of the different programming languages used in competitive contests.</p>
        <p><em>Posted on October 31, 2018</em></p>
        <img class="ui large image"src={ProgrammingLanguagesIMG} />
        <p><em>Source: CodeCondo (codecondo.com)</em></p>
        <h3>Introduction</h3>
        <p></p>
        <p>With hundreds of programming languages currently in use across the world, it has become increasingly unclear as to what languages to learn first, especially within the realm of competitive programming. Thankfully, there are really only four main languages commonly used in competitive programming. Each language has its specific benefits and drawbacks. TeamsCode currently uses those four languages for programming competitions. Hopefully, this article will help to decode the intricacies, as well as benefits and drawbacks of each language.</p>
        <h3>The Big Four</h3>
        <p>1) Python</p>
        <p>Python is arguably the easiest language to learn out of the five described in this article, and it makes for simple, readable, and easily understandable code. Its usage of the standard library gives access to a whole gamut of functions, and it can use less code than other languages. Despite this, Python is one of the slowest languages. Since it is not a compiled language, the slow runtime can make for slow usage. However, Python is an excellent beginner’s choice, given its object-oriented format and simple controls.</p>
        <p>2) Java</p>
        <p>Slightly more difficult than Python, Java still makes for a relatively simple coding experience. Java is another readable, object-oriented language. Java, like Python, makes extensive use of the standard library, but it truly differentiates itself when it comes to runtime. Java is significantly faster than Python, with simple syntax as well. However, when compared to C/C++, Java’s memory usage is quite high. For large calculations that cannot be dealt with using basic data sets, the BigInteger class is very helpful. Similarly, there are many specific classes such as BigDecimal. For example, writing a complex code that deals with numbers outside of the primitive data types would not be as feasible in C++. Java is also expert at string manipulation, making a powerhouse within the competitive realm. Important to note is that Java can often be banned from certain competitions, due to some of its class capabilities. Despite some drawbacks, its multithreaded platform is excellent for competitive programming.</p>
        <p>3) C++</p>
        <p>Faster than Java and the most popular competitive programming language currently, C++ is a powerful tool for coders. The minimal runtime (said to be at most half of that of Java) and the ability to utilize complex algorithms make C++ a top choice. C++ does not need special runtime applications and is extremely fast compared to other options. Additionally, with a smaller standard library, C++ allows one to code with fewer blockages and temporary issues. However, C++ is often difficult to read, with little room for error within the syntax. Combined with fewer custom operators and algebraic data types, C++ can be difficult to learn. In the competitive programming realm, C++ is vulnerable to memory leaks and can often have significant security issues, potentially allowing code to be stolen.</p>
        <p>4) C</p>
        <p>The basis for many programming languages today, C is arguably the most important language in the programming realm. C is simple and efficient, with many data types and other aspects that make it easy. C is what is called a “structured language,” meaning that it can be written in certain blocks that make up the entire code. C is ubiquitous, and has many uses. However, its main issue is its lack of OOP, or object-oriented programming. Rather, it is procedure-oriented. Additionally, runtime type checking does not exist; thus, the code will be difficult to debug, something to consider when utilizing large code in competitions. Despite these drawbacks, C remains one of the most portable, easy to use languages out there.</p>
        <img class="ui large image"src={Image1} />
        <p>The above chart depicts the distribution of the programming languages used at the 2012 Google Code Jam. Evidently, C++ was used by over half of the contestants, while Java and Python combined to make up approximately a third of the entrants.</p>
        <h3>Conclusion</h3>
        <p>Despite the seemingly endless possibilities of Java and C++, as well as their specific features catered towards competitive programming, Python still makes up nearly 20% of the coding languages used. The truth is that you can be just as successful by using a relatively simple language such as Python, confirmed by the fact that so many top programmers in the world used it in one of the largest coding competitions. It is your choice – however, learning the intricacies of each language will make you more successful and able to deal with specific situations encountered in contests.</p>
        
        <p><em>Written by Alex Patel</em></p>
      </div> 
      
    </div>
  </div>
<br />
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
