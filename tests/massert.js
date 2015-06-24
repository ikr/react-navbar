import assert from 'assert';

export default {
    cssClass(element, className) {
        const cn = element.className;
        assert(cn.split(' ').indexOf(className) >= 0, `"${className}" not found in "${cn}"`);
    },

    noCssClass(element, className) {
        const cn = element.className;
        assert(cn.split(' ').indexOf(className) === -1, `Unexpected "${className}" in "${cn}"`);
    },

    contains(haystack, needle) {
        assert(haystack.indexOf(needle) >= 0, `${needle} not found in ${haystack}`);
    }
};
