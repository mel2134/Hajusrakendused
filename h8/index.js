document.getElementById("app").innerHTML = `<table id="xmlTable"></table>`

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","games.xml",false)
xmlhttp.send()
let XMLContent = xmlhttp.responseXML


let tableRows = "<tr><th>Title</th><th>Price</th><th>Platforms</th></tr>"
let gameElements = XMLContent.getElementsByTagName("game")
for (const element of gameElements) {
    tableRows +="<tr><td>"+
    element.getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    element.getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td><td>"
    var platforms = element.getElementsByTagName("platforms")[0].getElementsByTagName("platform")
    for(let i = 0;i<platforms.length;i++){
        if(i == 1){
            tableRows+= platforms[i].childNodes[0].nodeValue + "/"
            continue
        }
        tableRows+= platforms[i].childNodes[0].nodeValue + "/"

    }
    tableRows += "</td></tr>"
}
document.getElementById("xmlTable").innerHTML = tableRows
