import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './LandingPage.module.scss';


const LandingPage = () =>{

    const history = useHistory();

    const routeChange = () =>{ 
      let path = "/videogames"; 
      history.push(path);
    }

    return(
        <div className={s.landingPage}>
            <h1 className={s.header}>Welcome to the Videogame Finder APP</h1>
            <br />
            <button 
                className={`${s.btn} ${s.btnPrimary}`}
                onClick={routeChange} 
                >
                START NOW
            </button>
            
        </div>
    )
}

export default LandingPage;
