/**
 * 開成祭チケット発行システム - 導入ポータル用制御スクリプト
 */
document.addEventListener('DOMContentLoaded', () => {
    const navDlBtn = document.getElementById('nav-dl-btn');
    const heroDlBtn = document.getElementById('hero-dl-btn');

    // ダウンロードボタンのクリック時に、分かりやすいアラートとインストラクションを表示
    const handleDownloadClick = (e) => {
        // 必要に応じてダウンロードログをコンソール等に出力、もしくはGA追跡フックなどを追加可能
        console.log("Kaiseisai Ticket System Application download triggered.");
        
        // ユーザーがダウンロード後に何をすれば良いか迷わないように補助ポップアップを提供（オプション）
        const confirmDownload = confirm(
            "【ダウンロード確認】\n「kaiseisai_ticket_system.html」を保存します。\n\n" +
            "【起動方法】\nダウンロード完了後、保存したファイルをダブルクリックしてブラウザで開いてください。"
        );
        
        if (!confirmDownload) {
            e.preventDefault();
        }
    };

    if (navDlBtn) {
        navDlBtn.addEventListener('click', handleDownloadClick);
    }
    if (heroDlBtn) {
        heroDlBtn.addEventListener('click', handleDownloadClick);
    }

    // スムーススクロール実装
    const navAnchors = document.querySelectorAll('nav a[href^="#"]');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});