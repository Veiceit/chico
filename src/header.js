import React, { Component } from 'react';

class MainHeader extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="headerNav">
                        <h1><a href="/">chica</a></h1>
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
                        <a href="/" className="contactBtn">Contact sales</a>
                    </div>
                </header>
                <section className="topBlock">
                    <div className="col-md-4 colThree">
                        <span><i className="fa fa-users" aria-hidden="true"></i></span>
                    </div>
                    <div className="col-md-4 colThree">
                        <span><i className="fa fa-cloud" aria-hidden="true"></i></span>
                    </div>
                    <div className="col-md-4 colThree">
                        <span><i className="fa fa-camera-retro" aria-hidden="true"></i></span>
                    </div>
                </section>
            </div>
        );
    }
}
export default MainHeader;