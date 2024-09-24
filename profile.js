var video = [
    {
        profile:"https://randomuser.me/api/portraits/women/1.jpg",
        Name:"Alice Johnson",
        Qualification:"Bachelor of Science",
        Age:"22",
         BirthDate:"2002-03-15",
    },
    {
        profile:"https://randomuser.me/api/portraits/men/2.jpg",
        Name:"Bob Smith",
        Qualification:"Master of Arts",
        Age:"20",
        BirthDate:"2000-07-09",
    },
    {
        profile:"https://randomuser.me/api/portraits/men/3.jpg",
        Name:"Charlie Brown",
        Qualification:"Bachelor of Engineering",
        Age:"23",
        BirthDate:"2001-11-19",
    },
    {
        profile:"https://randomuser.me/api/portraits/women/4.jpg",
        Name:"Daisy Miller",
        Qualification:"Doctor of Medicine",
        Age:"21",
        BirthDate:"1997-05-30",
    },
    ,
    {
        profile:"https://randomuser.me/api/portraits/men/2.jpg",
        Name:"Bob Smith",
        Qualification:"Master of Arts",
        Age:"20",
        BirthDate:"2000-07-09",
    },
    {
        profile:"https://randomuser.me/api/portraits/men/3.jpg",
        Name:"Charlie Brown",
        Qualification:"Bachelor of Engineering",
        Age:"23",
        BirthDate:"2001-11-19",
    },
    {
        profile:"https://randomuser.me/api/portraits/women/4.jpg",
        Name:"Daisy Miller",
        Qualification:"Doctor of Medicine",
        Age:"21",
        BirthDate:"1997-05-30",
    },
    ,
    {
        profile:"https://randomuser.me/api/portraits/men/2.jpg",
        Name:"Bob Smith",
        Qualification:"Master of Arts",
        Age:"20",
        BirthDate:"2000-07-09",
    },
    {
        profile:"https://randomuser.me/api/portraits/men/3.jpg",
        Name:"Charlie Brown",
        Qualification:"Bachelor of Engineering",
        Age:"23",
        BirthDate:"2001-11-19",
    },
    {
        profile:"https://randomuser.me/api/portraits/women/4.jpg",
        Name:"Daisy Miller",
        Qualification:"Doctor of Medicine",
        Age:"21",
        BirthDate:"1997-05-30",
    }
   
   
]

function Search(){
    var search = document.querySelector('.search').value;

    var searchedElem = video.filter(serv => serv.Age == search)

    console.log(searchedElem);


searchedElem.forEach( serv => {

var card=document.createElement("div");
card.className="card";

var image=document.createElement("div");
image.className="image";

card.appendChild(image);

var text=document.createElement("div");
text.className="text";

card.appendChild(text);

var img=document.createElement("img");
img.src=serv.profile;

image.appendChild(img);

var pElement=document.createElement("p");
pElement.textContent=serv.Name;


var pElement1=document.createElement("p");
pElement1.textContent=serv.Qualification;

var pElement2=document.createElement("p");
pElement2.textContent=serv.Age;


var pElement3=document.createElement("p");
pElement3.textContent=serv.BirthDate;


text.appendChild(pElement);
text.appendChild(pElement1);
text.appendChild(pElement2);
text.appendChild(pElement3);

var container=document.getElementById("list");

container.appendChild(card);

}
)
}


