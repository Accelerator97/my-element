// 这个插件 把 字符串 转换成 第一个字母大写的驼峰形式
const uppercamelcase = require('uppercamelcase')
const fileSave = require('file-save')
const fs = require('fs')
const path = require('path')
// process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
const componentname = process.argv[2]
const componentName = uppercamelcase(componentname)


// 添加到 components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

