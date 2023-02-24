let x=document.getElementById('gallery');
console.log(x);
function createImageGallery(){
    console.log('hee',localStorage);
    for(let i=1;i<=localStorage.length;i++){
        let img=document.createElement('img');
        img.src=localStorage.getItem(`Image-${i}`);
        x.append(img);
        console.log(img)
        img.style.margin="20px";
        img.style.height="400px";
        img.style.width="400px";
    }
}

createImageGallery();