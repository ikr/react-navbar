import * as React from 'react'
import MenuItems, { MenuItem } from './MenuItems'

export default function Navbar(props: Props) {
    return (
        <nav className='navbar navbar-default'>
            <div className='container'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        data-target='#react-navbar-collapse-all'
                        aria-expanded='false'>

                        <span className='sr-only'>Navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                </div>

                <div className='collapse navbar-collapse' id='react-navbar-collapse-all'>
                    <MenuItems items={props.menuItems} />
                    {props.secondaryMenuItems &&
                        <MenuItems items={props.secondaryMenuItems} secondary={true} />}
                </div>
            </div>
        </nav>
    )
}

export interface Props {
    menuItems: MenuItem[],
    secondaryMenuItems?: MenuItem[]
}
