import assert from 'assert';

export default {
    cssClass(element, className) {
        const cn = element.className;
        assert(cn.split(' ').indexOf(className) >= 0, `"${className}" not found in "${cn}"`);
    },

    contains(haystack, needle) {
        assert(haystack.indexOf(needle) >= 0, `${needle} not found in ${haystack}`);
    }
};
