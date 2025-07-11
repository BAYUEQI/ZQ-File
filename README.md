# ZQ-File (Cloudflare Workers Pastebin)

一个基于 Cloudflare Workers 的极简文本/订阅托管服务，支持短链分享、自定义名称、在线编辑、删除、复制，适合用作订阅链接托管、代码片段分享、临时文本存储等。

## ✨ 功能特色
- 云端托管，无需服务器，永久免费
- 支持任意文本内容（如订阅、代码、配置等）
- 自动生成短链，支持自定义名称
- 现代化响应式前端，支持手机/PC
- 在线编辑、删除、复制内容和链接
- 首页展示全部托管内容
- 登录保护，安全可靠

## 🚀 快速部署
1. Fork 或下载本项目代码
2. 在 Cloudflare Workers 新建 Worker，上传 `file.js` 代码
3. 绑定KV命名空间（如`file`），并在Worker设置中配置环境变量 `file`
4. 在KV中添加登录信息：
   - key: `user`，value: `你的用户名`
   - key: `password`，value: `你的密码`
5. 保存并部署，访问你的 Worker 域名即可使用

## 🛠️ API使用方法

### 登录获取token
```bash
curl -X POST "https://你的域名/api/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"你的用户名","password":"你的密码"}'
```
返回：
```json
{ "code": 1, "token": "ok" }
```

### 新建文本/订阅
```bash
curl -X POST "https://你的域名/api/paste" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ok" \
  -d '{"text":"你的内容","name":"可选自定义名称"}'
```

### 获取内容
```bash
curl "https://你的域名/api/paste?id=短链ID"
```

### 编辑内容
```bash
curl -X PUT "https://你的域名/api/paste" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ok" \
  -d '{"id":"短链ID","text":"新内容","name":"新名称"}'
```

### 删除内容
```bash
curl -X DELETE "https://你的域名/api/paste" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ok" \
  -d '{"id":"短链ID"}'
```

### 获取全部短链
```bash
curl "https://你的域名/api/list"
```

### 获取自定义名称
```bash
curl "https://你的域名/api/name?id=短链ID"
```

### 直接访问短链
```
GET https://你的域名/短链ID
```
返回纯文本内容

## 🖥️ 前端界面
- 首页支持文本提交、短链展示、全部内容列表、编辑/删除/复制等操作
- 响应式设计，适配手机和PC
- 支持SVG favicon和自定义logo

## 🔒 安全说明
- 登录信息仅存储在你的 Cloudflare KV，前端只保存token
- 除非你主动分享，内容不会被第三方看到
- 无第三方统计、广告、追踪代码

## ❓ 常见问题
- **Q: 为什么KV里有很多key？**
  - A: 每条内容、短链、名称都会单独存储，属于正常现象。
- **Q: 如何防止短链ID和user/password冲突？**
  - A: 代码已自动避开user、password、list等保留字。
- **Q: 如何批量上传？**
  - A: 可用脚本循环调用API。

## 📄 License
MIT

---
> 本项目由 [BAYUEQI](https://github.com/BAYUEQI) 开发维护，欢迎Star和PR！ 
