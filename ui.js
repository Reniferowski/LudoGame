"use strict";
const React = require("react");
const { Text } = require("ink");

const importJsx = require("import-jsx");

const Menu = importJsx("./HomeScreen/HomeScreen");

const App = () => <Menu />;

module.exports = App;
