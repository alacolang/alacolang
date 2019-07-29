import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Colors from "./colors"
import "./custom.scss"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div className="rtl">
      {/* <Colors /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
