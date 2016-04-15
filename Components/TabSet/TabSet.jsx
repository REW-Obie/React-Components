import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './TabSet.css';

class TabSet extends React.Component {

        constructor(props) {
            super(props);
            this.state = { activeItem: 1 };
            this.handleToggleActive = this.handleToggleActive.bind(this)
        }
        handleToggleActive(activeItem) {
            this.setState({ activeItem });
        }
        renderChildren() {
            const { children} = this.props;
            const { activeItem } = this.state;
            const handleToggleActive = this.handleToggleActive;
            return React.Children.map(children, (child, i) => {
                return React.cloneElement(child, {
                    isActive: i + 1 === activeItem,
                    handleToggle() {
                        handleToggleActive(i + 1);
                    }
                });
            });
        }

        render() {
            return <section className="clear-bottom">
                    <header>
                      <h1 className='u-alignCenter'>Tab</h1>
                    </header>
                <div styleName="container">
                    <ul styleName="list" className="u-border">
                        {this.renderChildren()}
                    </ul>
                </div>
            </section>;
        }
}

export default CSSModules(TabSet, styles);
