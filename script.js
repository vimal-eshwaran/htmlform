
var form=document.createElement("form")
form.setAttribute("class","formStyle")

function labels(tagname,attrName,attrValue,content){

    var ele=document.createElement(tagname);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML=content;
    return ele;
}
function input(tagname,attrName,attrValue,attrName1,attrValue1,attrName2,attrValue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrName,attrValue);
    ele1.setAttribute(attrName1,attrValue1);
    ele1.setAttribute(attrName2,attrValue2);
    return ele1;
}
function lineBrake(tagname){
    var br=document.createElement(tagname);
    return br;
}

var firstName = labels("label","for","firstName","firstName");
var br=lineBrake("br");
var input0= input("input","type","text","name","fname","id","firstName");
var br1=lineBrake("br");
var lastName = labels("label","for","lastName","lastName");
var br2=lineBrake("br");
var input1=input("input","type","text","name","lname","id","lname");
var br3=lineBrake("br");
var address= labels("label","for","address","address");
var br4=lineBrake("br");
var input2= input("input","type","text","name","address","id","address");
var br5=lineBrake("br");
var pinCode = labels("label","for","pinCode","pinCode");
var br6=lineBrake("br");
var input3= input("input","type","text","name","pinCode","id","pinCode");
var br7=lineBrake("br");





document.body.append(form,firstName,br,input0,br1,lastName,br2,input1,br3,address,br4,input2,br5,pinCode,br6,input3,br7);
var gend=labels("label","for","gender","Gender");
var br8=lineBrake("br");
var gender = labels("label","for","gender","Male");
var gen=document.createElement("input");
gen.setAttribute("type","radio");
gen.setAttribute("name","gender");
gen.setAttribute("id","male");  
gen.setAttribute("value","male")
var gender1 = labels("label","for","gender","FeMale");
var GEN1= input("input","type","radio","name","gender","id","female");
GEN1.setAttribute("value","female");
var br9=lineBrake("br");
var favFood=labels("label","for","favFood","FOOD");
var br10=lineBrake("br");
var food1= input("input","type","checkbox","name","biriyani","id","biriyani");
food1.setAttribute("value","biriyani")
var biriyani=labels("label","for","biriyani","biriyani");
var br11=lineBrake("br");
var food2= input("input","type","checkbox","name","biriyani","id","friedRice");
food2.setAttribute("value","friedRice")
var friedRice=labels("label","for","biriyani","friedRice");
var br12=lineBrake("br");
var food3= input("input","type","checkbox","name","biriyani","id","chinese");
food3.setAttribute("value","chinese")
var chinese=labels("label","for","chinese","chinese");

document.body.append(gend,br8,gender,gen,gender1,GEN1,br9,favFood,br10,food1,biriyani,br11,food2,friedRice,br12,food3,chinese);

var submit=input("input","type","submit","name","submit","id","submit");
submit.setAttribute("onclick","foo1()")

var br13=lineBrake("br");
document.body.append(submit,br13);


var div=document.createElement("div")
div.setAttribute("class","divClass")
var table=document.createElement("table");
table.setAttribute("id","shows")
table.innerHTML="<thead> <thead>";
var tr=document.getElementsByTagName("thead")
tr.innerHTML="<th>fiest</th>"

document.body.append(div,table,tableHead,tableBody);


function foo1(){

    var table=document.getElementById("try")
    var row=table.insertRow();
    var cel1=row.insertCell();
    var cel2=row.insertCell();
    var cel3=row.insertCell();
    var cel4=row.insertCell();
    var cel5=row.insertCell();
    var cel6=row.insertCell();
    
    cel1.innerHTML=document.getElementById("firstName").value
    cel2.innerHTML=document.getElementById("lname").value
    cel3.innerHTML=document.getElementById("address").value
    cel4.innerHTML=document.getElementById("pinCode").value
    




    function getData(){
        var male=document.getElementById("male");
        var female=document.getElementById("female");
        if(male.checked){
            cel5.innerHTML=male.value;
        }
        else{
            cel5.innerHTML=female.value
        }
    }
    getData()

    function favoriteFood(){
        var bir=document.getElementsByName("biriyani")
        var fri=document.getElementById("friedRice")
        var chi=document.getElementById("chinese")
        var values=[];
        for(i=0;i<bir.length;i++){
            if(bir[i].checked==true){
                var x=bir[i].value
                values.push(bir[i].value)
            }
            cel6.innerHTML=values   
        }
    }
    favoriteFood()

}