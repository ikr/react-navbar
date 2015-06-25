import React from 'react';

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        items: React.PropTypes.array.isRequired
    },

    render() {
        return <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="caret"></span>
            </a>
        </li>;
    }
});
