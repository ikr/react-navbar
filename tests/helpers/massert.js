import assert from 'assert'

export function cssClass (element, className) {
    const cn = element.className
    assert(cn.split(' ').indexOf(className) >= 0, `"${className}" not found in "${cn}"`)
}

export function noCssClass (element, className) {
    const cn = element.className
    assert(cn.split(' ').indexOf(className) === -1, `Unexpected "${className}" in "${cn}"`)
}

export function contains (haystack, needle) {
    assert(haystack.indexOf(needle) >= 0, `"${needle}" not found in "${haystack}"`)
}
