var arr=[
    {
    dp:"https://www.shutterstock.com/image-photo/beautiful-woman-profile-long-shiny-260nw-1922411411.jpg",
    story:"https://as2.ftcdn.net/v2/jpg/04/23/14/01/1000_F_423140127_ptoRcQbd7JJkJg8q47LAEut7y7jx0DIg.jpg"
},{
    dp:"https://www.shutterstock.com/image-photo/young-brownhaired-woman-long-curly-260nw-1311242837.jpg",
    story:"https://www.shutterstock.com/image-photo/beautiful-hair-woman-beauty-skin-260nw-756015583.jpg"
},{
    dp:"https://www.shutterstock.com/image-photo/beautiful-brunette-woman-beauty-model-260nw-720411028.jpg",
    story:"https://www.shutterstock.com/image-photo/beautiful-model-girl-shiny-brown-260nw-2168891051.jpg"
},
{
    dp:"https://as1.ftcdn.net/v2/jpg/03/07/86/86/1000_F_307868638_CONFaF708Cs1WcMLoo9mTXXkqQuRoXkq.jpg",
    story:"https://as2.ftcdn.net/v2/jpg/02/47/71/21/1000_F_247712199_yQHDxszB1CLkRQYJI4Hlrqgmjw4Rg03U.jpg"
},
{
    dp:"https://as1.ftcdn.net/v2/jpg/02/67/96/58/1000_F_267965888_2yjvvJJw25ObHX4qkc2xjwHAzyBXYOCR.jpg",
    story:"https://as1.ftcdn.net/v2/jpg/04/10/96/54/1000_F_410965441_MhSBiIEE3Q9A7d6hrfKLZNkpZr7EEbtR.jpg"
}

]

var clutter=""
arr.forEach(function(elem,idx){
    clutter +=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="" srcset="">
</div>`
})
var storiyan=document.querySelector("#storiyan")
document.querySelector("#storiyan").innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none";
    },3000)
})