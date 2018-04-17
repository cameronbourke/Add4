const NOT = require('./NOT');
const AND = require('./AND');

const OR = (() => {

	function OR ({ a, b }) {
		return NOT({
			a: AND({
				a: NOT({ a: a }),
				b: NOT({ a: b }),
			}),
		});
	}

	return OR;
})();

module.exports = OR;
