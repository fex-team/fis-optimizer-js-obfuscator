# fis-optimizer-js-obfuscator
[javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)的fis插件。

## 使用

```
npm i -g fis-optimizer-js-obfuscator
```

## 配置

在项目配置文件（默认fis-conf.js）配置

```javascript
fis.match('your/js/path', {
  optimizer: fis.plugin('js-obfuscator', option)
})
```

`option`是[javascript-obfuscator的配置](https://github.com/javascript-obfuscator/javascript-obfuscator#options)，也可以使用`fis-optimizer-js-obfuscator`内置的配置，如：

```javascript
fis.match('your/js/path', {
  optimizer: fis.plugin('js-obfuscator', {obfuscatorLeval: 'high'})
});

fis.match('your/js/path', {
  optimizer: fis.plugin('js-obfuscator', {obfuscatorLeval: 'medium'})
});

fis.match('your/js/path', {
  optimizer: fis.plugin('js-obfuscator', {obfuscatorLeval: 'low'})
});
```

`high`、`medium`、`low`分别对应[javascript-obfuscator的推荐配置](https://github.com/javascript-obfuscator/javascript-obfuscator#high-obfuscation-low-performance)
