import React from "react";


export default class NextQuestionButton extends React.Component {
    constructor(props) {
        super(props);

    }

    onClick() {
        this.props.onShowNextQuestion();
    }

    render() {
        return <div className="nextQuestionBtn" onClick={() => this.onClick()}>Next > </div>
    }

}