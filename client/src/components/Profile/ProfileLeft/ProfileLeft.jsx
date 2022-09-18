import React from 'react'
import LogoSearch from "../../logoSearch/LogoSearch"
import FollowersCard from "../../FollowersCard/FollowersCard"
import InfoCard from '../InfoCard/InfoCard'
import "./ProfileLeft.css"

const ProfileLeft = () => {
  return (
   <div className="ProfileLeft ProfileSide">
    <LogoSearch />
    <InfoCard />
    <FollowersCard />
   </div>
  )
}

export default ProfileLeft