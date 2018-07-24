import * as React from 'react'
import Item, { Props as ItemProps } from './Item'
import Dropdown, { Props as DropdownProps } from './Dropdown'

export default function MenuItems(props: Props) {
    return (
        <ul className='nav navbar-nav'>
            {props.items.map(
                (item, index) => (item.kind === 'dropdown') ?
                    <Dropdown {...item} key={index} /> :
                    <Item {...item} key={index} />
            )}
        </ul>
    )
}

export interface Props {
    items: MenuItem[]
}

type MenuItem = ItemProps | DropdownProps
