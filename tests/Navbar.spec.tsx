import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import Navbar, { Props } from '../src/Navbar'
import { Props as ItemProps } from '../src/Item'

function props(): Props {
    return {
        menuItems: [item(), item()],
        secondaryMenuItems: [item()]
    }
}

function item(): ItemProps {
    return { kind: 'item', href: '/action', title: 'menu.item' }
}

function messages(): { [id: string]: string } {
    return { 'menu.item': 'Штучка' }
}

describe('Navbar', () => {
    const wrapper = mount(
        <IntlProvider locale='ru' messages={messages()}>
            <Navbar {...props()} />
        </IntlProvider>
    ).find('Navbar')

    describe('top level element', () => {
        const navWrapper = wrapper.childAt(0)

        it('is a NAV', () => {
            assert.strictEqual(navWrapper.type(), 'nav')
        })

        it('has navbar CSS class', () => {
            assert(navWrapper.hasClass('navbar'))
        })

        it('has navbar-default CSS class', () => {
            assert(navWrapper.hasClass('navbar-default'))
        })
    })

    it('displays the responsive hamburger header', () => {
        assert.strictEqual(wrapper.find(
            'nav > div.container > div.navbar-header > button.navbar-toggle > span.icon-bar'
        ).length, 3)
    })

    describe('navbar-toggle', () => {
        const buttonWrapper = wrapper.find('button.navbar-toggle')

        it('has the #react-navbar-collapse-all as the target', () => {
            assert.strictEqual(buttonWrapper.prop('data-target'), '#react-navbar-collapse-all')
        })
    })

    describe('the collapse-able container of menu items', () => {
        const containerWrapper = wrapper.find('div.container > div.collapse')

        it('is displayed', () => {
            assert(containerWrapper.exists())
        })

        it('additionally has the navbar-collapse CSS class assigned', () => {
            assert(containerWrapper.hasClass('navbar-collapse'))
        })

        it('has the toggle target ID assigned', () => {
            assert.strictEqual(containerWrapper.prop('id'), 'react-navbar-collapse-all')
        })
    })

    it('contains the main MenuItems', () => {
        assert.deepEqual(wrapper.find('MenuItems').at(0).prop('items'), [item(), item()])
    })

    it('contains the secondary MenuItems', () => {
        const menuItemsWrapper = wrapper.find('MenuItems').at(1)
        assert.deepEqual(menuItemsWrapper.prop('items'), [item()])
        assert.strictEqual(menuItemsWrapper.prop('secondary'), true)
    })
})
