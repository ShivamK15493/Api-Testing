
 let URL = "https://api.thecatapi.com/v1/images/search";
 let cuty;
 let dimension;
 async function  getFacts()
{
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();


    cuty = document.getElementById("cc");
    dimension = document.getElementById("dim");
    console.log(data);
     console.log(data[0].url);
     cuty.innerHTML=`<img id="imgset" src="${data[0].url}">`;
     console.log(data[0].width);
     dimension.innerHTML=`Dimension: ${data[0].width} * ${data[0].height}`;
}

getFacts();

let change = document.getElementById("btn");

change.addEventListener("click",() =>{
    location.reload();
})

// https://api.thecatapi.com/v1/images/search , It contains 1 image
// https://api.thecatapi.com/v1/images/search?limit=10 , It contains 10 images  
