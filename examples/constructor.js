// 使用 jsdoc 描述一个构造器(ES5)

/**
 * 定义一个人
 *
 * @constructor
 * @property {string} 姓名
 * @property {number} 年龄
 * @property {string} 性别
 */
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  /**
   * @default 'unknown'
   */
  this.sex = sex || 'unknown';
}
/**
 * 定义一个方法
 * 
 * @alias Person.sayHello
 * @return
 */
Person.prototype.sayHello = function (){
  console.log('Hello World!');
};
