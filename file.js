// index.js
const html = `
<!DOCTYPE html>
<html>
<head>
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
          <label for="custom-name">📝 自定义名称（可选）</label>
          <input type="text" id="custom-name" placeholder="给你的文本起个名字，留空则自动生成" style="width: 100%; padding: 12px; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 14px;">
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
      
      <div class="edit-form" id="edit-form">
        <h4>✏️ 编辑内容</h4>
        <div class="form-group">
          <label for="edit-name">📝 自定义名称</label>
          <input type="text" id="edit-name" placeholder="给你的文本起个名字，留空则自动生成" style="width: 100%; padding: 12px; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 14px; margin-bottom: 15px;">
        </div>
        <textarea id="edit-text" placeholder="编辑你的内容..."></textarea>
        <button class="btn btn-success" onclick="saveEdit()">💾 保存</button>
        <button class="btn btn-secondary" onclick="cancelEdit()">❌ 取消</button>
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
    const editForm = document.getElementById('edit-form');
    const editText = document.getElementById('edit-text');
    
    let currentEditId = null;
    
    form.onsubmit = async (e) => {
      e.preventDefault();
      const text = document.getElementById('text').value.trim();
      const customName = document.getElementById('custom-name').value.trim();
      
      if (!text) {
        showError('请输入内容');
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
    
    async function editPaste(id) {
      try {
        const res = await authFetch('/api/paste?id=' + id);
        const nameRes = await authFetch('/api/name?id=' + id);
        
        if (res.ok) {
          const text = await res.text();
          const name = nameRes.ok ? await nameRes.text() : '';
          
          editText.value = text;
          document.getElementById('edit-name').value = name;
          currentEditId = id;
          
          // 隐藏其他可能显示的内容
          pasteLink.classList.remove('show');
          pasteContent.classList.remove('show');
          
          editForm.classList.add('show');
          editForm.scrollIntoView({ behavior: 'smooth' });
        } else {
          showError('获取内容失败');
        }
      } catch (error) {
        showError('获取内容失败: ' + error.message);
      }
    }
    
    async function saveEdit() {
      if (!currentEditId || !editText.value.trim()) {
        showError('请先选择要编辑的内容并输入新内容');
        return;
      }
      
      try {
        const customName = document.getElementById('edit-name').value.trim();
        
        const res = await authFetch('/api/paste', {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: currentEditId,
            text: editText.value.trim(),
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
      editForm.classList.remove('show');
      pasteContent.classList.remove('show');
      editText.value = '';
      document.getElementById('edit-name').value = '';
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
          editForm.classList.remove('show');
          
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
      editForm.classList.remove('show');
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
          showSuccess('链接已复制到剪贴板！');
        }).catch(function() {
          // 如果Clipboard API失败，使用传统方法
          fallbackCopyTextToClipboard(link);
        });
      } else {
        // 传统方法
        fallbackCopyTextToClipboard(link);
      }
    }
    
    function fallbackCopyTextToClipboard(text) {
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
          showSuccess('内容已复制到剪贴板！');
        } else {
          showError('复制失败，请手动复制');
        }
      } catch (err) {
        showError('复制失败，请手动复制');
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
      console.log('开始加载文本列表...');
      authFetch('/api/list')
        .then(function(r) {
          console.log('API响应状态:', r.ok);
          return r.ok ? r.json() : [];
        })
        .then(function(list) {
          console.log('获取到的列表:', list);
          if(Array.isArray(list) && list.length){
            var html = 
              '<div class="stats">' +
              '<span>📊 总共 ' + list.length + ' 个文本</span>' +
              '<span>🕒 最后更新: ' + new Date().toLocaleString() + '</span>' +
              '</div>' +
              '<h3>📋 全部文本</h3>';
            
            // 获取所有名称
            Promise.all(list.map(function(id) {
              return authFetch('/api/name?id=' + id)
                .then(function(r) {
                  return r.ok ? r.text() : null;
                })
                .catch(function() {
                  return null;
                });
            })).then(function(names) {
              for(var i = 0; i < list.length; i++){
                var id = list[i];
                var name = names[i];
                var link = location.origin + '/' + id;
                var displayName = name ? (i + 1) + '. ' + name + ' (' + link + ')' : (i + 1) + '. ' + link;
                
                html += 
                  '<div class="paste-item">' +
                  '<a href="javascript:void(0)" data-id="' + id + '" class="paste-link-item" style="cursor: pointer;">' + displayName + '</a>' +
                  '<div class="paste-actions">' +
                  '<button class="action-btn copy-btn" data-id="' + id + '" title="复制链接">📋</button>' +
                  '<button class="action-btn edit-btn" data-id="' + id + '" title="编辑">✏️</button>' +
                  '<button class="action-btn delete-btn" data-id="' + id + '" title="删除">🗑️</button>' +
                  '</div>' +
                  '</div>';
              }
              
              allPastes.innerHTML = html;
              console.log('HTML已设置');
              
              // 添加事件监听器
              var links = allPastes.querySelectorAll('.paste-link-item');
              console.log('找到链接数量:', links.length);
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
            editForm.classList.remove('show');
            
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
        tokenBox.style = 'margin:20px 0 12px 0;padding:14px 8px;background:linear-gradient(90deg,#e0e7ff 0%,#f8fafc 100%);border:2px solid #667eea;border-radius:12px;box-shadow:0 2px 8px rgba(102,126,234,0.08);display:flex;align-items:flex-start;gap:10px;position:relative;overflow:auto;flex-wrap:wrap;word-break:break-all;';
        tokenBox.innerHTML = '<span style="font-size:20px;color:#667eea;margin-right:6px;">🔑</span>' +
          '<div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;">' +
          '<div style="font-size:14px;color:#555;">当前 API Token</div>' +
          '<div id="token-value" style="font-family:monospace;font-size:13px;word-break:break-all;background:#fff;border-radius:5px;padding:5px 6px;display:block;max-width:100vw;overflow-x:auto;">' + token + '</div>' +
          '</div>' +
          '<div style="display:flex;flex-direction:column;gap:6px;min-width:80px;">' +
          '<button id="copy-token-btn" style="padding:5px 0;border-radius:6px;border:none;background:linear-gradient(90deg,#667eea 0%,#764ba2 100%);color:#fff;cursor:pointer;font-size:13px;transition:background 0.2s;width:100%;">复制</button>' +
          '<button id="logout-btn" style="padding:5px 0;border-radius:6px;border:none;background:linear-gradient(90deg,#ff6b6b 0%,#ee5a52 100%);color:#fff;cursor:pointer;font-size:13px;transition:background 0.2s;width:100%;">退出登录</button>' +
          '</div>';
        document.querySelector('.container').prepend(tokenBox);
        document.getElementById('copy-token-btn').onclick = function() {
          navigator.clipboard.writeText(token).then(function(){
            document.getElementById('copy-token-btn').innerText = '已复制';
            setTimeout(()=>{document.getElementById('copy-token-btn').innerText='复制';}, 1200);
          });
        };
        document.getElementById('logout-btn').onclick = function() {
          localStorage.removeItem('token');
          location.reload();
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
        'Access-Control-Allow-Headers': 'Content-Type',
      };
      
      // 处理OPTIONS请求
      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
      }
      
    // 前端页面
    if (url.pathname === '/' || url.pathname === '') {
        return new Response(html, { 
          headers: { 
            'content-type': 'text/html; charset=utf-8',
            ...corsHeaders
          } 
        });
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
            if (user === username) {
              // token有效，直接返回
              return new Response(JSON.stringify({ code: 1, token }), { headers: { 'content-type': 'application/json', ...corsHeaders } });
            }
          }
          // 没有token或token已失效，生成新token
          token = Math.random().toString(36).slice(2) + Date.now().toString(36);
          await env.file.put('token:' + token, username, { expirationTtl: 2592000 });
          await env.file.put('user_token:' + username, token, { expirationTtl: 2592000 });
          return new Response(JSON.stringify({ code: 1, token }), { headers: { 'content-type': 'application/json', ...corsHeaders } });
        } else {
          return new Response(JSON.stringify({ code: 0, message: '用户名或密码错误' }), { headers: { 'content-type': 'application/json', ...corsHeaders } });
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
        // 新建、编辑、删除需要登录
        if (['POST','PUT','DELETE'].includes(request.method)) {
          const authed = await checkAuth(request, env);
          if (!authed) {
            return new Response(JSON.stringify({ code: 0, message: '未登录' }), { headers: { 'content-type': 'application/json', ...corsHeaders }, status: 401 });
          }
        }
      if (request.method === 'POST') {
          try {
            const { text, name } = await request.json();
            if (!text) {
              return new Response(JSON.stringify({ code: 0, message: '内容不能为空' }), { 
                headers: { 
                  'content-type': 'application/json',
                  ...corsHeaders
                }, 
                status: 400 
              });
            }
            // 生成唯一且不为保留字的ID
            const reserved = ['user', 'password', 'list'];
            let id;
            do {
              id = Math.random().toString(36).slice(2, 8);
            } while (reserved.includes(id));
            await env.file.put(id, text);
            if (name) {
              await env.file.put(id + '_name', name);
            }
            let list = await env.file.get('list');
            list = list ? JSON.parse(list) : [];
            list.unshift(id);
            if (list.length > 100) list = list.slice(0, 100);
            await env.file.put('list', JSON.stringify(list));
            return new Response(JSON.stringify({ code: 1, id }), { 
              headers: { 
                'content-type': 'application/json',
                ...corsHeaders
              } 
            });
          } catch (error) {
            return new Response(JSON.stringify({ code: 0, message: '处理请求失败: ' + error.message }), { 
              headers: { 
                'content-type': 'application/json',
                ...corsHeaders
              }, 
              status: 500 
            });
          }
        } else if (request.method === 'PUT') {
          try {
            const { id, text, name } = await request.json();
            if (!id || !text) {
              return new Response(JSON.stringify({ code: 0, message: 'ID和内容不能为空' }), { 
                headers: { 
                  'content-type': 'application/json',
                  ...corsHeaders
                }, 
                status: 400 
              });
            }
            const existing = await env.file.get(id);
            if (!existing) {
              return new Response(JSON.stringify({ code: 0, message: '文本不存在' }), { 
                headers: { 
                  'content-type': 'application/json',
                  ...corsHeaders
                }, 
                status: 404 
              });
            }
        await env.file.put(id, text);
            if (name !== undefined) {
              if (name) {
                await env.file.put(id + '_name', name);
              } else {
                await env.file.delete(id + '_name');
              }
            }
            return new Response(JSON.stringify({ code: 1, message: '更新成功' }), { 
              headers: { 
                'content-type': 'application/json',
                ...corsHeaders
              } 
            });
          } catch (error) {
            return new Response(JSON.stringify({ code: 0, message: '更新失败: ' + error.message }), { 
              headers: { 
                'content-type': 'application/json',
                ...corsHeaders
              }, 
              status: 500 
            });
          }
        } else if (request.method === 'DELETE') {
          try {
            const { id } = await request.json();
            if (!id) {
              return new Response(JSON.stringify({ code: 0, message: 'ID不能为空' }), { 
                headers: { 
                  'content-type': 'application/json',
                  ...corsHeaders
                }, 
                status: 400 
              });
            }
            const existing = await env.file.get(id);
            if (!existing) {
              return new Response(JSON.stringify({ code: 0, message: '文本不存在' }), { 
                headers: { 
                  'content-type': 'application/json',
                  ...corsHeaders
                }, 
                status: 404 
              });
            }
            await env.file.delete(id);
            await env.file.delete(id + '_name');
            let list = await env.file.get('list');
            if (list) {
              list = JSON.parse(list);
              list = list.filter(item => item !== id);
              await env.file.put('list', JSON.stringify(list));
            }
            return new Response(JSON.stringify({ code: 1, message: '删除成功' }), { 
              headers: { 
                'content-type': 'application/json',
                ...corsHeaders
              } 
            });
          } catch (error) {
            return new Response(JSON.stringify({ code: 0, message: '删除失败: ' + error.message }), { 
              headers: { 
                'content-type': 'application/json',
                ...corsHeaders
              }, 
              status: 500 
            });
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
          return new Response(text, { 
            headers: { 
              'content-type': 'text/plain; charset=utf-8',
              ...corsHeaders
            } 
          });
        }
      }
      
      // API: 获取所有文本
      if (url.pathname === '/api/list') {
        const authed = await checkAuth(request, env);
        if (!authed) {
          return new Response('Unauthorized', { status: 401 });
        }
        try {
          let list = await env.file.get('list');
          list = list ? JSON.parse(list) : [];
          return new Response(JSON.stringify(list), { 
            headers: { 
              'content-type': 'application/json',
              ...corsHeaders
            } 
          });
        } catch (error) {
          return new Response(JSON.stringify([]), { 
            headers: { 
              'content-type': 'application/json',
              ...corsHeaders
            } 
          });
        }
      }
      
      // API: 获取自定义名称
      if (url.pathname === '/api/name') {
        const authed = await checkAuth(request, env);
        if (!authed) {
          return new Response('Unauthorized', { status: 401 });
        }
        const id = url.searchParams.get('id');
        if (!id) return new Response('Not found', { status: 404 });
        const name = await env.file.get(id + '_name');
        if (!name) return new Response('', { 
          headers: { 
            'content-type': 'text/plain; charset=utf-8',
            ...corsHeaders
          } 
        });
        return new Response(name, { 
          headers: { 
            'content-type': 'text/plain; charset=utf-8',
            ...corsHeaders
          } 
        });
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
      
      return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
      
    } catch (error) {
      return new Response('Worker Error: ' + error.message, { status: 500 });
    }
  }
}
