#!/bin/bash

HOST="hkcloud.owliwik.com"
DIR="/home/icmeet2/htdocs/icmeet2.owliwik.com/"

USER="icmeet2"

echo Deploying to $HOST...

npm run build

echo To continue deploying, stop the process in pm2
ssh $USER@$HOST

echo Copying files...
rsync -avz package.json package-lock.json ./build/* $USER@$HOST:$DIR

echo \n
echo Finished.
echo You can start your service now
ssh $USER@$HOST