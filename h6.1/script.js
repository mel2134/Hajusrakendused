var country_index = {}
document.onload = loadData()
function loadData(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var parsed = JSON.parse(this.responseText)
        for (const element of parsed) {
            var country = element["country"].toLowerCase()
            if(country_index[country] === undefined){
                country_index[country] = []
            }
            country_index[country].push(element)
        }
        console.log(country_index)
    }
    xhttp.open("GET","https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")
    xhttp.send()
}

function getByCountry(form){
    var country = form.country.value
    console.log(country)
    if(!country || country === undefined){
        alert("Invalid country")
        return false;
    }
    var unis = country_index[country.toLowerCase()]
    if(unis == undefined){
        alert("No universities found")
        return false;
    }
    var temp = `<p style="position: sticky;top: 4.05em;left: 5px;background-color:white;">Total universities: ${unis.length}</p><ol>`
    for (const element of unis) {
        temp += `<li>
        <div>
        <p>Name: ${element.name}</p>
        <a href=${element.web_pages[0]}>Homepage - ${element.web_pages[0]}</a>
        </div>
        </li>`
    }
    temp+="</ol><br>"
    document.getElementById("data").innerHTML = temp
    
    /*
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var parsed = JSON.parse(this.responseText)
        if(parsed.length === 0){
            alert(`No universities found for ${country}`)
            return;
        }
        var temp = `<p style="position: sticky;top: 4.05em;left: 5px;background-color:white;">Total universities: ${parsed.length}</p><ol>`
        for (const element of parsed) {
            temp += `<li>
            <div>
            <p>Name: ${element.name}</p>
            <a href=${element.web_pages[0]}>Homepage - ${element.web_pages[0]}</a>
            </div>
            </li>`
        }
        temp+="</ol><br>"
        document.getElementById("data").innerHTML = temp
    }
    xhttp.open("GET",`http://universities.hipolabs.com/search?country=${country}`)
    xhttp.send()
    */
    return false;
}