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
        }
    };
 
    $.ajax(settings).done(function (response) {
        let quoteMessage = response.quote
        let author = ""
});
        $("#author").append(author)

})

 