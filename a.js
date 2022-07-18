var accepted_domains = new Array("http://127.0.0.1:8081/wd");
//設定只有 angeloeyez.blogspot 和 www.cnn.com/aka 這兩個網站可以直接連結這組程式
//你也可以改成"",表示不允許其他任何網站連結這組程式

var domaincheck = document.location.href; 
var accepted_ok = false;
if (domaincheck.indexOf("http") != -1) {
 for (r = 0; r < accepted_domains.length; r++)
  if (domaincheck.indexOf(accepted_domains[r]) != -1) {
   accepted_ok = true;
   break;
  }
} else accepted_ok = true;
if (!accepted_ok) {
 alert("此站站長未經允許擅自盜連這組程式！"); //在該盜連網頁上跳出警告小視窗
 location.href = "https://github.com/HanLinMa"; //強制導向其他網址
}