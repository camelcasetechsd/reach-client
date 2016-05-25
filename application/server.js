"use strict";

// Make sure to include the JSX transpiler
require('node-jsx').install({extension: '.jsx'});

var React = require('react'),
		ReactDOMServer = require('react-dom/server'),
		HtmlComponent = require('./server/html.jsx'),
		Port = 4444;

/* 
 * Koa 
 *
var koa = require('koa');
var server = koa();

server.use(function *() {
	var html = ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlComponent));
  this.body = html;
});

server.listen(Port, function() {
  console.log('open server at port:' + Port);
});
*/

/* 
 * Express 
 */
var express = require('express');
var server = express();

server.use(function(req, res) {
	var html = ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlComponent));
  res.send(html);

});	

server.listen(Port, function() {
  console.log('open server at port:' + Port);
});


