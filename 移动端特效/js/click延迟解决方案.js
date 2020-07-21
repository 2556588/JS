function tap(obj,callback){
    var isMove=false;
    var startTime=0;    //记录触摸时的时间变量
    obj.addEventListener("touchstart",function (e) {
        startTime=Date.now();//记录触摸时间
    })
    obj.addEventListener("touchmove",function (e) {
        isMove=true;    //判断是否有滑动，有滑动算拖拽，不算点击
    })
    obj.addEventListener("touchend",function (e) {
        if(!isMove&&(Date.now()-startTime)<150){    //如果手指触摸和离开时间小于150ms算点击
            callback&&callback();    //两者为真时执行回调函数
        }
        isMove=false;   //取反
        startTime=0     //重置初始时间
    })

   
}
// tap(div,function () { });   //调用函数