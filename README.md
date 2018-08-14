[![Build Status](https://travis-ci.org/ikr/react-navbar.svg?branch=master)](https://travis-ci.org/ikr/react-navbar)

# Overview

React.js component rendering a translatable menu bar with Twitter Bootstrap
[Navbar](https://getbootstrap.com/docs/3.3/components/#navbar) HTML markup. For example, for a menu
structure like the that:

```
+-------------+--------+--------+---------------+-------------+--------+
|             |        |        |               |             |        |
| Drop-down-1 | Item-1 | Item-2 |               | Drop-down-2 | Item-3 |
|             |        |        |               |             |        |
+-------------+--------+--------+---------------+--+----------+--------+
                                                   |          |
                                                   | Item-2-1 |
                                                   |          |
                                                   +----------+
                                                   |          |
                                                   | Item-2-2 |
                                                   |          |
                                                   +----------+
```

one would have to initialize a `Navbar` component instance in the following way:

```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {IntlProvider} from 'react-intl'
import {default as Navbar, MenuElementKind} from 'react-navbar'

const {ITEM, DROPDOWN} = MenuElementKind

const menuItems = [{
    kind: DROPDOWN,
    title: 'menu.dd1',

    items: [
        {kind: ITEM, title: 'menu.i11', href: '/resource-1-1', target: '_blank'},
        {kind: ITEM, title: 'menu.i12', href: '/resource-1-2'}
    ]
},
{kind: ITEM, title: 'menu.i1', href: '/resource-1'},
{kind: ITEM, title: 'menu.i2', href: '/resource-2'}]

const secondaryMenuItems = [{
    kind: DROPDOWN,
    title: 'menu.dd2',

    items: [
        {kind: ITEM, title: 'menu.i21', href: '/resource-2-1'},
        {kind: ITEM, title: 'menu.i22', href: '/resource-2-2'}
    ]
},
{title: 'menu.i3', href: '/resource-3'}]

const localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer = {
    'menu.dd1': 'Drop-down-1',
    'menu.i11': 'Item-1-1',
    'menu.i12': 'Item-1-2',
    'menu.i1': 'Item-1',
    'menu.i2': 'Item-2',
    'menu.i3': 'Item-3',
    'menu.dd2': 'Drop-down-2',
    'menu.i21': 'Item-2-1',
    'menu.i22': 'Item-2-2'

    // ...
}

ReactDOM.render(
    <IntlProvider
    locale='en'
    messages={localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer}>
        <Navbar {...{menuItems, secondaryMenuItems}}/>
    </IntlProvider>,

    document.getElementById('root')
)
```

The `secondaryMenuItems` are optional.

# Internationalization

Navbar is [react-intl](https://github.com/yahoo/react-intl)-based. The i18n message keys are the
values of `title`-s of `menuItems` and `secondaryMenuItems`.

`react-intl` foundation allows using `react-navbar` uniformly in bigger applications, and passing
all the translations, from the root, down the React components hierarchy, — automatically, with the
help of the `IntlProvider`.
