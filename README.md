# react-require-todos
Todo application demo implemented by using react for rendering, requirejs as module loader, directorjs for url routing, and babel for jsx precompiling.

## Install and start
Fistly install necessary packages via npm:

    npm install
And we presume that you have installed gulp, babel, babel-cli, bower, express, etc, gloabally. If not you should install them with the "npm install -g" prefix.

To complile the jsx files and do other building work, use:

    gulp
To check the app running:

    gulp serve
And then visit http://localhost:3000/ by default.
## Lisense
MIT

## Note
The director module got from bower is originally in non-AMD format, to enable it getting properly required by requireJS we modified it's wrapper. Better solutions are still to be found.

## More info
Check the [todomvc](https://github.com/tastejs/todomvc) and [reactjs](https://github.com/facebook/react) repos.
