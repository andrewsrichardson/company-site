import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
