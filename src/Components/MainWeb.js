import React from 'react';
import NavBar from './Navbar/NavBar';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Details from './Details/Details';
import Schedule from './Schedule/Schedule';
import Tracks from './Tracks/Tracks';
import Sponsor from './Sponsors/Sponsors';
import FAQ from './FAQ/FAQ';
import Contact from './Contact/Contact';
import './main.css';
export default class MainWeb extends React.Component
{
    render()
    {
        return(
            <div className={"contain_all"}>
                <NavBar/>
                <HomePage/>
                <About/>
                <Details/>
                <Schedule/>
                <Tracks/>
                <FAQ/>
                <Sponsor/>
                <Contact/>
            </div>
        );
    }
}