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
        // console.log(this.state.text);
        this.setState({ text: e.target.value });
    }
    handleTogglePhoto(e) {
        const photoAdded = this.state.photoAdded;
        this.setState({photoAdded: !photoAdded });
    }
    updateCharacters() {
        const photoAdded = this.state.photoAdded;
        const textLength = this.state.text.length;
        if(photoAdded){
            return 350 - 23 - textLength;
        }else{
            return 350 - textLength;
        }
    }
    render() {
        const {styles} = this.props;
        const text = this.state.text;
        const photoAdded = this.state.photoAdded;
        const updateChars = this.updateCharacters();
        const lowCount = text.length > 350 ? styles['low-count'] : "test";

        return <div>
                <header>
                    <h1 className="u-alignCenter" id="CommentBox">Comment Box</h1>
                </header>
                <div styleName="container" className="u-cf u-border clear-bottom">
                    <textarea styleName="textarea" onChange={this.handleChange}></textarea>
                    <br/>
                <span className={lowCount}>{ this.updateCharacters() }</span>
            <button styleName="button" disabled={updateChars === 350 || updateChars < 0}>Comment</button>
                    <button styleName="button" onClick={this.handleTogglePhoto}>
                        {photoAdded ? "✓ Photo Added" : "Add Photo" }
                    </button>
                </div>
        </div> ;
    }
}

export default CSSModules(CommentBox, styles);
