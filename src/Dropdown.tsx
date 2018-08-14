import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import MenuElementKind from './MenuElementKind'
import Item, { Props as ItemProps } from './Item'

export default function Dropdown(props: Props) {
    return (
        <li className='dropdown'>
            <a
                className='dropdown-toggle'
                href='#'
                data-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'>

                <FormattedMessage id={props.title} />
                <span className='caret'></span>
            </a>

            <ul className='dropdown-menu'>
                {props.items.map((item, index) => <Item {...item} key={index} />)}
            </ul>
        </li>
    )
}

export interface Props {
    kind: MenuElementKind.DROPDOWN,
    title: string,
    items: ItemProps[]
}
