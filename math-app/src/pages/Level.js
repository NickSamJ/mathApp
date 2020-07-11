import React from 'react';
import TasksData from '../data/Tasks.json';

const Level = (props) => {
    const currentId = props.match.params.id;
    const currentTask = {};
    
    TasksData.forEach((task, id) => {
        if(task.id === currentId){
            currentTask.title  = task.title;
        }
    })
    return(
        <div className="container">
            <h1>
                This is single page with id = {currentId}
            </h1>
            <h2>Title is: "{currentTask.title}"</h2>
        </div>
    )
};

export default Level;