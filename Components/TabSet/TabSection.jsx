import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './TabSet.css';

class TabSection extends React.Component {
        static propTypes = {
            title: PropTypes.node.isRequired,
            children: PropTypes.node.isRequired,
            isActive: PropTypes.bool.isRequired,
            handleToggle: PropTypes.func
        };
        static defaultProps = {
            title: '',
            isActive: false
        };

        render() {
            const {children, title, styles, isActive, handleToggle} = this.props;
            const activeTab = isActive ? styles['tabActive'] : '';
            const activeSection = isActive ? styles['sectionActive'] : '';

            return <li styleName="item" className={activeTab} aria-hidden={!isActive} onClick={handleToggle}>
                     <span>{title}</span>
                 <div styleName="section" className={activeSection}>
                     {children}
                 </div>
            </li>
        }
}

export default CSSModules(TabSection, styles);
