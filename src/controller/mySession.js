const Base = require('./base.js');

module.exports = class extends Base {
/*  indexAction() {
    return this.display();
  }*/
  // 获取 session
  async indexAction() {
    const data = await this.session('name');
  }
};
