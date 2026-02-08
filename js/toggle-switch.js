//スイッチの外枠とスイッチの要素を取得
const switchBtn = document.querySelectorAll(".switch-btn");

//クリックでacitveクラスを追加/削除
switchBtn.forEach(function (sOuter) {
    sOuter.addEventListener("click", function () {
        sOuter.classList.toggle("active");
    })
});

let sw1 = document.getElementById("sw1");
let all = document.querySelectorAll("*");
sw1.addEventListener("click", function () {
    if (sw1.classList.contains("active")) {
        all.forEach(function (a) {
            a.style.outline = "1px red solid";
        })
    } else {
        all.forEach(function (a) {
            a.style.outline = "";
        })
    }
})
