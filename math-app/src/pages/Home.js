import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

const Home = (props) => (
    <div className="home">
        <div className="menu">
            <NavLink to="/levels">Перейти к заданиям</NavLink>
            <NavLink to="/stats">Watch stats</NavLink>
        </div>

        <div className="footer">
            <NavLink to="/logout">Exit</NavLink>
        </div>
    </div>
);

export default Home;