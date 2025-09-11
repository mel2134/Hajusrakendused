const json = [
    {
      Car: {
        Color: "Rose red",
        "Tinted Windows": false,
        Wheels: 4,
        "Roof Cargo": null,
        Entertainment: ["FM Radio","MP3, MP4 and MKV player","harman/kardon speakers"],
        Accessories: ["satnav","cruise control"]
      },
    },
    {
      Car: {
        Color: "Navy blue",
        "Tinted Windows": true,
        Wheels: 4,
        "Roof Cargo": "Thule",
        Entertainment: ["FM Radio","Apple CarPlay/Android Auto","Bowers & Wilkins Premium, Sound speakers"],
        Accessories: ["self drive system","luggage cover"]
      },
    },
    
  ];
function getArrayAsHtmlList(arr){
  if(arr.length === 0){
    return "<p>No items</p>"
  }
  var ol = "<ol>"
  for (const element of arr) {
    ol+=`<li>${element}</li>`
  }
  ol+="</ol><br>"
  return ol
}
function displayCar(car,id){
  return `
  <div id=${id}>
    <h1>Car ${id} properties</h1>
    <p>Color: ${car.Color}</p>
    <p>Tinted windows: ${car['Tinted Windows'] ? 'Yes' : 'No'}</p>
    <p>Wheels: ${car.Wheels}</p>
    <p>Roof Cargo: ${car['Roof Cargo'] ? car['Roof Cargo'] : 'None'}</p>
    <p>Entertainment:</p>
    ${getArrayAsHtmlList(car.Entertainment)}
    <p>Accessories:</p>
    ${getArrayAsHtmlList(car.Accessories)}
  </div>
  `
}
function constructElement(){
  var base = `<div id="json">`
  for(let i = 0;i<json.length;i++){
    base += displayCar(json[i].Car,i+1)
  }
  base+= "</div>"
  return base
}
document.getElementById("app").innerHTML = constructElement()