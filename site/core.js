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


const NOT = (() => {

	function NOT ({ a }) {
		return NAND({ a: a, b: a });
	}

	return NOT;
})();


const AND = (() => {

	function AND ({ a, b }) {
		return NOT({
			a: NAND({ a, b }),
		});
	}

	return AND;
})();


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


const XOR = (() => {

	function XOR ({ a, b }) {
		return OR({
			a: AND({ a: NOT({ a }), b }),
			b: AND({ a, b: NOT({ a: b }) }),
		});
	}

	return XOR;
})();

/* HalfAdder
 * ===========================================
 * "Before you can be full, you must be half" - FullAdder (circa 2018)
 * 
 * The aim of the game here is that imagine the named arguments a, b are
 * wires leading into your chip. Each wire can either be a '1' (high) or '0' (low).
 * Now imagine there are another two wires, z and c leading out of your chip.
 * The HalfAdder's job is twofold. It needs to work out the a + b (z wire)
 * and also the carry out of a + b (c wire).
 *
 * Note: you will need to use the logic gates defined in ../gates
 * For example, if you want to use XOR in this chip,
 * add the following to the top of the file:
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
			z: '0',
			c: '0',
		};
	};

	return HalfAdder;
})();

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

