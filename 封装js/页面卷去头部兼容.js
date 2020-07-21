function getScroll(){
    return {
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
        right:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
    };
}
//调用时 getScroll().left or right;