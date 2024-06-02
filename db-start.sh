#!/bin/bash

docker-compose up -d

sleep 6

docker exec mongo1 /scripts/rs-init.sh