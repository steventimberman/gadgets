# Gadgets

#### Small apps to be displayed as one single page webapp.

### Local setup

Make sure you have installed:
- [Python 3.7](https://www.python.org/downloads/)
- [{oetry](https://python-poetry.org/docs/#installation)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)


Clone the `gadgets` repo from Github. In either your 

### Architecture

Consists of a python Flask server, in the directory `server`, and a ReactJS frontend, in the directory `client`. 
When built (with yarn build, or with the setup hot-reloading), static files are sent to `server/server/static` to be rendered.

### Run Locally

Open 2 terminals.

##### Terminal 1:

```sh
$ cd $GADGETS_HOME/server
$ poetry run flask run
```

##### Terminal 2:

```sh
$ cd $GADGETS_HOME/client
$ yarn start
```

Then navegate to [http://127.0.0.1:5000/](http://127.0.0.1:5000/)
