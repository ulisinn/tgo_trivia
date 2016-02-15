import React from "react";
import QuizActions from "../actions/QuizActions";
import QuizStore from "../stores/QuizStore";
import SplashScreen from "./splash.jsx";
import QuestionScreen from "./question.jsx";

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = QuizStore.getState();
    }

    componentDidMount() {
        QuizStore.listen(this.storeChanged);
    }

    componentWillUnmount() {
        QuizStore.unlisten(this.storeChanged);
    }

    storeChanged = (state) => {
        const currentIndex = state.currentIndex;
        const currentQuestion = state.currentQuestion;
        this.setState({currentIndex, currentQuestion});
        console.log("storeChanged", this.state);
    }

    render() {
        console.log("render", this.state.currentQuestion);
        const currentComponent = this.getCurrentComponent(this.state.currentIndex);
        return (
            currentComponent
        )
    }

    getCurrentComponent(index) {
        let currentComponent;
        switch (index) {
            case (-1):
                currentComponent = (<SplashScreen onStartQuiz={() => this.onStartQuiz()}></SplashScreen>)
                break;
            default:
                currentComponent = (
                    <QuestionScreen
                        onQuestionAnswered={() => this.onQuestionAnswered()}
                        currentQuestion={this.state.currentQuestion}
                        currentIndex={this.state.currentIndex}
                    >

                    </QuestionScreen>)
        }

        return currentComponent;
    }

    onStartQuiz() {
        console.log("onStartQuiz");
        QuizActions.startQuiz();

    }

    onQuestionAnswered() {
        console.log("onQuestionAnswered");
        QuizActions.next();

    }
}