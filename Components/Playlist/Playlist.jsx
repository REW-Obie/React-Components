import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Playlist.css';
import Icon from '../Icon/Icon.jsx';

class Playlist extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        initialIsPlaying: PropTypes.bool
    };
    static defaultProps = {
        title: '',
        artist: '',
        duration: '',
        isActive: false,
        initialIsPlaying: false
    };
    constructor(props) {
        super(props);
        this.state = {
            currentItem: 0,
            isPlaying: props.initialIsPlaying
        };
        this.handlePlaylistNext = this.handlePlaylistNext.bind(this)
        this.handlePlaylistPrev = this.handlePlaylistPrev.bind(this)
        this.handlePlaylistPlay = this.handlePlaylistPlay.bind(this)
        this.handlePlaylistStop = this.handlePlaylistStop.bind(this)
    }
    handlePlaylistNext() {
         const maxItems = React.Children.count(this.props.children);
         const currentItem = this.state.currentItem;
         let nextItem = currentItem + 1;
          if (nextItem > maxItems){
              nextItem = 1;
          }
          this.setState({
               currentItem: nextItem,
          });
    }
    handlePlaylistPrev() {
        const maxItems = React.Children.count(this.props.children);
        const currentItem = this.state.currentItem;
        let prevItem = currentItem - 1;
        if (prevItem < 1){
            prevItem = maxItems;
        }
        this.setState({
           currentItem: prevItem,
        });
    }
    handlePlaylistPlay() {
        const currentItem = this.state.currentItem;
        if (currentItem === 0) {
            this.setState({currentItem: currentItem + 1});
        }
        this.setState({ isPlaying: true });
    }
    handlePlaylistStop() {
        const currentItem = this.state.currentItem;
        if (currentItem !== 0) {
            this.setState({ isPlaying: false });
        }
    }
    renderChildren() {
        const { children} = this.props;
        const { currentItem, isPlaying} = this.state;
        return React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
                isActive: i + 1 === currentItem,
                isPlay: i + 1 === currentItem && isPlaying
            });
        });
    }
    render() {
        return <div className="clear-bottom">
              <header>
                  <h1 className='u-alignCenter'>Playlist</h1>
              </header>
              <div styleName="container" className="u-border">
                    <ol styleName="Playlist">
                        {this.renderChildren()}
                    </ol>
                <div styleName="buttons">
                    <button onClick={this.handlePlaylistPlay} styleName="button">
                        <Icon name="play1" title="Play icon" desc="a play button" size="md"/>
                    </button>
                    <button onClick={this.handlePlaylistPrev} styleName="button">
                        <Icon name="arrowLeft3" title="Left icon" desc="a previous button" size="md"/>
                    </button>
                    <button onClick={this.handlePlaylistNext} styleName="button">
                        <Icon name="arrowRight4" title="Right icon" desc="a next button" size="md"/>
                    </button>
                    <button onClick={this.handlePlaylistStop} styleName="button">
                        <Icon name="stop1" title="stop icon" desc="a stop button" size="md"/>
                    </button>
                </div>
            </div>
        </div>;
    }
}

export default CSSModules(Playlist, styles);
