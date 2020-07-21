var utils=(function(){   //函数的封装           
return {
    setstyle:function(elem,style){
       for(prop in style){
           elem.style[prop]=style[prop];
       }
    },

radomColor:function(alpha){
    if(alpha>1||(isNaN(alpha))||alpha<0){
        alpha=1;
    }
    var color="rgba(";
    for(var i=0;i<3;i++){
        color+=parseInt(Math.random()*256);
        color+=","
    }
    color+=alpha+")";
    return color;
},
//加载
 loadImg:function(arr,callback){
      var img=new Image();
    img.arr=arr;    //新建属性arr要加载的数组
    img.callback=callback;      //回调函数
    img.imgList=[];         //保存加载好的元素
    img.num=0;
    img.addEventListener("load",this.loadHander);
    img.src=arr[img.num]        //图片要加载的数组

 },
   
loadHander:function(_e) {
    this.imgList.push(this.cloneNode(false));   //复制节点
    this.num++;
    if(this.num>arr.length-1){  //判断是否大于数组length；
        callBackFun(this.imgList);    //执行回调传出当前的imglist
        this.removeEventListener("load",utils.loadHander); //删除前一个监听事件
        return ;
    }
    this.src=this.arr[this.num];

},
    //拖拽
    dragElem:function (elem) {
        elem.addEventListener("mousedown",this.mouseFunction) //此时的this为utils这个对象
        elem.self=this;
        elem.style.position="absolute"
    },
    removeDrag:function (elem) {
        elem.removeEventListener("mousedown",this.mouseFunction)
        elem.self=null;
    },
     mouseFunction:function (e) {
              switch (e.type) {           //e.type判断事件类型
                    case "mousedown":
                        e.preventDefault();
                        document.addEventListener("mousemove",this.self.mouseFunction);
                        this.addEventListener("mouseup",this.self.mouseFunction);
                        this.x1=e.offsetX;  //注，变量尽量与系统变量区分---若为图片移动时变量不设为x会与img的x，y值重复导致影响
                        this.y1=e.offsetY;
                        document.elem=this;
                        console.log(e);
                        
                        break;
                
                    case "mousemove":
                        this.elem.style.left=e.clientX-this.elem.x1+"px";       //此处this.elem为div
                        this.elem.style.top=e.clientY-this.elem.y1+"px";

                        var evt=new Event("elemMove");  //要执行碰撞要有抛发事件
                        this.elem.dispatchEvent(evt)    //把evt抛给拖动对象此时为div==this.elem
                        break;
                    case "mouseup":
                        document.removeEventListener("mousemove",this.self.mouseFunction);
                        this.removeEventListener("mouseup",this.self.mouseFunction);
                        break;
                }
     },
     //随机位置
     getRandomPosition:function (elem) {            //此时传入的elem为div
         var w=document.documentElement.clientWidth-elem.offsetWidth;       
         var h=document.documentElement.clientHeight-elem.offsetHeight;
         elem.style.position="absolute";
         elem.style.left=Math.random()*w+"px";
         elem.style.top=Math.random()*h+"px";
     },
     //拖拽碰撞
     hitTest:function (elem0,elem1) {
         var range0=elem0.getBoundingClientRect();//获取元素位于页面相对位置
         var range1=elem1.getBoundingClientRect();
        //  console.log(range1);
         
         if(range0.left>=range1.left&&range0.left<=range1.right&&range0.top>=range1.top&&range0.top<=range1.bottom){
             return true;   //结果为碰撞了
         }
         if(range0.right>=range1.left&&range0.right<=range1.right&&range0.top>=range1.top&&range0.top<=range1.bottom){
            return true;
        }
        if(range0.left>=range1.left&&range0.left<=range1.right&&range0.bottom>=range1.top&&range0.bottom<=range1.bottom){
            return true;
        }
        if(range0.right>=range1.left&&range0.right<=range1.right&&range0.bottom>=range1.top&&range0.top<=range1.bottom){
            return true;
        }
        return false;
     }
  }
})();

