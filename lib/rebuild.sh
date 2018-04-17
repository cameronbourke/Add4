#!/bin/bash

./lib/build.sh chips &&
echo "Progress has been made. Chips rebuilt and the browser refreshed!"
./lib/refresh_chrome.sh
