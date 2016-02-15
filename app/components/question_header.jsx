import React from "react";

var _questionHeaderStyle;

export default class QuestionHeader extends React.Component {
    constructor(props) {
        super(props);
        console.log("BackgroundImage", props.index);

        this._questionHeaderStyle = this.getQuestionHeaderWidth(props.index, {});
        this._imageStyle = {
            opacity: 0.25,
            width: '100%'
        }
    }

    componentWillReceiveProps(nextProps) {
        this._questionHeaderStyle = this.getQuestionHeaderWidth(nextProps.index, {});
    }

    render() {
        return <div style={this._questionHeaderStyle} className="questionHeader">
            <h1>{this.props.title}</h1>
            <h2>{this.props.question}</h2>
        </div>
    }

    getQuestionHeaderWidth(index, obj) {
        var styleObj = obj;
        switch (index) {
            case 0:
                styleObj.width = '41.5%';
                break;
            case 1:
                styleObj.width = '38%';
                break;
            case 2:
                styleObj.width = '42%';
                break;
            case 3:
                styleObj.width = '36%';
                break;
            case 4:
                styleObj.width = '42%';
                break;
            case 5:
                styleObj.width = '45%';
                break;
            case 6:
                styleObj.width = '40%';
                break;
            case 7:
                styleObj.width = '40%';
                break;
        }

        return styleObj;

    }
}