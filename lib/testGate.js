const assert = require('assert');

function isDeepEqual (a, b) {
	try { assert.deepStrictEqual(a, b); return true; }
	catch (e) {
		return false;
	}
}

const to_args_string = (args) => {
	if (typeof args !== 'object') return `z=${args}`;
	return Object.keys(args).reduce((acc, k) => {
		if (acc === '') return `${k}=${args[k]}`;
		return `${acc}, ${k}=${args[k]}`;
	}, '');
}

expect.extend({
	toEqualOutput ([gate, input], output) {
		const pass = isDeepEqual(gate(input), output);
		const args = to_args_string(input);
		const out = to_args_string(gate(input));
		const exp = to_args_string(output);
		if (pass) {
			return {
				message: () => 
				`expected: ${gate.name}(${args}) -\\> ${exp}\n  actual: ${gate.name}(${args}) -\\> ${out}`,
				pass: true,
			}
		}
		else {
			return {
				message: () =>
				`expected: ${gate.name}(${args}) -> ${exp}\n  actual: ${gate.name}(${args}) -> ${out}`,
				pass: false,
			}
		}
	}
});

function testGate (gate, truthTable) {
	describe(gate.name, () => {
		it('returns same values as truth table', () => {
			truthTable.forEach(([input, output]) => {
				expect([gate, input]).toEqualOutput(output);
			});
		});
	});
}

module.exports = testGate;
