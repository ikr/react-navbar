import React from 'react';
import MenuItems from './MenuItems';

export default React.createClass({
    propTypes: {
        menuItems: React.PropTypes.array.isRequired,
        secondaryMenuItems: React.PropTypes.array
    },

    render() {
        const secondaryMenuItems = (
            this.props.secondaryMenuItems ?

            <MenuItems
                ref="secondaryMenuItems"
                secondary={true}
                items={this.props.secondaryMenuItems}/> :

            null
        );

        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#react-navbar-collapse-all" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="react-navbar-collapse-all">
                    <MenuItems ref="menuItems" items={this.props.menuItems}/>
                    {secondaryMenuItems}
                </div>
            </div>
        </nav>;
    }
});
