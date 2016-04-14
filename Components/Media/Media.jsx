import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Media.css';

class Media extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired
    };
    static defaultProps = {
        title: ''
    };
    render() {
        const { children, title} = this.props;
        return <div styleName='container'>
            <div styleName='Media'>
              <div styleName='item'>
                {children}
              </div>
              <div styleName="content">
                <h4 styleName="title">{title}</h4>
                <div styleName="desc">
                  The content area on the right can contain any other objects. In this case, it contains text, but we could put lists, grids, or even other media objects inside.<br/>
                  - <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">Nicole Sullivan</a>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default CSSModules(Media, styles);
