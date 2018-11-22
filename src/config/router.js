module.exports = [
  ['/test'], // GET 访问 http://127.0.0.1:8360/test,http://127.0.0.1:8360/test/get
  ['/test/myGet', 'test/get'], // GET 访问 http://127.0.0.1:8360/test/myGet
  ['/custom/info', 'test/info'], // GET 访问 http://127.0.0.1:8360//custom/info
  ['/obj', 'myThinkObject'],
  ['/currentUser', 'user/get'],
  ['/fake_chart_data','/register/add'],
  ['/web/user/query','/user/query'], // 访问 http://127.0.0.1:8360/web/user/query等同于/user/query
];
