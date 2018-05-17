window.onload=function(){
    let pic=document.querySelectorAll('.major .banner a img');
    let dot=document.querySelectorAll('.major .banner .Dot .dott');
    let banner=document.querySelector('.major .banner');
    let jian=document.querySelector('.major .jiantou');
    let jianL=document.querySelector('.major .banner .jiantou .left');
    let jianR=document.querySelector('.major .banner .jiantou .right');
    let flag=true;
    let t=setInterval(move,2000);
    for(let i=0;i<dot.length;i++) {
        dot[i].onclick = function () {
            for(let j=0;j<dot.length;j++){
                pic[j].style.opacity='0';
                dot[j].classList.remove('dott1')
            }
            pic[i].style.opacity='1';
            dot[i].classList.add('dott1');
            index=i;
        }
    }
    banner.onmouseenter=function(){
        clearInterval(t)
    };
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
    };
    jianR.onclick=function() {
        if(!flag){
           return;
        }
        flag=false;
        move();
    };
    jianL.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        moveL();
    };
    let index=0;
    function move(){
        index++;
        if(index===pic.length){
            index=0;
        }
        for(let i=0;i<pic.length;i++){
          pic[i].style.opacity='0';
          dot[i].classList.remove('dott1')
        }
        dot[index].classList.add('dott1')
        animate(pic[index],{opacity:1},function(){
            return flag=true;
        })
    }

    function moveL(){
        index--;
        if(index<0){
            index=pic.length-1;
        }
        for(let i=0;i<pic.length;i++){
            pic[i].style.opacity='0';
            dot[i].classList.remove('dott1')
        }
        dot[index].classList.add('dott1')
        animate(pic[index],{opacity:1},function(){
            return flag=true;
        })
    }
    //加载图片
    let ch=innerHeight;
    let scrolls=document.querySelectorAll('.scroll');
    console.log(scrolls);
    let imgs=document.querySelectorAll('img');
    console.log(imgs);
    let floatDown=true,floatUp=true;
    let arr=[];
    imgs.forEach(element=>{
        arr.push(element.offsetTop);
    });





    //加顶层下拉栏
    let top=document.querySelector('.major .top:nth-child(2)');
    let flagDown=true,flagUp=true;
    window.onscroll=function(){
        //获取滚动部分的高度
        let st = document.body.scrollTop || document.documentElement.scrollTop;
        //下拉列表
        if(st>=108){
            if(!flagDown){return}
            flagDown=false;
            animate(top,{top:0},5,function(){
                flagDown=true;
                flagDown=true;
            })
        }else if(st<108){
            if(!flagDown){return}
            flagDown=false;
            animate(top,{top:-40},5,function(){
                flagDown=true;
                flagDown=true;
            })
        }
        //图片加载
        for(let i=0;i<arr.length;i++){
            //判断屏幕高度+滚动高度 同子元素相对于父级元素的高度
            if(ch+st>arr[i]+800){
                for(let j=0;j<imgs.length;j++){
                    //把存放在title中的图片地址赋值给src
                    imgs[j].style.display='block';
                }
            }
        }

    }



};