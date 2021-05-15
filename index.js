<<<<<<< HEAD
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

=======
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

>>>>>>> 53f09535fe28a629210dbfca672e91a47d0957a2
}