function addEventListener(element,eventName,fn) {
    //判断当前浏览器是否支持 addEventListener 方法
    if (element.addEventListener) {
        element.addEventListener(eventName,fn);//第三个参数默认为false；
    }else if(element.attchEvent){   //ie9以下版本
        element.attchEvent('on'+eventName,fn);
    }else{
        //相当于 elemment.onclick=fn;
        element['on'+eventName]=fn;
    }
}