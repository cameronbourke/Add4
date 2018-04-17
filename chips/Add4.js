const FullAdder = require('./FullAdder');

/* Add4
 * ===========================================
 * "Who needs 64 bits, really? It's just debortuous" - Add4 (circa 1970)
 * 
 * Finally time for the main event. In the previous two chips, a and b
 * were single binary digits ('0', '1'). Now both a and b will
 * be an array of binary digits, four bits wide (also known as a nibble).
 * 
 * To get you started, imagine you wanted to add the numbers 27 and 15.
 *
 *			0 1
 *        27
 *      + 15
 *      ----
 *				42
 *
 * Remember that whole carry the 1 business. Well 7 + 5 = 12, write down 2 carry
 * the 1. Then 1 + 2 + 1 = 4, which is < 10, so carry out a 0. This is the
 * process for adding decimal digits. Hint, the process for binary digits
 * is no different!
 *
 * PARTIAL TRUTH TABLE
 *     a   |    b   ||   z    |  c  
 * ----------------------------------
 *   0000  |  0000  ||  0000  |  0  
 *   0001  |  0001  ||  0001  |  0  
 *   1010  |  0101  ||  1111  |  0  
 *   0100  |  0100  ||  1000  |  0  
 *   1111  |  0001  ||  0000  |  1
 */
const Add4 = (() => {

	// Because a[0] returns the leading bit and not
	// the least significant bit. This little helper
	// honours that bit(['0','0','0','1'], 0) = '1'
	const bit = (bits, i) => bits[3 - i];

	function Add4 ({ a, b }) {
		// start here
		return {
			z: [0, 0, 0, 0],
			c: 0,
		};
	};

	return Add4;
})();

module.exports = Add4;
