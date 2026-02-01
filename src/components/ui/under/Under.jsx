import React from 'react'
import './Under.scss'
import Link from 'next/link'

function Under({ text, link, link1, link2,  text1, text2, text3 }) {
  return (
    <div className="under">
      {text && <Link href={link || "/"}><h2>{text}</h2></Link>}

      {text1 && <h2>/</h2>}
      {text1 && <Link href={link1 || "#"}><h2>{text1}</h2></Link>}
 
      {text2 && <h2>/</h2>}
      {text2 && <Link href={link2 || "#"}><h2>{text2}</h2></Link>}

      {text3 && <h2>/</h2>}
      {text3 && <h2>{text3}</h2>}
    </div>
  )
}

export default Under
