import React from 'react'

import './MainLayout.scss'

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <header className="header">
        <h1 className="title">
          {props.title}
        </h1>        
      </header>
      <main className="main-content">
        {props.children}
      </main>
    </div>
  )
}

export default MainLayout
