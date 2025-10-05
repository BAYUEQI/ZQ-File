// index.js
const html = `
<!DOCTYPE html>
<html>
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-B4GXYY3RXV"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-B4GXYY3RXV');
  </script>
  <meta charset="utf-8">
  <link rel="icon" type="image/svg+xml" href='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="10" y="8" width="20" height="28" rx="4" fill="%23667eea"/><rect x="14" y="12" width="12" height="20" rx="2" fill="%23fff"/><path d="M34 32a8 8 0 1 0-2.5-15.6A10 10 0 1 0 8 34h26z" fill="%23a8edea" stroke="%23667eea" stroke-width="2"/><rect x="18" y="18" width="4" height="2" rx="1" fill="%23667eea"/><rect x="18" y="22" width="8" height="2" rx="1" fill="%23667eea"/><rect x="18" y="26" width="8" height="2" rx="1" fill="%23667eea"/></svg>'>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZQ-File</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
      color: #333;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    
    .header h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      font-weight: 300;
    }
    
    .header p {
      opacity: 0.9;
      font-size: 1.1em;
    }
    
    .content {
      padding: 40px;
    }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #555;
    }
    
    textarea {
      width: 100%;
      height: 200px;
      border: 2px solid #e1e5e9;
      border-radius: 12px;
      padding: 15px;
      font-size: 14px;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      resize: vertical;
      transition: all 0.3s ease;
      background: #fafbfc;
      max-height: 400px;
      overflow-y: auto;
      word-wrap: break-word;
      word-break: break-all;
    }
    
    textarea:focus {
      outline: none;
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    .btn {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 25px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      margin-right: 10px;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    
    .btn:active {
      transform: translateY(0);
    }
    
    .btn-danger {
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }
    
    .btn-danger:hover {
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    }
    
    .btn-success {
      background: linear-gradient(135deg, #51cf66 0%, #40c057 100%);
      box-shadow: 0 4px 15px rgba(81, 207, 102, 0.3);
    }
    
    .btn-success:hover {
      box-shadow: 0 6px 20px rgba(81, 207, 102, 0.4);
    }
    
    .btn-secondary {
      background: linear-gradient(135deg, #868e96 0%, #6c757d 100%);
      box-shadow: 0 4px 15px rgba(134, 142, 150, 0.3);
    }
    
    .btn-secondary:hover {
      box-shadow: 0 6px 20px rgba(134, 142, 150, 0.4);
    }
    
    .paste-link {
      margin: 25px 0;
      padding: 20px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 12px;
      color: white;
      text-align: center;
      display: none;
    }
    
    .paste-link.show {
      display: block;
      animation: slideIn 0.5s ease;
    }
    
    .paste-link a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1em;
      word-break: break-all;
    }
    
    .paste-link a:hover {
      text-decoration: underline;
    }
    
    .paste-content {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border: 2px solid #667eea;
      display: none;
      max-height: 80vh;
      overflow-y: auto;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 14px;
      line-height: 1.6;
      word-wrap: break-word;
      word-break: break-all;
    }
    
    .paste-content.show {
      display: block;
      animation: slideIn 0.5s ease;
    }
    
    #paste-text {
      white-space: pre-wrap;
      margin-bottom: 15px;
      max-height: 300px;
      overflow-y: auto;
      word-wrap: break-word;
      word-break: break-all;
    }
    
    .paste-content::-webkit-scrollbar {
      width: 8px;
    }
    
    .paste-content::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    .paste-content::-webkit-scrollbar-thumb {
      background: #667eea;
      border-radius: 4px;
    }
    
    .paste-content::-webkit-scrollbar-thumb:hover {
      background: #5a6fd8;
    }
    
    .all-pastes {
      margin-top: 40px;
      padding-top: 30px;
      border-top: 2px solid #e1e5e9;
    }
    
    .all-pastes h3 {
      color: #555;
      margin-bottom: 20px;
      font-size: 1.5em;
      font-weight: 600;
    }
    
    .paste-item {
      background: #f8f9fa;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
      border-left: 3px solid #667eea;
      transition: all 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .paste-item:hover {
      background: #e9ecef;
      transform: translateX(5px);
    }
    
    .paste-item a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      word-break: break-all;
      flex: 1;
    }
    
    .paste-item a:hover {
      color: #764ba2;
    }
    
    .paste-actions {
      display: flex;
      gap: 8px;
      margin-left: 15px;
    }
    
    .action-btn {
      background: none;
      border: none;
      padding: 5px 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
    }
    
    .action-btn:hover {
      background: rgba(0,0,0,0.1);
    }
    
    .edit-btn {
      color: #667eea;
    }
    
    .copy-btn {
      color: #51cf66;
    }
    
    .delete-btn {
      color: #ff6b6b;
    }
    
    .stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 15px;
      background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      border-radius: 12px;
      color: #555;
    }
    
    .loading {
      text-align: center;
      padding: 20px;
      color: #666;
    }
    
    .error {
      background: #fee;
      color: #c33;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #c33;
      margin: 20px 0;
    }
    
    .success {
      background: #efe;
      color: #3c3;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #3c3;
      margin: 20px 0;
    }
    
    .edit-form {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border: 2px solid #667eea;
      display: none;
      max-height: 80vh;
      overflow-y: auto;
    }
    
    .edit-form.show {
      display: block;
      animation: slideIn 0.5s ease;
    }
    
    .edit-form textarea {
      height: 150px;
      margin-bottom: 15px;
      max-height: 300px;
      overflow-y: auto;
      word-wrap: break-word;
      word-break: break-all;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }
      
      .container {
        border-radius: 15px;
      }
      
      .header {
        padding: 20px;
      }
      
      .header h1 {
        font-size: 2em;
      }
      
      .content {
        padding: 20px;
      }
      
      .stats {
        flex-direction: column;
        gap: 10px;
      }
      
      .paste-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      
      .paste-actions {
        margin-left: 0;
        width: 100%;
        justify-content: flex-end;
      }
      
      #token-box {
        margin-top: 15px !important;
        max-width: none !important;
        min-width: auto !important;
        width: 100% !important;
      }
      
      #token-box .header {
        padding: 10px 12px !important;
      }
      
      #token-box .header span {
        font-size: 13px !important;
      }
      
      #token-box button {
        padding: 4px 8px !important;
        font-size: 11px !important;
      }
      
      #token-content {
        padding: 12px !important;
      }
      
      #token-value {
        font-size: 10px !important;
        padding: 6px !important;
      }
    }
    .login-form {
      max-width: 350px;
      margin: 40px auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(102,126,234,0.08);
      padding: 32px 24px 24px 24px;
      text-align: center;
      display: none;
    }
    .login-form h2 {
      margin-bottom: 18px;
      color: #667eea;
      font-weight: 600;
    }
    .login-form input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      font-size: 15px;
      margin-bottom: 15px;
      outline: none;
      transition: border 0.2s;
    }
    .login-form input:focus {
      border-color: #667eea;
    }
    .login-form .btn {
      width: 100%;
      margin: 0;
    }
    .login-form #login-error {
      color: #ff6b6b;
      margin-top: 10px;
      min-height: 22px;
    }
    
    .help-text {
      font-size: 12px;
      color: #666;
      margin-top: 5px;
      margin-bottom: 15px;
    }
  </style>
</head>
<body>
  <div class="login-form" id="login-form">
    <h2>登录</h2>
    <input type="text" id="login-username" placeholder="用户名" autocomplete="username">
    <input type="password" id="login-password" placeholder="密码" autocomplete="current-password">
    <button class="btn btn-success" onclick="login()">登录</button>
    <div id="login-error"></div>
  </div>
  <div class="container">
    <div class="header">
      <h1>
        📋 ZQ-File
      </h1>
      <p>Cloudflare Workers 驱动的文本托管服务</p>
    </div>
    
    <div class="content">
  <form id="paste-form">
        <div class="form-group">
          <label for="text">📝 在这里输入你的文本...</label>
          <textarea id="text" placeholder="支持任何文本内容，包括代码、配置、链接等..."></textarea>
        </div>
        <div class="form-group">
          <label for="custom-title">📝 自定义显示名称（可选）</label>
          <input type="text" id="custom-title" placeholder="例如: 我的重要笔记，留空则显示链接" style="width: 100%; padding: 12px; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 14px; margin-bottom: 15px;">
          <div class="help-text">用于在列表中显示，支持任意字符，长度1-50字符</div>
        </div>
        <div class="form-group">
          <label for="custom-name">🔗 自定义链接后缀（可选）</label>
          <input type="text" id="custom-name" placeholder="例如: my-note-123，留空则自动生成" style="width: 100%; padding: 12px; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 14px;">
          <div class="help-text">支持字母、数字、连字符(-)、下划线(_)、点号(.)；其他字符会自动删除</div>
        </div>
        <button type="submit" class="btn">🚀 提交</button>
  </form>
      
  <div class="paste-link" id="paste-link"></div>
  <div class="paste-content" id="paste-content">
    <h4>📄 文本内容</h4>
    <div id="paste-text"></div>
    <button class="btn btn-success" onclick="copyPasteContent()">💾 复制</button>
    <button class="btn btn-secondary" onclick="closePasteContent()">❌ 取消</button>
  </div>
      
      
      <div class="all-pastes" id="all-pastes">
        <div class="loading">🔄 加载中...</div>
      </div>
    </div>
  </div>

  <script>
    const form = document.getElementById('paste-form');
    const pasteLink = document.getElementById('paste-link');
    const pasteContent = document.getElementById('paste-content');
    const allPastes = document.getElementById('all-pastes');
    
    let currentEditId = null;
    
    // 处理与验证自定义链接格式
    function sanitizeCustomName(name) {
      if (!name) return '';
      return name.replace(/[^a-zA-Z0-9._-]/g, '');
    }
    function validateCustomName(name) {
      if (!name) return true; // 允许为空
      const regex = /^[a-zA-Z0-9._-]+$/;
      return regex.test(name);
    }
    
    // 验证自定义显示名称格式
    function validateCustomTitle(title) {
      if (!title) return true; // 允许为空
      return title.length >= 1 && title.length <= 50;
    }
    
    form.onsubmit = async (e) => {
      e.preventDefault();
      const text = document.getElementById('text').value.trim();
      const customTitle = document.getElementById('custom-title').value.trim();
      let customName = document.getElementById('custom-name').value.trim();
      // 自动清理非法字符
      customName = sanitizeCustomName(customName);
      // 回写清理后的值，便于用户看到最终结果
      document.getElementById('custom-name').value = customName;
      
      if (!text) {
        showError('请输入内容');
        return;
      }
      
      // 验证自定义显示名称格式
      if (customTitle && !validateCustomTitle(customTitle)) {
        showError('自定义显示名称格式无效，长度1-50字符');
        return;
      }
      
      // 验证自定义链接格式
      if (customName && !validateCustomName(customName)) {
        showError('自定义链接格式无效，支持字母、数字、连字符(-)、下划线(_)、点号(.)');
        return;
      }
      
      try {
        // 显示加载状态
        pasteLink.innerHTML = '🔄 正在提交...';
        pasteLink.classList.add('show');
        
      const res = await authFetch('/api/paste', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            text: text,
            title: customTitle || null,
            name: customName || null
          })
      });
        
      const data = await res.json();
        
        if(data.code === 1 && data.id){
          pasteLink.innerHTML = 
            '<div>✅ 提交成功！</div>' +
            '<div style="margin-top: 10px;">' +
            '<strong>你的链接:</strong><br>' +
            '<a href="/' + data.id + '" target="_blank">' + location.origin + '/' + data.id + '</a>' +
            '</div>';
          pasteLink.classList.add('show');
          pasteContent.classList.remove('show');
          
          // 清空输入框
          document.getElementById('text').value = '';
          document.getElementById('custom-title').value = '';
          document.getElementById('custom-name').value = '';
          
          // 刷新列表
          loadAllPastes();
        } else {
          showError('提交失败: ' + (data.message || '未知错误'));
        }
      } catch (error) {
        showError('提交失败: ' + error.message);
      }
    };
    
    function showError(message) {
      pasteLink.innerHTML = '<div class="error">❌ ' + message + '</div>';
      pasteLink.classList.add('show');
    }
    
    function showSuccess(message) {
      pasteLink.innerHTML = '<div class="success">✅ ' + message + '</div>';
      pasteLink.classList.add('show');
    }
    
    function showCopySuccess(id, message) {
      // 找到对应的复制按钮
      const copyBtn = document.querySelector('[data-id="' + id + '"].copy-btn');
      if (copyBtn) {
        // 移除现有的提示
        const existingTip = document.querySelector('.copy-tip');
        if (existingTip) {
          existingTip.remove();
        }
        
        // 创建新的提示
        const tip = document.createElement('div');
        tip.className = 'copy-tip';
        tip.style = 'position:fixed;background:#51cf66;color:white;padding:6px 10px;border-radius:6px;font-size:11px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.3);pointer-events:none;white-space:nowrap;';
        tip.innerHTML = '✅ ' + message;
        
        // 添加到body
        document.body.appendChild(tip);
        
        // 计算位置（按钮上方）
        const rect = copyBtn.getBoundingClientRect();
        tip.style.left = (rect.left + rect.width / 2 - tip.offsetWidth / 2) + 'px';
        tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';
        
        // 2秒后自动移除
        setTimeout(() => {
          if (tip.parentNode) {
            tip.remove();
          }
        }, 2000);
      }
    }
    
    function showCopyError(id, message) {
      // 找到对应的复制按钮
      const copyBtn = document.querySelector('[data-id="' + id + '"].copy-btn');
      if (copyBtn) {
        // 移除现有的提示
        const existingTip = document.querySelector('.copy-tip');
        if (existingTip) {
          existingTip.remove();
        }
        
        // 创建新的提示
        const tip = document.createElement('div');
        tip.className = 'copy-tip';
        tip.style = 'position:fixed;background:#ff6b6b;color:white;padding:6px 10px;border-radius:6px;font-size:11px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.3);pointer-events:none;white-space:nowrap;';
        tip.innerHTML = '❌ ' + message;
        
        // 添加到body
        document.body.appendChild(tip);
        
        // 计算位置（按钮上方）
        const rect = copyBtn.getBoundingClientRect();
        tip.style.left = (rect.left + rect.width / 2 - tip.offsetWidth / 2) + 'px';
        tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';
        
        // 2秒后自动移除
        setTimeout(() => {
          if (tip.parentNode) {
            tip.remove();
          }
        }, 2000);
      }
    }
    
    async function editPaste(id) {
      try {
        const res = await authFetch('/api/paste?id=' + id);
        const nameRes = await authFetch('/api/name?id=' + id);
        const titleRes = await authFetch('/api/title?id=' + id);
        
        if (res.ok) {
          const text = await res.text();
          const name = nameRes.ok ? await nameRes.text() : '';
          const title = titleRes.ok ? await titleRes.text() : '';
          
          // 隐藏其他可能显示的内容
          pasteLink.classList.remove('show');
          pasteContent.classList.remove('show');
          
          // 移除现有的编辑框
          const existingEditForm = document.querySelector('.edit-form');
          if (existingEditForm) {
            existingEditForm.remove();
          }
          
          // 找到对应的paste-item
          const pasteItem = document.querySelector('[data-id="' + id + '"]').closest('.paste-item');
          if (pasteItem) {
            // 创建编辑框
            const editForm = document.createElement('div');
            editForm.className = 'edit-form show';
            editForm.innerHTML = 
              '<h4>✏️ 编辑内容</h4>' +
              '<div class="form-group">' +
                '<label for="edit-title">📝 自定义显示名称</label>' +
                '<input type="text" id="edit-title" placeholder="例如: 我的重要笔记" style="width: 100%; padding: 12px; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 14px; margin-bottom: 15px;">' +
                '<div class="help-text">用于在列表中显示，支持任意字符，长度1-50字符</div>' +
              '</div>' +
              '<div class="form-group">' +
                '<label for="edit-name">🔗 自定义链接后缀</label>' +
                '<input type="text" id="edit-name" placeholder="例如: my-note-123" style="width: 100%; padding: 12px; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 14px; margin-bottom: 15px;">' +
              '<div class="help-text">支持字母、数字、连字符(-)、下划线(_)、点号(.)；其他字符会自动删除</div>' +
              '</div>' +
              '<textarea id="edit-text" placeholder="编辑你的内容..."></textarea>' +
              '<button class="btn btn-success" onclick="saveEdit()">💾 保存</button>' +
              '<button class="btn btn-secondary" onclick="cancelEdit()">❌ 取消</button>';
            
            // 在对应的paste-item后面插入编辑框
            pasteItem.parentNode.insertBefore(editForm, pasteItem.nextSibling);
            
            // 设置编辑内容
            document.getElementById('edit-text').value = text;
            document.getElementById('edit-title').value = title;
            document.getElementById('edit-name').value = name;
            currentEditId = id;
            
            // 滚动到编辑框
            editForm.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          showError('获取内容失败');
        }
      } catch (error) {
        showError('获取内容失败: ' + error.message);
      }
    }
    
    async function saveEdit() {
      const editTextElement = document.getElementById('edit-text');
      const editTitleElement = document.getElementById('edit-title');
      const editNameElement = document.getElementById('edit-name');
      
      if (!currentEditId || !editTextElement || !editTextElement.value.trim()) {
        showError('请先选择要编辑的内容并输入新内容');
        return;
      }
      
      const customTitle = editTitleElement ? editTitleElement.value.trim() : '';
      let customName = editNameElement ? editNameElement.value.trim() : '';
      // 自动清理非法字符
      customName = sanitizeCustomName(customName);
      if (editNameElement) editNameElement.value = customName;
      
      // 验证自定义显示名称格式
      if (customTitle && !validateCustomTitle(customTitle)) {
        showError('自定义显示名称格式无效，长度1-50字符');
        return;
      }
      
      // 验证自定义链接格式
      if (customName && !validateCustomName(customName)) {
        showError('自定义链接格式无效，支持字母、数字、连字符(-)、下划线(_)、点号(.)');
        return;
      }
      
      try {
        const res = await authFetch('/api/paste', {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: currentEditId,
            text: editTextElement.value.trim(),
            title: customTitle || null,
            name: customName || null
          })
        });
        
        const data = await res.json();
        
        if (data.code === 1) {
          showSuccess('编辑成功！');
          cancelEdit();
          loadAllPastes();
        } else {
          showError('编辑失败: ' + (data.message || '未知错误'));
        }
      } catch (error) {
        showError('编辑失败: ' + error.message);
      }
    }
    
    function cancelEdit() {
      const editForm = document.querySelector('.edit-form');
      if (editForm) {
        editForm.remove();
      }
      pasteContent.classList.remove('show');
      currentEditId = null;
    }
    
    async function showPasteContent(id) {
      try {
        const res = await authFetch('/api/paste?id=' + id);
        if (res.ok) {
          const text = await res.text();
          document.getElementById('paste-text').innerText = text;
          
          // 隐藏其他可能显示的内容
          pasteLink.classList.remove('show');
          const editForm = document.querySelector('.edit-form');
          if (editForm) {
            editForm.remove();
          }
          
          pasteContent.classList.add('show');
          
          // 滚动到内容区域
          pasteContent.scrollIntoView({ behavior: 'smooth' });
        } else {
          showError('获取内容失败');
        }
      } catch (error) {
        showError('获取内容失败: ' + error.message);
      }
    }
    
    function closePasteContent() {
      pasteContent.classList.remove('show');
      const editForm = document.querySelector('.edit-form');
      if (editForm) {
        editForm.remove();
      }
      document.getElementById('paste-text').innerText = '';
    }
    
    function copyPasteContent() {
      const text = document.getElementById('paste-text').innerText;
      if (text) {
        // 使用现代浏览器的Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(function() {
            showSuccess('内容已复制到剪贴板！');
          }).catch(function() {
            // 如果Clipboard API失败，使用传统方法
            fallbackCopyTextToClipboard(text);
          });
        } else {
          // 传统方法
          fallbackCopyTextToClipboard(text);
        }
      }
    }
    
    function copyPasteLink(id) {
      const link = location.origin + '/' + id;
      
      // 使用现代浏览器的Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(link).then(function() {
          showCopySuccess(id, '链接已复制到剪贴板！');
        }).catch(function() {
          // 如果Clipboard API失败，使用传统方法
          fallbackCopyTextToClipboard(link, id);
        });
      } else {
        // 传统方法
        fallbackCopyTextToClipboard(link, id);
      }
    }
    
    function fallbackCopyTextToClipboard(text, id) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          if (id) {
            showCopySuccess(id, '链接已复制到剪贴板！');
          } else {
            showSuccess('内容已复制到剪贴板！');
          }
        } else {
          if (id) {
            showCopyError(id, '复制失败，请手动复制');
          } else {
            showError('复制失败，请手动复制');
          }
        }
      } catch (err) {
        if (id) {
          showCopyError(id, '复制失败，请手动复制');
        } else {
          showError('复制失败，请手动复制');
        }
      }
      
      document.body.removeChild(textArea);
    }
    
    async function deletePaste(id) {
      if (!confirm('确定要删除这个文本吗？此操作不可恢复。')) {
        return;
      }
      
      try {
        const res = await authFetch('/api/paste', {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({id})
        });
        
        const data = await res.json();
        
        if (data.code === 1) {
          showSuccess('删除成功！');
          loadAllPastes();
        } else {
          showError('删除失败: ' + (data.message || '未知错误'));
      }
      } catch (error) {
        showError('删除失败: ' + error.message);
      }
    }
    
    function loadAllPastes() {
      authFetch('/api/list')
        .then(function(r) { return r.ok ? r.json() : []; })
        .then(function(list) {
          if(Array.isArray(list) && list.length){
            var html = 
              '<div class="stats">' +
              '<span>📊 总共 ' + list.length + ' 个文本</span>' +
              '</div>' +
              '<h3>📋 全部文本</h3>';
            
            // 获取所有名称、标题和时间
            Promise.all(list.map(function(id) {
              return Promise.all([
                authFetch('/api/name?id=' + id)
                  .then(function(r) { return r.ok ? r.text() : null; })
                  .catch(function() { return null; }),
                authFetch('/api/title?id=' + id)
                  .then(function(r) { return r.ok ? r.text() : null; })
                  .catch(function() { return null; }),
                authFetch('/api/time?id=' + id)
                  .then(function(r) { return r.ok ? r.json() : {}; })
                  .catch(function() { return {}; })
              ]).then(function(results){
                return { name: results[0], title: results[1], time: results[2] };
              });
            })).then(function(infoList) {
              for(var i = 0; i < list.length; i++){
                var id = list[i];
                var name = infoList[i].name;
                var title = infoList[i].title;
                var time = infoList[i].time || {};
                var ts = time.updatedAt || time.createdAt || null;
                var link = location.origin + '/' + id;
                var timeText = ts ? new Date(ts).toLocaleString() : '';
                var displayName = title ? (i + 1) + '. ' + title + ' (' + link + ')' : 
                                 name ? (i + 1) + '. ' + name + ' (' + link + ')' : 
                                 (i + 1) + '. ' + link;
                
                html += 
                  '<div class="paste-item">' +
                  '<a href="javascript:void(0)" data-id="' + id + '" class="paste-link-item" style="cursor: pointer;">' + displayName + '</a>' +
                  (timeText ? '<div style="color:#666;font-size:12px;margin-left:10px;white-space:nowrap;">🕒 ' + timeText + '</div>' : '') +
                  '<div class="paste-actions">' +
                  '<button class="action-btn copy-btn" data-id="' + id + '" title="复制链接">📋</button>' +
                  '<button class="action-btn edit-btn" data-id="' + id + '" title="编辑">✏️</button>' +
                  '<button class="action-btn delete-btn" data-id="' + id + '" title="删除">🗑️</button>' +
                  '</div>' +
                  '</div>';
              }
              
              allPastes.innerHTML = html;
              
              // 添加事件监听器
              var links = allPastes.querySelectorAll('.paste-link-item');
              for(var j = 0; j < links.length; j++){
                links[j].addEventListener('click', function() {
                  showPasteContent(this.getAttribute('data-id'));
                });
              }
              
              var editBtns = allPastes.querySelectorAll('.edit-btn');
              for(var k = 0; k < editBtns.length; k++){
                editBtns[k].addEventListener('click', function() {
                  editPaste(this.getAttribute('data-id'));
                });
              }
              
              var copyBtns = allPastes.querySelectorAll('.copy-btn');
              for(var m = 0; m < copyBtns.length; m++){
                copyBtns[m].addEventListener('click', function() {
                  copyPasteLink(this.getAttribute('data-id'));
                });
              }
              
              var deleteBtns = allPastes.querySelectorAll('.delete-btn');
              for(var l = 0; l < deleteBtns.length; l++){
                deleteBtns[l].addEventListener('click', function() {
                  deletePaste(this.getAttribute('data-id'));
                });
              }
            });
          } else {
            allPastes.innerHTML = '<h3>📋 暂无文本</h3><p style="color: #666; text-align: center;">还没有任何内容，快来创建第一个文本吧！</p>';
          }
        })
        .catch(function(error) {
          console.error('加载失败:', error);
          allPastes.innerHTML = '<div class="error">❌ 加载失败: ' + error.message + '</div>';
        });
    }
    
    // 如果是访问特定文本
    if(location.pathname.length > 1 && !location.pathname.startsWith('/api')){
      const id = location.pathname.slice(1);
      authFetch('/api/paste?id=' + id)
        .then(r => r.ok ? r.text() : '')
        .then(t => {
          if(t) {
            document.getElementById('paste-text').innerText = t;
            pasteContent.classList.add('show');
            
            // 隐藏其他可能显示的内容
            pasteLink.classList.remove('show');
            const editForm = document.querySelector('.edit-form');
            if (editForm) {
              editForm.remove();
            }
            
            // 滚动到内容区域
            pasteContent.scrollIntoView({ behavior: 'smooth' });
          }
        })
        .catch(error => {
          showError('加载内容失败: ' + error.message);
        });
    }
    
    // 页面加载时显示全部文本
    loadAllPastes();
    
    // 自动刷新列表（每30秒）
    setInterval(loadAllPastes, 30000);

    // 封装fetch，自动带token
    function authFetch(url, options = {}) {
      const token = localStorage.getItem('token') || '';
      options.headers = options.headers || {};
      options.headers['Authorization'] = 'Bearer ' + token;
      return fetch(url, options);
    }

    // 登录逻辑
    async function login() {
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value;
      if (!username || !password) {
        document.getElementById('login-error').innerText = '请输入用户名和密码';
        return;
      }
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.code === 1) {
        localStorage.setItem('token', data.token);
        showMain();
        if (typeof loadAllPastes === 'function') loadAllPastes();
        // 显示token
        renderTokenBox();
      } else {
        document.getElementById('login-error').innerText = data.message;
      }
    }

    function showLogin() {
      document.getElementById('login-form').style.display = 'block';
      document.querySelector('.container').style.display = 'none';
    }
    function showMain() {
      document.getElementById('login-form').style.display = 'none';
      document.querySelector('.container').style.display = 'block';
      renderTokenBox();
    }
    function checkLoginDisplay() {
      if (!localStorage.getItem('token')) {
        showLogin();
      } else {
        showMain();
      }
    }
    // 兼容DOMContentLoaded已触发和未触发的情况
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkLoginDisplay);
    } else {
      checkLoginDisplay();
    }

    function renderTokenBox() {
      let token = localStorage.getItem('token');
      let tokenBox = document.getElementById('token-box');
      if (!token) {
        if (tokenBox) tokenBox.remove();
        return;
      }
      if (!tokenBox) {
        tokenBox = document.createElement('div');
        tokenBox.id = 'token-box';
        tokenBox.style = 'margin:20px auto 0 auto;background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.1);padding:0;overflow:hidden;transition:all 0.3s ease;max-width:400px;min-width:250px;';
        
        // 创建头部（始终显示）
        const header = document.createElement('div');
        header.style = 'padding:12px 16px;background:rgba(255,255,255,0.1);color:white;display:flex;align-items:center;justify-content:space-between;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.1);';
        header.innerHTML = 
          '<div style="display:flex;align-items:center;gap:8px;">' +
            '<span style="font-size:16px;">🔑</span>' +
            '<span style="font-size:14px;font-weight:500;">API Token</span>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:8px;">' +
            '<button id="copy-token-btn" style="padding:6px 12px;border-radius:6px;border:none;background:rgba(255,255,255,0.2);color:white;cursor:pointer;font-size:12px;transition:all 0.2s;backdrop-filter:blur(5px);">复制</button>' +
            '<button id="logout-btn" style="padding:6px 12px;border-radius:6px;border:none;background:rgba(255,107,107,0.6);color:white;cursor:pointer;font-size:12px;transition:all 0.2s;backdrop-filter:blur(5px);">退出</button>' +
            '<span id="toggle-icon" style="font-size:12px;transition:transform 0.3s ease;">▼</span>' +
          '</div>';
        
        // 创建内容区域（可折叠）
        const content = document.createElement('div');
        content.id = 'token-content';
        content.style = 'padding:16px;background:rgba(255,255,255,0.9);border-top:1px solid rgba(255,255,255,0.2);display:none;backdrop-filter:blur(5px);';
        content.innerHTML = 
          '<div style="margin-bottom:12px;">' +
            '<div style="font-size:12px;color:#666;margin-bottom:6px;">完整 Token:</div>' +
            '<div id="token-value" style="font-family:monospace;font-size:11px;background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:8px;word-break:break-all;line-height:1.4;color:#333;">' + token + '</div>' +
          '</div>' +
          '<div style="font-size:11px;color:#999;text-align:center;">点击头部可折叠/展开</div>';
        
        tokenBox.appendChild(header);
        tokenBox.appendChild(content);
        document.querySelector('.header').appendChild(tokenBox);
        
        // 添加悬停效果
        tokenBox.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-2px)';
          this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
        });
        tokenBox.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        });
        
        // 折叠/展开功能
        header.addEventListener('click', function() {
          const content = document.getElementById('token-content');
          const icon = document.getElementById('toggle-icon');
          if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
          } else {
            content.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
          }
        });
        
        // 按钮事件
        document.getElementById('copy-token-btn').onclick = function(e) {
          e.stopPropagation();
          navigator.clipboard.writeText(token).then(function(){
            const btn = document.getElementById('copy-token-btn');
            const originalText = btn.innerText;
            btn.innerText = '已复制';
            btn.style.background = 'rgba(81,207,102,0.8)';
            setTimeout(() => {
              btn.innerText = originalText;
              btn.style.background = 'rgba(255,255,255,0.2)';
            }, 1500);
          });
        };
        
        document.getElementById('logout-btn').onclick = function(e) {
          e.stopPropagation();
          if (confirm('确定要退出登录吗？')) {
            localStorage.removeItem('token');
            location.reload();
          }
        };
      } else {
        document.getElementById('token-value').innerText = token;
      }
    }
  </script>
</body>
</html>
`;

export default {
  async fetch(request, env, ctx) {
    try {
    const url = new URL(request.url);
      
      // 添加CORS头
      const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-From',
      };
      // 统一返回工具
      const respond = {
        json(data, init = {}) {
          return new Response(JSON.stringify(data), { headers: { 'content-type': 'application/json', ...corsHeaders }, ...init });
        },
        text(data, init = {}) {
          return new Response(data, { headers: { 'content-type': 'text/plain; charset=utf-8', ...corsHeaders }, ...init });
        },
        html(data, init = {}) {
          return new Response(data, { headers: { 'content-type': 'text/html; charset=utf-8', ...corsHeaders }, ...init });
        }
      };
      
      // 处理OPTIONS请求
      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
      }
      
    // 前端页面
    if (url.pathname === '/' || url.pathname === '') {
        return respond.html(html);
    }
      
      // 登录接口
      if (url.pathname === '/api/login' && request.method === 'POST') {
        const { username, password } = await request.json();
        const realUser = await env.file.get('user');
        const realPwd = await env.file.get('password');
        if (realUser && realPwd && username === realUser && password === realPwd) {
          // 先查是否已有token
          let token = await env.file.get('user_token:' + username);
          if (token) {
            // 检查token是否还有效
            const user = await env.file.get('token:' + token);
            if (user === username) return respond.json({ code: 1, token });
          }
          // 没有token或token已失效，生成新token
          token = Math.random().toString(36).slice(2) + Date.now().toString(36);
          await env.file.put('token:' + token, username, { expirationTtl: 2592000 });
          await env.file.put('user_token:' + username, token, { expirationTtl: 2592000 });
          return respond.json({ code: 1, token });
        } else {
          return respond.json({ code: 0, message: '用户名或密码错误' });
        }
      }

      // token校验函数（异步）
      async function checkAuth(request, env) {
        const auth = request.headers.get('Authorization') || '';
        if (!auth.startsWith('Bearer ')) return false;
        const token = auth.slice(7);
        const user = await env.file.get('token:' + token);
        return !!user;
      }

      // API: 新建/获取/编辑/删除文本
    if (url.pathname.startsWith('/api/paste')) {
        // 判断是否来自ZQ-SubLink指定域名
        const fromZQSubLink = 
          request.headers.get('X-From') === 'ZQ-SubLink' &&
          (
            request.headers.get('Origin') === 'https://sublink.vpnjacky.dpdns.org' ||
            (request.headers.get('Referer') && request.headers.get('Referer').startsWith('https://sublink.vpnjacky.dpdns.org'))
          );
        // 只有PUT/DELETE需要token，POST需要token但ZQ-SubLink可以免token
        if (['PUT','DELETE'].includes(request.method) || (request.method === 'POST' && !fromZQSubLink)) {
          const authed = await checkAuth(request, env);
          if (!authed) return respond.json({ code: 0, message: '未登录' }, { status: 401 });
        }
      if (request.method === 'POST') {
          try {
            let { text, title, name } = await request.json();
            if (!text) return respond.json({ code: 0, message: '内容不能为空' }, { status: 400 });
            
            // 验证自定义显示名称格式
            if (title && (title.length < 1 || title.length > 50)) {
              return respond.json({ 
                code: 0, 
                message: '自定义显示名称格式无效，长度1-50字符' 
              }, { status: 400 });
            }
            
            // 服务器端清理并验证自定义链接后缀格式
            if (name) {
              name = name.replace(/[^a-zA-Z0-9._-]/g, '');
            }
            if (name && !/^[a-zA-Z0-9._-]+$/.test(name)) {
              return respond.json({ 
                code: 0, 
                message: '自定义链接格式无效，支持字母、数字、连字符(-)、下划线(_)、点号(.)' 
              }, { status: 400 });
            }
            
            // 生成唯一ID（如果提供了自定义名称，则使用它作为ID）
            const reserved = ['user', 'password', 'list', 'api'];
            let id;
            
            if (name) {
              // 使用自定义名称作为ID
              if (reserved.includes(name)) {
                return respond.json({ 
                  code: 0, 
                  message: '该名称为系统保留字，请更换其他名称' 
                }, { status: 400 });
              }
              
              // 检查ID是否已存在
              const existing = await env.file.get(name);
              if (existing) {
                return respond.json({ 
                  code: 0, 
                  message: '该链接已存在，请更换其他名称' 
                }, { status: 409 });
              }
              
              id = name;
            } else {
              // 自动生成ID
              do {
                id = Math.random().toString(36).slice(2, 8);
              } while (reserved.includes(id));
            }
            
            await env.file.put(id, text);
            // 记录创建时间（毫秒）
            await env.file.put(id + '_createdAt', Date.now().toString());
            
            // 存储自定义显示名称
            if (title) {
              await env.file.put(id + '_title', title);
            }
            
            let list = await env.file.get('list');
            list = list ? JSON.parse(list) : [];
            list.unshift(id);
            if (list.length > 100) list = list.slice(0, 100);
            await env.file.put('list', JSON.stringify(list));
            
            return respond.json({ code: 1, id });
          } catch (error) {
            return respond.json({ code: 0, message: '处理请求失败: ' + error.message }, { status: 500 });
          }
        } else if (request.method === 'PUT') {
          try {
            let { id, text, title, name } = await request.json();
            if (!id || !text) return respond.json({ code: 0, message: 'ID和内容不能为空' }, { status: 400 });
            
            // 检查原ID是否存在
            const existing = await env.file.get(id);
            if (!existing) return respond.json({ code: 0, message: '文本不存在' }, { status: 404 });
            
            // 验证自定义显示名称格式
            if (title && (title.length < 1 || title.length > 50)) {
              return respond.json({ 
                code: 0, 
                message: '自定义显示名称格式无效，长度1-50字符' 
              }, { status: 400 });
            }
            
            // 如果要修改名称（链接后缀）
            let newId = id;
            if (name !== undefined && name !== (await env.file.get(id + '_name') || '')) {
              // 验证新名称格式
              if (name) {
                name = name.replace(/[^a-zA-Z0-9._-]/g, '');
              }
              if (name && !/^[a-zA-Z0-9._-]+$/.test(name)) {
                return respond.json({ 
                  code: 0, 
                  message: '自定义链接格式无效，支持字母、数字、连字符(-)、下划线(_)、点号(.)' 
                }, { status: 400 });
              }
              
              const reserved = ['user', 'password', 'list', 'api'];
              
              // 如果提供了新名称且与原ID不同
              if (name && name !== id) {
                if (reserved.includes(name)) {
                  return respond.json({ 
                    code: 0, 
                    message: '该名称为系统保留字，请更换其他名称' 
                  }, { status: 400 });
                }
                
                // 检查新ID是否已存在
                const nameExists = await env.file.get(name);
                if (nameExists) {
                  return respond.json({ 
                    code: 0, 
                    message: '该链接已存在，请更换其他名称' 
                  }, { status: 409 });
                }
                
                // 迁移数据到新ID
                newId = name;
                
                // 复制原数据到新ID
                await env.file.put(newId, text);
                
                // 复制时间戳
                const createdAt = await env.file.get(id + '_createdAt');
                if (createdAt) await env.file.put(newId + '_createdAt', createdAt);
                
                // 删除原ID数据
                await env.file.delete(id);
                await env.file.delete(id + '_name');
                await env.file.delete(id + '_createdAt');
                await env.file.delete(id + '_updatedAt');
                
                // 更新列表中的ID
                let list = await env.file.get('list');
                if (list) {
                  list = JSON.parse(list);
                  list = list.map(item => item === id ? newId : item);
                  await env.file.put('list', JSON.stringify(list));
                }
              } else if (!name) {
                // 如果清空名称，不改变ID
                await env.file.delete(id + '_name');
              }
            } else {
              // 不修改名称，只更新内容
              await env.file.put(id, text);
            }
            
            // 记录修改时间（毫秒）
            await env.file.put(newId + '_updatedAt', Date.now().toString());
            
            // 处理自定义显示名称
            if (title !== undefined) {
              if (title) {
                await env.file.put(newId + '_title', title);
              } else {
                await env.file.delete(newId + '_title');
              }
            }
            
            // 如果提供了名称且与ID不同，则保存名称（用于显示）
            if (name && name !== newId) {
              await env.file.put(newId + '_name', name);
            }
            
            return respond.json({ code: 1, message: '更新成功', id: newId });
          } catch (error) {
            return respond.json({ code: 0, message: '更新失败: ' + error.message }, { status: 500 });
          }
        } else if (request.method === 'DELETE') {
          try {
            const { id } = await request.json();
            if (!id) return respond.json({ code: 0, message: 'ID不能为空' }, { status: 400 });
            const existing = await env.file.get(id);
            if (!existing) return respond.json({ code: 0, message: '文本不存在' }, { status: 404 });
            await env.file.delete(id);
            await env.file.delete(id + '_name');
            await env.file.delete(id + '_title');
            await env.file.delete(id + '_createdAt');
            await env.file.delete(id + '_updatedAt');
            let list = await env.file.get('list');
            if (list) {
              list = JSON.parse(list);
              list = list.filter(item => item !== id);
              await env.file.put('list', JSON.stringify(list));
            }
            return respond.json({ code: 1, message: '删除成功' });
          } catch (error) {
            return respond.json({ code: 0, message: '删除失败: ' + error.message }, { status: 500 });
          }
      } else if (request.method === 'GET') {
        // 获取内容也需要token校验
        const authed = await checkAuth(request, env);
        if (!authed) {
          return new Response('Unauthorized', { status: 401 });
        }
        const id = url.searchParams.get('id');
        if (!id) return new Response('Not found', { status: 404 });
        const text = await env.file.get(id);
        if (!text) return new Response('Not found', { status: 404 });
          return respond.text(text);
        }
      }
      
      // API: 获取所有文本
      if (url.pathname === '/api/list') {
        const authed = await checkAuth(request, env);
        if (!authed) return new Response('Unauthorized', { status: 401 });
        try {
          let list = await env.file.get('list');
          list = list ? JSON.parse(list) : [];
          return respond.json(list);
        } catch (error) {
          return respond.json([]);
        }
      }
      
      // API: 获取自定义名称
      if (url.pathname === '/api/name') {
        const authed = await checkAuth(request, env);
        if (!authed) return new Response('Unauthorized', { status: 401 });
        const id = url.searchParams.get('id');
        if (!id) return new Response('Not found', { status: 404 });
        const name = await env.file.get(id + '_name');
        if (!name) return respond.text('');
        return respond.text(name);
      }
      
      // API: 获取自定义显示名称
      if (url.pathname === '/api/title') {
        const authed = await checkAuth(request, env);
        if (!authed) return new Response('Unauthorized', { status: 401 });
        const id = url.searchParams.get('id');
        if (!id) return new Response('Not found', { status: 404 });
        const title = await env.file.get(id + '_title');
        if (!title) return respond.text('');
        return respond.text(title);
      }

      // API: 获取单条时间信息（createdAt/updatedAt）
      if (url.pathname === '/api/time') {
        const authed = await checkAuth(request, env);
        if (!authed) return new Response('Unauthorized', { status: 401 });
        const id = url.searchParams.get('id');
        if (!id) return new Response('Not found', { status: 404 });
        const createdAt = await env.file.get(id + '_createdAt');
        const updatedAt = await env.file.get(id + '_updatedAt');
        const result = { createdAt: createdAt ? Number(createdAt) : null, updatedAt: updatedAt ? Number(updatedAt) : null };
        return respond.json(result);
      }
      
    // 直接访问短链
    if (url.pathname.length > 1) {
      const id = url.pathname.slice(1);
      const text = await env.file.get(id);
      if (!text) return new Response('Not found', { status: 404 });
      return new Response(text, { 
        headers: { 
          'content-type': 'text/plain; charset=utf-8',
          ...corsHeaders
        } 
      });
    }
      
      return respond.html(html);
      
    } catch (error) {
      return new Response('Worker Error: ' + error.message, { status: 500 });
    }
  }
}
