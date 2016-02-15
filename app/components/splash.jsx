import React from "react";
import classnames from "classnames";

var splashImg = require('../assets/splash_bg.svg'),
    _bgImage;

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bgImage = classnames('backgroundImage', 'svgImage', 'splashImage');

    }

    onButtonClick() {
        this.props.onStartQuiz();
    }

    render() {
        return (
            <div className="splashScreen">
                <img className={this._bgImage} src={splashImg} alt=""/>
                <div className="splashContent">
                    <h1>TGO</h1>
                    <h2>Trivia</h2></div>
                <div className="splashBottom">
                    <p>What do you know about our amazing colleagues?</p>

                    <div className="flex-container">
                        <div style={{backgroundColor:'#0482bd'}} className="flex-item"></div>
                        <div style={{backgroundColor:'#573393'}} className="flex-item"></div>
                        <div style={{backgroundColor:'#f58220'}} className="flex-item"></div>
                        <div onClick={()=>this.onButtonClick()} style={{backgroundColor:'#ffc20e'}}
                             className="flex-item">play >
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}