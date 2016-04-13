import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './MainNav.css';


class MainNav extends React.Component {

        render() {
            const {children} = this.props;
            return <div styleName="container">
              <nav>
                <ul styleName='list'>
                  <li styleName="item">
                    <a href="#">view with code examples</a>
                  </li>
                  <li styleName="item">
                    <a href="https://github.com/0bie/_blank">documentation</a>
                  </li>
                </ul>
              </nav>
              {children}
          </div>;
        }
}

export default CSSModules(MainNav, styles);
