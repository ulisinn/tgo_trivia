import React from "react";


var _selectionPanelStyle, _bgColor;

export default class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);
        console.log("BackgroundImage", props.index);

        this._bgColor = [
            '#0482bd',
            '#573393',
            '#f58220',
            '#ffc20e']
    }

    componentWillReceiveProps(nextProps) {
        // this._selectionPanelStyle = this.getQuestionHeaderWidth(nextProps.index, {});
    }

    onClick(index) {
        console.log("onClick", index);
        this.props.onQuestionAnswered(index);
    }

    render() {
        const answers = this.props.answers;
        const flexContainer = (answers.length <= 4) ? "question-flex-container-4" : "question-flex-container-6";

        return <div className={flexContainer}>
            {answers.map(this.renderFlexContainer, this)}

        </div>
    }

    renderFlexContainer(item) {
        var clr = this._bgColor[arguments[1] % this._bgColor.length];
        var prefix = this.props.prefix[arguments[1]];
        console.log(arguments[1] % this._bgColor.length, 'renderFlexContainer', arguments);
        return <div style={{backgroundColor:clr}} key={arguments[1]} className="question-flex-item"
                    onClick={()=>this.onClick(arguments[1])}>
            <div className="answerTextContent">
                <p>{prefix}</p>
                <p>{arguments[0]}</p>
            </div>
        </div>

    }

    getSelectionPanelStyle(index, obj) {
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