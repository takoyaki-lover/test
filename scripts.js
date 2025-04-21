function themeLight() {
    for (i = 0; i < document.getElementsByClassName('theme').length; i++) {
        document.getElementsByClassName('theme')[i].style.backgroundColor = '#ffffff';
        document.getElementsByClassName('theme')[i].style.color = '#000000';
    }
};

function themeDark() {
    for (i = 0; i < document.getElementsByClassName('theme').length; i++) {
        document.getElementsByClassName('theme')[i].style.backgroundColor = '#1b1b1b';
        document.getElementsByClassName('theme')[i].style.color = '#ffffff';
    }
};

let theme = document.getElementById('theme');

switch (localStorage.theme) {
    case undefined:
    case 'system': {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            themeLight();
        } else {
            themeDark();
        }
        break;
    }
    case 'light': {
        themeLight();
        break;
    }
    case 'dark': {
        themeDark();
        break;
    }
}

theme.addEventListener('change', function () {
    console.log('click');
    switch (theme.value) {
        case 'system': {
            console.log('system');
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                themeLight();
            } else {
                themeDark();
            }
            theme.options[0].selected = true;
            localStorage.theme = 'system';
            break;
        }
        case 'light': {
            console.log('light');
            themeLight();
            theme.options[1].selected = true;
            localStorage.theme = 'light';
            break;
        }
        case 'dark': {
            console.log('dark');
            themeDark();
            theme.options[2].selected = true;
            localStorage.theme = 'dark'
            break;
        }
    }
})

switch (localStorage.theme) {
    case 'system': {
        theme.options[0].selected = true;
        break;
    }
    case 'light': {
        theme.options[1].selected = true;
        break;
    }
    case 'dark': {
        theme.options[2].selected = true;
        break;
    }
}

setInterval(() => {
    document.getElementById('userAgent').textContent = window.navigator.userAgent;
    document.getElementById('window').textContent = window.matchMedia('(max-width: 1000px)').matches;
}, 1);

document.getElementById('copy-ua').addEventListener('click', function () {
    navigator.clipboard.writeText(document.getElementById('userAgent').textContent);
});

//スイッチの外枠とスイッチの要素を取得
const switchOuter = document.querySelector(".switch-outer");
const toggleSwitch = document.querySelector(".toggle-switch");

//クリックでacitveクラスを追加/削除
switchOuter.addEventListener("click", function () {
    switchOuter.classList.toggle("active");
    toggleSwitch.classList.toggle("active");
});

function test() {
    document.getElementById('box-x').textContent = headerElement.offsetLeft;
    document.getElementById('box-y').textContent = headerElement.offsetTop;
    document.getElementById('move-x').textContent = move.offsetLeft;
    document.getElementById('move-y').textContent = move.offsetTop;
    document.getElementById('margin').textContent = localStorage.modal_margin;
}
setInterval(test, 10);

const headerElement = document.getElementById('header');
const move = document.getElementById('modal-content');

headerElement.onpointermove = function (event) {
    if (event.buttons) {
        move.style.left = move.offsetLeft + event.movementX + 'px'
        move.style.top = move.offsetTop + event.movementY + 'px'
        move.draggable = false
        headerElement.setPointerCapture(event.pointerId)
    }
}

document.getElementById('summon').addEventListener('click', function () {
    modalOpen();
});

function modalOpen() {
    document.getElementById('modal').style.display = 'block';
    localStorage.modal_margin = move.style.margin;
    let x = move.offsetLeft;
    let y = move.offsetTop;
    move.style.left = x + 'px';
    move.style.top = y + 'px';
    move.style.position = 'absolute';
    move.style.margin = '0px';
}

document.getElementById('modal-close').addEventListener('click', modalClose);

function modalClose() {
    document.getElementById('modal').style.display = 'none';
    move.style.position = 'static';
    move.style.margin = localStorage.modal_margin;
}

setInterval(function () {
    document.getElementById('screen-width').textContent = screen.width;
    document.getElementById('screen-height').textContent = screen.height;
    document.getElementById('outer-width').textContent = window.outerWidth;
    document.getElementById('outer-height').textContent = window.outerHeight;
    document.getElementById('inner-width').textContent = window.innerWidth;
    document.getElementById('inner-height').textContent = window.innerHeight;
    document.getElementById('client-width').textContent = document.documentElement.clientWidth;
    document.getElementById('client-height').textContent = document.documentElement.clientHeight;
}, 10);

// ------------------------------------------------------------
// BatteryManager オブジェクトを取得する
// ------------------------------------------------------------
// 取得を開始する
document.getElementById('battery').textContent = Boolean(navigator.getBattery());
/*
if (navigator.getBattery()) {
    var promise = navigator.getBattery();

    // 結果を受け取る（非同期）
    promise.then(

        // ------------------------------------------------------------
        // 成功時に実行されるコールバック関数
        // ------------------------------------------------------------
        function success(battery_manager) {
            // 出力テスト
            console.log(battery_manager);
            // ------------------------------------------------------------
            // 充電中であるか
            // ------------------------------------------------------------
            console.log(battery_manager.charging);

            // ------------------------------------------------------------
            // 満充電までに必要な時間（秒）
            // ------------------------------------------------------------
            console.log(battery_manager.chargingTime);

            // ------------------------------------------------------------
            // 枯渇するまでの残り時間（秒）
            // ------------------------------------------------------------
            console.log(battery_manager.dischargingTime);

            // ------------------------------------------------------------
            // バッテリーの貯蓄率（0.0 ～ 1.0）
            // ------------------------------------------------------------
            console.log(battery_manager.level);

        },

        // ------------------------------------------------------------
        // 失敗時に実行されるコールバック関数
        // ------------------------------------------------------------
        function failure(reason) {
            // 出力テスト
            console.log(reason);
        }
    );
}

*/
