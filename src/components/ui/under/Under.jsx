import React from 'react'
import './Under.scss'
function Under({text, text1, text2, text3}) {
  return (
    <div className='under'>
        {
            text ? <h2>{text}</h2> : null
        }
        
        {
            text1 ? <h2>/</h2> : null
        }
        
        {
            text1 ? <h2>{text1}</h2> : null
        }
        
        {
            text2 ? <h2>/</h2> : null
        }
        
        {
            text2 ? <h2>{text2}</h2> : null
        }
        
        {
            text3 ? <h2>/</h2> : null
        }
        
        {
            text3 ? <h2>{text3}</h2> : null
        }
    </div>
  )
}

export default Under
