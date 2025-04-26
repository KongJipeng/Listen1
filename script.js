// 处理 module 对象，避免 Electron 和 browser 环境冲突
if (typeof module === 'object') {
    window.module = module;
    module = undefined;
  }
  
// 文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
// 恢复原来的 module
if (window.module) module = window.module;

// 轮播图初始化逻辑
const initCoverList = function() {
    let li = document.querySelectorAll(".footer .cover li");
    for (let i = 0; i < li.length - 1; i++) {
    li[i].className = "hid";
    }
    if (li.length >= 4) {
    li[li.length - 3].className = "def";
    li[li.length - 2].className = "a";
    li[0].className = "b";
    li[1].className = "c";
    li[2].className = "def";
    }
};

// 如果页面已加载完成则立即初始化，否则等待 window.onload
if (document.readyState === 'complete') {
    initCoverList();
} else {
    window.addEventListener('load', initCoverList);
}
});