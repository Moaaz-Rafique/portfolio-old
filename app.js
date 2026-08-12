var gallery=document.getElementById("gallery")
var select=document.getElementById("select")
var dsp=document.getElementById("dsp")
var imgArr=[]
for(var i=0;i<14;i++){
    imgArr.push(`images/${i+1}.png`)

    gallery.innerHTML += `<div class="pics" id="${i}" onclick='imagePressed(this.id)'><img src="thumbnails/${i+1}.png" alt="galleryimage"></div>`
}
function imagePressed(id) {
    id = (Number(id) + 14) % 14;

    dsp.innerHTML = `
        <img src="${imgArr[id]}" alt="galleryimage">

        <br>

        <button class="leftbtn" onclick="imagePressed(${id - 1})">
            &#8592;
        </button>

        <button class="rightbtn" onclick="imagePressed(${id + 1})">
            &#8594;
        </button>
    `;

    select.style.display = "block";
}
