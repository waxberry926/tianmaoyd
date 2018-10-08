$(function () {
    //轮播图
    let t=setInterval(move,2000)
    let img = $(".bannerimg a")
    let width=351;
    let now=0;
    let next=0;
    function move(){
        next++;
        if(next==img.length){
            next=0;
        }
        img[next].style.left=width+"px";
        animate(img[now],{left:-width});
        animate(img[next],{left:13});
        now=next;
    }
    //发现品牌轮播效果
    let card=$('.down .items')
    let hidd=$('.down .items .hidd')
    let index=0
    // console.log(card,hidd)
    setInterval(keepup,2000)
    function keepup() {
        index++
        if(index==card.length){
            index=0
        }
        hidd.css('bottom','-50px')
        hidd[index].style.bottom=0;
    }
    //抢购倒计时
    function daojishi() {
        let time=new Date()
        let yy=time.getFullYear()
        let mm=time.getMonth()+1
        let dd=time.getDate()
        let hh=time.getHours()
        let nowTime=new Date();
        let futureTime=new Date(yy,mm,dd,hh+2);
        // console.log(futureTime)
        let time1=nowTime.getTime();
        let time2=futureTime.getTime();
        let arr=[];
        //距离倒计时相差的秒数
        let times=Math.floor((time2-time1)/1000);
        let month=Math.floor(times/(30*24*60*60));
        // arr.push(month);
        times=times-(month*(30*24*60*60));
        let day=Math.floor(times/(24*60*60));
        // arr.push(day);
        times=times-(day*(24*60*60));
        let hour=Math.floor(times/(60*60));
        if(hour<10){
            hour="0"+hour;
        }
        arr.push(hour);
        times=times-(hour*(60*60));
        let minut=Math.floor(times/60);
        arr.push(minut);
        times=times-(minut*(60));
        let s=Math.floor(times%60);
        if(s<10){
            s="0"+s;
        }
        arr.push(s);
        return arr;
    }
    // let arr1=daojishi(2018,10,6,16);
    let tt=document.querySelectorAll('.xianshiqianggou .con .tt')
    // console.log(arr1,tt)
    TimeGo();
    setInterval(TimeGo,1000);
    function TimeGo(){
        let arr=daojishi();
        tt.forEach(function (element,index) {
            element.innerText=arr[index];
        })
    }
    // 顶部搜索框
    let logo=$('.header .content .title .logo')
    let searchbox=$('.header .searchbox')
    console.log(top,searchbox)
    $(window).scroll(function () {
        let top=$(this).scrollTop()
        console.log(top)
        if(top>35) {
            // logo.css('display', 'none')
            searchbox.css({
                width: 284,
                height: 36,
                position: 'absolute',
                top: '0.1rem',
                left: '0.9rem'

            })
            $('.header').css('height', '50px')
        }
        if(top<35){
            searchbox.css({
                width: '7.5rem',
                height: '0.98rem',
                position: 'relative',
                top: 0,
                left: 0
            })
            $('.header').css('height', '1.8rem')
        }
    })

})