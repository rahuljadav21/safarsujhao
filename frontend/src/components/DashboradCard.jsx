import * as React from 'react';
import "./DashboardCard.css";

export const DashboadCard = () => {

    return (
        <div className='Card'>
            <div className='imageContainer'>
                <img className='image' src='.\Images\Mountain.jpg' alt='Mountain' />
            </div>
            <div className='caption'>
                <h3> Mountain Trail </h3>
                <p>Near windy hills</p>
            </div>
        </div>
    );
}