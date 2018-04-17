const NAND = require('./NAND');
const NOT = require('./NOT');

const AND = (() => {

	function AND ({ a, b }) {
		return NOT({
			a: NAND({ a, b }),
		});
	}

	return AND;
})();

module.exports = AND;
