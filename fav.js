// //
// const myFav = JSON.parse(localStorage.getItem("fav")).filter((item)=>{
//     return item.iscomplet
// })

const favorite1 = (i) => {
    i.iscomplet = false;
    localStorage.setItem("plane",JSON.stringify(plane))
    Fav();
  };
let Fav=()=>{
    $(".pagefav").html("");
    plane.forEach((item,i) => {
        if ((item.iscomplet == true)) {
            
        $(".pagefav").append(`<div class="fav" <p>${item["name"]}</p>
        <img src="${item["imgFile"]}" class="card" id='open-${i}'></div>`)
     } 
    $(`#open-${i}`).click(()=>{
        favorite1(item)
    })
    });
  
}
Fav();
