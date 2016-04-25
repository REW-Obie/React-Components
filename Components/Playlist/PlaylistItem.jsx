import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Playlist.css';
import Icon from '../Icon/Icon.jsx';

class PlaylistItem extends React.Component {

        render() {
            const {title, artist, duration, children, isActive, isPlay, styles} = this.props;
            const activeItem = isActive && isPlay ? styles['itemActive'] : '';
            return<li styleName="item" className={activeItem}>
                <span styleName="title">{title} &nbsp;&nbsp;- &nbsp;&nbsp; {artist}</span>
                <span styleName="icons">
                    <button>
                        <Icon name="fave3" title="stop icon" desc="a favorite button" size="sm"/>
                    </button>
                    <button>
                        <Icon name="share" title="share icon" desc="a share button" size="sm"/>
                    </button>
                    <button>
                        <Icon name="volumeMute" title="stop icon" desc="a mute button" size="sm"/>
                    </button>
                </span>
                <span styleName="duration">{duration}</span>
            </li>;
        }
}

export default CSSModules(PlaylistItem, styles);
