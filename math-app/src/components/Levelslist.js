import React, {Component, Fragment} from 'react';
import LevelsData from '../data/Levels.json';
import LevelsPreviewList from './LevelsPreviewList';

class LevelsList extends Component{
    state = {
        "opened" : [],
    }

    toggleShow(ind){
        let newArr  = [...this.state.opened];
        if( this.state.opened.includes(ind)){
            let oldInd = this.state.opened.indexOf(ind);
            newArr.splice(oldInd, 1);
        }else{
            newArr.push(ind);
        }
        this.setState({"opened": newArr});
    }
    render(props){return(
        <div className="levels">
            {LevelsData.map((detail, index) => {
                
                return (
                    <Fragment key={detail.id}>
                        <h3 onClick={() => this.toggleShow(detail.id)}
                            className="title">
                            {detail.title}
                        </h3>
                        <div className={this.state.opened.includes(detail.id) ? "show" : "hide"}>
                            <LevelsPreviewList tasks={detail.tasks}/>
                        </div>
                            
                    </Fragment>
                )
            })}
        </div>
    )};

};

export default LevelsList;


// const LevelsList = (props) => {
//     let vv = "sadf ";
//     return(
//         <Fragment>
//             {LevelsData.map((detail, index) => {
//                 let cond = "true";
                
//                 return (
//                     <div>
//                         <h1>{detail.title}</h1>
//                         <LevelsPreviewList tasks={detail.tasks}/>
//                     </div>
//                 )
//             })}
//         </Fragment>
//     )
// };

// export default LevelsList;
