import assert from 'assert';
import api from '../index';
import Navbar from '../src/Navbar';

describe('Public API', () => {
    it('exports the Navbar class', () => {
        assert.strictEqual(api.Navbar, Navbar);
    });

    it('exports the intlMessages', () => {
        assert.strictEqual(typeof api.intlMessages, 'function');
    });

    it('intlMessages has en.menu.newSearch key', function () {
        assert.strictEqual(typeof api.intlMessages().en.menu.newSearch, 'string');
    });
});
