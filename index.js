var needle = require('needle');
var URL = "http://www.oschina.net";

var OSChina = function(config) {
  this.config = config;
  this.code = "";
  this.access_token = "";
}

// OpenAPI 授权登录页面的 URL
OSChina.prototype.oauth2_authorize = function() {
  return URL + "/action/oauth2/authorize?client_id=" + this.config.client_id + "&response_type=code&redirect_uri=" + this.config.redirect_uri + "&state="; 
}

// authorization_code 方式获取 AccessToken
OSChina.prototype.oauth2_token = function(data, callback) {
  data.client_id = this.config.client_id;
  data.client_secret = this.config.client_secret;
  data.grant_type = "authorization_code";
  data.redirect_uri = this.config.redirect_uri;
  data.code = this.code;
  needle.post(URL + "/action/openapi/token", data, function (error, response, body) {
    return callback(error, body);
  }); 
}

// 获取当前登录用户的账户信息
OSChina.prototype.openapi_user = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/user", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 用户详情
OSChina.prototype.user_information = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/user_information", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 个人主页详情
OSChina.prototype.my_information = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/my_information", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 头像更新
OSChina.prototype.portrait_update = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/portrait_update", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取好友列表
OSChina.prototype.friends_list = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/friends_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取动态列表
OSChina.prototype.active_list = function(data, callback) {
  needle.post(URL + "/action/openapi/active_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 更新好友关系（加关注、取消关注）
OSChina.prototype.update_user_relation = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/update_user_relation", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取新闻列表
OSChina.prototype.news_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/news_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取新闻详情
OSChina.prototype.news_detail = function(data, callback) {
  needle.post(URL + "/action/openapi/news_detail", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取讨论区的帖子列表(对应android的 问答 分享 综合 职业 站务)
OSChina.prototype.post_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/post_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 发布帖子
OSChina.prototype.post_pub = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/post_pub", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取讨论区的帖子详情
OSChina.prototype.post_detail = function(data, callback) {
  needle.post(URL + "/action/openapi/post_detail", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取动弹列表 （最新动弹列表 我的动弹）
OSChina.prototype.tweet_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/tweet_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取动弹列表
OSChina.prototype.tweet_detail = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/tweet_detail", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 发布动弹
OSChina.prototype.tweet_pub = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/tweet_pub", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 删除动弹
OSChina.prototype.tweet_delete = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/tweet_delete", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 发布博客
OSChina.prototype.blog_pub = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/blog_pub", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取博客列表
OSChina.prototype.blog_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/blog_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取博客推荐列表
OSChina.prototype.blog_recommend_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/blog_recommend_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取博客详情
OSChina.prototype.blog_detail = function(data, callback) {
  needle.post(URL + "/action/openapi/blog_detail", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取用户博客列表
OSChina.prototype.user_blog_list = function(data, callback) {
  needle.post(URL + "/action/openapi/user_blog_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取博客评论列表
OSChina.prototype.blog_comment_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/blog_comment_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 发表博客评论
OSChina.prototype.blog_comment_pub = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/blog_comment_pub", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 回复博客评论
OSChina.prototype.blog_comment_reply = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/blog_comment_reply", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 删除用户博客
OSChina.prototype.user_blog_delete = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/user_blog_delete", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取评论列表
OSChina.prototype.comment_list = function(data, callback) {
  needle.post(URL + "/action/openapi/comment_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 发表博客评论
OSChina.prototype.blog_comment_pub = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/blog_comment_pub", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 回复评论
OSChina.prototype.comment_reply = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/comment_reply", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 删除评论
OSChina.prototype.comment_delete = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/comment_delete", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取收藏列表
OSChina.prototype.favorite_list = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/favorite_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 添加收藏
OSChina.prototype.favorite_add = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/favorite_add", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 取消收藏
OSChina.prototype.favorite_remove = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/favorite_remove", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取软件详情
OSChina.prototype.project_detail = function(data, callback) {
  needle.post(URL + "/action/openapi/project_detail", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取软件分类列表(只有2级)
OSChina.prototype.project_catalog_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/project_catalog_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 软件分类下的的软件列表
OSChina.prototype.project_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/project_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// Tag下的软件列表
OSChina.prototype.project_tag_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/project_tag_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取留言列表
OSChina.prototype.message_list = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/message_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 删除留言
OSChina.prototype.message_delete = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/message_delete", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取搜索列表
OSChina.prototype.search_list = function(data, callback) {
  data.client_id = this.config.client_id;
  needle.post(URL + "/action/openapi/search_list", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 获取用户通知
OSChina.prototype.user_notice = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/user_notice", data, function (error, response, body) {
    return callback(error, body);
  });
}

// 清除用户通知
OSChina.prototype.clear_notice = function(data, callback) {
  data.access_token = this.access_token;
  needle.post(URL + "/action/openapi/clear_notice", data, function (error, response, body) {
    return callback(error, body);
  });
}

module.exports = function(config) {
  return new OSChina(config);
}