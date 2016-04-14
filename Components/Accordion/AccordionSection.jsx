import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Accordion.css';


class AccordionSection extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        initialIsOpen: PropTypes.bool
    };
    static defaultProps = {
        title: '',
        initialIsOpen: false
    };
    constructor(props) {
        super(props);
        this.state = { isOpen: props.initialIsOpen };
        this.handleToggleOpen = this.handleToggleOpen.bind(this);
    }
    handleToggleOpen() {
        const isOpen = this.state.isOpen;
        this.setState({ isOpen: !isOpen });
    }
    render() {
        const { isOpen } = this.state;
        const { title, children, styles } = this.props;
        const activeContent = isOpen ? styles['contentActive'] : '';
        const activeTitle = isOpen ? styles['titleActive'] : '';
        // console.log('state:', this.state);
        return <section styleName='section' onClick={this.handleToggleOpen}>
            <h3 styleName='title' className={activeTitle}>
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
