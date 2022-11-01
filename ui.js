"use strict";
const React = require("react");

const importJsx = require("import-jsx");

const HomeScreen = importJsx("./HomeScreen/HomeScreen");

const App = () => <HomeScreen />;

module.exports = App;
