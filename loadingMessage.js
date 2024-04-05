$(document).ready(function(){
    
    const settings = {
        referrerPolicy: "strict-origin-when-cross-origin",
        mode: "cors",
        credentials: "omit",

        crossDomain: false,
        url: 'https://quoteapi.pythonanywhere.com/random',
        method: 'GET',
        headers:{
            "Access-Control-Allow-Origin": "*",
            "Host":"quoteapi.pythonanywhere.com"
        }
    };
 
    $.ajax(settings).done(function (response) {
        let quoteMessage = response.quote
        let quote = ""
        let author = ""
});
        $("#quote").append(quote)
        $("#author").append(author)

})


fetch("https://quoteapi.pythonanywhere.com/random", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9,mk;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});