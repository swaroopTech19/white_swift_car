function validate() {
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;
    let copas=document.getElementById("copas").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let add=document.getElementById("add").value;
   
    if (user==="" || email==="" || add==="" || pass==="" || pass.lenght <8 || copas==="" || copas.lenght <8 || pass===copas || mobile==="" || !/^[6789]\d{10}$/.test(mobile))
    alert ("Please enter a correct detail");
}

// const colors=['#fa0000','#ffff00','#ffffff','#00ffff']
// let index=0;
// setInterval(()=>{
//     document.div.style.backgroundcolor=colors[index];
//     index=(index+1)%colors.lenght;
// },2000);

function validate2() {
    let uname=document.getElementById("uname").value;
    let pas=document.getElementById("pas").value;
    if (uname==="" || pas==="" || pas.lenght <8)
        alert ("Please enter your Name & Password");
}

const images=[       
    'url("swiftw1.jpg")',
    'url("swiftw2.jpg")',
    'url("swiftw4.jpg")',
    'url("swiftw5.jpg")',                   
    'url("swiftw3.jpg")',
    'url("swiftw6.jpg")',
    'url("swiftw7.jpg")',
];
    let currentIndex=0;              
    function Changebackground(){
        document.body.style.backgroundImage=images[currentIndex];
        currentIndex= (currentIndex+1)% images.length;                    
        }
        setInterval(Changebackground, 1000);
        Changebackground();  
