const testGate = require('../../lib/testGate');

testGate(require('../HalfAdder'), [
	[{ a: '0', b: '0' }, { z: '0', c: '0' }],
	[{ a: '0', b: '1' }, { z: '1', c: '0' }],
	[{ a: '1', b: '0' }, { z: '1', c: '0' }],
	[{ a: '1', b: '1' }, { z: '0', c: '1' }],
]);
