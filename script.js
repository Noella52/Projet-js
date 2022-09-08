//nav-bar
const burger = document.querySelector('.burger');
const nav_links = document.querySelectorAll('.nav-link');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('footer');
console.log(item3);
console.log(item4);

console.log(scroll);

window.onresize = () => {
const active = document.querySelector('.active');
    underlinelink(active);
}

function underlinelink(elem) {
    const underline = document.getElementById('underline');
    underline.style.left = `${elem.offsetLeft}px`;
    underline.style.width = `${elem.offsetWidth}px`;

}

nav_links.forEach(nav_link => {
    nav_link.addEventListener('click', (e) => {

        nav_links.forEach(link => link.classList.remove('active'))
        e.target.classList.add('active')
        underlinelink(e.target);

    })
})



console.log(burger)

/*burger*/
burger.addEventListener('click', () => {
    if (burger.classList.contains('toggler-icon')) {
        burger.classList.replace('toggler-icon','toggler-icon2');
    }
    else {
        burger.classList.replace('toggler-icon2','toggler-icon');
    }
})

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    console.log(scroll);

    if (scroll < 770) {
        nav_links.forEach(link => link.classList.remove('active'));
        item1.classList.add('active')
        underlinelink(item1);
    }
    else if (scroll > 770 && scroll < 1800) {
        nav_links.forEach(link => link.classList.remove('active'));
        item2.classList.add('active');
        underlinelink(item2);
    }
    else if (scroll > 1800 && scroll < 3200) {
        nav_links.forEach(link => link.classList.remove('active'));
        item3.classList.add('active');
        underlinelink(item3);

    }
    else if (scroll > 3200 && scroll < 4000) {
        nav_links.forEach(link => link.classList.remove('active'));
        item4.classList.add('active');
        underlinelink(item4);

    }
    else if (scroll < 4200) {
        nav_links.forEach(link => link.classList.remove('active'));
        item5.classList.add('active');
        underlinelink(item5);

    }

})


//refresh
function refresh(){
    window.location.reload();
}

//appui touche entrer equation
var equations = document.querySelectorAll('.eq');

equations.forEach(equation => {
    equation.addEventListener('keyup', (e) => {
        if(e.keyCode == 13){
            solution2();
        }
    })
})

////appui touche entrer circuit 
var circuits = document.querySelectorAll('.circuit');

circuits.forEach(circuit => {
    circuit.addEventListener('keyup', (e)=> {
        if(e.keyCode == 13){
            solution();
        }
    })
    
})

//crammaire
var crammaires = document.querySelectorAll('.cr-input');

crammaires.forEach(crammaire => {
    crammaire.addEventListener('keyup', (e)=> {
        if(e.keyCode == 13){
            solution3();
        }
    })
})

// variable popup erreur 
var click = document.querySelector('#popup');
var logo = document.querySelector('#spn');
var ligne = document.querySelector('#popup-ligne')
var popuptxt = document.querySelector('#popup-text');
var popbtn = document.querySelector('#popbtn');
var poptitre = document.querySelector('#poptitre');
var txtresult = 'declaration fotsiny';

function reload() {
    window.location.reload();
}

// fonction popup error
function show() {
    popuptxt.innerHTML = txtresult;
    logo.className = 'bi-x-circle';
    ligne.className = 'ptligne1';
    popbtn.className = 'popup-btn';
    poptitre.textContent = 'Erreur !';
    click.setAttribute( "style", "opacity: 1; pointer-events: auto;");
}

function retour() {
    click.setAttribute("style", "opacity: 0; pointer-events: none;")
}

// fonction popup resultat
function show2() {
    popuptxt.innerHTML = txtresult; 
    logo.className = 'bi-check-circle';
    popbtn.className = 'popup-btn2';
    ligne.className = 'ptligne2';
    poptitre.textContent = 'Résultat'
    click.setAttribute( "style", "opacity: 1; pointer-events: auto;");
}

function retour() {
    click.setAttribute("style", "opacity: 0; pointer-events: none;")
}

// //retour 
// window.addEventListener('keypress', (e) => {
//     if(e.keyCode == 13){
//         retour();
//     }
// })

// solution circuit
function solution(){

    // prendre de valeur de input
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;
    var R3 = document.getElementById("R3").value;
    var R4 = document.getElementById("R4").value;
    var  U = document.getElementById("U").value;
        R1 = parseFloat(R1);
        R2 = parseFloat(R2);
        R3 = parseFloat(R3);
        R4 = parseFloat(R4);
         U = parseFloat(U);

        //validation de valeur entrer par clavier
        var i=0;
        while(isNaN(R1))
        {
            txtresult = '<p class="text-light" >Entrez la valeur de R1</p><br><br><br>';
            show();
            return false;
        }
        while(isNaN(R2))
        {
            txtresult = '<p class="text-light" >Entrez la valeur de R2</p><br><br><br>';
            show();
            return false;
        }
        while(isNaN(R3))
        {
            txtresult = '<p class="text-light" >Entrez la valeur de R3</p><br><br><br>';
            show();
            return false;
        }
        while(isNaN(R4))
        {
            txtresult = '<p class="text-light" >Entrez la valeur de R4</p><br><br><br>';
            show();
            return false;
        }
        while(isNaN(U))
        {
            txtresult = '<p class="text-light" >Entrez la valeur de U</p><br><br><br>';
            show();
            return false;
        };

        // resistnce Equivalence 
        var Req = (R2*R3)/(R2+R3) + R1+ R4;
            Req = parseFloat(Req);

        // calcul I1
        var I1 = U/Req;
            I1 = parseFloat(I1)
            //alert("valeur de I1 ="+I1);
        // calcul I2 et I3
        var I2 = (R3/(R2+R3))*I1;
        var I3 = (R2/(R2+R3))*I1;
            I2 = parseFloat(I2)
            I3 = parseFloat(I3)
            //alert("I2="+I2)
            //alert("I="+I3)
        //calcul de U1 , U2 et U3
        var R23 = (R1 * R2)/(R1 + R2);
        var U1 = (R1 * I1);
        var U2 = (R23 * I1);
        var U3 = (R4 * I1); 

        I1 = Math.round(I1 * 100)/100;
        I2 = Math.round(I2 * 100)/100;
        I3 = Math.round(I3 * 100)/100;
        U1 = Math.round(U1 * 100)/100;
        U2 = Math.round(U2 * 100)/100;
        U3 = Math.round(U3 * 100)/100;

        txtresult =  '<p class="text-light">I1 = '+ I1 +'<br> I2 = '+ I2 +'<br> I3 = '+ I3 +'<br> U1 = '+ U1 +'<br> U2 = '+ U2 +'<br> U3 =' + U3 +' <br><br></p>';
        show2();
}

//solution equation 
function solution2(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    
    while(isNaN(a) )
    { 
        txtresult = '<p class="text-light">Entrer la valeur de a <br><br><br></p>';
        show();
        return false; 
    }

    while(isNaN(b) )
    { 
        txtresult = '<p class="text-light" >Entrer la valeur de b <br><br><br></p>';
        show();
        return false; 
    }
    while(isNaN(c) )
    { 
        txtresult = '<p class="text-light">Entrer la valeur de c <br><br><br></p>';
        show();
        return false; 
    }
    if(a==0)
    {
        txtresult = '<p class="text-light">Ceci n\'est pas une équation de segond degrer <br><br><br></p>';
        show();
        return false;
    }

    else {
        var delta=b*b-4*a*c;
        if(delta==0)
        {
            var x1=(-b)/(2*a);
            x1=parseInt(x1);
            txtresult = '<p class="text-light">∆=0 ,on a un solution unique x\' = x\" = '+ x1 +'<br><br><br></p>'
            show2();
        }
        else if(delta > 0)
        {
            let x1= ((-b)-Math.sqrt(delta))/(2*a);
            let x2=((-b)+Math.sqrt(delta))/(2*a);
            x1=parseInt(x1);
            x2=parseInt(x2);
                
            txtresult = '<p class="text-light">∆>0  ,on a deux racines distincts x\' = '+ x1 +'x\" = ' + x2 + '<br><br><br></p>';
            show2();
        }
        else{
            
            txtresult = '<p class="text-light"> ∆<0  , Pas de solution sur IR <br><br><br></p>';
            show2();
        }
    }
}

//crammaire

//fonction d'actualuser de page
function effacer_donne()
{
    document.location.reload();


}
// resolution d'equation
function solution3(){
//premier
 var a11 = document.getElementById("x1").value;
 var a12=document.getElementById("x2").value;
 var a13=document.getElementById("x3").value;
 var b11=document.getElementById("x4").value;
     a11=parseFloat(a11);
     a12=parseFloat(a12);
     a13=parseFloat(a13);
     b11=parseFloat(b11);
    
     //validation de nombre entré par utilusateur
     var i=0;
    while(isNaN(a11)){ 

        txtresult = '<p class="text-light">entrer la coéfficient de x1<br><br><br></p>';
        show();
        return false;
    }
    while(isNaN(a12)){
        
        txtresult = '<p class="text-light">entrer la coéfficient de x2<br><br><br></p>';
        show();
        return false;
        
    }
    while(isNaN(a13)){
        
        txtresult = '<p class="text-light">entrer la coéfficient de x3<br><br><br></p>';
        show();
        return false;

    }
    while(isNaN(b11)){
        
        txtresult = '<p class="text-light">entrer la coéfficient de x4<br><br><br></p>';
        show();
        return false;

    }
     //validation de nombre entré par utilusateur
 

//seconde
 var a21=document.getElementById("x5").value;
 var a22=document.getElementById("x6").value;
 var a23=document.getElementById("x7").value;
 var b22=document.getElementById("x8").value;
      a21=parseFloat(a21);
      a22=parseFloat(a22);
      a23=parseFloat(a23);
      b22=parseFloat(b22);
    //validation de nombre entré par utilusateur
    while(isNaN(a21)){
        
        txtresult = '<p class="text-light">entrer la coéfficient de x5<br><br><br></p>';
        show();
        return false;

    }
    while(isNaN(a22)){
        
        txtresult = '<p class="text-light">entrer la coéfficient de x6<br><br><br></p>';
        show();
        return false;

    }
    while(isNaN(a23)){
        
        txtresult = '<p class="text-light">entrer la coéfficient de x7<br><br><br></p>';
        show();
        return false;
    
    }
    while(isNaN(b22)){
        txtresult = '<p class="text-light">entrer la coéfficient de x8<br><br><br></p>';
        show();
        return false;
    }

//troisieme
 var a31=document.getElementById("x9").value;
 var a32=document.getElementById("x10").value;
 var a33=document.getElementById("x11").value;
 var b33=document.getElementById("x12").value;
      a31=parseFloat(a31);
      a32=parseFloat(a32);
      a33=parseFloat(a33);
      b33=parseFloat(b33);
    // validation de nombre entré par utilusateur
    while(isNaN(a31)){
        txtresult = '<p class="text-light">entrer la coéfficient de x9<br><br><br></p>';
        show();
        return false;
    };
    while(isNaN(a32)){ 
        txtresult = '<p class="text-light">entrer la coéfficient de x10<br><br><br></p>';
        show();
        return false;
    };
    while(isNaN(a33)){
        txtresult = '<p class="text-light">entrer la coéfficient de x11<br><br><br></p>';
        show();
        return false;
    };
    while(isNaN(b33)){
        txtresult = '<p class="text-light">entrer la coéfficient de x12<br><br><br></p>';
        show();
        return false;
    }


 // stoker  de valeur dans le matrice 
 var mat1= [a11,a12 ,a13,b11];
 //  alert(matrice1[0]);
 var mat2=[a21,a22,a23,b22];
 var mat3=[a31,a32,a33,b33];
 // determinant
 var val1=  (mat1[0]*mat2[1]*mat3[2]) + (mat1[1]*mat2[2]*mat3[0]) + (mat1[2]*mat2[0]*mat3[1]);
 var val2=(mat3[0]*mat2[1]*mat1[2]) + (mat3[1]*mat2[2]*mat1[0])+ (mat3[2]*mat2[0]*mat1[1]);
 var D= val1 - val2;
 //calcule de determinanat de Dx1
 var n1=(mat1[3]*mat2[1]*mat3[2])+(mat1[1]*mat2[2]*mat3[3])+(mat1[2]*mat2[3]*mat3[1]);
 var n2=(mat3[3]*mat2[1]*mat1[2])+(mat3[1]*mat2[2]*mat1[3]) +(mat3[2]*mat2[3]*mat1[1]);
 var Dx1=n1-n2;
 var res =Dx1/D
     res=parseFloat(res);
     document.getElementById("reponse1").value= res;
 // calcul determinant  Dx2
 var c1=(mat1[0]*mat2[3]*mat3[2])+(mat1[3]*mat2[2]*mat3[0])+(mat1[2]*mat2[0]*mat3[3]);
 var c2=(mat3[0]*mat2[3]*mat1[2])+(mat3[3]*mat2[2]*mat1[0])+(mat3[2]*mat2[0]*mat1[3]);
 var Dx2=c1-c2;
 var r1=Dx2/D;
     r1=parseFloat(r1);
     document.getElementById("reponse2").value= r1;

// calcul determinant Dx3
 var nombre1=(mat1[0]*mat2[1]*mat3[3]) +(mat1[1]*mat2[3]*mat3[0])+(mat1[3]*mat2[0]*mat3[1]);
 var nombre2=(mat3[0]*mat2[1]*mat1[3])+(mat3[1]*mat2[3]*mat1[0])+ (mat3[3]*mat2[0]*mat1[1]);
 var Dx3=nombre1 -nombre2;
 var res2=Dx3/D;
     res2=parseFloat(res2);
     document.getElementById("reponse3").value=res2;
}




//pub diaporama

var images = [];
images[0]="image/image1.png";
images[1]="image/image3.png";
images[2]="image/image4.png";
images[3]="image/image5.png";

var i=0;  

function chagerimage(){
    document.diapo.src=images[i]; 
    if (i<images.length-1) {
        i++;
    }
    else{
        i=0;
    }
    setTimeout("chagerimage()",5000);
}

window.onload=chagerimage; 



