# Hood Finder

Hood Finder is a versatile mobile app and HTTP-based API designed to facilitate neighborhood queries based on various metrics.

## Table of Contents

- [Installation](#installation)
- [Justifications](#Justifications)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contact](#contact)

## Installation

### Backend

Before proceeding, ensure Docker is installed on your environment. The server and MySQL database run within Docker containers.

To set up the server and database, execute the `init-project.sh` script located in the project directory using the command:

```sh
sh init-project.sh
```

that doing this next steps:

1. npm install to Backend.
2. run docker-compose up.

Docker containers:

- mysql port "3306"
- adminer port "9090"
- backend port "8080"

if from some reason the script wont work.

### Frontend

The App Runs on Expo so you must first set up the deployment environment: https://reactnative.dev/docs/environment-setup

- if you using android to run expo please make sure the android ports are align with port 8080 else request to local containers wont work.
  to do this you run this command:

  ```sh
  adb reverse tcp:8080 tcp:8080
  ```

To initialize the frontend, execute the init-Frontend.sh script found in the project directory using the following command:

```sh
sh init-Frontend.sh
```

This script will perform the following steps:

1. Install dependencies for the frontend.
2. Address any known bugs in the libraries.

To start the app, run either "npm run start" or "npx expo start", and select your preferred platform. Personally, I recommend using Android.

## Justifications

### DB Justification for SQL Database:

1. The provided data is a well-defined schema and SQL databases are designed and structured for it, making it easy to enforce data integrity and consistency.
2. MySQL is faster when selecting a large number of records.
3. For Future aggregation purposes, for example, join with table Users that connect the user to his neighborhood. The relations are much clearer, as well as the time of execution of the joins.

To summarize, if the dataset grows in complexity or requires more sophisticated querying capabilities in the future, an SQL database can accommodate those needs effectively while providing strong data consistency and integrity. However, if the dataset were to expand significantly or if there were requirements for unstructured or semi-structured data, a NoSQL database might become a more viable option.

## Usage

returning neighborhoods using auto complete search bar with filters such as age range, max distance, and sort.

## Documentation

[API Documentation](http://localhost:8080/api-docs) - The server must be up for this documentation.

## Contact

For questions, feedback, or support, contact [Amit Shwartz](shwartzamit17@email.com).
