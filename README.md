# About

React.js component rendering a translatable menu bar with Twitter Bootstrap
[Navbar](http://getbootstrap.com/components/#navbar) HTML markup. For example, for a menu structure
like the that:

```
+-------------+--------+--------+---------------+-------------+--------+
|             |        |        |               |             |        |
| Drop-down-1 | Item-1 | Item-2 |               | Drop-down-2 | Item-3 |
|             |        |        |               |             |        |
+-------------+--------+--------+---------------+--+-------------------+
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

```JavaScript
const props = {
    menuItems: [{
        title: 'menu.dd1',

        items: [
            {title: 'menu.i11', href: '/resource-1-1'},
            {title: 'menu.i12', href: '/resource-1-2'}
        ]
    },

    {title: 'menu.i1', href: '/resource-1'},
    {title: 'menu.i2', href: '/resource-2'}],

    secondaryMenuItems: [{
        title: 'menu.dd2',

        items: [
            {title: 'menu.i21', href: '/resource-2-1'},
            {title: 'menu.i22', href: '/resource-2-2'}
        ]
    },

    {title: 'menu.i3', href: '/resource-3'}]
};

const localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer = {
    menu: {
        dd1: 'Drop-down-1', i11: 'Item-1-1', i12: 'Item-1-2',
        i1: 'Item-1', i2: 'Item-2', i3: 'Item-3',
        dd2: 'Drop-down-2', i21: 'Item-2-1', i22: 'Item-2-2'
    },

    searchForm: {...},
    footer: {...},
    ...
};
```
