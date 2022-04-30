import './Top.css';
import { React, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Topbar() {
    const location = useLocation();
    useEffect(() => {
        console.log(location)
    });
    let HomeActive = "";
    let AnimeActive = "";
    if (location.pathname === "/") {
        HomeActive += 'Top-container-a-active';
    }else if (location.pathname === "/anime"){
        AnimeActive += 'Top-container-a-active';
    }
    return (
        <div className='Top'>
            <div className='Sky'></div>
            <div className="Top-Bar">
                <div className='Top-container'>
                    <ul>
                        <li><Link to="/" className={"Top-container-a " + HomeActive}>ホーム</Link></li>
                        <li><Link to="/anime" className={"Top-container-a " + AnimeActive}>アニメログ</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );

}

export default Topbar;