# Quick start guide
If you want to run this on your own machine, there are a few things you need to configure first.

## Required programs

| Program | Purpose | Install |
|:-------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| Node.js | Our server will be running on Node which has a nice package manager. Once you have Node installed, make sure you are in the root directory and run: <br> ``` $ npm install ``` | http://nodejs.org/ |
| Bower | Bower is used to install our client-side dependencies like jQuery and D3.js. Once you have Bower installed, make sure you are in the root directory and run: <br> ``` $ bower install ``` | http://bower.io/ |
| Ruby | We are using Ruby solely to take advantage of the Sass CSS-preprocessor which will be very useful for making complex visuals. Once you install Ruby, install the Compass css framework (http://compass-style.org/): <br>``` $ gem install compass ``` | https://www.ruby-lang.org/en/ |

Great, almost there! Now make sure you are in the 'diversityDesert' directory and run:

```
$ gulp build && node app.js
```

## Gulp tasks

The following tasks can be executed by running:
```
$ gulp [task]
```
| Task | Purpose |
|---------|------------------------------------------------------------------------------------------------------------------|
| clean | This task deletes the build directory. |
| scripts | This task minifies and concatenates the javascript files in the 'js' directory and injects them into 'build/js'. |
| css | This task minifies and concatenates css files in the 'css' directory and injects them into 'build/css'. |
| libs | This task grabs the main vendor files from the 'bower_components' directory and injects them into 'build/lib'. |
| build | This task first runs the 'clean' task and then runs all other tasks. |