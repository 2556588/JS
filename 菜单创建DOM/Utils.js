class Utils{
    static createDom(type,parent=document.body,style={}){   //静态方法
        let dom=document.createElement(type);       //创建标签
        parent.appendChild(dom);
        for (const prop in style) {
           dom.style[prop]=style[prop];
        }
        return dom;
    }
    static dragElem(elem){ //添加事件
        elem.style.position="absolute";
        elem.addEventListener("mousedown",Utils.mouseHandler);

    }
    static removeDrag(elem){    //删除事件
        elem.removeEventListener("mousedown",Utils.mouseHandler)
    }
    static mouseHandler(e){ //事件
        if (e.type==="mousedown") {
            e.preventDefault(); //阻止默认事件
            e.currentTarget.point={x:e.offsetX,y:e.offsetY};//currentTarget指向当前事件活动的对象（一般为父级）。
            document.elem=e.currentTarget;
            document.addEventListener("mousemove",Utils.mouseHandler);
            document.addEventListener("mouseup",Utils.mouseHandler);
            e.currentTarget.dispatchEvent(new Event(Utils.MOUSE_DOWN_EVENT));   //抛发事件 //调用下方的函数
        }else if (e.type==="mousemove") {
            document.elem.style.left=e.x-document.elem.point.x+"px";
            document.elem.style.top=e.y-document.elem.point.y+"px";
            document.elem.dispatchEvent(new Event(Utils.MOUSE_MOVE_EVENT));   //抛发事件 //调用下方的函数
        }else if (e.type==="mouseup") {
            document.removeEventListener("mousemove",Utils.mouseHandler);
            document.removeEventListener("mouseup",Utils.mouseHandler);
            document.elem.dispatchEvent(new Event(Utils.MOUSE_UP_EVENT));   //抛发事件 //调用下方的函数
        }
    }
    static randomColor(alpha=1,){   //颜色随机
        if (alpha<0||alpha>1) alpha=1;
        // let col="#";
        // for (let i = 0; i < 3; i++) {
        //     col+=Math.floor(Math.random()*256).toString(16).padStart(2,"0");
            
        // }
        // return col;
        let arr=[];
        for (let i = 0; i < 3; i++) {
           arr.push(Math.floor(Math.random()*256));
            
        }
        return `rgba(${arr.join()},${alpha})`
    }
    static random(min,max){
        return Math.floor(Math.random()*(max-min)+min)
    }

    static get MOUSE_DOWN_EVENT(){
        return "mouse_down_event";
    }
    static get MOUSE_UP_EVENT(){
        return "mouse_up_event"
    }
    static get MOUSE_MOVE_EVENT(){
        return "mouse_move_event"
    }
}