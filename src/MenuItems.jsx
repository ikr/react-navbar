import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        secondary: React.PropTypes.bool
    },

    render() {
        const className = classNames(
            'nav navbar-nav',
            {'navbar-right': this.props.secondary}
        );

        return <ul className={className}></ul>;
    }
});
