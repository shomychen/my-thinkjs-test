module.exports = class extends think.Controller {
  indexAction() {
    this.body = 'hello test index!';
  }

  getAction() {
    this.body = 'hello test get!';
  }

  infoAction() {
    this.body = 'hello test info!';
  }

  nameAction() {
    const name = this.post('id');
    // this.body = name;
    console.log(name);
  }
};
