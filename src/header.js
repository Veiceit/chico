import React, { Component } from 'react';
import wawe from './images/wawe.png'
import achi from './images/achi.png'
import wind from './images/wind.png'

class MainHeader extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="headerNav">
                        <h1><a href="/">chico</a></h1>
                        <div className="nav">
                            <a href="/" className="createAccount">Create accaunt</a>
                            <a href="/" className="signIn">Sign in</a>
                            <a href="/" className="more">. . .</a>
                        </div>
                    </div>
                    <div className="bannerTitleWrapper">
                        <h2 className="bannerTitle">Welcome to chimney music cataogue</h2>
                        <p>- a carefully curated premium library, ranging from small intimate electronic musicto epic
                            orchestral trailer music.</p>
                        <a href="/" className="createAccountBtn">Create account</a>
                        {/*<a href="/" className="contactBtn">Contact sales</a>*/}
                    </div>
                </header>
                <section className="topBlock">
                    <div className="col-md-4 colThree">
                       <span>
                            <img src={wawe} alt="" />
                        </span>
                    </div>
                    <div className="col-md-4 colThree">
                        <span>
                            <img src={achi} alt="" />
                        </span>
                    </div>
                    <div className="col-md-4 colThree">
                       <span>
                            <img src={wind} alt="" />
                        </span>
                    </div>
                </section>
            </div>
        );
    }
}
export default MainHeader;