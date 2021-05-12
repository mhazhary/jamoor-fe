//import * as React from "react"
import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  // Client-side Runtime Data Fetching
  const [isHardwareConnected, sethardwareStatus] = useState("Fetching data")
  useEffect(() => {
    // get data from Blynk REST API
    fetch(`https://middleware.nephertz.dev/isHardwareConnected`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.text()) // parse JSON from request
      .then(resultData => {
        sethardwareStatus((resultData === "true") ? "ONLINE" : "OFFLINE")
      }) // set data for hardware status
  }, [])
  // Client-side Runtime Data Fetching
  const [valV1, setvalV1] = useState("Fetching data")
  useEffect(() => {
    // get data from Blynk REST API
    fetch(`https://middleware.nephertz.dev/get/V1`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setvalV1(resultData + "%")
      }) // set data for pin V1
  }, [])
  // Client-side Runtime Data Fetching
  const [valV2, setvalV2] = useState("Fetching data")
  useEffect(() => {
    // get data from Blynk REST API
    fetch(`https://middleware.nephertz.dev/get/V2`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setvalV2(resultData + "°C")
      }) // set data for pin V2
  }, [])
  // Client-side Runtime Data Fetching
  const [valV3, setvalV3] = useState("Fetching data")
  useEffect(() => {
    // get data from Blynk REST API
    fetch(`https://middleware.nephertz.dev/get/V3`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setvalV3(resultData + "°C")
      }) // set data for pin V3
  }, [])

  return (
    <Layout>
      <Seo
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Dashboard"
      />

      <section className="text-center">
        <div className="font-bold bg-yellow-400">
          <h2 className="inline-block p-3 mb-4 text-2xl ">
            Testing Kumbung Jamur.
          </h2>
          <p>Hardware Online: {isHardwareConnected}</p>
          <p>Humidity: {valV1}</p>
          <p>Temperature: {valV2}</p>
          <p>Water Tank Temperature: {valV3}</p>
        </div>

        <p className="leading-loose">
          Developed using Gatsby and styled using{` `}
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
    </Layout>
  )
}
export default IndexPage
