import React from "react";


export default class AnswerPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    onClick() {
        this.props.onShowNextQuestion();
    }

    render() {
        const style = {
            top: this.props.top
        };
        console.log("this.props.top", this.props.top);
        return <div style={style}
                    className="answerPanel">
            <h1>{this.props.header}</h1>
            <p>{this.props.body}</p>
        </div>
    }

}