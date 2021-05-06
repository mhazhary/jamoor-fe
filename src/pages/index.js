//import * as React from "react"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  // Client-side Runtime Data Fetching
  const [hardwareStatus, sethardwareStatus] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://jamoor.nephertz.dev/api`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        sethardwareStatus((resultData === "true") ? "ONLINE" : "OFFLINE")
      }) // set data for hardware status
  }, [])

  return (
    <Layout>
      <Seo
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Dashboard"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />
        <div className="font-bold bg-yellow-400">
          <h2 className="inline-block p-3 mb-4 text-2xl ">
            Testing Kumbung Jamur.
          </h2>
          <p>Hardware Online: {hardwareStatus}</p>
        </div>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
