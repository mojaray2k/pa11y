/* jshint maxlen: 200 */
/* global describe, it */
'use strict';

var assert = require('proclaim');

describe('pa11y', function () {
	var pa11y = require('../../lib/pa11y');

	it('should be an object', function () {
		assert.strictEqual(typeof pa11y, 'object');
	});

});
