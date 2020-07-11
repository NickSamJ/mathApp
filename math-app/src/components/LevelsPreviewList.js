import React from 'react';
import {NavLink} from 'react-router-dom';

const LevelsPreviewList = (props) => {
    return(
        <div className="tasks-list">
            {props.tasks.map((details, data) => {
                return(
                    <NavLink to={"level/" + details.id} key={details.id}>
                        <p>{details.title}</p>
                    </NavLink>
                )
            })}
        </div>
    );
};

export default LevelsPreviewList;