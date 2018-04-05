import assert from 'assert'
import api from '../src/index'
import Navbar from '../src/Navbar'

describe('Public API', () => {
    it('is basically the Navbar class', () => {
        assert.strictEqual(api, Navbar)
    })
})
