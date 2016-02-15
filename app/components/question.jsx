import React from "react";
import classnames from "classnames";
import BackgroundImage from "./background_image.jsx";
import QuestionHeader from "./question_header.jsx";
import MultipleChoice from "./multiple_choice.jsx";

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

    onQuestionAnswered() {
        this.props.onQuestionAnswered();
    }

    render() {
        console.log('_allImages', this._allImages);
        return (
            <div className="questionScreen">
                <BackgroundImage index={this.props.currentIndex}
                                 imgSrc={this._allImages[this.props.currentIndex]}>
                </BackgroundImage>
                <div className="questionChrome">
                    <h1>TGO</h1>
                    <h2>Trivia</h2></div>
                <QuestionHeader index={this.props.currentIndex}
                                title={this.props.currentQuestion.title}
                                question={this.props.currentQuestion.question}></QuestionHeader>
                <MultipleChoice correct={this.props.currentQuestion.correctIndex}
                                prefix={this.props.currentQuestion.listPrefix}
                                answers={this.props.currentQuestion.answer}
                                onQuestionAnswered={() => this.onQuestionAnswered()}
                ></MultipleChoice>
            </div>
        )
    }

}