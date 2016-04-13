import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './CommentBox.css';



class CommentBox extends React.Component {
    static propTypes = {
        initialText: PropTypes.string,
        initialPhotoAdded: PropTypes.bool
    };
    static defaultProps = {
        initialText: "",
        initialPhotoAdded: false
    };
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialText,
            photoAdded: props.initialPhotoAdded
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleTogglePhoto = this.handleTogglePhoto.bind(this);
    }
    handleChange(e) {
        const text = this.state.text;
        // console.log(this.state);
        this.setState({ text: e.target.value });
    }
    handleTogglePhoto(e) {
        const photoAdded = this.state.photoAdded;
        this.setState({photoAdded: !photoAdded });
    }
    updateCharacters() {
        const photoAdded = this.state.photoAdded;
        const text = this.state.text;
        if(photoAdded){
            return 140 - 23 - text.length;
        }else{
            return 140 - text.length;
        }
    }
    render() {
        const text = this.state.text;
        const photoAdded = this.state.photoAdded;
        return <div>
                <header>
                    <h1 className="u-alignCenter">Comment Box</h1>
                </header>
                <div styleName="container" className="u-cf u-border clear-bottom">
                    <textarea styleName="textarea" onChange={this.handleChange}></textarea>
                    <br/>
                    <span>{ this.updateCharacters() }</span>
                <button styleName="button" disabled={this.updateCharacters() === 140 || this.updateCharacters() < 0}>Comment</button>
                    <button styleName="button" onClick={this.handleTogglePhoto}>
                        {photoAdded ? "✓ Photo Added" : "Add Photo" }
                    </button>
                </div>
        </div> ;
    }
}

export default CSSModules(CommentBox, styles);
