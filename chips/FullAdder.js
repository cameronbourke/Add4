/* FullAdder
 * ===========================================
 * "Two halves don't make a full" - OR gate (circa 2018)
 * 
 * Now you know how the input and output wires concept works. Similar drill
 * this time, except you now need to handle a third input wire called c-in.
 * Sometimes though it is just easier to think of this gate as summing
 * three binary digits, and then just like HalfAdder, setting (a + b + c-in)
 * to z and the carry of (a + b + c-in) to c-out
 *
 * Note: you will need to use logic gates defined in ../gates
 * and the HalfAdder you built defined at ./HalfAdder
 *
 * TRUTH TABLE
 *   a  |  b  | c-in ||  z  | c-out
 * ----------------------------------
 *   0  |  0  |  0   ||  0  |  0
 *   0  |  1  |  0   ||  1  |  0
 *   1  |  0  |  0   ||  1  |  0
 *   1  |  1  |  0   ||  0  |  0
 *   0  |  0  |  1   ||  1  |  0
 *   0  |  1  |  1   ||  0  |  1
 *   1  |  0  |  1   ||  0  |  1
 *   1  |  1  |  1   ||  1  |  1
 */

const FullAdder = (() => {

	function FullAdder ({ a, b, c }) {
		// start here
		return {
			z: '0',
			c: '0',
		};
	}

	return FullAdder;
})();

module.exports = FullAdder;
