document.body.className = 'fadeout';
function MAIN_1() {
    GetId("maintitle").innerHTML = "F";
    setTimeout(function() { MAIN_2(); }, 100);
}

function MAIN_2() {
    GetId("maintitle").innerHTML = "FS";
    setTimeout(function() { MAIN_3(); }, 100);
}

function MAIN_3() {
    GetId("maintitle").innerHTML = "FSa";
    setTimeout(function() { MAIN_4(); }, 100);
}

function MAIN_4() {
    GetId("maintitle").innerHTML = "FSan";
    setTimeout(function() { MAIN_5(); }, 100);
}

function MAIN_5() {
    GetId("maintitle").innerHTML = "FSanc";
    setTimeout(function() { MAIN_6(); }, 100);
}

function MAIN_6() {
    GetId("maintitle").innerHTML = "FSanch";
    setTimeout(function() { MAIN_7(); }, 100);
}

function MAIN_7() {
    GetId("maintitle").innerHTML = "FSanchi";
    setTimeout(function() { MAIN_8(); }, 100);
}

function MAIN_8() {
    GetId("maintitle").innerHTML = "FSanchir";
    setTimeout(function() { MAIN_1(); }, 100);
}




/*여기까지 무시*/
var site = "http://fsanchir.kro.kr/";
var write = function(write) { document.write(write); };
var GetId = function(Id) { return (document.getElementById(Id)); };
var setTitle = function(title) { document.write("<title>" + title + "</title>"); }
function jsdecode(js) {return atob(js);}
function jsencode(js) {return btoa(js);}

 var deleteCookie = function(name) {
document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

function gonow(gosite) {
    write('Go to' + ' ' + gosite + ' ...');
    location.href = gosite;
}
 var getCookie = function(name) {
var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
return value? value[2] : null;
};

function setCookie(cookie_name, value, days) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + days);
  // 설정 일수만큼 현재시간에 만료값으로 지정

  var cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
  document.cookie = cookie_name + '=' + cookie_value;
}


function NS1recov() {
    setTimeout(function() { NS1recov_1(); }, 2000);
    document.body.style.cursor = "wait";
    GetId("NS1P").innerHTML = "setting...";
    GetId("NS1button").disabled = "disabled";
    GetId("NS1code").disabled = "disabled";
    
}
function NS1recov_1() {
    document.body.style.cursor = "progress";
    if(location == site + "NS001") {
        GetId("NS001").style.display = "none";
        var NS1 = GetId('NS1code').value;
        var ns1 = NS1 * 255;
        if(isNaN(ns1) === true) {
            ns1="ERROR";
            console.log("ERROR\n\nNot a Number.");
        }
        write('<style>');
        write('body {');
        write('background: #76b852;');
        write('background: -webkit-linear-gradient(right, #76b852, #8DC26F);');
        write('background: -moz-linear-gradient(right, #76b852, #8DC26F);');
        write('background: -o-linear-gradient(right, #76b852, #8DC26F);');
        write('background: linear-gradient(to left, #76b852, #8DC26F);');
        write('}');
        write('</style>');
        write('<title>Recovery Code is ' + ns1 + '.</title>');
        write('<div align="center">');
        write("Code is " + ns1);
        write("<br>Warning!! This Page Will Refreshed 5 Seconds later.");
        write('</div>');
        setTimeout(function() { location.href = location; }, 5000);
        setCookie("code", ns1, "3");
}}
var app = btoa("FS.");
function adlogin(passed) {
        var LID = btoa(GetId("LOGIN").value);
        if(app == LID) {
            setCookie("PASSWORD", app, 1);
            deleteCookie("showlogin");
            GetId("logbut").disabled = "disabled";
            GetId("logininfo").innerHTML = "Sent!"
            GetId("logininfo").className = "nonlight";
            setTimeout(function() { adloginsee(); }, 100)
        }
}
function adloginsee() {
    GetId("logininfo").className = "light";
}

function sitefunc() {
    if(getCookie("spancolor") == "ok"){
        GetId("mainspan").style.color = "#FF0000";
        deleteCookie("spancolor");
    }
    else {
        GetId("mainspan").style.color = "#006666";
        setCookie("spancolor", "ok", 1);
    }
    setTimeout(function() { sitefunc(); }, 1000); //진심 깜빡이는 거 해 보고 싶었음. 드디어 됐네.. 후유
}

function AniMATEDFunction() {
    if(getCookie("AnimaTGD") == "ok"){
        GetId("ANMspan").style.color = "#FF0000";
        deleteCookie("AnimaTGD");
    }
    else {
        GetId("ANMspan").style.color = "#006666";
        setCookie("AnimaTGD", "ok", 1);
    }
    setTimeout(function() { AniMATEDFunction(); }, 500);
}

function ANMASDK() {
    GetId("ANMspan").innerHTML = GetId("ANMspan_input").value;
    GetId("animatedtitle").innerHTML = "FS_Animated: " + GetId("ANMspan_input").value;
    setTimeout(function() { ANMASDK(); }, 100);
}

function dlcolorfunc() {
        if(location == dlsite) {
    if(GetId("maindl").style.color == "green") {
        GetId("maindl").style.color = "red";
    }
    else {
        GetId("maindl").style.color = "green";
    }
    setTimeout(function() { dlcolorfunc(); }, 1000);
}
}


function datewidget() {
    if(location == site + "date") {
    var NMCdate = Date.now();
    GetId("dateMSC").innerHTML = NMCdate;
    setTimeout(function() { datewidget(); }, 1000);
}}

function NS001func() {
    setTimeout(function() { NS001func1(); }, 100)
    if(isNaN(GetId("NS1code").value * 255) == true) {
        GetId("NS1code").className = "sinput1"
        GetId("NS1button").disabled = true;
    }
    else {
        GetId("NS1code").className = "sinput"
        GetId("NS1button").disabled = false;
    }
}
function NS001func1() {
    setTimeout(function() {NS001func(); }, 100)
    if(isNaN(GetId("NS1code").value * 255) == true) {
        GetId("NS1code").className = "sinput1"
        GetId("NS1button").disabled = true;
    }
    else {
        GetId("NS1code").className = "sinput"
        GetId("NS1button").disabled = false;
    }
}

if(location == site + "NS001-1") 
    location.href = site + "NS001"
    
    function ytvideo() {
    if(URL(location, site + "youtube*")) {
        var YTid = GetId("ytinput").value;
        var YTif = GetId("ytiframe");
        var YTe = YTid.replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "").replace("https://www.youtube.com/embed/", "").replace("www.youtube.com/embed/", "").replace("youtu.be/", "").replace("youtube.com/watch?v=", "").replace("www.youtube.com/watch?v=", "");
        YTif.src = "https://www.youtube.com/embed/" + YTe;
        GetId("ytdiv2").className = "show1";
        GetId("ytdiv2").className = "hide";
        setTimeout(function() { ytvideo1(); }, 2000)
        GetId("ytp1").innerHTML = "Loading...";
    }
}
function ytvideo1() {
    if(URL(location, site + "youtube*")) {
        GetId("ytdiv2").className = "show";
        GetId("ytp1").innerHTML = "";
    }
}
function ytidremember() {
    if(URL(location, site + "youtube*")) {
        setCookie("YTidsave",GetId("ytinput").value, 7)
        GetId("ytpre").innerHTML = "임시 저장된 영상: " + getCookie("YTidsave");
    }
}
function ytvideos() {
    GetId("ytinput").value = getCookie("YTidsave")
}
function ytnewtab() {
    window.open(GetId("ytiframe").src,"_blank");
}
function URL(str, rule) {
  var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
}
function wildcard(str, rule) {
  var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
}
function engpressed() {
    engsetting = "ok";
}

function engword(named, informations, categoried, realnamed) {
    if(realnamed === undefined) { realnamed = named };
    if(GetId("engvocinput").value.toLowerCase() == named) {
    GetId("engp1").innerHTML = realnamed;
    GetId("engp2").innerHTML = informations + '<br><br>카테고리: ' +  categoried;
    engwordunknown = "no"
    }
}
//functions end! ===============================================================================================-=-=-=---=-=-=-=--=--=-======================================================================== /start!/ https://www.codingfactory.net/10731




if(URL(location, site + "youtube*")) {
    var ytd2 = getCookie('YTidsave')
    var ytal = "임시 저장을 하시면 최대 7일까지 해당 영상의 아이디 정보가 저장됩니다.\n쿠키를 삭제하실 경우 아이디 정보가 삭제될 수 있습니다.";
    write('<title id="ytitle">Youtube Video Viewer</title>');
    write('<div id="ydiv" align="center">');
    write('<h4>링크 사용하기: http://fsanchir.kro.kr/youtube?url= 다음 URL 입력</h4><br>');
    write('<input type="text" class="sinput30" id="ytinput" placeholder="https://www.youtube.com/watch?v= 다음 문자를 입력해주세요.">');
    write('<br>');
    write('<button type="button" class="btn btn-outline-primary" onclick="ytvideo();">Submit!</button><br><p id="ytpre" onclick="ytvideos();"></p><p id="ytp1"></p><br>');
    write('<div id="ytdiv2" class="hide1">');
    write('<iframe id="ytiframe" width="560" height="315" src="https://www.youtube.com/embed/ECYZsEon7EI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>');
    write('<button class="sbutton" onclick="ytidremember();">아이디 임시 저장</button><p>&nbsp;</p><a class="a" onclick="alert(ytal);">간단 설명</a><br><a class="a" onclick="ytnewtab();">새 창으로 열기</a>');
    write('</div>');
    write('</div>');
    if(getCookie("YTidsave") === null) {
        GetId("ytpre").className = "hide1";
    }
    GetId("ytpre").innerHTML = "임시 저장된 영상: " + getCookie("YTidsave");
    if(URL(location, site + "youtube?url=*")) {
        var yturl = location.href.replace("http://fsanchir.kro.kr/youtube?url=", "")
        GetId("ytinput").value = yturl;
        ytvideo();
    }
}

if(location == site) { 
    write("<title id='maintitle'>FSanchir</title>");
    write("<div id='main' align='center'>");
    write('<h1><span id="mainspan" style="color:#006666; text-shadow: 0 0 6px #22BBBB">FSanchir</span></h1>');
    write('<br><a class="a" href="/youtube">유튜브 영상 뷰어</a>');
    write('<br><a class="a" href="/vocabulary">다용도 단어장</a>');
    write("</div>");
    write('<div id="login" align="center">');
    write('<input type="password" placeholder="Password" id="LOGIN">');
    write('<br><button onclick="adlogin()" id="logbut">Enter</button><br>');
    write('<p id="logininfo"></p>')
    write('</div>');
    sitefunc();
    MAIN_1();
    GetId("login").style.display = "none";
    if(getCookie("showlogin") == "true") {
        GetId("login").style.display = "block";
    }
}

if(location == site + "ip") {
    write('<title id="iptitle"></title><div align="center"><a style="text-decoration: none;" href="http://' + ip() + '">' + '아이피 주소:' + ip() + '</a></div>')
    GetId("iptitle").innerHTML = "IP: " + ip();
}
if(location == site + "Animated") {
    write('<title id="animatedtitle">FS _ Animated: </title>')
    write('<div align="center">');
    write('<h1><span style="color:blue" id="ANMspan"></span></h1><br />');
    write('<input type="text" id="ANMspan_input" value="Example" />');
    write('</div>');
    AniMATEDFunction();
    ANMASDK();
}



if(location == site + "NS001") {
    write('<title>NS001 Recovery</title>');
    write("<div id='NS001' align='center'>");
    write('<p /><br><br><br><br><br><br><Br>')
    write('<input type="text" id="NS1code" placeholder="Enter Recovery Code" class="sinput" maxlength="20">');
    write('<br>');
    write('<button onclick="NS1recov()" id="NS1button" class="sbutton2">Get code</button>');
    write('<br><p id="NS1P" class="ns1set"></p>')
    write('<br><p class="purple">Recovery Code:' + getCookie("code") + '</p>');
    write('</div>');
    NS001func();
}



if(location == site + "date") {
    write('<title>1970~Now</title>');
    write('<p id="dateMSC" onclick="location.href = site"></p>');
    datewidget();
}

var dlsite = "http://dl.fsanchir.kro.kr/";
if(location == dlsite + "covid19batch") {
    gonow("https://k.kakaocdn.net/dn/EyLR9/btqBuPJ7mTv/gcUQ18At00ARfP2LF0UNzK/%EC%9A%B0%ED%95%9C%20%ED%8F%90%EB%A0%B4%20%EC%98%88%EB%B0%A9%EB%B2%95.bat?attach=1&knm=tfile.bat");
}


if(location == dlsite) {
    write('<title>dl - FSanchir</title>')
    write('<div id="maindl" align="center" style="color:green"><h1>Resources, Short URL Site.<br><a class="a" href="http://fsanchir.kro.kr/">Made by FSanchir</a></h1></div>');
    dlcolorfunc();
}



window.onload = function() {
    document.body.className -= 'fadeout';
    document.body.className = 'body';
}

if(URL(location, site + "vocabulary*")) {
    var engsetting = "no";
    var engwordsn = 51;
    write('<title>vocabulary</title>');
    write('<div align="center" id="engvocdiv">');
    var engvd = GetId("engvocdiv");
    write('<h4>Vocabulary<br>' + '현재 ' + engwordsn + '개의 단어/글이 수록되어 있습니다.<br>');
    write('<input type="text" class="sinput50" style="color:green;" id="engvocinput" maxlength="20" placeholder="Type the words" onkeypress="engpressed()">');
    write('<br><h5 id="engp1" style="background-color:yellow;"></h5><br><h6 id="engp2" style="background-color:skyblue;"></h6><br>');
    
    setTimeout(function() { engwords(); }, 1000);
    
    
    write('</div>');
}
function engwords() {
    if(URL(location, site + "vocabulary*")) { // https://opentutorials.org/module/825
        engwordunknown = "yes";
        // engword("", "", "영어", "");
        engword("ХУРАХ", "(몽골어) 모이다, 군집하다, 쌓이다", "몽골어", "ХУРАХ");
        engword("аав", "(몽골어) 아버지, 아빠", "몽골어", "аав");
        engword("z", "영어 알파벳의 마지막 글자이자 끝을 뜻함.", "영어", "Z");
        engword("a", "영어 알파벳의 첫 글자이자 시작을 뜻함", "영어", "A");
        engword("ak-47", "총기류, 돌격소총", "영어", "AK-47");
        engword("야", "누군가를 부르는 말", "한국어", "야");
        engword("flare gun", "신호탄, 플레어 건", "영어", "Flare Gun");
        engword("over", "바로 위, 가까운 위쪽에, 끝난", "영어", "Over");
        engword("underneath", "깔리다 (위치)", "영어", "Underneath");
        engword("on", "위에 (위치)", "영어", "On");
        engword("under", "아래 (위치)", "영어", "Under");
        engword("above", "(상당히 떨어진) 위쪽에 (위치)", "영어", "Above");
        engword("야 개 짖는 소리 좀 안 나게 해라", "평범한 아파트에서 짖는 개를 다그칠 때 하는 말", "유머");
        engword("test", "실험, 검사", "영어", "Test");
        engword("name", "이름", "영어", "Name");
        engword("about", "~에 대하여, 대략~, 약~", "영어");
        engword("across", "~을(를) 가로질러, ~을(를) 건너서", "영어");
        engword("act", "행동하다, 연기하다, 행동, 행위", "영어", "Act");
        engword("actor", "배우, 영화배우, 연기자", "영어", "Actor");
        engword("address", "(집, 이메일 등의) 주소, 연설", "영어", "Address"); //8
        engword("afraid", "무서워하는, 두려워하는", "영어", "Afraid");
        engword("after", "~뒤에, ~다음에", "영어", "After");
        engword("afternoon", "오후", "영어", "Afternoon");
        engword("again", "또, 다시", "영어", "Again");
        engword("age", "나이, 연령", "영어", "Age");
        engword("ago", "~전에", "영어", "Ago"); //14
        engword("air", "공기, 공중", "영어", "Air");
        engword("airplane", "비행기", "영어", "Airplane");
        engword("airport", "공항, 비행장", "영어", "Airport");
        engword("album", "앨범, 사진첩", "영어", "Album");
        engword("all", "모든, 모두, 전부", "영어", "All");
        engword("along", "~을 따라서", "영어", "Along");
        engword("always", "항상, 언제나", "영어", "Always");
        engword("among", "~사이에, ~가운데", "영어", "Among");
        engword("an", "하나의", "영어", "An");
        engword("and", "그리고, ~와", "영어", "And");
        engword("angry", "화난, 성난, 분노한", "영어", "Angry");
        engword("animal", "동물, 짐승", "영어", "Animal");
        engword("answer", "대답, 대답하다", "영어", "Answer");
        engword("any", "어떤, 무슨, 무언가", "영어", "Any");
        engword("apartment", "아파트", "영어", "apartment");
        engword("apple", "사과", "영어", "Apple");
        engword("arm", "팔", "영어", "Arm");
        engword("around", "~주의에, ~둘레에", "영어", "Around");
        engword("arrive", "도착하다", "영어", "Arrive");
        engword("as", "~만큼, ~할 때, ~하면서, ~로서", "영어", "As");
        engword("ask", "묻다, 질문하다", "영어", "Ask");
        engword("at", "~때에(시간), ~에서(장소)", "영어", "At");
        engword("aunt", "숙모, 고모, 이모, 아주머니", "영어", "Aunt");
        engword("autumn", "가을", "영어", "Autumn");
        engword("away", "멀리, 떨어져서, 저쪽에, ~에 없는", "영어", "Away");
        engword("i", "나(본인)", "영어", "I");
        
        setTimeout(function() { engwords(); }, 200);
        if(engwordunknown == "yes") {
            if(engsetting == "ok") {
                GetId("engp1").innerHTML = "404 Not Found";
                GetId("engp2").innerHTML = "추가 예정입니다.";
            }
        }
    }
}
