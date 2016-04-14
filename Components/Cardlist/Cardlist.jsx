import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Cardlist.css';


class Cardlist extends React.Component {
        static propTypes = {
          children: PropTypes.node.isRequired
        };
        constructor(props) {
            super(props);
            this.state = { activeItem: null };
            this.handleSelectItem = this.handleSelectItem.bind(this)
            this.handleClearItem = this.handleClearItem.bind(this)
        }
        handleSelectItem(activeItem) {
            this.setState({ activeItem });
        }
        handleClearItem() {
            this.setState({ activeItem: null });
        }
        renderChildren() {
            const { children} = this.props;
            const { activeItem } = this.state;
            const handleSelectItem = this.handleSelectItem;
            return React.Children.map(children, (child, i) => {
                return React.cloneElement(child, {
                    isActive: i + 1 === activeItem,
                    handleSelect() {
                        handleSelectItem(i + 1);
                    }
                });
            });
        }
        render() {
            return <div styleName="container" className="clear-bottom">
                <header>
                    <h1 className="u-alignCenter">Card List</h1>
                </header>
                <ul styleName="Cardlist" onMouseOut={this.handleClearItem}>
                    {this.renderChildren()}
                </ul>
            </div>;
        }
}

export default CSSModules(Cardlist, styles);
