# movies-web-app

The project was divided in two: a back-end API that gathers data from The Movie Database and a front-end application that consumes data from the implemented API.
The project as a whole implements the MVC pattern, with the API implementing models and controllers and the application being responsible for the view.

Node.js was used for the back-end and React.js for the front-end.

##Running the application
The back-end application uses an enviroment variable to access The Movie Database API. For that to be available, you need to insert an `MOVIE_DATABASE_API_KEY` on `/backend/.env`.

To run the app, execute the command:

###`npm run install_all`

This will install all the needed dependencies, for both back-end and front-end.

After that, to start de application, execute:

###`npm start`

If the browser is not automatically started, the application can be found on [http://localhost:3000](http://localhost:3000).

The front-end also has implement tests. To run then, after navigating to the front-end folder run:

###`npm test`

##Libraries
The following libraries were used in the back-end:
*__axios__ - used to make requests to The Movie Database API;
*__cors__ - used to enable CROSS ORIGIN RESOURCE SHARING;
*__dotenv__ - used to define environment variables;
*__express__ - used for routing;
*__mongoose__ - used to access the database.

In the front-end:
*__react__ and dependencies - used to create dynamic user interfaces;
*__axios__ - used to make requests to the back-end API;
*__enzyme__ and dependencies - used to create test files;
*__i18next__ and dependencies - used for internationalization;
*__node-sass__ - used to compile scss files instead of css;
*__redux__ and dependencies - used to manage a global state accross the application.
