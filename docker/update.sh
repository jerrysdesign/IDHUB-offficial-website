#!/bin/bash

set -e
DIR_PATH=$(dirname $(readlink -f $0))
NAME=$1

if [ -z $NAME ]; then
    echo "bash update.sh {NAME}"
    exit 1
fi

cd $DIR_PATH/../
git pull $NAME master
npm install

cd $DIR_PATH/
docker-compose build idhubweb01
docker rm -f idhubweb01
docker-compose up -d idhubweb01
docker ps -a

echo -e "\n\nUpdate finished.($(date))\n"
