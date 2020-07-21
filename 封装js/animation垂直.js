//封装缓动动画
        //obj目标对象，traget目标位置
        function animation(obj,target,callBack) {
            clearInterval(obj.timer);
            obj.timer=setInterval(() => {
                if(window.pageYOffset==target){
                    clearInterval(obj.timer);
                    if(callBack){   //在定时器结束后在调用
                        callBack();//调用回调函数
                        // callBack&&callBack();    //两边为真时调用callBack()
                    }
                }
                speed=(target-window.pageYOffset)/10; 
                speed=speed>0?Math.ceil(speed):Math.floor(speed);   
                window.scroll(0,window.pageYOffset+speed)
            }, 15);
        }