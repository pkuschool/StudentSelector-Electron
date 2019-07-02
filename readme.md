# 点名系统 Plus

![点名系统海报](点名海报.png)

使用 node.js, Electron 构建的网页应用。

## 功能

点名，点名，点名！

- [x] 最基础的管理功能
- [x] 最基础的点名功能
- [x] 最大化、最小化、关闭、拖动窗口与无边框
- [x] 文件读取支持
- [ ] 多个导入功能
  - [ ] 来自 Excel 文件
  - [x] 来自 JSON
- [ ] 更好的代码整洁度

## Set-up

请确认本机已经有 node.js 与 npm 的环境。

```bash
npm install
```

什么？Electron 安装太慢？请在```.npmrc```写入以下内容（一般位于用户文件夹）：

```bash
registry=http://registry.npm.taobao.org/
electron_mirror=https://npm.taobao.org/mirrors/electron/
```

## 运行


```bash
npm run start
```

或者，Windows 用户也可以直接运行```run.vbs```
