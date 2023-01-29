(function () {
    els(".num > *")
    el("#input1").addEventListener("change", callback1);
    el("#input2").addEventListener("change", callback2);
    document.querySelector("#input1").value = 1;
    document.querySelector(".v1").innerText = 1;
    document.querySelector("#input2").value = 1;
    document.querySelector(".v2").innerText = 1;
    // callback()
})()

// 选择单个节点
function el(element) {
    return document.querySelector(element);
}

// 选择多个节点
function els(elements) {
    return document.querySelectorAll(elements);
}

// 滑动彩灯数量的回调
function callback1(e) {
    console.log(e);
    let count = e.target.value;
    el(".v1").innerText = count;

    let lightrope = els(".lightrope");
    let currentCount = lightrope.length;
    let diff = count - currentCount;
    if (diff > 0) {
        for (let i = 0; i < diff; i++) {
            let newLightrope = lightrope[0].cloneNode(true);
            document.body.appendChild(newLightrope);
        }
    } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
            document.body.removeChild(lightrope[i]);
        }
    }
}

// 滑动彩灯频率的回调
function callback2(e) {
    console.log(e);
    let count = e.target.value;
    el(".v2").innerText = count;
    liArr = els("li")
    console.log(els("li"));
    let speed = 2;
    for (let i = 0; i < liArr.length; i++) {
        console.log(liArr[i].style.animationDuration);
        let temp = liArr[i].style.animationDuration
        liArr[i].style.animationDuration = ` ${speed / e.target.value}s`;
    }

}

