#!/bin/bash

HOST="156.67.214.27"
DIR="/home/owliwik-icmeet/htdocs/icmeet.owliwik.com/"

USER="owliwik-icmeet"

echo Deploying to $HOST

npm run build

scp -r package.json package-lock.json ./build/* $USER@$HOST:$DIR
