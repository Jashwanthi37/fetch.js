function gallery(){
    let heading=document.createElement("p");
    heading.innerText="Image Gallery";
    heading.className="heading"
    document.body.appendChild(heading)
    let div1=document.createElement("div");
    div1.className="maindiv";

    url="https://picsum.photos/v2/list";
    fetch(url).then(resolve=>resolve.json()).then(result=>{
        // let div=document.createElement("div");
        // div.className="photos";
        result.forEach(Element=>{
            console.log(Element)
        let div=document.createElement("div");
        div.className="photos";

        let image=document.createElement("img");
        image.className="image";
        image.src=Element["download_url"];

        let author=document.createElement("p");
        author.className="author"
        author.innerText="By: "+Element.author

        div1.appendChild(div)
        div.appendChild(author);
        div.appendChild(image);
       
    })
   
})
document.body.appendChild(div1)
}
gallery()
