import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = (props) => {
    return(
        <div className="home">
            <div className="menu">
                <NavLink to="/levels" className="animate__animated  animate__lightSpeedInRight animate__delay-1s">Перейти к заданиям</NavLink>
                <NavLink to="/stats" className="animate__animated  animate__lightSpeedInRight animate__delay-2s">Watch stats</NavLink>
            </div>

            <div className="footer ">
                <NavLink to="/logout">Exit</NavLink>
            </div>
        </div>
    )
};

export default Home;