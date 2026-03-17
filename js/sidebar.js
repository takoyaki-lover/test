// サイドバー
const sidebar = document.getElementById("sidebar-urls");

// サイドバーに表示させるもの 配列の上から順番に表示
const urlList = [
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
    const url = urlList[i];
    renderSidebar(url.href, url.title);
}


const overlay = document.getElementById("overlay");
// const menuToggle = document.getElementById("hamburger-icon");
const hamburgerBtn = document.getElementById("hamburger-btn");
const variableTabIndex = document.querySelectorAll(".variable-tabindex");

// クラスの切り替えでCSSを設定
function toggleSidebar() {
    const toggle = hamburgerBtn.classList.toggle("opened"); // 追加したときtrue、削除したときfalseを返す
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
hamburgerBtn.addEventListener("click", function () {
    toggleSidebar();
})


const menuTest = document.querySelectorAll(".menu-icon-test");
let count = 0;
document.getElementById("count").textContent = count;

menuTest.forEach(function (element) {
    element.addEventListener("click", function () {
        count++;
        document.getElementById("count").textContent = count;
    })
})
