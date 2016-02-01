  //初始化数组
  
  arrInit = [];
 
  function init(number) {
      for (var i=0; i< number; i++){
        var str= i+1;
        if(str < 10){
          arrInit[i] = "00" + str; 
        }else if(str < 100){
          arrInit[i] = "0" +str;
        }else{
          arrInit[i] = "" + str;
        }
      }
      var logArr = arrInit;
      // console.log(logArr[number]);
      for (var i=0; i< number; i++){
          var num = Math.random() * number;
          num = Math.floor(num);
          var value;
          value = arrInit[i];
          arrInit[i] = arrInit[num];
          arrInit[num] = value;
      }
      //console.log(arrInit);
      return arrInit;
    }

  function nameListGrow(){
      arrInit = init(400);
 
      //检查是否为第一次进入或者数组已经为空
      if(getfirstTime() != 'no' || eval(loadStorage()).length < 5){
        //alert("sorry Happy Endding");
        saveStorage(arrInit);
      }
      //为首次进入设置flag
      setfirstTime('no');


      var arrStr = loadStorage();
      var arr = eval(arrStr);
      var len = arr.length;
      var _html = '';
      var _parentElement= document.getElementById("announcementbody");  
      for(var i = 0;i < len; i++){
        _html +="<li><span class=\"name\"></span><span class=\"num\">"+arr[i]+"</span></li>"
      }
      var _node = document.createElement('ul');
      _node.innerHTML = _html;
       removeChildren(_parentElement);
       document.getElementById("announcementbody").appendChild(_node);
        _parentElement.innerHTML += '<br style="clear: both" />' + _parentElement.innerHTML;  
    }
  function removeChildren(pnode){    
      var childs=pnode.childNodes;    
      for(var i=childs.length-1;i>=0;i--){    
        pnode.removeChild(childs.item(i));    
      }    
    }   
  function stopYou(){
    var arrStr = loadStorage();
    var arr = eval(arrStr);
    var personNum = arr.length;
    giftForYou= 0;//全局变量giftForYou为取arr数组名单做准备  
    function setName(){
      getNum();
      //console.log(giftForYou);
      if(giftForYou < personNum){
        //取随机数成功，设置中奖人名单
        //var giftName = arr[giftForYou].gname;
        var giftNum = arr[giftForYou];
      //  document.getElementById("giftName").firstChild.nodeValue = giftName;
        document.getElementById("giftNum").innerHTML = giftNum;
        arr.remove(giftForYou);
        //console.log(arr);
        saveStorage(arr);
      }else{
        //未取到可用随机数
        setName();
      }
    }
    setName();
    setTimeout(showMonkeyAnimation (),1000)
    
   }
   function showResultBoxAnimation(){
        //设置名单成功，展开画轴
    var lBox = document.getElementById("resultBox-l");
      lBox.className += ' resultBox-LeftAction';
    var rBox = document.getElementById("resultBox-r");
      rBox.className +=' resultBox-RightAction';
    var cBox = document.getElementById("resultBox-c");
      cBox.className += ' resultBox-CenterAction';
 
   }
   function showMonkeyAnimation(){
      //抽奖中奖名单。撒花动画
      document.getElementById('successfulBox').style.display = 'block';
      var mBox1 = document.getElementById("monkey1");
      mBox1.className += ' animateAction';
      var mBox2 = document.getElementById("monkey2");
      mBox2.className += ' animateAction2';
      var pBox1 = document.getElementById("peach1");
      pBox1.className += ' animateAction3';
      var pBox2 = document.getElementById("peach2");
      pBox2.className += ' animateAction4';
      var rbBg = document.getElementById("resultBoxBg");


         var monkeys1 = document.getElementById("monkeys1");
      monkeys1.className += ' animateAction11';
    var monkeys2 = document.getElementById("monkeys2");
      monkeys2.className += ' animateAction22';
    var monkeys3 = document.getElementById("monkeys3");
      monkeys3.className += ' animateAction33';
    var monkeys4 = document.getElementById("monkeys4");
      monkeys4.className += ' animateAction44';
    var monkeys5 = document.getElementById("monkeys5");
      monkeys5.className += ' animateAction44';



      removeClass(rbBg,'hide')





   }
   function hideMonkeyAnimation(){
      //移除抽奖中奖名单。撒花动画
      document.getElementById('successfulBox').style.display = 'none';
      var mBox1 = document.getElementById("monkey1");
      removeClass(mBox1,'animateAction')
      var mBox2 = document.getElementById("monkey2");
      removeClass(mBox2,'animateAction2')
      var pBox1 = document.getElementById("peach1");
      removeClass(pBox1,'animateAction3')
      var pBox2 = document.getElementById("peach2");
      removeClass(pBox2,'animateAction4')
      var rbBg = document.getElementById("resultBoxBg");
      rbBg.className += ' hide';


      var monkeys1 = document.getElementById("monkeys1");
        removeClass(monkeys1,'animateAction11');
      var monkeys2 = document.getElementById("monkeys2");
        removeClass(monkeys2,'animateAction22');
      var monkeys3 = document.getElementById("monkeys3");
        removeClass(monkeys3,'animateAction33');
      var monkeys4 = document.getElementById("monkeys4");
        removeClass(monkeys4,'animateAction44');
      var monkeys5 = document.getElementById("monkeys5");
        removeClass(monkeys5,'animateAction44');
   }
  //检测设置是否第一次抽奖flag
  function setfirstTime(str){
    localStorage.setItem("firstTime",str);
  }
  function getfirstTime(){
    return localStorage.getItem("firstTime");
  }
  //存取数组
  function saveStorage(arr){
    newArr = Util.objToJstr(arr);
    localStorage.setItem('saveArr',newArr);
    console.log(eval(newArr).length);
  }
  function loadStorage(){
    var arrSave = localStorage.getItem("saveArr");
    return arrSave;
  }
  function clearStorage(){
    localStorage.clear();
  }
  //获取随机数
  function getNum(){
    giftForYou = Math.floor(Math.random()*1000/2);
    return giftForYou;
  }
  //移除数组元素
  Array.prototype.remove=function(obj){ 
    for(var i =0;i <this.length;i++){ 
      var temp = this[i]; 
    if(!isNaN(obj)){ 
      temp=i; 
    } 
    if(temp == obj){ 
      for(var j = i;j <this.length;j++){ 
        this[j]=this[j+1]; 
      } 
        this.length = this.length-1; 
      } 
    } 
  }
  function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
  }
  //移除class
  function removeClass(obj, cls) {  
      if (hasClass(obj, cls)) {  
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
          obj.className = obj.className.replace(reg, ' ');  
      }  
  }  
  //数组转化为字符串
  var Util={
    objToJstr: function (o){
            var r = [];
            if (typeof o == "string") return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, " \\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
            if (typeof o == "undefined") return "";
            if (typeof o == "object"){
                if (o === null)
                    return "null";
                else if (!o.sort){
                    for (var i in o){
                        r.push("\"" + i + "\":" + "\"" + o[i] + "\"");
                        //r.push("\"" + i + "\":" + encodeURI(o[i]));
                    }
                    r = "{" + r.join() + "}"
                }else{
                    for (var i = 0; i < o.length; i++)
                        r.push(Util.objToJstr(o[i]));
                    r = "[" + r.join() + "]";
                }
                return r;
            }
            return o.toString();
        }
    }
    //播放音乐
    // function createMusic(_source){
    //     var audio = document.createElement("AUDIO");
    //     audio2 = audio;
    //     var source= _source;
    //     audio.setAttribute("src", source);
    //     audio.setAttribute("loop", 'true');
    //     audio.setAttribute("controls", 'controls');
    //     audio.setAttribute("autoplay", 'false');
    //     audio.setAttribute("id", 'myAudio2');
    //     //audio.addEventListener('canplay', canPlay, false);
    //     document.getElementById('example').appendChild(audio);
    //     //audio.play();
    // }

    function stopMusic(audio){
        audio.pause();
    }
    function playMusic(audio){
        audio.play();
    }

///////////////////////////////////////////////////////////


function $(id){
   return document.getElementById(id);
}
  var anndelay = 10;
  var stopdelay = 100;
  var anncount = 0;
  var annheight = 123;
  var annst = 0;

function announcementScroll(){
   var _offsetHeight = document.getElementById('announcementbody').childNodes[0].offsetHeight *2;
   //定时器判断
   if( !annst){
      $('announcementbody').scrollTop = 0;
      if($('announcementbody').scrollHeight > annheight){
         annst = setTimeout('announcementScroll()', anndelay);
      }else {
         $('announcement').onmouseover = $('announcement').onmouseout = null;
      }
      return;
   }
   //判断是否有可滚动区域
   if(anncount == annheight){
      if($('announcementbody').scrollHeight - annheight <= $('announcementbody').scrollTop){
         $('announcementbody').scrollTop = $('announcementbody').scrollHeight / 2 - annheight;
      }
      anncount = 0;
      annst = setTimeout('announcementScroll()', anndelay);
   }else {
      //$('announcementbody').scrollTop ++;
      $('announcementbody').scrollTop = $('announcementbody').scrollTop + 5;
      anncount ++;
      annst = setTimeout('announcementScroll()', anndelay);
   }
    if(_offsetHeight <= $('announcementbody').scrollTop +200 ){
      console.log(_offsetHeight+'========'+$('announcementbody').scrollTop)
      annst = 0;
      anncount =0;
      $('announcementbody').scrollTop = 0;
      // announcementScroll();
    }
}
   
   
window.onload =function (){
    var _resultBox = document.getElementById("resultBox");
    var _resultBoxBg = document.getElementById("resultBoxBg");


    setTimeout(function (){
      _resultBox.style.opacity =1;
      _resultBoxBg.style.opacity = 1;
    },100)
    //监控空格敲击次数
    // createMusic('music/bg.mp3');
    // createMusic('music/successful.mp3');
    var audio = document.getElementById('myAudio');
    var audioLala = document.getElementById('myAudio2');
    flag=1;
    nameListGrow();
    showResultBoxAnimation(); 
    announcementScroll();
     playMusic(audio);
     stopMusic(audioLala);
    document.onkeydown = function (){
      if(event.keyCode == 32 && flag == 1){
            stopMusic(audio);
            playMusic(audioLala);
            clearTimeout(annst);
            annst = 0;
            stopYou();
            annst = null;
            var _ele = document.getElementById("endBtnBg"),
            _beforeText = document.getElementById("beforeText");
            _xixi = document.getElementById("xixi");
            _gifPeach = document.getElementById("gifPeach");

            _beforeText.className +=' beforeAction';
            _xixi.className +=' xixiAction';
            removeClass(_ele,"btnBgAction");
            removeClass(_gifPeach,"gifPeachAction");

            $('announcementbody').style.opacity = 0;
            $('resultName').style.opacity = 1;
            flag= 2;
            
      }else if(event.keyCode == 32 && flag == 2){
            stopMusic(audioLala);
            playMusic(audio);
            nameListGrow();
            annst = setTimeout('announcementScroll()', anndelay);
            hideMonkeyAnimation();
            var _ele = document.getElementById("endBtnBg"),
             _beforeText = document.getElementById("beforeText"),
             _xixi = document.getElementById("xixi");
             _gifPeach = document.getElementById("gifPeach");


            removeClass(_beforeText,"beforeAction");
            removeClass(_xixi,"xixiAction");
            
            _ele.className +=' btnBgAction';
            _gifPeach.className +=' gifPeachAction';

            $('resultName').style.opacity = 0;
            $('announcementbody').style.opacity = 1;
            flag= 1;
      }else if(event.keyCode == 13){
        document.getElementById("endBtnBox").style.opacity = 0.2;
        window.location.href ='login.html';
      }
    }
    //返回login页面
    document.getElementById('endBtnBox').onclick = function (){
      document.getElementById("endBtnBox").style.opacity = 0.2;
      window.location.href ='login.html';
    } 
} 


function randomMonkey(){
  var m1 = document.getElementsByClassName("monkeys")[0];
 // var num = Math.floor(Math.random()*10); //产生随机整数
  // var numArr =['num1','num2','num3','num4','num5','num6','num7','num8'];
  //   for(var i = 0; i <= numArr.length;i++){
  //     numArr[i]=m1.cloneNode();
  //   }
    for(var i = 0; i <= 3;i++){
      var monkeys = m1.cloneNode();
      document.body.appendChild(monkeys);
    }

}




