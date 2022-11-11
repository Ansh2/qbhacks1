import React from 'react';
import NavBar from './Navbar/NavBar';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Details from './Details/Details';
import Schedule from './Schedule/Schedule';
import Tracks from './Tracks/Tracks';
import Sponsor from './Sponsors/Sponsors';
import Team from './Team/Team';
import FAQ from './FAQ/FAQ';
import Contact from './Contact/Contact';
import './main.css';
export default class MainWeb extends React.Component
{
    render()
    {
        console.log('RENDERING!!!!!!!!!')
        return(
            <div className={"contain_all"}>
                <NavBar/>
                <HomePage/>
                <About/>
                <Details/>
                <Schedule/>
                <Tracks/>
                <FAQ/>
                <Team/>
                <Sponsor/>
                <Contact/>
            </div>
        );
    }
}