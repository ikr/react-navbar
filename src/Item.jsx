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
        const {href, target, title} = this.props;

        const anchorProps = Object.assign(
            {href},
            target ? {target} : {}
        );

        return <li>
            <a {...anchorProps}>
                {this.getIntlMessage(title)}
            </a>
        </li>;
    }
});
