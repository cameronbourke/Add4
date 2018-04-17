const NAND = (() => {

	const bits = new Set(['0', '1']);

	function NAND ({ a, b }) {
		if (!bits.has(a))
			throw Error('a is: ' + a + ' but should be "0" or "1"');
		if (!bits.has(b))
			throw Error('b is: ' + b + ' but should be "0" or "1"');
		if (!(parseInt(a) && parseInt(b)))
			return '1';
		return '0';
	}

	return NAND;
})();

module.exports = NAND;
