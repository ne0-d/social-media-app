import React from 'react'
import "./TrendsCard.css"
import {TrendsData} from "../TrendsData"
const TrendsCard = () => {
  return (
    <div className="TrendsCard">
        <h3>Trends for you</h3>
        {TrendsData.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}</span>
                </div>
            )
        })}
        
    </div>
  )
}

export default TrendsCard