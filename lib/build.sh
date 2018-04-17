#!/bin/bash

declare -a files=(
	"./gates/NAND.js"
	"./gates/NOT.js"
	"./gates/AND.js"
	"./gates/OR.js"
	"./gates/XOR.js"
	"./$1/HalfAdder.js"
	"./$1/FullAdder.js"
	"./$1/Add4.js"
);

BUNDLE_PATH="./site/core.js"

[ -e $BUNDLE_PATH ] && rm $BUNDLE_PATH

for file in "${files[@]}"; do
	sed -E '/require|module.exports/d' $file >> $BUNDLE_PATH
done
