//syntax
//scope
const PI= 3.14
var ecoin= 545
//var ecpin5
//let x = 5 //ecma 6 1.6
//start with (a-z A-Z _ $)
// contains a-z A-Z 0-9 _ $
var x = 45 // Number
var x12 = 45.36 // Number float double
var str = "Ecoin kjnkfnealfnal" // string
var isAdmin = true // boolean true /false 

//console.log(str)

//document.write(str)
//Array object 

var tab = new Array()

tab[0] = 45
tab[1] = 78
tab[2] = "Ecoin"
tab[3] = true
	
//console.log(tab[3])

//document.write(tab[1])

var lang = ["ecoin",25,"css","JS"]

//console.log(lang[2])

//document.write(lang)

var student = ["mourad", ["055551518","100555005"], true]

console.log(typeof lang[1])

//Object

var std = new Object()

std.nom = "Khaled"
std.age = 25
std.email = "khaled@gmail.com"
std.isAdmin = true

//console.log(std)

var std1 = {
	nom : "sami",
	age : 18,
	email : "sami8@hotmail.com",
	isAdmin : false
}

//console.log(std1.age)

var listSTD = {
	std1 : {
		nom: "sara",
		age: 15,
		email: "sara@hotmail.com",
		tel: ["066666666","0555555555"]

	},
    std2 : {
    	nom: "ali",
    	age: 25,
    	email: "ali48@gmail.com",
    	tel:["077777777", "056665566"]


    }

}

//console.log(listSTD.std1)
//console.log(listSTD.std2)
//document.write(listSTD.std1)

var s1= 5
var s2= 5

console.log(s2++)
console.log(s2)

/***************/
/*
var a=5
var b=3
/*
== < > <= >=
*/

//console.log()
/*
if (a<b){
	console.log("10")
}
else if (a>10){
	console.log("24")
}
else if (b<48){
	console.log("yes")
}
else{

	console.log("noo")
}
*/

var t=80
switch(t){
	case 25:
	console.log("yes 25")
	break
	case 36:
	console.log("yes 36")
	break
	case 125:
	console.log("yes 125")
	break
	default:
	console.log("noo val")
	break

}
/***/

var user= "Admin" , pass="1234456"

if ((user=="Admin")&&(pass=="1234456")){
	console.log("welcome to admin")

}
else{
	console.log("error 404")

}

/*

t  & t =t 
f & t = f
t & f = f
f & f = f
*/
var user= "Admin" , pass="1234456"

if ((user=="Admin")||(pass=="1234456")){
	console.log("welcome to admin")
}
else{
	console.log("error 404")

}

/*

t  & t =t 
f & t = t
t & f = t
f & f = f
*/
// while for do.. while
/*var i = -10 
while(i>= -20){
	document.write("<div>"+i+"</div>")
	i--
}
/**/
/* 
var j = 15
do{
	document.write("<div>"+j+"</div>")
	j++
}while(j<20)
*/
/*document.write('<table border="1" cellspacing="0" cellpadding="5">')
var i = 1

var cpt = 1
while(i<=4){
	document.write("<tr>")
	var j=1	
	while(j<=4){
		if(cpt%2==0){
			document.write("<td class='red'>"+cpt+"</td>")
		}else{
			document.write("<td class='green'>"+cpt+"</td>")

		}
	
	j++
	cpt++

}
	document.write("</tr>")
	i++
}
document.write("</table>")
*/
// for 
/*for (var i = 0; i <= 5; i++) {
       document.write("<h1>ecoin</h1>")
    }*/ 
/*var tab=["HTML","CSS","PHP","JS","RUBY"]
for (var i = 0; i <= tab.length-1; i++) {
       	document.write(tab[i])
       	document.write("<br>")
       }*/

var stdn = [ {
	nom: "sara",
	email:"sara@gmail.com",
	age :15,
},
{
	nom:"mohamed",
	email:"mohamed@hotmail.com",
	age:25,
},
{
	nom:"mourad",
	email:"mourad9haddad@hotmail.com",
	age:28,
},
]
/*document.write('<table border="1" cellspacing="0" cellpadding="5">')
document.write("<tr><td>Nom</td><td>Email</td><td>Age</td></tr>")
       for (var i = 0 ; i <= stdn.length-1; i++)
        {
       	document.write("<tr>")
       	document.write("<td>"+stdn[i].nom+"</td>")
       	document.write("<td>"+stdn[i].email+"</td>")
       	document.write("<td>"+stdn[i].age+"</td>")
       	document.write("</tr>")


       }
document.write('</table>')*/
for (var data in stdn) {
	console.log(stdn[data].nom)
}
//////////////////////////////
/* Function */

function calc(a,b,op){
	switch(op) {
		case "+":
		console.log(a+b);		
			break;
		case "-":
		console.log(a-b);
			
			break;
		case "*":
		console.log(a*b);
		    break;
		case "/":
		console.log(a/b);
            break;
        default:
        console.log(a+b);
           break;

	}
}
calc(2,3)

/*function startCar() {
		var msg= "Srating...."
		var startFn = function (){
			console.log(msg);

		}

		startFn()
	}	
	startCar()	*/
/*
var welcome  = function () {
	alert("welcome to our site")
}
welcome()*/
/////////	
/*(function(str){
	alert("Welcome to our" +str)
}(" Site"))
*/
let apps = (function () {
	let cID = 145 
	let getId = function () {
		return cID 
	}
	return {
		getId : getId
	}

}())

console.log(apps.getId());

// this 

let obj = {
	cID : 145,
	getId : function () {
		return this.cID
	}


}
console.log(obj.getId());

//a*x²+b*x+c=0



///////////////////////
/*
let para = document.getElementById("para")

para.innerText = "hello tomorrow"

document.getElementById("para").innerText = "welcome"

///////////
/// create Node
let nodeb = document.createElement("h2")
nodeb.innerText= "web Dev"

let des = document.getElementById("des")
des.appendChild(nodeb)

// parent Node 

let nb = document.getElementById("b")
let parent = nb.parentNode
parent.innerText = "PHP"
///



*///let img = document.getElementById("photo")

//console.log(img);

//let attr = img.getAttribute("id")

//alert(attr)

////

//img.setAttribute('ecoin', 'img/012.jpg')

////

// document.body.innerText = "fanelfnea0"

//remove child 
/*let bnode = document.getElementById('b')
let parents = bnode.parentNode
parents.removeChild(bnode)*/

///
//remove attribute

/*let img = document.getElementById("photo")
img.removeAttribute('ecoin')
/////

let par = document.getElementsByTagName('p')
par[1].innerText = "JAVA"
*/
/*let brs = document.getElementsByClassName('brs')
console.log(brs);
for (var i = 0; i < brs.length; i++) {
	brs[i].style.color = 'red'
}
/////
function vclick()  {
	this.style.border = '5px solid red'
	this.style.background = '#ccc'
	this.style.color = 'blue'
}

for (var i = 0; i < brs.length; i++) {
	brs[i].onclick = vclick
}
*/

/////////////

/*var btn = document.getElementById('btn')

btn.onclick = function (){
      let inp = document.getElementById("nom").value
      let content = document.getElementById('content')
      content.innerText = inp 

}     
	*/

/*let login = document.getElementById('login')
login.onclick = function () {
	let user = document.getElementById("user")
	let pass = document.getElementById('pass')
	let spanu = document.getElementById('spanu')
	let spanp = document.getElementById('spanp')
	if (user.value.length<=6) {
		user.setAttribute("class", "error")
		spanu.innerText= "this is an error"
		spanu.style.display= "block"

		
	}else {
		if ((user.value=="adminEcoin")&& (pass.value=="123456")) {
			expression
		}
	}

	if (pass.value.length<=6) {
		pass.setAttribute("class", "error")
		spanp.innerText= "the password should contain at least 6 characters"
		spanp.style.display= "block"
	}
}*/	

/*let login = document.getElementById('login')
login.onclick = function(){
	let user = document.getElementById('user')
	let pass = document.getElementById('pass')
	let age = document.getElementById('age')
	let adresse = document.getElementById('adresse')
	let wly = document.getElementById('wly')
	let email = document.getElementById('email')
	if ((user.value.trim().length>0)&&(pass.value.trim().length>0)) {
		/*let box = document.getElementsByClassName('box')*/
		
			/*document.getElementsByClassName('box')[0].innerText= user.value 
            document.getElementsByClassName('box')[1].innerText= pass.value 
            document.getElementsByClassName('box')[2].innerText= age.value 
            document.getElementsByClassName('box')[3].innerText= adresse.value 
            document.getElementsByClassName('box')[4].innerText= wly.value 
            document.getElementsByClassName('box')[5].innerText= email.value
	        document.getElementsByClassName('table')[0].style.display = 'block'	*/

	/*}else {

			
	









}*/


/*
let btn = document.getElementById('btn')
btn.onclick = function() {
	let msg = document.getElementById('msg')
	let maxi = document.getElementById('maxi')
	msg.onkeyup = function(){
		$('maxi').val(100-$(this).val().length)
	}
}
*/

let msg = document.getElementById('msg')
let nbrs = document.getElementById('nbrs')

	nbrs.innerHTML=   30
msg.onkeyup = function () {
	nbrs.innerHTML = 30 - this.value.length; 

	if (nbrs.innerHTML < 0) {
		nbrs.style.color = 'red',
	    document.getElementById('btn').disabled= true; 
		
		

	}
	else if (nbrs.innerHTML <= 20) {
		nbrs.style.color = 'green', 
		document.getElementById('btn').disabled= false;
		
	}else {
		nbrs.style.color = '#000'
		document.getElementById('btn').disabled= false; 
	}

	 
}