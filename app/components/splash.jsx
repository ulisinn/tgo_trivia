import React from "react";
import classnames from "classnames";
import TweenMax from "gsap";

var splashImg = require('../assets/splash_bg.svg');

var _bgImage,
    _h1,
    _h2,
    _splashBottom;


export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bgImage = classnames('backgroundImage', 'svgImage', 'splashImage');
    }

    componentDidMount() {
        TweenMax.set(this._h1, {autoAlpha: 0, x: -400});
        TweenMax.set(this._h2, {autoAlpha: 0, x: -400});
        TweenMax.set(this._splashBottom, {autoAlpha: 0});

        TweenMax.to(this._h1, 0.4, {autoAlpha: 1, x: 0});
        TweenMax.to(this._h2, 0.4, {autoAlpha: 1, x: 0, delay: 0.2});
        TweenMax.to(this._splashBottom, 0.4, {autoAlpha: 1, delay: 0.2});
    }

    onButtonClick() {
        var onOutComplete = this.props.onStartQuiz;
        TweenMax.to(this._h1, 0.4, {
            autoAlpha: 0, x: 0, delay: 0.2, onComplete: function () {
                onOutComplete();
            }
        });
        TweenMax.to(this._h2, 0.4, {autoAlpha: 0, x: 0, delay: 0.2});
        TweenMax.to(this._splashBottom, 0.4, {autoAlpha: 0});
    }

    render() {
        return (
            <div className="splashScreen">
                <img className={this._bgImage} src={splashImg} alt=""/>
                <div className="splashContent">
                    <h1 ref={(c) => this._h1 = c}>TGO</h1>
                    <h2 ref={(c) => this._h2 = c}>Trivia</h2></div>
                <div className="splashBottom" ref={(c) => this._splashBottom = c}>
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