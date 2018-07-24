import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import Dropdown, { Props } from '../src/Dropdown'

function props(): Props {
    return {
        title: 'leMenu.root.dd1Title',

        items: [
            { title: 'leMenu.root.dd1.i1', href: '/action-1' },
            { title: 'leMenu.root.dd1.i2', href: '/action-2' }
        ]
    }
}

function messages(): { [id: string]: string } {
    return {
        'leMenu.root.dd1Title': 'Drop-down-1',
        'leMenu.root.dd1.i1': 'Item-1',
        'leMenu.root.dd1.i2': 'Item-2'
    }
}

describe('Dropdown', () => {
    const wrapper = mount(
        <IntlProvider locale='ru' messages={messages()}>
            <Dropdown {...props()} />
        </IntlProvider>
    ).find('Dropdown')

    describe('top level element', () => {
        const liWrapper = wrapper.childAt(0)

        it('is an LI', () => {
            assert.strictEqual(liWrapper.type(), 'li')
        })

        it('has the "dropdown" CSS class', () => {
            assert(liWrapper.hasClass('dropdown'))
        })
    })

    describe('dropdown-toggle anchor', () => {
        const aWrapper = wrapper.find('a.dropdown-toggle')

        it('is present', () => {
            assert(aWrapper.exists())
        })

        it('has the "#" href', () => {
            assert.strictEqual(aWrapper.prop('href'), '#')
        })

        it('nests the title translation', () => {
            assert.strictEqual(aWrapper.text(), 'Drop-down-1')
        })

        it('nests the caret span', () => {
            assert(aWrapper.find('span.caret').exists())
        })
    })

    describe('items container', () => {
        const ulWrapper = wrapper.find('.dropdown-menu')

        it('is a <ul>', () => {
            assert.strictEqual(ulWrapper.type(), 'ul')
        })

        it('actually contains itemns', () => {
            assert.strictEqual(ulWrapper.find('Item').length, 2)
        })
    })
})
