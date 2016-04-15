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
          accordionSection: PropTypes.element
        };

        render() {
            const {children} = this.props;
            return <section className="clear-bottom">
              <header>
              <h1 className='u-alignCenter'>Accordion</h1>
            </header>
            <div className='u-border' styleName='container'>
              <div styleName='c-Accordion'>
                {children}
              </div>
            </div>
            </section>;
        }
}

export default CSSModules(Accordion, styles);
