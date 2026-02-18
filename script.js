document.addEventListener('DOMContentLoaded', function() {
    // 添加游戏点击反馈
    const gameButtons = document.querySelectorAll('.game-btn');
    
    gameButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gameName = this.getAttribute('data-game');
            console.log(`正在加载游戏: ${gameName}`);
            
            // 添加点击动画效果
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
});