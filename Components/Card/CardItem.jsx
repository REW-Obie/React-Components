import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Card.css';
import Icon from '../Icon/Icon.jsx';



class CardItem extends React.Component {
    static propTypes = {
      href: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    };
    static defaultProps = {
        image: 'black.jpg',
        href: '/Assets/Card/'
    };
    render() {
        const {href, image} = this.props;
        return <div styleName="item">
            <img src={href + image} alt=""></img>
        </div>;
    }
}

export default CSSModules(CardItem, styles);
