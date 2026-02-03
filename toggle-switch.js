//スイッチの外枠とスイッチの要素を取得
const switchOuter = document.querySelectorAll(".switch-outer");

//クリックでacitveクラスを追加/削除
switchOuter.forEach(function (sOuter) {
    sOuter.addEventListener("click", function () {
        sOuter.classList.toggle("active");
    })
});

let sw1 = document.getElementById("sw1");
let all = document.querySelectorAll("*");
sw1.addEventListener("click", function () {
    if (sw1.classList.contains("active")) {
        console.log("active");
        all.forEach(function (a) {
            a.style.outline = "1px red solid";
        })
    } else {
        all.forEach(function (a) {
            a.style.outline = "none";
        })
    }
})