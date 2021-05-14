//import * as React from "react"
import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Chart from "react-apexcharts"

const IndexPage = () => {
  // Client-side Runtime Data Fetching
  const [isHardwareConnected, sethardwareStatus] = useState("Fetching data")
  useEffect(() => {
    // get data from Blynk REST API
    fetch(`https://jamoor.nephertz.dev/api/isHardwareConnected`, {
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then(response => response.text()) // parse JSON from request
      .then(resultData => {
        sethardwareStatus(resultData === "true" ? "ONLINE" : "OFFLINE")
      }) // set data for hardware status
  }, [])
  // Client-side Runtime Data Fetching
  const [valV1, setvalV1] = useState("Fetching data")
  useEffect(() => {
    // get data from Blynk REST API
    fetch(`https://jamoor.nephertz.dev/api/get/V1`, {
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
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
    fetch(`https://jamoor.nephertz.dev/api/get/V2`, {
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
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
    fetch(`https://jamoor.nephertz.dev/api/get/V3`, {
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setvalV3(resultData + "°C")
      }) // set data for pin V3
  }, [])
  let graphVal = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  }

  return (
    <Layout>
      <Seo
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Dashboard"
      />
      <Chart
        options={graphVal.options}
        series={graphVal.series}
        type="bar"
        width="500"
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
