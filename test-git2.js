
document.querySelector('#btn').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('bgc')
    // 颜色改变
    this.classList.toggle('btncolor')
    //添加旋转效果
    this.classList.add('btnrotate')
    setTimeout(() => {
        this.classList.remove('btnrotate')
    }, 402);
})