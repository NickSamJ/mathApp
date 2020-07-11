import React, {Fragment} from 'react';
import LevelsList from '../components/Levelslist'
import Navigation from '../components/Navigation';


const Levels = (props) => (
    <Fragment>
        <Navigation link="/" link_description="Home"/>
            <LevelsList/>
    </Fragment>
);

export default Levels;