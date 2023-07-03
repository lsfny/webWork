# JavaScript

## JavaScript简介

### JavaScript能够改变HTML内容

使用 `getElementById()`是方法之一，例如

```javascript
document.getElementById("demo").innerHTML = "Hello JavaScript";
```

该语句通过id查找到demo并使用 `innerHTML`将 `Hello JavaScript`插入的那个位置。

### JavaScript能够改变HTML属性

```html
<button onclick="document.getElementById('myImage').src='/i/eg_bulbon.gif'">开灯</button>
```

本例通过改变 `<img>` 标签的 `src` 属性（source）来改变一张 HTML 图像。

### JavaScript能够改变HTML样式

```javascript
document.getElementById("demo").style.fontSize = "25px";
```

### JavaScript能够隐藏/显示HTML元素

```javascript
document.getElementById("demo").style.display="none";
document.getElementById("demo").style.display="block";
```

## JavaScript使用

### `<script>`标签

在 HTML 中，JavaScript 代码必须位于 `<script>` 与 `</script>` 标签之间。

### `<head>` 或 `<body>` 中的 JavaScript

您能够在 HTML 文档中放置任意数量的脚本。

脚本可被放置与 HTML 页面的 `<body>` 或 `<head>` 部分中，或兼而有之。

### 外部脚本

脚本可放置于外部文件，它的文件后缀名是 `.js`

```
<script src="myScript.js"></script>
```

使用上述语句引用外部脚本。

**注意**：外部脚本不能有 `script`标签

### 外部脚本优势

在外部文件中放置脚本有如下优势：

* 分离了 HTML 和代码
* 使 HTML 和 JavaScript 更易于阅读和维护
* 已缓存的 JavaScript 文件可加速页面加载

如果想使用多个脚本可添加多个 `script`标签

### JavaScript输出

* 使用 `window.alert()` 写入警告框
* 使用 `document.write()` 写入 HTML 输出
* 使用 `innerHTML` 写入 HTML 元素
* 使用 `console.log()` 写入浏览器控制台

## JavaScript语句

JavaScript 语句由以下构成：

值、运算符、表达式、关键词和注释。

> 注意，请为语句块添加 `{}`。

### 值

#### 变量

- 使用 `var`定义变量，可以重复声明变量。
- 建议在脚本开头声明所有变量。
- 用 `=`为变量赋值。
- 变量存在作用域，通过 `var`声明的变量没有块作用域，建议使用 `let`声明。
- 在相同作用域中通过 `var`重新声明一个 `let`是不允许的，反过来也是不允许的。
- 不需要定义类型，可以自己推断出类型。

#### 常量

- 使用 `const`定义，与 `let`类似，但是不能重新赋值。
- 必须在声明时赋值。
- 不是真正的常数，只是定义了对值的常量的引用。
- 不能修改原始值，但可以修改常量对象的属性，如果常量是数组，也可以修改他的数组元素。

### 运算符

#### 常见运算符

 `+, -, *, /, %, ++, --`。

其中 `+`可用于数字，表示相加，也可用于字符串，将两个字符串连接。

#### 比较运算符

`==, ===, !=, !==, >, <, <=, >=, ?`

#### 逻辑运算符

`&&, ||, !`

#### 类型运算符

`typeof, instanceof`

#### 位运算符

`&, |, ~, ^, <<, >>, >>>`

### 表达式

通过对值的处理得到的值，用来处理数据。

### 关键字

> break do instanceof typeof case else new var catch finally return void continue for switch while debugger function this with default if throw delete in try

### 注释

使用 `//`并在后面跟上注释语句，浏览器不会允许这些语句。

## 函数

使用关键字 `function`定义，后接函数名和传入参数，然后是函数语句，例如：

``function sum(num1, num2) {     return num1 + num2; }``

## 对象

对象是JavaScript中最常用的一个类型，有两种创建对象的方式

- ```
  var person = new Object();//生成空对象
  person.name = 'Elon Musk';//设置对象的属性
  person.age = 46;
  person.job = 'SpaceX Rocket';
  person.sayName = function(){    //设置对象的方法/函数，注意此处
      console.log(this.name);
  };
  ```
- ```
  var person = {
      name: 'Lary Page',
      age: 47,
      job: 'Software Engineer',
      sayName: function(){        //注意此处
          console.log(this.name);
      }
  };
  ```

## 数组

- JavaScript的数组的每一项都可以存放任意属性，但是不建议。
- JavaScript的数组大小可以动态调整
- 创建数组有两种方法
  - ``var colors = newArray('red', 'blue', 'green');``
  - ``var colors = ['red', 'blue', 'green'];``

常用数组方法如下：

- 元素联合：`join`
- 堆栈方法：`push, pop`
- 队列方法：`shift, unshift`
- 反转数组项：`reverse`
- 链接方法：`contact`
- 分片方法：`slice`
- splice方法：`splice`，可进行删除、插入、替换操作

## others

### classList

- 用于在元素中添加、移除、切换css类。
- 属性有 `add, contains, item, remove, toggle`。
- `add`用于添加类，`remove`用于删除类，`contains`用于判断是否存在类，`toggle`用于切换类。

### querySelector

- 获取文档中的元素，默认只获取第一个匹配到的元素
- 如果想获取全部元素应使用 `querySelectorAll`

# TypeScript

## 什么是Typescript

- 它是JavaScript的超集，可以编译成纯JavaScript。
- 它为JavaScript加上了可选类型，能够在编码器给出错误提示。
- 可以使用ES6特性（当前我们处于ES5）。
- 后缀名为 `.ts`，可在 `vscode`中直接运行。

## let和const

不再使用 `var`，使用 `let`声明变量，使用 `const`声明常量，且作用域以 `{}`为界。

## 解构

可以将对象、数组中的元素拆分到需要变量中，例如：

- 解构数组

  ```typescript
   let input = [89, 64, 2018, 10];
   let [first, second] = input;//注意使用[]
   console.log(first); // 89
  ```
- 解构对象

  ```typescript
  let o = {
    a: "foo",
    b: 12,
    c: "bar"
  };
  let {a, b} = o;
  ```

## 函数

### 完整函数定义

`function`加函数名，后跟参数及类型，最后是返回类型，然后是函数块，例如：

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

可以不添加类型，TS将自动推断，但推荐使用。

### 可选参数

在参数后添加 `?`，例如：

```typescript
function greeting(firstName: string, lastName?: string) {
  if(lastName) {
      return `Hello ${firstName} ${lastName}!`;
  }
  return `Hello ${firstName}!`;
}
```

函数参数为一个或两个都正确。

**注意：可选参数必须放在必要参数之后。**

### 默认参数

在参数后添加初始值，例如：

```typescript
function greeting(firstName: string, lastName = 'Wang') {
  return `Hello ${firstName} ${lastName}!`;
}
```

该函数默认 `lastname`为 `wang`。

### 剩余参数

可以将所有参数放进一个变量中，需要在参数名前添加 `...`。例如：

```typescript
function greeting(firstName: string, ...restName: string[]) {
  return `Hello ${firstName} ${restName.join(' ')}!`;
}
```

参数个数可以为0，也可以有任意个。

### 箭头函数

简化了函数定义，不在使用 `function`，示例如下：

```typescript
let greeting1 = () => `Hello TS!`;
```

## 类

### 类的定义和使用

- 使用 `class`关键字定义类，类名默认大写，使用大驼峰命名法。
- 属性定义为：`属性名:属性类型;`，例如：`name: string;`
- 使用 `constructor`关键字定义构造函数，如果没有TS将自动生成。
- 函数定义不再需要使用 `function`关键字。
- 使用 `new`关键字生成对象。

### 类的属性和函数访问权限

- 默认为 `public`。
- 私有属性为 `private`，通常使用 `_`开头命名。
- 关键字 `readonly`使属性只能在初始化时赋值。

### 静态属性

- 关键字 `static`修饰。
- 可直接使用不需要实例化。

### 继承

- 使用关键字 `extends`。
- 可以使用 `super`调用父类方法。
- 子类可以使用父类属性和方法。

### 模块

- 一个 `.ts`文件就是一个模块。
- 使用关键字 `export`对外部暴露元素。
- 使用关键字 `import`引入模块。
