import request from "./redux/request";




function CoRSSolve(){

    const requestURL = "https://cors-anywhere.herokuapp.com"

const proxyURL =  request.get("/videos",{

    params:{
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode:"US",
        maxResults:20,

    }
    })


    const xhttps = new XMLHttpRequest()
    xhttps.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("data").innerText = xhttps.responseText
        }
    };
   // xhttp.open("Get",     "https://cors-anywhere.herokuapp.com"/https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=[AIzaSyADQ99_g_VS_fVF7kVcWZdwgdru6vVN2VE] HTTP/1.1 ", true)
     
   
   
   xhttps.open("Get", "https://cors-anywhere.herokuapp.com/" + proxyURL, true ) 
   xhttps.setRequestHeader("X-Requested-With", "XMLHttpRequest");
   


   xhttps.onload = function() {
    alert(xhttps.responseText);
};

    xhttps.send()

}
CoRSSolve()






