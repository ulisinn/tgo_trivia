import React from "react";
import QuizActions from "../actions/QuizActions";
import classnames from "classnames";
import BackgroundImage from "./background_image.jsx";
import QuestionHeader from "./question_header.jsx";
import MultipleChoice from "./multiple_choice.jsx";
import NextQuestionButton from "./next_question_btn.jsx";
import AnswerPanel from "./answer_panel.jsx";

var _allImages = [],
    _bgImage;

export default class QuestionScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        const displayAnswer = -1;
        this.state = {displayAnswer};
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

    componentDidMount() {
        QuizActions.startTimeout();
    }

    onQuestionAnswered(index) {
        let displayAnswer = 1;
        this.setState({displayAnswer});
        console.log("onQuestionAnswered", displayAnswer);
        QuizActions.startTimeout();
    }

    onShowNextQuestion() {
        const displayAnswer = -1;
        console.log("onShowNextQuestion");
        this.props.onQuestionAnswered();
        this.setState({displayAnswer});
        QuizActions.startTimeout();
    }

    render() {
        console.log('QuestionScreen displayAnswer', this.state.displayAnswer);
        let currentScreen;
        switch (this.state.displayAnswer) {
            case -1:
                currentScreen = this.renderInitialScreen();
                break;
            case 0:
                currentScreen = this.renderIncorrectScreen();
                break;
            case 1:
                currentScreen = this.renderCorrectScreen();
                break;
        }
        return currentScreen
    }

    renderInitialScreen() {
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
                                onQuestionAnswered={(n) => this.onQuestionAnswered(n)}
                ></MultipleChoice>
            </div>
        )
    }

    renderCorrectScreen() {
        const topOffset = (this.props.currentQuestion.title === 'Question 6') ? '37%' : '58%';
        const nextButtonLabel = (this.props.currentQuestion.title != 'Question 8') ? 'Next > ' : 'Play Again > ';
        return (
            <div className="questionScreen">
                <BackgroundImage index={this.props.currentIndex}
                                 imgSrc={this._allImages[this.props.currentIndex]}>
                </BackgroundImage>
                <div className="questionChrome">
                    <h1>TGO</h1>
                    <h2>Trivia</h2></div>
                <MultipleChoice correct={this.props.currentQuestion.correctIndex}
                                prefix={this.props.currentQuestion.listPrefix}
                                answers={this.props.currentQuestion.answer}
                ></MultipleChoice>
                <AnswerPanel top={topOffset} header="Answer"
                             body={this.props.currentQuestion.correctCopy}></AnswerPanel>
                <QuestionHeader index={this.props.currentIndex}
                                title={this.props.currentQuestion.title}
                                question={this.props.currentQuestion.question}>

                </QuestionHeader>
                <NextQuestionButton label={nextButtonLabel}
                                    onShowNextQuestion={() => this.onShowNextQuestion()}></NextQuestionButton>
            </div>
        )
    }

    renderIncorrectScreen() {
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
                                onQuestionAnswered={(n) => this.onQuestionAnswered(n)}
                ></MultipleChoice>
                <AnswerPanel header="Please try again!" body=""></AnswerPanel>

            </div>
        )
    }

}