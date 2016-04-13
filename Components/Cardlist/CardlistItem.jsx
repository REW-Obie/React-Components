import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Cardlist.css';
import Icon from '../Icon/Icon.jsx';

class CardlistItem extends React.Component {
        static propTypes = {
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string.isRequired,
          details: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired ,
          image: PropTypes.string.isRequired,
          isActive: PropTypes.bool.isRequired,
          handleSelect: PropTypes.func
        };
        static defaultProps = {
            href: '/Assets/Cardlist/',
            isActive: false
        };
        render() {
            const {children, title, subtitle, details, href, image, styles, isActive, handleSelect} = this.props;
            const activeItem = isActive ? styles['itemActive'] : '';
            const activeDesc = isActive ? styles['descActive'] : '';
            const activeOptions = isActive ? styles['optionsActive'] : '';
            return <li styleName="item" className={activeItem} onMouseOver={handleSelect}>
                <div styleName="content">
                    <a href="#" styleName="overlay"></a>
                    <img src={href + image} alt=""></img>
                    <div styleName="options" className={activeOptions}>
                        {children}
                    </div>
                </div>
                <div styleName="desc" className={activeDesc}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <div>{details}</div>
                </div>
            </li>;
        }
}

export default CSSModules(CardlistItem, styles);
