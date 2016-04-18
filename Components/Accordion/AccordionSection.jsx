import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Accordion.css';


class AccordionSection extends React.Component {
    static propTypes = {
        handleToggle: PropTypes.func,
        children: PropTypes.node
    };

    render() {
        const { title, children, styles, handleToggle, isOpen } = this.props;
        const activeContent = isOpen ? styles['contentActive'] : '';
        const activeTitle = isOpen ? styles['titleActive'] : '';

        return <section styleName='section'>
            <h3 styleName='title' className={activeTitle} onClick={handleToggle}>
                {title}
            </h3>
            <div styleName='content' className={activeContent}
                aria-hidden={!isOpen} aria-labelledby={title}>
                {children}
            </div>
        </section>;
    }
}

export default CSSModules(AccordionSection, styles);
