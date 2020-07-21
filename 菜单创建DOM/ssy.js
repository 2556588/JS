class Utils{
    static createDom(type,parent=document.body,style={}){
        let dom=document.createElement(type);
        parent.appendChild(dom);
        for (const prop in style) {
            
           dom.style[prop]=style[prop];
        }
        return dom;
    }
    static dragElem(elem){
        elem.style.position="absolute";
        elem.addEventListener("mousedown",Utils.mouseHander);
    }
    static removeDrag(elem){
        elem.removeEventListener("mousedown",Utils.mouseHandler);
    }
    static mouseHander(e){
        if (e.type==="mousedown") {
            e.preventDefault();
            e.currentTarget.point={x:e.offsetX,y:e.offsetY};
            document.elem=e.currentTarget;
            document.addEventListener("mousemove",Utils.mouseHander);
            document.addEventListener("mouseup",Utils.mouseHander);
            e.currentTarget.dispatchEvent(new Event(Utils.MOUSE_DOWN_EVENT));
        }else if (e.type==="mousemove") {
            document.elem.style.left=e.x-document.elem.point.x+"px";
            document.elem.style.top=e.y-document.elem.point.y+"px";
            document.elem.dispatchEvent(new Event(Utils.MOUSE_MOVE_EVENT));
        }else if (e.type==="mouseup") {
            document.removeEventListener("mousemove",mouseHander);
            document.removeEventListener("mouseup",mouseHander);
            document.elem.dispatchEvent(new Event(Utils.MOUSE_UP_EVENT))
        }
    }
    static randomColor(alpha=1){
        if (alpha>1||alpha<0) {
            alpha=1;
        }
        let arr=[];
        for (let i = 0; i < 3; i++) {
          arr.push(Math.floor(Math.random()*256));
            
        }
        return `rgba(${arr.join},${alpha})`
    }
    static random(min,max){
        return Math.floor(Math.random()*256);
    }


    static get MOUSE_DOWN_EVENT(){
        return "mouse_down_event";
    }
    static get MOUSE_MOVE_EVENT(){
        return "mouse_move_event"
    }
    static get  MOUSE_UP_EVENT(){
        return "mouse_up_event"
    }
}