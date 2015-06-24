import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
import massert from './massert';
import Navbar from '../src/Navbar';

const TestUtils = addons.TestUtils;

describe('Navbar', () => {
    it('is a function', () => {
        assert.strictEqual(typeof Navbar, 'function');
    });

    describe('HTML', () => {
        let element;

        beforeEach(() => {
            element = TestUtils.renderIntoDocument(React.createElement(Navbar)).getDOMNode();
        });

        it('is a <nav> tag', () => {
            assert.strictEqual(element.tagName, 'NAV');
        });

        describe('top classes', () => {
            it('include navbar', () => {
                massert.cssClass(element, 'navbar');
            });

            it('include navbar-default', () => {
                massert.cssClass(element, 'navbar-default');
            });
        });

        it('has fluid-container div as an immediate descendant', () => {
            assert.strictEqual(
                element.querySelector('div.container-fluid').parentElement,
                element
            );
        });

        it('displays the responsive hamburger header', () => {
            assert.strictEqual(element.querySelectorAll(
                '.container-fluid > .navbar-header > button.navbar-toggle > span.icon-bar'
            ).length, 3);
        });

        describe('navbar-toggle', () => {
            let buttonElement;

            beforeEach(() => {
                buttonElement = element.querySelector('button.navbar-toggle');
            });

            it('has the #react-navbar-collapse-all as the target', () => {
                assert.strictEqual(
                    buttonElement.getAttribute('data-target'), '#react-navbar-collapse-all');
            });
        });
    });
});
