This folder contains all the files for the Node.js server to use and generate patient data.

# Brief Structure
* server
  * index.js - Main file of the server
  * patientGen.js - File for generating patient data
  * utilities.js - Extra utility functions
  * roster.json - JSON file of the full patient data
  * package.json - List of the project dependencies 

# Getting Started

As always, if this is your first time here, make sure to run `npm install` in a terminal in this directory. 
That will install all the dependencies listed in the `package.json` file into a directory called `node_modules`.

# Resolving Common Issues

If any issues arise while trying to install the dependencies, first try deleting the `node_modules` folder first
and trying again. If the issue persists, try deleting the `package-lock.json` file too and trying again.

# Starting the Server
Simply run `node index.js` to get the node server up and running.