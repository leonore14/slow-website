import React from 'react';
import './HomeCss.css';


const Home = () => {
    return(
    <>
        <div className="home">

            <div>
                <div className="homeTitle">
                    <h1>Let's</h1>
                    <h1>Take It Slōw</h1>
                </div>
                <div className="homeText1">
                    <p>Graphism and Digital Studio</p>
                    <p>We take the time to listen to your wishes</p>
                    <p>to achieve great projects together.</p>
                </div>
            </div>

        </div>

        <div className="home2">

            <div>
                <div className="homeTitle2">
                    <h1>Brand Identity</h1>
                </div>
                <div className="homeText2">
                    <p>We propose to help you to establish your Brand Identity, creating strong logotypes and wordmarks.</p>
                    <p>We will also develop your visual identity on the different supports you may need.</p>
                </div>
            </div>

        </div>

        <div className="home3">

            <div>
                <div className="homeTitle3">
                    <h1>Digital</h1>
                </div>
                <div className="homeText3">
                    <p>Being visible on Internet has become essential for any company.</p>
                    <p>We offer you to build modern and dynamic websites to facilitate and improve your development.</p>
                </div>
            </div>

        </div>
    
    </>

    )
    
}

export default Home ;