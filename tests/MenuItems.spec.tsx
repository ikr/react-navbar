import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import MenuItems, { Props } from '../src/MenuItems'

function props(): Props {
    return {
        items: [
            { kind: 'item', title: 'reboot', href: '/do?ac=reboot' },
            { kind: 'item', title: 'sleep', href: '/do?ac=sleep' },

            {
                kind: 'dropdown',
                title: 'more',
                items: [
                    { kind: 'item', title: 'shutDown', href: '/do?ac=shutDown' }
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
    })
})
