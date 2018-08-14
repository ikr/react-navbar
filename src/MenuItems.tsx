import * as React from 'react'
import MenuElementKind from './MenuElementKind'
import Item, { Props as ItemProps } from './Item'
import Dropdown, { Props as DropdownProps } from './Dropdown'

export default function MenuItems(props: Props) {
    const className = 'nav navbar-nav' + (props.secondary ? ' navbar-right' : '')

    return (
        <ul {...{ className }}>
            {props.items.map(
                (item, index) => (item.kind === MenuElementKind.DROPDOWN) ?
                    <Dropdown {...item} key={index} /> :
                    <Item {...item} key={index} />
            )}
        </ul>
    )
}

export interface Props {
    secondary?: boolean,
    items: MenuItem[]
}

export type MenuItem = ItemProps | DropdownProps
