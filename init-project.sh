#!/bin/bash
# #go to Backend folder
cd Backend

# # Run npm install
npm i

# # go back to the root folder
cd ..

# Define paths and filenames
DOCKER_COMPOSE_FILE="docker-compose.yml"

init_project() {
  echo "Initializing project..."
  docker-compose down
  echo "Starting Docker containers..."
  docker-compose -f "$DOCKER_COMPOSE_FILE" up -d
}

init_project
