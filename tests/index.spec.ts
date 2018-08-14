import * as assert from 'assert'
import * as api from '../src/index'
import Navbar from '../src/Navbar'
import MenuElementKind from '../src/MenuElementKind'

describe('Public API', () => {
    it('exports Navbar as the default', () => {
        assert.strictEqual(api.default, Navbar)
    })

    it('exports the MenuElementKind enum', () => {
        assert.strictEqual(api.MenuElementKind, MenuElementKind)
    })
})
