import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './MainNav.css';

const redirectToUrl = url => {
  window.location = url;
};

class MainNavForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectNav = this.handleSelectNav.bind(this);
  }
        handleSelectNav(){
          const value = this.refs.select.value;
          if (value !== "") {
            redirectToUrl(value);
          }
        }
        render() {
            const {children} = this.props;

            return <form styleName="form" action method="post">
                <select name="js-nav nav_select" className='js-nav'
                  onChange= {this.handleSelectNav} ref='select'>
                  <option value>Jump to...</option>
              <option value="#accordion">&nbsp;&nbsp;&nbsp;&nbsp;Accordion</option>
              <option value="#card1">&nbsp;&nbsp;&nbsp;&nbsp;Card 1</option>
              <option value="#card2">&nbsp;&nbsp;&nbsp;&nbsp;Card 2</option>
              <option value="#card3">&nbsp;&nbsp;&nbsp;&nbsp;Card 3</option>
              <option value="#cardlist">&nbsp;&nbsp;&nbsp;&nbsp;Card List</option>
              <option value="#carousel">&nbsp;&nbsp;&nbsp;&nbsp;Carousel</option>
                  <option value="#commentbox">&nbsp;&nbsp;&nbsp;&nbsp;Comment Box</option>
                  <option value="#Form">&nbsp;&nbsp;&nbsp;&nbsp;Form</option>
                  <option value="#Grid">&nbsp;&nbsp;&nbsp;&nbsp;Grid</option>
                  <option value="#Hero">&nbsp;&nbsp;&nbsp;&nbsp;Hero</option>
                  <option value="#Icon">&nbsp;&nbsp;&nbsp;&nbsp;Icon</option>
                  <option value="#Navigation">&nbsp;&nbsp;&nbsp;&nbsp;Navigation</option>
                  <option value="#Media">&nbsp;&nbsp;&nbsp;&nbsp;Media</option>
                  <option value="#Subscribe">&nbsp;&nbsp;&nbsp;&nbsp;Subscribe Form</option>
                  <option value="#Tab">&nbsp;&nbsp;&nbsp;&nbsp;Tab</option>
                  <option value="#Table">&nbsp;&nbsp;&nbsp;&nbsp;Table</option>
                </select>
                <input type="submit" value="Go" className="u-isRemoved" />
              </form>;
        }
}


export default CSSModules(MainNavForm, styles);
