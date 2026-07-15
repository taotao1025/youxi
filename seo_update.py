import re
from pathlib import Path

root = Path(r'c:\Users\lu\Desktop\项目\site')
html_files = sorted(root.rglob('*.html'))

for path in html_files:
    text = path.read_text(encoding='utf-8')
    if '<head>' not in text:
        continue
    if 'name="description"' in text and 'name="keywords"' in text:
        continue

    newline = '\r\n' if '\r\n' in text else '\n'
    title_match = re.search(r'<title[^>]*>(.*?)</title>', text, re.I | re.S)
    title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip() if title_match else path.stem
    title = re.sub(r'\s+', ' ', title).strip() or path.stem

    desc = f'在线玩{title}，体验经典趣味游戏，支持电脑和手机直接游玩。'
    keywords = f'{title}, 在线游戏, 网页游戏, 经典小游戏, 休闲游戏'
    block = (
        f'{newline}    <meta name="description" content="{desc}" />{newline}'
        f'    <meta name="keywords" content="{keywords}" />{newline}'
        f'    <meta name="robots" content="index, follow" />{newline}'
        f'    <meta property="og:title" content="{title}" />{newline}'
        f'    <meta property="og:description" content="{desc}" />{newline}'
        f'    <meta property="og:type" content="website" />{newline}'
        f'    <meta property="og:locale" content="zh_CN" />{newline}'
        f'    <meta name="twitter:card" content="summary_large_image" />{newline}'
    )

    text = text.replace('<head>', '<head>' + block, 1)
    path.write_text(text, encoding='utf-8', newline='')

print(f'processed {len(html_files)} files')
