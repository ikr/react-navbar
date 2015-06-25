import React from 'react';
import {IntlMixin} from 'react-intl';
import Item from './Item';

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        items: React.PropTypes.array.isRequired
    },

    mixins: [IntlMixin],

    render() {
        const items = this.props.items.map((item, index) => {
            const ref = `i${index}`;
            return <Item {...item} ref={ref} key={ref}/>;
        });

        return <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {this.getIntlMessage(this.props.title)}
                <span className="caret"></span>
            </a>

            <ul className="dropdown-menu">
                {items}
            </ul>
        </li>;
    }
});
