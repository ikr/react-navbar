import * as React from 'react'
import { FormattedMessage } from 'react-intl'

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
    kind: 'item',
    href: string,
    target?: string,
    title: string
}
