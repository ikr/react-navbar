import React from 'react';

export default React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render() {
        return <ul className="nav navbar-nav"></ul>;
    }
});
