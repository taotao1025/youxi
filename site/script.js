document.addEventListener('DOMContentLoaded', function() {
    // 添加游戏点击反馈
    const gameTiles = document.querySelectorAll('.game-tile');
    
    gameTiles.forEach(tile => {
        tile.addEventListener('click', function(e) {
            // 点击时给出视觉反馈
            this.style.transform = 'scale(0.96)';
            setTimeout(() => this.style.transform = '', 150);
        });
    });

    // 页面淡入
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.35s ease-in';
    setTimeout(() => document.body.style.opacity = '1', 120);

    // 返回顶部按钮
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 作者简介弹窗
    const authorBtn = document.getElementById('authorIntroBtn');
    const authorPanel = document.getElementById('authorPanel');
    const closeAuthorPanel = document.getElementById('closeAuthorPanel');

    if (authorBtn && authorPanel) {
        authorBtn.addEventListener('click', function() {
            authorPanel.classList.add('visible');
            authorPanel.setAttribute('aria-hidden', 'false');
        });
    }

    if (closeAuthorPanel && authorPanel) {
        closeAuthorPanel.addEventListener('click', function() {
            authorPanel.classList.remove('visible');
            authorPanel.setAttribute('aria-hidden', 'true');
        });
    }

    if (authorPanel) {
        authorPanel.addEventListener('click', function(event) {
            if (event.target === authorPanel) {
                authorPanel.classList.remove('visible');
                authorPanel.setAttribute('aria-hidden', 'true');
            }
        });
    }
    
    // 侧边小按钮演示（可扩展）
    document.querySelectorAll('.side-tools .tool').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.id === 'backToTop' || this.id === 'authorIntroBtn') return;
            alert(this.textContent + '（示例）');
        });
    });
});