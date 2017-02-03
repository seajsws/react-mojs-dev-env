# react-mojs-dev-env
A local dev environment/starter kit for React apps, includes Mojs library. Adapted from a tutorial on
[Scotch.io](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

####More Info:
[Yarn package manager](https://yarnpkg.com/docs/install)
[Webpack](https://webpack.github.io/)
[Babel](https://babeljs.io/docs/setup/#installation)
[mojs.io : Motion for the Web](http://mojs.io/tutorials/shape/)

After this week's Mojs hack night, I decided it was high time to put together a basic, all-purpose starter kit for react/babel/es6 projects.
Since Mojs relies on the babel runtime, this will allow you to experiment with the library as well as try integrating it into a React app,
if so inclined.

###Instructions
1. Clone the repo
2. Install Yarn - follow the instructions from the link above. Requires NodeJS.
3. Type `yarn install` to install dependencies - it works much like npm (at least for the basics)
4. Once you have all the dependencies installed, type `yarn start` to build the app and run webpack dev server. In a browser, visit the
address listed in your console to see the working example!
5. As you make changes, leave webpack dev server running in the background - the app will rebuild itself and refresh the page. You may
also need to manually refresh the browser window from time to time. 
6. This project was assembled on a Windows 10 computer so it should work fine for a variety of OSes, depending on your version of Node.
7. Feel free to make changes to the config files and submit pull requests! Pursue much win and profit!! :fire::metal:
