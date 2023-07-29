import * as React from 'react';
import { DashboadCard } from '../../components/DashboradCard';
import "./Dashboard.css"

function Dashboard() {
  return (
      <div>
        <h1 className='Heading'> Hello, User! </h1>
        <h2> Your Planned Trips </h2>
        <div className='plannedTrips'>
          <DashboadCard/>
          <DashboadCard/>
          <DashboadCard/>
          <DashboadCard/>
          <DashboadCard/>
          <DashboadCard/>
        </div>
          
        <div>

        </div>
      </div>
  )
}

export default Dashboard