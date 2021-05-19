var alltext=document.querySelector("#text");
function CopytoClick() {
    alltext.select();
    document.execCommand('copy');
}
function UperCase() {
    alltext.value=alltext.value.toUpperCase();
}
function Reset(){
    alltext.style.fontFamily='';
    alltext.style.fontStyle ='';
    alltext.style.fontWeight = "";
}
 function Clear() {
    alltext.value=""
    let  word=document.querySelector("#words");
    let  characters=document.querySelector("#characters");
    characters.innerHTML=alltext.value.length;
    word.innerHTML=0;
}
function LowerCase() {
    alltext.value=alltext.value.toLowerCase();
}
function Capitalized() {
    text=alltext.value;
    text=text.replace(/(^\s*)|(\s*$)/gi,"");
    capitalize=[];
    text=text.split(" ");
    text.forEach(element => {
        capitalize.push(element[0].toUpperCase()+element.slice(1,element.length).toLowerCase());
    });
    alltext.value=capitalize.join(' ');
}
function AternateCase() {
    text=alltext.value;
    text=text.replace(/(^\s*)|(\s*$)/gi,"");
    alternate="";
    var i=0;
    for (let j = 0; j < text.length; j++) {
        if (text[j]!=' ') {
            if(i%2==0){
                alternate+=text[j].toLowerCase();
            }
            else{
                alternate+=text[j].toUpperCase();
            }
            i++;
        }
        else{
            i=0;
            alternate+=' ';
        }
    }
    alltext.value=alternate
}
function AternateCase2() {
    text=alltext.value;
    text=text.replace(/(^\s*)|(\s*$)/gi,"");
    alternate="";
    var i=0;
    for (let j = 0; j < text.length; j++) {
        if (text[j]!=' ') {
            if(i%2==1){
                alternate+=text[j].toLowerCase();
            }
            else{
                alternate+=text[j].toUpperCase();
            }
            i++;
        }
        else{
            i=0;
            alternate+=' ';
        }
    }
    alltext.value=alternate
}
function InverseCase() {
    text= alltext.value;
    newtext=""
    for(i=0;i<text.length;i++){
        if (text[i]===text[i].toLowerCase()) {
            newtext+=text[i].toUpperCase();
        }
        else{
            newtext+=text[i].toLowerCase();
        }
    }
    alltext.value=newtext;
}
function BoldCase() {
    alltext.style.fontWeight = "bold";
}
function ItalicCase() {
    alltext.style.fontStyle ='italic';
}
function ReverseString() {
    text=alltext.value;
    text=text.replace(/(^\s*)|(\s*$)/gi,"");
    alltext.value=text.split('').reverse().join('');
}
function ChangeFont() {
    var x=document.querySelector("#fonts").selectedIndex;
    const family=document.getElementsByTagName("option")[x].value;
    alltext.style.fontFamily=family;
}
function Count() {
  let  word=document.querySelector("#words");
  let  characters=document.querySelector("#characters");
  characters.innerHTML=alltext.value.length;
  text=alltext.value
  text=text.replace(/(^\s*)|(\s*$)/gi,"");
  if (text.length!=0){
        word.innerHTML=text.split(" ").length;
  }
  else{
    word.innerHTML=0
  }

}


function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function DownloadText(){
text=alltext.value;
text=text.replace(/(^\s*)|(\s*$)/gi,"");
filename="download.txt";
if (text.length!=0){
download(filename,text);
}

}


// Heading Animations

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 200;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



var params={'url':'https://mjmaurya.github.io/textutil/', 'title':'TextUtil-Convert upper case to lower case, lower case to upper case and more!', 'tags':'textutil'};
function shareIt(social){
    console.log(params);
    // var params = JSON.parse(params);
    var button= '';
    switch (social) {
     case 'facebook':
      button='http://www.facebook.com/share.php?u='+params.url;
      break;
     case 'twitter':
      button='https://twitter.com/share?url='+params.url+'&text='+params.title+'&hashtags='+params.tags;
      break;
     case 'whatsapp':
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       button='whatsapp://send?text='+params.url;
      }else{
       button='https://web.whatsapp.com/send?text='+params.url;
      }
      break;
     case 'linkedin':
      button='http://www.linkedin.com/shareArticle?mini=true&url='+params.url;
      break;
     default:
      break;
    }
    console.log(button);
    window.open(button,'_blank'); 
   }