
function src(page){
  document.getElementById('frame').src = page + ".html";
  return null;
}

function adjust(obj)
{
//  var size;
    while(document.getElementById(obj).scrollWidth > document.getElementById(obj).clientWidth){

    //    size = window.getComputedStyle(document.getElementById('pre')).fontSize;
    //    size--;
      //  document.getElementById('pre').style.fontSize = size;
      document.getElementById(obj).style.fontSize = parseInt(window.getComputedStyle(document.getElementById(obj)).fontSize) -1;
     }
     while(document.getElementById(obj).scrollWidth == document.getElementById(obj).clientWidth)
     {
       document.getElementById(obj).style.fontSize = parseInt(window.getComputedStyle(document.getElementById(obj)).fontSize) +1;
       if(document.getElementById(obj).scrollWidth > document.getElementById(obj).clientWidth)
       {
         document.getElementById(obj).style.fontSize = parseInt(window.getComputedStyle(document.getElementById(obj)).fontSize) -1;
         break;
       }
     }

}

/*
function adjust(obj)
{
//  var size;
    if(document.getElementById(obj).scrollWidth > document.getElementById(obj).clientWidth)
    {
      document.getElementById(obj).style.fontSize = parseInt(window.getComputedStyle(document.getElementById(obj)).fontSize) -1;
    }

    if(document.getElementById(obj).scrollWidth == document.getElementById(obj).clientWidth)
    {
      document.getElementById(obj).style.fontSize = parseInt(window.getComputedStyle(document.getElementById(obj)).fontSize) + 1;
    }

    if(document.getElementById(obj).scrollWidth > document.getElementById(obj).clientWidth)
    {
      document.getElementById(obj).style.fontSize = parseInt(window.getComputedStyle(document.getElementById(obj)).fontSize) -1;
    }

}
*/
