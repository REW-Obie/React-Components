import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Accordion.css';


/**


Example of using an Accordion...

<Accordion header="Accordion">
  <AccordionSection header="Accordion Title #1">
    Content here!
  <AccordionSection>
  <AccordionSection header="Accordion Title #1">
    Content here!
  <AccordionSection>
</Accordion>

**/

class Accordion extends React.Component {
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
        handleToggleOpen(isOpen) {
            const {children} = this.props;
            this.setState({ isOpen });
        }

        renderChildren() {
            const { children} = this.props;
            const { isOpen } = this.state;
            const handleToggleOpen = this.handleToggleOpen;
            return React.Children.map(children, (child, i) => {
                return React.cloneElement(child, {
                    isOpen: i + 1 === isOpen,
                    handleToggle(e) {
                        handleToggleOpen(i + 1);
                    }
                });
            });
        }

        render() {
            return <section className="clear-bottom">
              <header>
              <h1 className='u-alignCenter'>Accordion</h1>
            </header>
            <div className='u-border' styleName='container'>
              <div styleName='Accordion'>
                  {this.renderChildren()}
              </div>
            </div>
            </section>;
        }
}

export default CSSModules(Accordion, styles);
