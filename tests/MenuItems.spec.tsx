import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import MenuElementKind from '../src/MenuElementKind'
import MenuItems, { Props } from '../src/MenuItems'

function props(): Props {
    return {
        items: [
            { kind: MenuElementKind.ITEM, title: 'reboot', href: '/do?ac=reboot' },
            { kind: MenuElementKind.ITEM, title: 'sleep', href: '/do?ac=sleep' },

            {
                kind: MenuElementKind.DROPDOWN,
                title: 'more',
                items: [
                    { kind: MenuElementKind.ITEM, title: 'shutDown', href: '/do?ac=shutDown' }
                ]
            }
        ]
    }
}

function messages(): { [id: string]: string } {
    return {
        reboot: 'Перезагрузить',
        sleep: 'Усыпить',
        more: 'Дополнительно',
        shutDown: 'Выключить'
    }
}

describe('MenuItems', () => {
    const wrapper = mount(
        <IntlProvider locale='ru' messages={messages()}>
            <MenuItems {...props()} />
        </IntlProvider>
    ).find('MenuItems')

    describe('top level element', () => {
        const ulWrapper = wrapper.childAt(0)

        it('is an UL', () => {
            assert.strictEqual(ulWrapper.type(), 'ul')
        })

        it('has the "nav" CSS class', () => {
            assert(ulWrapper.hasClass('nav'))
        })

        it('has the top-level CSS class navbar-nav assigned', () => {
            assert(ulWrapper.hasClass('navbar-nav'))
        })

        it('nests 3 Items', () => {
            assert.strictEqual(ulWrapper.find('Item').length, 3)
        })

        it('nests a Dropdown', () => {
            assert.strictEqual(ulWrapper.find('Dropdown').length, 1)
        })

        it('has no top-level CSS class navbar-right assigned', () => {
            assert(!ulWrapper.hasClass('navbar-right'))
        })
    })
})

describe('secondary MenuItems', () => {
    const ulWrapper = mount(
        <IntlProvider locale='ru' messages={messages()}>
            <MenuItems {...Object.assign({}, props(), { secondary: true })} />
        </IntlProvider>
    ).find('MenuItems').childAt(0)

    it('has the top-level CSS class navbar-right assigned', () => {
        assert(ulWrapper.hasClass('navbar-right'))
    })
})
