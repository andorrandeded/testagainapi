


function alertCookie() {
cookievalue=escape(document.getElementById("take").value);
var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000*36000;
  now.setTime(expireTime);
  var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
  document.cookie = 'cookie=ok;expires='+now.toGMTString()+';path=/';
}
