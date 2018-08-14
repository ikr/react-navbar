import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import MenuElementKind from '../src/MenuElementKind'
import Item, { Props } from '../src/Item'

function messages(): { [id: string]: string } {
    return { 'menu.nunu': 'Nü-nü' }
}

function props(): Props {
    return {
        kind: MenuElementKind.ITEM,
        title: 'menu.nunu',
        href: '#/actions/nunu',
        target: '_target'
    }
}

describe('Item', () => {
    const wrapper = mount(
        <IntlProvider locale='ru' messages={messages()}>
            <Item {...props()} />
        </IntlProvider>
    ).find('Item')

    it('is an LI on top level', () => {
        assert.strictEqual(wrapper.childAt(0).type(), 'li')
    })

    describe('nested anchor', () => {
        const aWrapper = wrapper.find('li > a')

        it('is present', () => {
            assert(aWrapper.exists())
        })

        it('has the href prop value assigned', () => {
            assert.strictEqual(aWrapper.prop('href'), '#/actions/nunu')
        })

        it('has the target prop value assigned', () => {
            assert.strictEqual(aWrapper.prop('target'), '_target')
        })

        it('nests the localized title prop as the inner text', () => {
            assert.strictEqual(aWrapper.text(), 'Nü-nü')
        })
    })
})
