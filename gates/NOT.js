const NAND = require('./NAND');

const NOT = (() => {

	function NOT ({ a }) {
		return NAND({ a: a, b: a });
	}

	return NOT;
})();

module.exports = NOT;
