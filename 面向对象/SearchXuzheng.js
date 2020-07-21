class SearchXuZheng{
    constructor(parent,W=600,H=600){    //es6可以设置默认值
        this.list=[];
        this.lv=1;
        this.WIDTH=W;
        this.HEIGHT=H;
        this.divCon=this.createDiv(parent);
        this.createGame();
    }
    createDiv(parent){
        if(this.divCon)return this.divCon;  //若divCon存在时返回divCon---div的唯一性
        let div=document.createElement("div");
        Object.assign(div.style,{   //将后面的{}里面的内容复制给div.style；
            width:this.WIDTH+"px",
            height:this.HEIGHT+"px",
            border:"1px solid #ccc",
            margin:"auto",
            fontSize:0,
        })
        div.addEventListener("click",this.clickHander);
        div.self=this;      //给div增加属性
        parent.appendChild(div);
        return div;
    }
    clickHander(e) {
        if(e.target.constructor===HTMLDivElement)return ;
        if(~e.target.src.indexOf("1.jpg")){
            this.self.lv++; //表示调用外部的lv-----this是div，this.self就是这个类创建的对象
        }
        this.self.clearGame();
        this.self.createGame();
    }
    createGame(){
        for (let i = 0; i < (this.lv+1)*(this.lv+1); i++) {
            let img=new Image();
            img.src="./images/2.jpg";
            this.divCon.appendChild(img);
            this.list.push(img);
            img.style.width=this.WIDTH/(this.lv+1)+"px";
            img.style.height=this.HEIGHT/(this.lv+1)+"px";

            
        }
        this.list[Math.floor(Math.random()*this.list.length)].src="./images/1.jpg"
    }
    clearGame(){
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].remove();
            this.list[i]=null;
            
        }
        this.list.length=0;
    }
}