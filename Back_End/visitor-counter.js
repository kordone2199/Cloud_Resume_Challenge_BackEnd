function visitorCounter(){
    fetch("https://0lgd514um8.execute-api.us-east-2.amazonaws.com/visitorCounter")
        .then(Response => Response.text())
        .then((body)=> {
            document.getElementById("visitor-counter").innerHTML=body
        })

}