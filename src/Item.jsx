import React from 'react';
import {IntlMixin} from 'react-intl';

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        href: React.PropTypes.string.isRequired,
        target: React.PropTypes.string
    },

    defaultProps: {
        target: '_self'
    },

    mixins: [IntlMixin],

    render() {
        return <li>
            <a href={this.props.href} target={this.props.target}>
                {this.getIntlMessage(this.props.title)}
            </a>
        </li>;
    }
});
