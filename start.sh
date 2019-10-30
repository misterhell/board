#!/bin/bash

cd ./server/ && docker-compose up -d 

cd ../ && yarn start
