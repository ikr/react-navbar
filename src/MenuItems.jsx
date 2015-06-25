import React from 'react';
import {IntlMixin} from 'react-intl';
import classNames from 'classnames';
import Item from './Item';
import Dropdown from './Dropdown';

export default React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        secondary: React.PropTypes.bool
    },

    mixins: [IntlMixin],

    render() {
        const className = classNames(
            'nav navbar-nav',
            {'navbar-right': this.props.secondary}
        );

        const items = this.props.items.map((item, index) => this.itemElement(item, `i${index}`));

        return <ul className={className}>
            {items}
        </ul>;
    },

    itemElement(item, ref) {
        return (
            item.items ?
            <Dropdown {...item} ref={ref} key={ref}/> :
            <Item {...item} ref={ref} key={ref}/>
        );
    }
});
