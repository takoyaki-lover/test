// サイドバー
let sidebar = document.getElementById("sidebar-urls");

// サイドバーに表示させるもの 配列の上から順番に表示
let urlList = [
    {
        href: "labo",
        title: "研究室配属データ"
    },
    {
        href: "electrical-circuit",
        title: "電気回路チェッカー"
    },
    {
        href: "computer-engineering",
        title: "ｺﾝﾋﾟｭｰﾀ工学チェッカー"
    },
    {
        href: "experiment-menber",
        title: "実験班データ"
    },
    {
        href: "NWP",
        title: "NWPチェッカー"
    },
    {
        href: "IoTP",
        title: "IoTP受賞チェッカー"
    },
    {
        href: "nickname",
        title: "あだ名データ"
    },
    {
        href: "all",
        title: "全データまとめ"
    },
    {
        href: "test",
        title: "test"
    },
    {
        href: "test",
        title: "test"
    },
    {
        href: "test",
        title: "test"
    },
    {
        href: "test",
        title: "test"
    },
    {
        href: "test",
        title: "test"
    },
    {
        href: "test",
        title: "test"
    },
]

// サイドバーに描画する関数
function renderSidebar(href, title) {
    sidebar.insertAdjacentHTML("beforeend", `
        <li><a href="../${href}" class="variable-tabindex level-2" tabindex="-1">${title}</a></li>
    `);
}

// urlListの要素数だけ描画させる
for (let i = 0; i < urlList.length; i++) {
    let url = urlList[i];
    renderSidebar(url.href, url.title);
}


let overlay = document.getElementById("overlay");
let menuToggle = document.getElementById("menu-toggle");
let variableTabIndex = document.querySelectorAll(".variable-tabindex");

// クラスの切り替えでCSSを設定
function toggleSidebar() {
    let toggle = menuToggle.classList.toggle("opened");
    if (toggle) {
        variableTabIndex.forEach(function (element) {
            element.tabIndex = 0;
        })
    } else {
        variableTabIndex.forEach(function (element) {
            element.tabIndex = -1;
        })
    }
}

// サイドバーが開いている上で背景をクリックしたとき
overlay.addEventListener("click", function () {
    toggleSidebar();
})

// ハンバーガーメニューを押したとき
menuToggle.addEventListener("click", function () {
    toggleSidebar();
})