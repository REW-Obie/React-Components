import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './SubscribeForm.css';

class SubscribeForm extends React.Component {

        static propTypes = {
            placeholder: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired
        };
        static defaultProps = {
            placeholder: "Your Email Address",
            message: "An opt-in (confirmation) message.",
            action: "Subscribe"
        };
        render() {
            const {placeholder, message, action} = this.props;
            return <div>
                <header>
                    <h1 className="u-alignCenter">Subscribe Form</h1>
                </header>
                <div styleName="Subscribe" className="clear-bottom">
                    <form styleName="form">
                        <label styleName="label">
                            <span className="u-a11yText">{placeholder}</span>
                            <input styleName="form__input" className="input u-border" type="email" name="subscribe_email" placeholder={placeholder} required/>
                        </label>
                        <input styleName="form__button" className="button" type="submit" value={action}/>
                        <div styleName="form__checkbox">
                            <input styleName="input_Subscribe" className="u-a11yText" type="checkbox" name="Subscribe_form" id="Subscribe_form" defaultChecked/>
                            <label styleName="label_checkbox" htmlFor="Subscribe_form">
                                  {message}
                            </label>
                        </div>
                    </form>
                </div>
            </div>;
        }
}

export default CSSModules(SubscribeForm, styles);
