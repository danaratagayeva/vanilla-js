const reviews=[{
    id:1,
    name:"susan smith",
    job:"web developer",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi eius similique deleniti sapiente adipisci porro blanditiis, doloremque accusamus voluptatem, eos quod voluptas repellendus, animi praesentium cum ducimus nesciunt eum.",
},
{
    id:2,
    name:"anna johnson",
    job:"web developer",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi eius similique deleniti sapiente adipisci porro blanditiis, doloremque accusamus voluptatem, eos quod voluptas repellendus, animi praesentium cum ducimus nesciunt eum.",
},
{
    id:3,
    name:"peter jones",
    job:"intern",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi eius similique deleniti sapiente adipisci porro blanditiis, doloremque accusamus voluptatem, eos quod voluptas repellendus, animi praesentium cum ducimus nesciunt eum.",
},
{
    id:4,
    name:"bill anderson",
    job:"manager",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi eius similique deleniti sapiente adipisci porro blanditiis, doloremque accusamus voluptatem, eos quod voluptas repellendus, animi praesentium cum ducimus nesciunt eum.",
},
];

//select items

const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

let currentItem=0;

window.addEventListener('DOMContentLoaded',function(){
showPerson(currentItem);
})

function showPerson(person){
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener('click', function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem)
})
