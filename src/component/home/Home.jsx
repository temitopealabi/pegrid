import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import homeCss from './home.module.css'
const Home = () => {
    const { centerDiv, dashLink } = homeCss;
    return (<div style={{ height: '100vh' }}>
        <div className={centerDiv}>
            <Link to='/dashboard/regulator'><div className={`${dashLink} h3 card p-2`}>Dashboard</div></Link>
        </div>
    </div>);
}

export default Home;