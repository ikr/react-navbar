import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
import massert from './massert';
import MenuItems from '../src/MenuItems';
import Item from '../src/Item';
import Dropdown from '../src/Dropdown';

const TestUtils = addons.TestUtils;

describe('MenuItems', () => {
    it('is a function', () => {
        assert.strictEqual(typeof MenuItems, 'function');
    });

    it('declares a required "items" array property', () => {
        assert.strictEqual(MenuItems.propTypes.items, React.PropTypes.array.isRequired);
    });

    it('declares an optional "secondary" bool property', () => {
        assert.strictEqual(MenuItems.propTypes.secondary, React.PropTypes.bool);
    });

    describe('HTML', () => {
        let component;
        let element;

        beforeEach(() => {
            component = TestUtils.renderIntoDocument(React.createElement(MenuItems, {
                items: [
                    {title: 'reboot', href: '/do?ac=reboot'},
                    {title: 'sleep', href: '/do?ac=sleep'},

                    {title: 'more', items: [
                        {title: 'shutDown', href: '/do?ac=shutDown'}
                    ]}
                ],

                messages: {
                    reboot: 'Перезагрузить',
                    sleep: 'Усыпить',
                    more: 'Дополнительно',
                    shutDown: 'Выключить'
                }
            }));

            element = component.getDOMNode();
        });

        it('is a <ul>', () => {
            assert.strictEqual(element.tagName, 'UL');
        });

        it('has the top-level CSS class nav assigned', () => {
            massert.cssClass(element, 'nav');
        });

        it('has the top-level CSS class navbar-nav assigned', () => {
            massert.cssClass(element, 'navbar-nav');
        });

        it('has no top-level CSS class navbar-righ assigned', () => {
            massert.noCssClass(element, 'navbar-right');
        });

        it('nests an Item', () => {
            assert(TestUtils.isCompositeComponentWithType(component.refs.i0, Item));
        });

        it('nests a Dropdown', () => {
            assert(TestUtils.isCompositeComponentWithType(component.refs.i2, Dropdown));
        });
    });

    describe('HTML for "secondary" case', () => {
        let element;

        beforeEach(() => {
            element = TestUtils.renderIntoDocument(React.createElement(MenuItems, {
                items: [],
                secondary: true
            })).getDOMNode();
        });

        it('has the top-level CSS class navbar-righ assigned', () => {
            massert.cssClass(element, 'navbar-right');
        });
    });
});
