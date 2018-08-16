const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    await this.display(); // 渲染模板,通过 await 等待 display 方法的返回
  }
  /**
   * 添加信息
   * @return {[type]} [description]
   */
  async addAction() {
    const data = this.post('name,age,subject,exAge,goodSubject,experience,characteristic,cases,school,certificate,phone'),
      // 分解，方便使用
      {
        name, age, subject, exAge, goodSubject, experience, characteristic, cases, school, certificate, phone
      } = data,
      // 实例化usermodel
      model = this.model('applicate');
    // 注册用户
    const id = await model.add(data).catch(err => {
      const msg = think.isError(err) ? err : new Error(err);
      return this.json({
        errorCode: 0,
        data: data,
        msg: msg
      });
    });
    data.id = id;
    return this.json({
      errorCode: 0,
      data: data,
      msg: '添加用户成功'
    });
  }
};
