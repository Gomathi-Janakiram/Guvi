var text=document.getElementById("text")

var image=document.getElementById("flag")

setTimeout(function(){
    text.innerHTML=10;
       setTimeout(function(){
           text.innerHTML=9;
            setTimeout(function(){
                text.innerHTML=8;
                  setTimeout(function(){
                     text.innerHTML=7;
                        setTimeout(function(){
                            text.innerHTML=6;
                                setTimeout(function(){
                                    text.innerHTML=5;
                                    setTimeout(function(){
                                        text.innerHTML=4;
                                            setTimeout(function(){
                                                text.innerHTML=3;
                                                setTimeout(function(){
                                                    text.innerHTML=2;
                                                        setTimeout(function(){
                                                            text.innerHTML=1;
                                                                setTimeout(function(){
                                                                    text.innerHTML=0;
                                                                        setTimeout(function(){
                                                                            text.innerHTML="HAPPY INDEPENDANCE DAY";
                                                                            image.src="https://img.icons8.com/color/48/000000/india-circular.png"
                                                                        })
                                                                },1000)
                                                        },1000)
                                                },1000)
                                            },1000)
                                    },1000)
                                },1000)
                        },1000)
                  },1000)
            },1000)
       },1000)
},1000)


