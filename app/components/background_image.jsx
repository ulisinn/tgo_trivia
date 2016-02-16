import React from "react";

var _imageStyle, _imageWrapperStyle;

export default class BackgroundImage extends React.Component {
    constructor(props) {
        super(props);
        console.log("BackgroundImage", props.index);

        this._imageWrapperStyle = this.getImageWrapperStyle(props.index, {position: 'absolute'});
        this._imageStyle = {
            opacity: 0.25,
            width: '100%'
        }
    }

    componentWillReceiveProps(nextProps) {
        this._imageWrapperStyle = this.getImageWrapperStyle(nextProps.index, {position: 'absolute'});
    }

    render() {
        return <div style={this._imageWrapperStyle}>
            <img style={this._imageStyle} src={this.props.imgSrc} alt=""/>
        </div>
    }

    getImageWrapperStyle(index, obj) {
        var styleObj = obj;
        switch (index) {
            case 0:
                styleObj.top = '48%';
                styleObj.width = '39%';
                styleObj.marginLeft = "2em";
                break;
            case 1:
                styleObj.top = '42%';
                styleObj.width = '49.5%';
                styleObj.marginLeft = "-1em";
                break;
            case 2:
                styleObj.top = '61%';
                styleObj.width = '46%';
                styleObj.marginLeft = "1.5em";
                break;
            case 3:
                styleObj.top = '50%';
                styleObj.width = '34%';
                styleObj.marginLeft = "1.5em";
                break;
            case 4:
                styleObj.top = '32%';
                styleObj.width = '50%';
                styleObj.marginLeft = "1.5em";
                break;
            case 5:
                styleObj.top = '40%';
                styleObj.width = '31.8%';
                styleObj.marginLeft = "1.5em";
                break;
            case 6:
                styleObj.top = '45%';
                styleObj.width = '32%';
                styleObj.marginLeft = "1.5em";
                break;
            case 7:
                styleObj.top = '60%';
                styleObj.width = '28%';
                styleObj.marginLeft = "1.5em";
                break;
        }

        return styleObj;

    }
}