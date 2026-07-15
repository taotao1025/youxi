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
    
    // 侧边小按钮演示（可扩展）
    document.querySelectorAll('.side-tools .tool').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.id === 'backToTop') return;
            alert(this.textContent + '（示例）');
        });
    });
});