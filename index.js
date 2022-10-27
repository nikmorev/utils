'use strict'
/**
 * @description - trigger callback on user's move
 * @param {function} callback
 */
function onUserAction(callback) {
    const documentEvents = ['touchmove', 'click', 'keydown', 'mousemove']

    function handler() {
        documentEvents.forEach(event => document.body.removeEventListener(event, handler))
        callback();
    }

    documentEvents.forEach(event => document.body.addEventListener(event, handler))
}

module.exports = {
    onUserAction
}

