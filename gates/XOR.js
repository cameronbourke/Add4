const OR = require('./OR');
const AND = require('./AND');
const NOT = require('./NOT');

const XOR = (() => {

	function XOR ({ a, b }) {
		return OR({
			a: AND({ a: NOT({ a }), b }),
			b: AND({ a, b: NOT({ a: b }) }),
		});
	}

	return XOR;
})();

module.exports = XOR;
