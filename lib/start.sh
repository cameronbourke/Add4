#!/bin/bash

function finish {
	kill $(ps aux | grep '[p]ython -m SimpleHTTPServer' | awk '{print $2}')
}

trap finish EXIT

echo "How did you get conned into building an adder?"
./lib/build.sh $1 &&
echo "Anyways, build succeeded!"
cd site
python -m SimpleHTTPServer 4424 &> /dev/null & 
cd ../
echo 'Opening chrome at localhost:4424 to save you sweet sweet time' 

./lib/open_chrome.sh
echo "Now when you make changes inside chips/ the browser will reload"
echo "Just going to sit here and wait for any changes..."
ls chips/*.js site/*.css site/*.html | entr -p lib/rebuild.sh
