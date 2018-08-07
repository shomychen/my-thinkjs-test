const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return 3;
  }
  getList() {
    return this.field('name').select();
  }
};
