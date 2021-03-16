function my_scroll() {
    if(window.pageYOffset!==null){
        return {top : window.pageYOffset}
    }else if(document.compatMode==="CSS1Compat"){
        return { top : document.documentElement.scrollTop}
    }
    return { top : document.body.scrollTop}

}
function my_client() {
    if(window.innerWidth){
        return{
            width : window.innerWidth,
            height : window.innerHeight
        }
    }else if (document.compatMode==='CSS1Compat'){
        return{
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }
    return{
        width : document.body.clientWidth,
        height : document.body.clientHeight
    }
}