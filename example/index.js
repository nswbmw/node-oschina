var config = require('./config');
var OSC = require('../index')(config);
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send("<html><head><meta charset='UTF-8'></head><body><a href='" + OSC.oauth2_authorize() + "'>访问 OSChina</a></body></html>")
});

app.get('/callback', function (req, res) {
  OSC.code = req.query.code;// 必需
  OSC.oauth2_token({}, function (err, result) {
    OSC.access_token = result.access_token;// 必需
    res.send("<html><head><meta charset='UTF-8'></head><body><a href='/openapi_user'>获取当前登录用户的账户信息</a><br><a href='/my_information'>获取个人主页详情</a><br><a href='/post_list'>获取讨论区的帖子列表(对应android的 问答 分享 综合 职业 站务)</a></body></html>");
  });
});

app.get('/openapi_user', function (req, res) {
  OSC.openapi_user({dataType: 'xml'}, function (err, result) {
    res.charset = 'utf8'
    res.set('Content-Type', 'text/plain');
    res.send(result);
  });
});

app.get('/my_information', function (req, res) {
  OSC.my_information({}, function (err, result) {
    res.send(result);
  });
});

app.get('/post_list', function (req, res) {
  OSC.post_list({tag: 'Node.js'}, function (err, result) {
    res.send(result);
  });
});

app.listen(3000);