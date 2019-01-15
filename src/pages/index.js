import React from "react"

import './index.scss'
import { Link } from "gatsby";
import MainLayout from "../components/MainLayout";

const ContentLayout = () => {
  return (
    <ul className="libraries">
        <li>
          <Link>Anime.js</Link>
        </li>
        <li>
          <Link>Mo.js</Link>
        </li>
        <li>
          <Link>Velocity</Link>
        </li>
        <li>
          <Link>Popmotion</Link>
        </li>
        <li>
          <Link>Vivus</Link>
        </li>
        <li>
          <Link>GreenSockJs</Link>
        </li>
        <li>
          <Link>Scroll Reveal</Link>
        </li>
        <li>
          <Link>Hover</Link>
        </li>
        <li>
          <Link>Kute</Link>
        </li>
        <li>
          <Link>Typed.js</Link>            
        </li>
      </ul>
  )
}

const Index = () => {
  const props = {
    title: 'main'
  }
  return (
    <MainLayout {...props}>
      <ContentLayout/>
    </MainLayout>
  )
}

export default Index
