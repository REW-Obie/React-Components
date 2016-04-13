import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Carousel.css';


class CarouselItem extends React.Component {
        static propTypes = {
            isActive: PropTypes.bool
        };
        render() {
            const {children, isActive, styles} = this.props;
            const activeItem = isActive ? styles['itemActive'] : '';
            return<li styleName="item" className={activeItem}>
                {children}
            </li>;
        }
}

export default CSSModules(CarouselItem, styles);
