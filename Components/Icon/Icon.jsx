import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Icon.css';
import classNames from 'classnames';

class Icon extends React.Component {
        static propTypes = {
            href: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string,
            size: PropTypes.oneOf(['sm', 'md', 'lg']),
            color: PropTypes.oneOf(['white', 'grey']),
            className: PropTypes.string
        };
        static defaultProps = {
            href: '/Assets/Sprite/Sprite.svg#'
        };
        render() {
            const { href, name, title, desc, size, color, className, style } = this.props;
            let iconStyles = classNames('Icon', className);
            if (size) iconStyles += ' Icon_' + size;
            if (color) iconStyles += ' Icon_' + color;
            return <svg styleName='o-Icon' className={iconStyles}>
                <title>{title}</title>
                <desc>{desc}</desc>
                <use xlinkHref={href + name}></use>
              </svg>;
        }
}

export default CSSModules(Icon, styles);
