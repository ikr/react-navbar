import React from 'react';
import {IntlMixin} from 'react-intl';

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        href: React.PropTypes.string.isRequired
    },

    mixins: [IntlMixin],

    render() {
        return <li>
            <a href={this.props.href}>
                {this.getIntlMessage(this.props.title)}
            </a>
        </li>;
    }
});
