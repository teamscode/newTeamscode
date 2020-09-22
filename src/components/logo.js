import React from "react"
import SUILogo from "../images/gatsby-icon.png"

export default function Logo({ siteTitle }) {
  return (
    <h1 class="ui inverted tiny header">
      <img src={SUILogo} alt="Semantic UI icon logo" />
      TeamsCode
    </h1>
  )
}
