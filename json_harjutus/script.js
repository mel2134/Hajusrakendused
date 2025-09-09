const json = [
    {
      Car: {
        Color: "Rose red",
        "Tinted Windows": false,
        Wheels: 4,
        "Roof Cargo": null,
        Entertainment: "FM Radio,MP3, MP4 and MKV player,harman/kardon speakers",
        Accessories: "satnav, cruise control"
      },
    },
    {
      Car: {
        Color: "Navy blue",
        "Tinted Windows": true,
        Wheels: 4,
        "Roof Cargo": "Thule",
        Entertainment: "FM Radio, Apple CarPlay/Android Auto, Bowers & Wilkins Premium, Sound speakers",
        Accessories: "self drive system, luggage cover"
      },
    },
  ];
document.getElementById("app").innerHTML = `
  <div id="json">
    <h1>Car  properties</h1>
    <p>Color: ${json[0].Car.Color}</p>
    <p>Tinted windows: ${json[0].Car['Tinted Windows'] ? 'Yes' : 'No'}</p>
    <p>Wheels: ${json[0].Car.Wheels}</p>
    <p>Roof Cargo: ${json[0].Car['Roof Cargo']}</p>
    <p>Entertainment: ${json[0].Car.Entertainment}</p>
    <p>Accessories: ${json[0].Car.Accessories}</p>
  </div>
    <div id="json">
    <h1>Car2  properties</h1>
    <p>Color: ${json[1].Car.Color}</p>
    <p>Tinted windows: ${json[1].Car['Tinted Windows'] ? 'Yes' : 'No'}</p>
    <p>Wheels: ${json[1].Car.Wheels}</p>
    <p>Roof Cargo: ${json[1].Car['Roof Cargo']}</p>
    <p>Entertainment: ${json[1].Car.Entertainment}</p>
    <p>Accessories: ${json[1].Car.Accessories}</p>
  </div>
`;