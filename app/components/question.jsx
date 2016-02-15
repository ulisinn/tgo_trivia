import React from "react";
import classnames from "classnames";

var _allImages = [],
    _bgImage;

export default class QuestionScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this._bgImage = classnames('backgroundImage', 'svgImage', 'splashImage');
        this._allImages = [require('../assets/q_one_bg.svg'),
            require('../assets/q_two_bg.svg'),
            require('../assets/q_three_bg.svg'),
            require('../assets/q_four_bg.svg'),
            require('../assets/q_five_bg.png'),
            require('../assets/q_six_bg.svg'),
            require('../assets/q_seven_bg.svg'),
            require('../assets/q_eight_bg.svg')
        ];

    }

    onButtonClick() {
        this.props.onQuestionAnswered();
    }

    render() {
        console.log('_allImages', this._allImages);
        return (
            <div className="questionScreen">
                <div className="questionChrome">
                    <h1>TGO</h1>
                    <h2>Trivia</h2></div>
                <img className={this._bgImage} src={this._allImages[this.props.currentIndex]} alt=""/>
                <div className="questionHeader">
                    <h1>{this.props.currentQuestion.title}</h1>
                    <h2>{this.props.currentQuestion.question}</h2>
                </div>
                <div className="question-flex-container">
                    <div style={{backgroundColor:'#0482bd'}} className="flex-item"></div>
                    <div style={{backgroundColor:'#573393'}} className="flex-item"></div>
                    <div style={{backgroundColor:'#f58220'}} className="flex-item"></div>
                    <div onClick={()=>this.onButtonClick()} style={{backgroundColor:'#ffc20e'}}
                         className="flex-item">play >
                    </div>
                </div>
            </div>
        )
    }

}