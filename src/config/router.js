module.exports = [
  ['/test'], // GET 访问 http://127.0.0.1:8360/test,http://127.0.0.1:8360/test/get
  ['/test/myGet', 'test/get'], // GET 访问 http://127.0.0.1:8360/test/myGet
  ['/custom/info', 'test/info'], // GET 访问 http://127.0.0.1:8360//custom/info
  ['/obj', 'myThinkObject'],
  ['/user', 'user'],
  ['/register'],
];
