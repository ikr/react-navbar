import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
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
    });
});
