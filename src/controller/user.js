const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.json({
      status: 200,
      data: '用户名'
    });
  }

  async getAction() {
    const user = this.model('user'); // controller 里实例化模型
    const data = await user.select(); // 多条查询select()
    return this.success(data);
  }

  // 查看
  async queryAction() {
    const username = this.get('username'); // 传值是否传username测试用：http://localhost:8361/user/userName?username=admin，
    console.log(username);
    const model = this.model('user'); // SELECT 用户表，因配置加了prefix所以是里查找到的表是'demo_user'
    const data = await model.where({
      'username': username
    }).find(); // 单条查询find()表中是否包含get传参过来的username
    let resultData = {};
    let msg = '';
    // 判断是否已经存在于数据中
    if (think.isEmpty(data.username)) {
      resultData = {
        exist: false
      };
      msg = '用户名不存在';
    } else {
      resultData = {
        exist: true
      };
      msg = '用户名存在';
    }
    return this.json({
      status: 200,
      data: resultData || {},
      msg: msg,
    });
  }

};
