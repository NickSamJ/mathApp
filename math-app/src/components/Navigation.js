import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuAnimation from './MenuAnimation';
import HomeIcon from '../Images/Home.svg';

const Navigation = (props) => (
    <div className="customized_navigation">
        <div className="cn_animation cn-item">
            <MenuAnimation/>
        </div>
        <div className="cn_stats cn-item">0/100</div>
        <div className="cn_link cn-item">
            <NavLink to={props.link}>
                {props.link_description}
                <img src={HomeIcon} alt="Home link"></img>
            </NavLink>
        </div>
    </div>
);

export default Navigation;