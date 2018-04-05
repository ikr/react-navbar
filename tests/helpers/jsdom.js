import {JSDOM} from 'jsdom'
import 'raf/polyfill'

const jsdom = new JSDOM('<html><body><div id="main"></div></body></html>')

global.window = jsdom.window
global.document = jsdom.window.document
global.navigator = jsdom.window.navigator
