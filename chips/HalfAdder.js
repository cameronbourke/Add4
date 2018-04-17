/* HalfAdder
 * ===========================================
 * "Before you can be full, you must be half" - FullAdder (circa 2018)
 * 
 * The aim of the game here is that imagine the named arguments a, b are
 * pins leading into your chip. They can either be a '1' (high) or '0' (low).
 * Now imagine there are two pins, z and c leading out of your chip.
 * The HalfAdder's job is twofold. It needs to work out the a + b (z pin)
 * and also the carry out of a + b (c pin).
 *
 * Note: you will need to use the logic gates defined in ../gates
 * For example, if you want to use XOR in this chip,
 * add the following to the top of the file:
 * const XOR = require('../gates/XOR');
 *
 * TRUTH TABLE
 *   a  |  b  ||  z  |  c  
 * --------------------------
 *   0  |  0  ||  0  |  0  
 *   0  |  1  ||  1  |  0  
 *   1  |  0  ||  1  |  0  
 *   1  |  1  ||  0  |  1  
 */

const HalfAdder = (() => {

	function HalfAdder ({ a, b }) {
		// start here
		return {
			z: 0,
			c: 0,
		};
	};

	return HalfAdder;
})();

module.exports = HalfAdder;
