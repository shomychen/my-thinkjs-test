const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
  async indexAction() {
    await this.display(); // 渲染模板,通过 await 等待 display 方法的返回
  }
  /**
   * 添加信息
   * @return {[type]} [description]
   */
  async addAction() {
    const data = this.post('username,password'),
      // 分解，方便使用
      {
        username,
        password
      } = data,
      // 实例化usermodel
      model = this.model('user');
    // 检测用户名是否存在
    if (username) {
      const checkInfo = await model.where({
        'username': username
      }).getField('username', true);

      if (checkInfo) {
        return this.json({
          status: 200,
          data: {
            exist: true
          },
          msg: '用户名已存在'
        });
      }
    }
    // 拼装必填字段
    data.pid = 1;
    data.path = '0,1,';
    data.password = think.md5(data.password);
    data.token = think.md5(data.password + new Date());
    // 注册用户
    const id = await model.add(data).catch(err => {
      const msg = think.isError(err) ? err : new Error(err);
      return this.json({
        status: 110,
        data: data,
        msg: msg
      });
    });
    data.id = id;
    return this.json({
      status: 200,
      data: data,
      msg: '添加用户成功'
    });
  }
  /**
   * 删除信息
   * @return {[type]} [description]
   */
  async deleteAction() {
    const username = this.post('username');
    const model = this.model('user');
    const data = await model.where({
      username
    }).find();
    if (think.isEmpty(data)) {
      return this.json({
        status: 110,
        msg: '当前数据不存在'
      });
    } else {
      const result = model.where({
        username
      }).delete();
      if (think.isEmpty(result)) {
        return this.json({
          status: 110,
          msg: '删除失败'
        });
      }
      return this.json({
        status: 200,
        data: {},
        msg: '删除成功'
      });
    }
  }

  /**
   * 修改数据
   * @return {[type]} [description]
   */
  async putAction() {
    const data = this.post();
    const {
      username
    } = data;
    const model = this.model('user');
    if (!username) {
      return this.json({
        msg: '用户名不能为空'
      });
    } else {
      const checkInfo = await model.where({
        username
      }).getField('username', true);
      if (!checkInfo) {
        return this.json({
          msg: '当前数据不存在'
        });
      }
    }
    const result = await model.where({
      username
    }).update(data);
    if (think.isEmpty(result)) {
      return this.json({
        status: 110,
        msg: '修改失败'
      });
    } else {
      return this.json({
        status: 200,
        data: {},
        msg: '修改成功'
      });
    }
  }
};
