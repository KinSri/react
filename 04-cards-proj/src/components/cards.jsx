import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
   
        <div className="card">
      <div>
      <div className="top">
        <img src={props.brandLogo} alt="brand-logo" />
        <button>Save <Bookmark size={12}/></button>
      </div>

      <div className="center">
        <h3>{props.company}<span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className="tags">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      </div>

      <div className="bottom">
        <div>
        <h2>{props.pay}</h2>
        <p>{props.location}</p>
        </div>
        <button>Apply Now</button>

      </div>
    </div>
      
   
  )
}

export default Cards

