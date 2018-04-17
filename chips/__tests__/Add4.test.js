const testGate = require('../../lib/testGate');

testGate(require('../Add4'), [
	[{ a: '0000', b: '0000', }, { z: '0000'.split(''), c: '0' }],
	[{ a: '0001', b: '0000', }, { z: '0001'.split(''), c: '0' }],
	[{ a: '0001', b: '0001', }, { z: '0010'.split(''), c: '0' }],
	[{ a: '1111', b: '0001', }, { z: '0000'.split(''), c: '1' }],
	[{ a: '1110', b: '0001', }, { z: '1111'.split(''), c: '0' }],
	[{ a: '1010', b: '0101', }, { z: '1111'.split(''), c: '0' }],
]);
