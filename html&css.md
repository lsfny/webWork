# html

## html文件结构

- 开始标签：确定元素类型作用。
- 结束标签：与开始标签类似，比开始标签多一个 `/`。
- 内容：输入文本本身。
- 元素：由以上三部分构成的整体。

## 文档内容

- `<!DOCTYPE html>`:声明文档类型。
- `<html></html>`:包裹整个页面。
- `<head></head>`:容器，包含所有页面设置。
- `<title></title>`:设置页面标题。
- `<body></body>`:显示内容。

## 常见标签

### 注释

 用 `<!--`和 `-->`包括起来。

### 空元素

只有开始标签，如

- 换行：`<br>`
- 水平分割线：`<hr>`
- 输入框：`<input>`

### 元素属性

额外信息，不会在浏览器中直接显示，如

```html
<!-- 带属性的段落输入框 -->
<p title="这是个title属性">鼠标移上来试试！</p>
<!-- 带属性的输入框 -->
<input type="text">
<input type="password">
```

一个属性必须包含如下内容

1. 一个空格，位于属性和元素名称之间
2. 属性名称
3. 属性值，由 `""`引起来

### 标题

从大到小，`<h1>~<h6>`。

### 文本格式

- `<del></del>`:删除线
- `<mark></mark>`:高亮显示
- `<ins></ins>`:补充
- `<u></u>`:下划线
- `<small></small>:`缩小
- `<em></em>`:倾斜字体

### 超链接

``<a></a>``

说明：

1. `herf`：跳转的地址。
2. `target`：跳转网址方式，`_blank`为在新建页面打开（默认为 `__self`)。
3. 内容为显示内容。

### 锚点

使用 `id="~"` 标记，使用 `herf="#~" `跳转。

### 图片

例子

```html
<img src="hello.jpg"alt="Hello World" width="100px" height="100px">
```

说明：

1. `src`为文件路径，可为本地地址或网址。
2. `alt`为获取图片失败时的文字描述。
3. `.`表示当前目录，`..`表示上一级目录。

### 表格

`<table></table>`标签
用 `<tr>`表示行，`<td>`表示行内元素，`<th>`为表头。

### 列表

无序列表 `<ul>`
有序列表 `<ol>`

### 表单

`<form>`，其中有很多不同属性的输入框，如

- 文本： `text`
- 密码：`password`
- 数字： `number`
- 勾选框：`checkbox`
- 日期：`date`
- 文件：`file`
- 提交： `submit`
- 重置：`reset`

### 其他

HTML元素可分为区块元素和内联元素

- 区块元素：以新行显示，如 `<h1>, <pre>, <ul>, <table>, <div>`。
- 内联元素：一个接一个显示，如 `<span>, <input>, <td>, <a>, <img>`。

# css

## css语法

一条CSS样式规则由两个主要的部分构成：选择器，以 `{}`包裹的一条或多条声明。

## 选择器

分为元素选择器还有 `id`选择器和 `class`选择器。

### 元素选择器

使用元素名加声明，例如：

```css
h1 {
  color: bule;}
```

### id选择器

使用 `#`加 `id`名，例如：

```css
#sky{
  color: blue;
}
```

### class选择器

使用 `.`加类名，例如：

```css
.center{
  text-align: center;
}
```

## css如何生效

一般有三种方法：外部样式表，内部样式表，内联样式。

### 外部样式表

在html的 `<head>`标签中使用

```css
<linkrel="stylesheet"type="text/css"href="mycss.css">
```

这样即可使用 `mycss.css`文件中定义的样式。

### 内部样式表

将样式放在HTML文件中，即在 `<head>`添加 `<style>`标签并在里面定义样式，例如

```html
<html>
<head>
  <style>
    body {
      background-color: linen;
    }
  </style>
</head>
</html>
```

### 内联样式

即直接将样式规则写到要应用的元素中，例如：

```css
<h3 style="color:green;">I am a heading</h3>
```

### 关于各种优先级

从高到低分别是：

1. 内联样式
2. 内部样式表或外部样式表
3. 浏览器缺省样式

## 颜色，尺寸，对齐

### 颜色

可使用颜色名称或颜色值（例如 `#ff0000` )来设置颜色。

### 尺寸

使用 `height`和 `width`设置元素内容占据的尺寸，常见的有：

* 像素 `px`
* 百分比 `%`
* 相对于根元素的字体大小 `rem`
* 相对于元素的字体大小 `em`
* 相对于视口宽度的1%`vw`
* 相对于视口高度的1%`vh`

### 对齐

可以简单设置 `text-align`属性为 `left, center, right`，之后 `flex`中详细讲解。

## 盒子模型

![盒子模型](https://qige.io/web/brief-css/img/bd78f5d3be0673d6.jpg)

如图可以看到，一个HTML元素可以看作一个盒子，从内到外分别是**内容 `content`，内边距 `padding`，边距 `border`，外边距 `margin`**

## 定位

`position`属性用于对元素进行定位。该属性有以下一些值：

* static 静态
* relative 相对
* fixed 固定
* absolute 绝对

### static

设置静态定位 `position: static`，这是默认的定位方式，按照出现的先后顺序从上到下，从左到右进行元素安排。

### relative

设置相对定位 `position: relative`，这将把元素相对于静态位置进行偏移。

### fixed

设置固定定位 `position: fixed`，这将使元素相对视口固定不动。

### absolute

设置绝对定位 `position: absolute`，这将使元素相对最近设置非静态父元素进行偏移，若该元素的所有父元素都没有设置，那么相当于 `<body>`这个父元素。

## 溢出

当元素内容过长无法显示完全时，通过 `overflow`属性处理溢出的部分。溢出属性有以下内容：

* visible 默认值，溢出部分不被裁剪，在区域外面显示
* hidden 裁剪溢出部分且不可见
* scroll 裁剪溢出部分，但提供上下和左右滚动条供显示
* auto 裁剪溢出部分，视情况提供滚动条

## 浮动

使用 `float`属性让元素进行移动，周围元素也将重新排列。

如果希望浮动取消，可使用 `clear: both`样式删除浮动属性。

## 不透明度

使用 `opacity`对元素设置不透明度，值在 `[0.0~1.0]`之间，值越低透明度越高，图片越接近原图。

## 组合选择器

可对 `元素、id、class`选择器进行组合实现更精细化的设置。

### 后代选择器

以空格作为分隔，如 `.haha p`代表从 `class`为 `haha`的子元素为 `p`的所有元素的使用该选择器的样式。

### 子选择器

以 `>`作分隔，对直接后代起作用，间接后代无效。

## 伪类和伪元素

用于定义元素某种特点状态的行为，例如：

* 鼠标移到某元素上变换背景颜色
* 超链接访问前后访问后样式不同
* 离开必须填写的输入框时出现红色的外框进行警示
* 保证段落的第一行加粗，其它正常

使用语法为选择器后使用 `:`，然后跟上某个伪元素/伪类，例如：

```css
p:hover {background-color: rgb(226,43,144);}
```

该语句实现鼠标移到段落则改变背景颜色 。

## flex

### flex-diretion:

- 设置主轴。默认 `row`为主轴，可使用 `flex-direction: column`将Y轴设为主轴。
- 值可选 `row, column, row-reverse, column-reverse`。

### justify-content:

- 设置 `main axis`对齐方式。
- 值有 `start, end, center, space-between, space around, spece-evenly`，显示如下图：
  ![justify-content各属性示例](https://cdn.jsdelivr.net/gh/lsfny/images/PicGo20230616224705.png)

### flex-wrap:

- 默认为 `nowrap`。
- 设置为 `wrap`之后，在屏幕变小后可自动换行显示，否则会显示不完全。
- 使用 `wrap-reverse`之后位于前面的先换行。

### flex-flow:

- 综合了 `flex-direction`和 `flex-wrap`。
- 使用实例：`flex-flow: row wrap`。

### order

- 用于调整次序，值为整数，默认为0。

### align-items:

- 设置 `cross axis`对齐方式。
- 值有 `stretch, center, flex-start, flex-end, baseline`，示例如下：
  ![align-items图片.png](https://cdn.jsdelivr.net/gh/lsfny/images/PicGoalign-items图片.png.png)

### align-content

- 与justify-`content`类似，值一样，用于 `cross axis`轴。

### flex-grow:

- 设置增长速度，用于控制元素长度，后接数字。
- 默认为 `0`。
- 不是按比例的。

### min-height:

- 设置高度，可以用于填充屏幕。

### transition-duration:

- 过渡时间设置，后接时间，如 `transition-duration: 0.2s`

### flex-basis:

- 规定弹性项目的初始长度。

### @media

- 用于响应式布局。
- 可设置最大或最小屏幕尺寸实现不同尺寸不同显示效果。

## others

### font awesome

- 一套图标字体库和css框架
- 使用 `<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">`即可在后面的HTML中直接使用

### backdrop-filter

- 可以用于设置背景样式，如模糊或颜色偏移。
