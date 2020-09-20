import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"
import "../index.css"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"




import InternalIMG from "@images/community/internal-resources.png"
import Image1 from "@images/community/resources-drive.png"
import Image2 from "@images/community/resources-slack.png"
import Image3 from "@images/community/resources-typeform.png"
import Image4 from "@images/community/resources-github.png"
import Image5 from "@images/community/resources-trello.png"
import Image6 from "@images/community/resources-zoho.png"
import Image7 from "@images/community/resources-mailchimp.png"
import Image8 from "@images/community/resources-appear.png"
import Image9 from "@images/community/resources-facebook.png"
import Image10 from "@images/community/resources-twitter.png"
import Image11 from "@images/community/resources-zapier.png"
import Image12 from "@images/community/resources-automate.png"
import Image13 from "@images/community/resources-piktochart.png"
import Image14 from "@images/community/resources-canva.png"
import Image15 from "@images/community/resources-amazon.png"
import Image16 from "@images/community/resources-edco.png"
import Image17 from "@images/community/resources-vistaprint.png"
import Image18 from "@images/community/resources-paypal.png"
import Image19 from "@images/community/resources-usbank.png"
import Image20 from "@images/community/resources-hunter.png"
import Image21 from "@images/community/resources-domain.png"
import Image22 from "@images/community/resources-gmail.png"
import Image23 from "@images/community/resources-cloudflare.png"
import Image24 from "@images/community/resources-pay.png"









import DarkIMG from "@images/darkgray.png"

const ContestsPage = ({ data }) => {
  const title = "Community"

  return (
  <StaticQuery
    query={graphql`
          query QueryFifteen {
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
        TeamsCode's Internal Resources
        </span>
        
      </h1>
    </div>
    
  </div>
</div>
<div class="ui vertical stripe intro segment">

  <div class="stackable very relaxed ui grid container">
    
    <div class="row">
      <div class="column">
        <p>The tools we use to host our contests and manage our logistics.</p>
        <p><em>Posted on April 12, 2019</em></p>
        <img class="ui large image"src={InternalIMG} />
        <p>Since the first MIHS Programming Contest in the spring of 2017, countless student-led programming contests have been hosted, and not just by TeamsCode: both Issaquah and Interlake High School have successfully started their own events. We are ecstatic to see this and believe that more student-led contests contribute to a number of benefits, including the following:</p>
        <p>1. More opportunities for students to practice their coding skills<br/>2. More events at which to meet and socialize with like-minded students from other schools<br/>3. The creation of a welcoming environment that’s easy for new programmers to enter<br/>4. The opportunity for student organizers to contribute to the community while simultaneously developing practical leadership and business skills</p>
        <p>We know how challenging organizing a programming contest can be. Luckily, through trial and error, we have found many useful tools to help us, many of which are essential to keeping us afloat every day. In this blog post, I’ll be sharing our resources in order to help other students organize their events as well as encourage those considering the idea to go for it.</p>
        <p>Below, I’ve organized our tools into seven categories. If you’re interested in a specific section, click on the header to jump straight to that part.</p>
        <h3>Core:</h3>
        <p>Google Drive</p>
        <p>Slack</p>
        <p>Typeform</p>
        <p>GitHub</p>
        <p>Trello</p><br/>
        <h3>Communication:</h3>
        <p>Zoho Mail</p>
        <p>MailChimp</p>
        <p>appear.in</p>
        <p>Facebook</p>
        <p>Twitter</p><br/>
        <h3>Automation:</h3>
        <p>Zapier</p>
        <p>Automate.io</p>
        <h3>Design:</h3>
        <p>Piktochart</p>
        <p>Canva</p>
        <h3>Purchases:</h3>
        <p>Amazon</p>
        <p>Edco</p>
        <p>VistaPrint</p>
        <p>Facebook</p>
        <p>UberPrints and Zazzle</p><br/>
        <h3>Finances:</h3>
        <p>PayPal</p>
        <p>US Bank</p>
        <h3>Miscellaneous:</h3>
        <p>Hunter.io</p>
        <p>Domain.com</p>
        <p>Gmail.com</p>
        <p>Cloudflare</p>
        <p>Pay.gov</p><br/>

        <h2>Core</h2>
        <h3>Google Drive</h3>
        <img class="ui large image"src={Image1} />
        <p>As mentioned in a previous blog post, we store all of our files in a shared Google Drive folder. This includes things like our problem sets, input files, scoreboards, registration data, contacts, finances, and much, much more. Organizing a programming contest requires a lot of planning, so it’s useful to have a centralized location for all your resources.</p>

        <h3>Slack</h3>
        <img class="ui large image"src={Image2} />
        <p>Slack is a messaging platform that we use for the majority of our internal communications. Slack allows us to create channels for specific purposes, such as to discuss our Washington and Oregon contests separately or direct message certain members. We use Slack almost every single day because of how important it is to communicate with each other.</p>
        <p></p>

        <h3>Typeform</h3>
        <img class="ui large image"src={Image3} />
        <p>Typeform is a form and survey builder that we use for a variety of purposes. Beyond just using Typeform for contest registration, it works well in other ways like collecting feedback or collecting applications to join TeamsCode.</p>
      
        <h3>GitHub</h3>
        <img class="ui large image"src={Image4} />
        <p>We host our website on GitHub. GitHub allows several of us to edit and add to the website easily. At the same time, since teamscode.com is a static site, we can host it for free using GitHub Pages, meaning any changes we push to GitHub will automatically update the website.</p>
      
        <h3>Trello</h3>
        <img class="ui large image"src={Image5} />
         <p>Trello is a tool that we use to plan our tasks and pretty much anything else we want to do with it. With Trello, you have boards, and within each board, you can create individual cards which are ordered by lists. We frequently create Kanban boards in Trello, meaning that we put tasks in “Pending”, “In Progress”, and “Done” lists to keep track of our progress.</p>

        <h2>Communication</h2>
        <h3>Zoho Mail</h3>
        <img class="ui large image"src={Image6} />
        <p>We use Zoho Mail for our email platform. Emails like support@teamscode.com and contest@teamscode.com go to our primary inbox, while emails like mihs@teamscode.com and oregon@teamscode.com are linked to separate inboxes. We used to use teamscode1@gmail.com with Gmail but switched to Zoho in order to use email addresses with our custom domain, teamscode.com.</p>

        <h3>MailChimp</h3>
        <img class="ui large image"src={Image7} />
        <p>MailChimp is what we use to send out mass email campaigns. We usually send out one to two emails per contest that we organize: one to announce when registration opens and one to announce when registration is about to close. The goal here is to let past participants know about new opportunities without spamming their inboxes too much.</p>

        <h3>Appear.in</h3>
        <img class="ui large image"src={Image8} />
        <p>While Slack is essential to our operations, it doesn’t offer group video chats on our plan. To deal with this, we use appear.in to make calls of up to four people. Given that our members are located across two states, it’s often necessary to have these video calls when messaging simply doesn’t cut it.</p>

        <h3>Facebook</h3>
        <img class="ui large image"src={Image9} />
        <p>On Facebook, we post important updates or news regarding TeamsCode contests, lessons, or blog posts. It’s useful to create a page for your contest in order to increase your outreach, and it doesn’t take much time at all.</p>

        <h3>Twitter</h3>
        <img class="ui large image"src={Image10} />
        <p>Similar to Facebook, we post updates on Twitter as well. Be sure to follow us or retweet our posts!</p>

        <h2>Automation</h2>

        <h3>Zapier</h3>
        <img class="ui large image"src={Image11} />
        <p>Zapier primarily allows us to connect Typeform with other apps like Zoho Mail and Google Sheets to send automated emails and save our registration data in our Drive. However, this is only a fraction of what Zapier offers in terms of automation; there are over 1000 apps that you can connect and automate actions for. Organizing a contest can entail repetitive work, so it’s worth experimenting with Zapier to see if you can speed up the process.</p>
        <p></p>

        <h3>Automate.io</h3>
        <img class="ui large image"src={Image12} />
        <p>Automate.io similarly helps us automate tasks. We’ve set up Automate.io to send messages in our Slack workspace notifying us of new entries to our Typeforms, meaning we don’t have to constantly check back and see if we’re getting new responses. Like Zapier, Automate.io offers a wide range of apps that you can integrate with.</p>

        <h2>Design</h2>

        <h3>Piktochart</h3>
        <img class="ui large image"src={Image13} />
        <p>Piktochart is useful for creating beautiful graphics, whether that be for press kits or for sponsor thanks. Piktochart offers a lot of templates for you to work off of, or you could start from scratch if you’re good at design.</p>

        <h3>Canva</h3>
        <img class="ui large image"src={Image14} />
        <p>Canva is an alternative to Piktochart; we’ve used it for such things as our infographic. Like Piktochart, Canva provides a ton of free templates for you to choose from.</p>
      
        <h2>Purchases</h2>

        <h3>Amazon</h3>
        <img class="ui large image"src={Image15} />
        <p>Most of our purchases come from Amazon, which includes things like prizes, extension cords, flash drives, etc. The reason why is pretty self-explanatory: Amazon is one of the easiest and quickest e-commerce sites to use.</p>
        <p></p>

        <h3>Edco</h3>
        <img class="ui large image"src={Image16} />
        <p>One thing Amazon can’t provide us is custom-engraved medals. Instead, we use Edco, which has historically been great at providing us customization (we require six different engravings: 2 divisions * 3 places per division = 6) at a low price. Keep in mind though that it takes time to make these medals and ship them, so you want to order medals at least two weeks before your event.</p>
      
        <h3>VistaPrint</h3>
        <img class="ui large image"src={Image17} />
        <p>At our last two MIHS contests, we ordered banners from VistaPrint. Vistaprint provides a large selection of templates to use for the banners, and they also provide other services like flyers and t-shirts that we haven’t used yet.</p>

        <h3>UberPrints and Zazzle</h3>
        <p>UberPrints and Zazzle are worth mentioning; we’ve used both these companies for custom-printed t-shirts before. However, there are a lot of t-shirt companies out there, and we usually just choose whichever is cheapest for us at the time.</p>
      
        <h2>Finances</h2>

        <h3>PayPal</h3>
        <img class="ui large image"src={Image18} />
        <p>Most of our payments go through PayPal. Before, when we charged a registration fee, we sent out invoices through PayPal, and we currently still receive sponsorships through the site. A lot of our purchases can also be made through PayPal. It makes life a lot easier to use PayPal rather than to rely on our bank account’s debit cards and wire transfers.</p>
        <p></p>

        <h3>US Bank</h3>
        <img class="ui large image"src={Image19} />
        <p>As mentioned above, we have a bank account, which is set up through US Bank. A bank account honestly may not be necessary; we initially managed money through our school and only created a bank account after we became a 501(c)(3) nonprofit organization. We do use our bank debit cards to make purchases on Amazon since they don’t accept PayPal.</p>
      
        <h2>Miscellaneous</h2>

        <h3>Hunter.io</h3>
        <img class="ui large image"src={Image20} />
        <p>Hunter.io allows you to find email addresses of a certain domain (e.g. teamscode.com would give you support@teamscode.com, contests@teamscode.com, and several others). This is useful if you want to reach out to certain companies for sponsorships. However, it’s important to avoid spamming a bunch of different emails and doing other unethical things with the emails you find.</p>

        <h3>Domain.com</h3>
        <img class="ui large image"src={Image21} />
        <p>We registered teamscode.com through Domain.com as well as codemihs.com, our old domain name. If you’re looking to buy a domain, there are a variety of domain name registrars out there like Namecheap, GoDaddy, and Google Domains. To be completely honest, if we were to buy another domain, this time I’d prefer to do it through Namecheap instead of Domain.com.</p>

        <h3>Gmail</h3>
        <img class="ui large image"src={Image22} />
        <p>Before we switched to Zoho Mail, we used Gmail and used teamscode1@gmail.com as our primary email. It’s definitely not necessary to get an email with a custom domain; for example, teamscode@gmail.com would not have been a bad email, but unfortunately, we were unable to get it and in our case preferred to go with [name]@teamscode.com.</p>
      
        <h3>Cloudflare</h3>
        <img class="ui large image"src={Image23} />
        <p>Cloudflare provides free SSL for teamscode.com, meaning we get the secure HTTPS rather than HTTP. Nowadays, there are many ways to get SSL for free (another option besides Cloudflare is Let’s Encrypt), and with Google pushing sites towards HTTPS, it’s worth considering for your contest website.</p>
      
        <h3>Pay.gov</h3>
        <img class="ui large image"src={Image24} />
        <p>Lastly, if any of you are interested in eventually becoming a 501(c)(3) nonprofit organization, you’ll need to do so through Pay.gov by filling out Form 1023 or 1023 EZ. For smaller, eligible organizations (TeamsCode included), Form 1023 EZ is what you should fill out as it’s shorter (3 vs. 28 pages) and cheaper ($275 vs. $600).</p>

        <div class="ui divider"></div>
        <p>Most, if not all of our resources are covered in this blog post. As part of our mission to become more transparent, we’re hoping that revealing our internal workings will help other students organize their own contests. Of course, these tools are simply what work well for us; there are many other resources out there, and we’re constantly looking for new things ourselves!</p>
        <p>We’ll try to continue posting guides on our blog in the coming months. In the meantime, if you have any questions regarding these resources or are looking to organize a contest, don’t hesitate to reach out to us at support@teamscode.com!</p>
        <p><em>Written by Alan Bi</em></p>
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
