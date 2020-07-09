import React, {Fragment} from 'react';
import LevelsData from '../data/Levels.json';
import LevelsPreviewList from './LevelsPreviewList';

const LevelsList = (props) => {
    return(
        <Fragment>
            {LevelsData.map((detail, index) => {
                return (
                    <div>
                        <h1>{detail.title}</h1>
                        <LevelsPreviewList tasks={detail.tasks}/>
                    </div>
                )
            })}
        </Fragment>
    )
};

export default LevelsList;
