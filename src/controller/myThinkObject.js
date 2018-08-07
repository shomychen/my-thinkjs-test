module.exports = class myThinkObjectController extends think.Controller {
  indexAction() {
    console.log(think.ROOT_PATH); // 当前项目的根目录
    console.log(think.APP_PATH); // 当前项目的APP 根目录
    console.log(think.env); // 当前当前运行环境
    console.log(think.version); // 当前thinkjs版本
    console.log(think.camelCase('index_index')); // 把字符串转成驼峰表示法
    if (think.isInt(11)) {
      return console.log('is 整数');
    }
  }
};
