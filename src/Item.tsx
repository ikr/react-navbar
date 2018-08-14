import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import MenuElementKind from './MenuElementKind'

export default function Item(props: Props) {
    const { href, target, title } = props

    return (
        <li>
            <a {...{ href, target }}>
                <FormattedMessage id={title} />
            </a>
        </li>
    )
}

export interface Props {
    kind: MenuElementKind.ITEM,
    href: string,
    target?: string,
    title: string
}
