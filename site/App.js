const App = (() => {

function renderWires ($wires, digits) {
	[...digits].forEach((digit, idx) => {
		$wires.children[idx].setAttribute('data-v', digit);
	});
}

function renderPins ($pins, digits) {
	[...digits].forEach((digit, idx) => {
		$pins.children[idx].setAttribute('data-v', digit);
	});
}

function renderZOutput ($output, decA, decB, decZ) {
	$output.setAttribute('data-correct', (decA + decB) === decZ);
	$output.classList.add('scale-up');
	$output.innerHTML = decZ;
	setTimeout(() => requestAnimationFrame(() =>
			$output.classList.remove('scale-up')), 1000);
}


class App {
	constructor ({ elements, adder, encoding, range }) {
		this.elements = elements;
		this.encoding = encoding;
		this.adder = adder;
		this.range = range;
		this.render = this.render.bind(this);
		this.update = this.update.bind(this);
	}

	run () {
		// sub listeners
		const {a, b} = this.elements.inputs;
		a.addEventListener('input', this.update);
		b.addEventListener('input', this.update);
		this.render();
	}

	destroy () {
		// unsub listeners
		const {a, b} = this.elements.inputs;
		a.removeEventListener('input', this.update);
		b.removeEventListener('input', this.update);
	}

	update () {
		requestAnimationFrame(this.render);
	}

	render () {
		const {dec2bin, bin2dec} = this.encoding;

		const inA = parseInt(this.elements.inputs.a.value || 0),
			inB = parseInt(this.elements.inputs.b.value || 0);

		const out =
			this.adder({ a: dec2bin[inA], b: dec2bin[inB] });

		renderWires(this.elements.wires.a, dec2bin[inA]);
		renderWires(this.elements.wires.b, dec2bin[inB]);
		renderWires(this.elements.wires.z, out.z);
		renderWires(this.elements.wires.c, [out.c]);

		renderPins(this.elements.pins.a, dec2bin[inA]);
		renderPins(this.elements.pins.b, dec2bin[inB]);
		renderPins(this.elements.pins.z, out.z);
		renderPins(this.elements.pins.c, [out.c]);

		renderZOutput(
			this.elements.outputs.z,
			inA, inB,
			bin2dec[out.z.join('')]);
	}
}

return App;

})();

