module.exports = class extends think.Controller {
  // 前置操作
  // async __before() {
  //   const userInfo = await this.session('userInfo');
  //   // 获取用户的 session 信息，如果为空，返回 false 阻止后续的行为继续执行
  //   if (think.isEmpty(userInfo)) {
  //     console.log('没有userInfo');
  //     return false;
  //   }
  // }
};
