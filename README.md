## node-oschina ##

Node.js 版开源中国 API
### 安装 ###

    npm install oschina

### 简单说明 ###

- HTTP请求方式：均为 POST
- 请求参数： 
  - 参数： object，不能为空至少为 `{}` ，示例见 example
  - 必选： 可省略 client\_id 、access\_token 和有默认值的参数
  - 可选： 不添加则使用默认值
- 支持格式： JSON、JSONP、XML

详见 [开源中国 API 文档](http://www.oschina.net/openapi/docs)。

### 使用方法 ###

不依赖 Express，简单使用如下：

**config.js**

    module.exports = {
      client_id: "xxx",
      client_secret: "xxx",
      redirect_uri: "xxx"
    }

**app.js**

    var config = require('./config');
    var OSC = require('oschina')(config);

    OSC.xxx(yyy, function (err, result) {
      console.log(result);
    });

其中 `xxx` 为请求的方法，`yyy` 为请求的参数对象。具体使用方法见 example 。