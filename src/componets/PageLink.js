import React from 'react'
import { Navbar } from "../data";
function PageLink({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {Navbar.map(({ id, href, name }) => (
        <li key={id}>
          <a href={href} className={itemClass}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default PageLink
