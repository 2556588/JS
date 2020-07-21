class FaceRed{
    
    constructor(label,parent){
        console.log(this)

        
        this.faceRed=this.initFaceRed(label,parent);
        this.spanList=Array.from(this.faceRed.querySelectorAll(".redStart"));
        this.position=-1;
    }
    initFaceRed(label,parent){
        if (this.faceRed) return this,this.faceRed;
        if (!parent) {
            parent=document.body;
        }
        let div=document.createElement("div");
        let labelElem=document.createElement("label");
        labelElem.textContent=label;
        div.appendChild(labelElem)
        Object.assign(labelElem.style,{
            float:"left",
            marginRight:"5px",
        })
        for (let i = 0; i <5; i++) {
            let span=this.createRed();
            span.className='redStart';
            div.appendChild(span);
            
        }
    
        
        parent.appendChild(div);

        div.self=this;  //表示当前faceRed对象
        div.addEventListener("mouseover",this.mouseHandler);
        div.addEventListener("mouseout",this.mouseHandler);
        div.addEventListener("mouseleave",this.mouseLeaveHandler);
        div.addEventListener("click",this.clkickHandler);
        return div;
    }
    createRed(){

        let span=document.createElement("span");
        Object.assign(span.style,{
            display: "block",
            float: "left",
            width: "16px",
            height: "16px",
            background: "url('images/commstar.png')  0 0",
            marginTop: "3px",
            cursor: "pointer",
        })
        let face=document.createElement("span");
        Object.assign(face.style,{
            display: "none",
            width: "16px",
            height: "16px",
            background: "url('./images/face-red.png') 0 0",
            marginTop: "-16px",
        })
        span.appendChild(face);
        return span;
    }
    mouseHandler(e){
        if (e.target.constructor!==HTMLSpanElement) return ;
        let index=this.self.spanList.indexOf(e.target); //鼠标经过的点为第几个
        if (e.type==='mouseover') {
          if (index>this.self.position) {
            this.self.setStarRed(index)
          }else { 
            this.self.setStarRed(this.self.position)
          }
      
          e.target.firstElementChild.style.display="block";
          e.target.firstElementChild.style.backgroundPositionX=-(4-index)*20+"px"
        }else if(e.type==='mouseout'){
            e.target.firstElementChild.style.display='none'
        }
    }
    mouseLeaveHandler(e){
        this.self.setStarRed(this.self.position)
    }
    clkickHandler(e){
        if(e.target.constructor!==HTMLSpanElement) return;
        this.self.position= this.self.spanList.indexOf(e.target);
    }
    setStarRed(index) {
          
        for (let i = 0; i <this.spanList.length; i++) {
            if (i<=index ) {
                this.spanList[i].style.backgroundPositionY="-16px";
                continue;
            }
            this.spanList[i].style.backgroundPositionY="0px";

            
        }
  }
}