# About

React.js component rendering a translatable menu bar with Twitter Bootstrap navbar HTML markup. For
example, for a menu structure like the that:

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
    structure: {} // TBD
};
```
