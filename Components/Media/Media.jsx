import React, { PropTypes } from 'react';

class Media extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired
    };
    static defaultProps = {
        title: ''
    };
    render() {
        const { children, title} = this.props;
        return <div className='o-Media__container'>
            <div className='o-Media'>
              <div className='o-Media__item'>
                {children}
              </div>
              <div className="o-Media__content">
                <h4 className="o-Media__title">{title}</h4>
                <div className="o-Media__desc">
                  The content area on the right can contain any other objects. In this case, it contains text, but we could put lists, grids, or even other media objects inside.<br/>
                  - <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">Nicole Sullivan</a>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default Media;
