function random(){
    let div=document.createElement("div");
    let image=document.createElement("img")
    image.className="image";
    let h1=document.createElement("h1")
    h1.className="user";
    h1.innerText="Random User";
    let p1=document.createElement("p");
    p1.innerText="Name:";
    let p2=document.createElement("p");
    p2.innerText="Email:";
    let p3=document.createElement("p");
    p3.innerText="Location:";
    let p4=document.createElement("p");
    p4.innerText="Phone:";
    let p5=document.createElement("p");
    p5.innerText="Date of Birth:";
    url="https://randomuser.me/api/";
    fetch(url).then(resolve=>resolve.json()).then(result=>{
        image.src=`${result.results[0].picture.medium}`
        p1.innerText+=`${result.results[0].name.title+" "+result.results[0].name.first+" "+result.results[0].name.last}`
        p2.innerText+=`${result.results[0]["email"]}`;
        p3.innerText+=`${result.results[0].location.city+", "+result.results[0].location.country}`;
        p4.innerText+=`${result.results[0].phone}`
        p5.innerText+=`${new Date(result.results[0].dob.date).toLocaleDateString()}`
    });
    document.body.appendChild(div);
    div.append(h1,image,p1,p2,p3,p4,p5)


}
random()