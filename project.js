//creat array
// JSON.parse(localStorage.getItem("plane")) ||
let photos = [
  {
    name: "Turboprop",
    imgFile: "./turboprop.jpg",
    text: "The turboprop aircraft has one or more gas turbine engines. They are both connected to a gearbox which turns the propellers. This is contrary to the pistons or jet engines that are found in the other types of small aircraft. The turboprop airplanes are usually much bigger than the piston aircraft that they resemble and can fly at much higher altitudes of 35,000 feet. They are well suited to flying for 600 to 1000 miles in a single flight, and a much cheaper option to private jets.",
    iscomplet: false,
    extraimgUrl: [
      "https://media.istockphoto.com/photos/traffic-at-airport-during-sunset-picture-id1139652369?k=20&m=1139652369&s=612x612&w=0&h=7i-ZlPZ-IiAAojQgZATpT4Rt32MQ7aFXoRq-hdbBLZw=",
      "http://robbreport.com/wp-content/uploads/2015/08/beechcraft-king-air-350i-011.jpg",
      "https://robbreport.com/wp-content/uploads/2013/07/13256281.jpg",
    ],
  },
  {
    name: "Piston",
    imgFile: "./piston.jpg",
    text: "These resemble turboprop aircraft but are much smaller. They have one more piston-powered engines that are connected to the propellers. They are also incapable of flying at the high altitudes that the turboprop aircraft fly at (15,000 feet) and can cover much less distance (300 to 400 miles). The typical piston aircraft can seat around one to six people, which seats that are in rows of two. Piston aircraft don’t need long runways to fly and don’t need traffic control towers to navigate.",
    iscomplet: false,
    extraimgUrl: [
      "https://www.aircharter.com/wp-content/uploads/2015/01/Matrix_China.jpg",
      "https://www.flyingmag.com/resizer/J8ZQBqeIV9EdAlqqBJbKqIVb_rw=/800x467/smart/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ZPQJKM3A3XGIJWM3EUT6MVUJ74.jpg",
      "https://storage.googleapis.com/stateless-aeroclassifieds-main/2020/04/0b107fb5-1721e2e1-798x466.jpg",
    ],
  },
  {
    name: " Jets",
    imgFile: "./jet.jpg",
    text: "Jet planes are known for their speed and power as compared to normal aircraft. They achieve maximum efficiency at high speeds and so can even go supersonic (faster than the speed of sound). Jet aircraft can usually go at around Mach 0.8 (609 miles per hour), and fly at altitudes of 49,000 feet.Jets were first developed in 1928 in England but were perfected in Germany in 1936, when Ernst Heinkel led the construction of the first jet plane.",
    iscomplet: false,
    extraimgUrl: [
      "https://cdn.ceoworld.biz/wp-content/uploads/2019/08/gulfstream-g650-er.jpg",
      "https://robbreport.com/wp-content/uploads/2020/10/Gulfstream-G700.jpg?w=1000",
      "https://robbreport.com/wp-content/uploads/2019/10/gulfstream-introduces-the-all-new-gulfstream-g700.jpg?w=1000",
    ],
  },
  {
    name: "Light Jets",
    imgFile: "./light.jpg",
    text: "Light Jet planes are the most common type of chartered planes amongst business owners. These are sometimes alternatives for those looking for something other than turboprop aircraft while traveling on a budget. These are cost-effective for small distances and light luggage. Most very light jets don’t have toilets on board and most light jets do.",
    iscomplet: false,
    extraimgUrl: [
      "https://apollojets.com/data/images/5d0137e37d1001dd6.jpg",
      "http://oxygenaviation.ru/wp-content/uploads/2015/03/Premier-1-Exterior-600x320.jpg",
      "http://oxygenaviation.ru/wp-content/uploads/2015/11/cj2-600x320.jpg",
    ],
  },
  {
    name: "Jumbo Jets",
    imgFile: "./jumbo.jpg",
    text: "Heavy jets are the ultimate in increased range and greater space. They offer opportunities that are much loftier than their smaller counterparts. They’re for strictly long hauls and long trips. There are also ultra-long-range heavy jets that serve the VIP charters that offer the utmost luxury.These luxury private jets are only for the wealthiest and offer a long line of options such as fine dining, entertainment rooms, etc. Some standard heavy jet models include the Global 6000, the Dassault Falcon 7X, the Gulfstream G550, the Gulfstream GIV, and the Bombardier Challenger 604.",
    iscomplet: false,
    extraimgUrl: [
      "https://jooinn.com/images1280_/jumbo-jet.jpg",
      "https://latteluxurynews.com/wp-content/uploads/2019/06/QF-747-take-off-BNE-1K-750x430.jpg",
    ],
  },
  // {
  //   name: "Narrow Body",
  //   imgFile: "./narrow.jpg",
  //   text: "Narrow body aircraft are also known as single-aisle aircraft since they allow seating in a single row and have a cabin with a diameter of about three to four meters. This allows for up to 6 abreast seating and down to 2-abreast.The highest seating capacity is 295 passengers. This only occurs with the Boeing 757-300. The size of the fuselage in a narrow body airplane allows passengers to stand and walk around, but not with much autonomy. There is also room for lavatories and for flight attendants to attend to the travelers.",
  //   iscomplet: false,
  //   extraimgUrl:[
  //     "https://s29755.pcdn.co/wp-content/uploads/2019/12/A321XLR-United-Airlines-.jpg",
  //     "https://s29755.pcdn.co/wp-content/uploads/2020/01/United_capital_expenditures_1.jpg",
  //     "https://i.insider.com/5e3addcf5bc79c40f61c73e9?width=700&format=jpeg&auto=webp",
      
  //   ]
  // },
];

//click and display information in new page
const openDescription = (item) => {
  localStorage.setItem("descrapion", JSON.stringify(item));
  console.log(item);
};
//
const localdata = JSON.parse(localStorage.getItem("plane"));
let plane;

if (localdata == null) {
  plane = photos;
  localStorage.setItem("plane", JSON.stringify(photos));
} else {
  plane = localdata;
}
//Display Description airplanes in new page 
const localPhoto = JSON.parse(localStorage.getItem("descrapion"));
if (localPhoto) {
  $(".DescriptionPage")
    .append(`<div class="description" id="litter"><h3>${localPhoto.name}<h3></div>
  <div id="text"><p>${localPhoto.text}</p></div>
    `);
    $(".DescriptionPage").append(`<div class="photodes"></div>`)
  localPhoto.extraimgUrl.forEach((item, index) => {
    
    $(".photodes").append(`<div class="description1" id="extrimg"><img src="${item}" ></div>`);
  });
}
//Fancation for Favorite page
const favorite = (i) => {
  console.log(i);
  plane[i]["iscomplet"] = true;
  localStorage.setItem("plane", JSON.stringify(plane));
  showing();
};

//

const showing = () => {
  $(".mainCard").html("");
  photos.forEach((item, i) => {
    $(".mainCard").append(`<div class="card" id="card-${i}"> <p>${item["name"]}</p>
        <a id='open-${i}' href="./DescriptionPage.html" target="_blank">
        <img src="${item["imgFile"]}" class="card" id="openCard"></a>
        <button id="forvoit-${i}"'>Add To Favorite</button>
        </div>`);
      
    $("#open-" + i).click(() => {
      openDescription(item);
    });
    $("#forvoit-" + i).click(() => {
      favorite(i);
    });
    $("")
  });
 

};
showing();

$("#search").keyup(()=>{
  const inputval=$("#search").val().toLowerCase();
// console.log($("#search").val());
photos.forEach((item,i)=>{
  
  if(item["name"].toLowerCase().includes(inputval)){
    console.log(item["name"]);
    $(`#card-${i}`).show()
  }else{
    $(`#card-${i}`).hide()
    console.log("ll"+item["name"]);
  }

});
if(inputval==""){
  showing()
}

})