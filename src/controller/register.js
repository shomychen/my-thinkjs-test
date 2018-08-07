const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
  async indexAction() {
    await this.display(); // 渲染模板,通过 await 等待 display 方法的返回
  }
};
