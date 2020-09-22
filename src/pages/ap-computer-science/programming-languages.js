import React from "react"
import Layout from "@components/cslayout"

export default function DesignPrinciplesGuidelines() {
  return (
    <Layout title="What Is Programming?">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css" />
<script src="https://semantic-ui.com/javascript/library/highlight.min.js"></script>
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
         What is Programming?
          <p className="sub header">Learning what programming actually does.</p>
        </h1>
      </section>

      <p>
      Programming is the process of writing code, which is essentially a special form of instructions used to tell the computer to complete a specific task. Programming can be used for basic things like simple addition to complex goals such as making self-driving cars. Essentially, programming powers almost all of the technology around us. It is up to the programmer to use computers to innovate and create new technology. Here is an example of some code:
      </p>

      <div class="ui segment">

        <pre><code class="bash">

        public static String toBaseN(int num, int base) &#123; <br/>
        &nbsp;String newNum = "";<br/>
        &nbsp;while (num > 0) &#123;<br/>
        &nbsp;&nbsp;int result = num % base;<br/>
        &nbsp;&nbsp;newNum = result + newNum;<br/>
        &nbsp;&nbsp;num /= base;<br/>
        &nbsp;&#125;<br/>
        return newNum;<br/>
        &#125;<br/>
    </code></pre>
        </div>
        <p>This specific code snippet converts a number into a different base (you will learn what this means in lesson #4, Number Bases). By the end of TeamsCode’s lessons, you will be able to understand, evaluate, and create this code by yourself.</p>
        
    
    </Layout>
    
  )
}
