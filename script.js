var num1=0;
var num2=0;
var total=0;
var i=0;
var j=0;
var sum=0;
var x="";
a = new Array(5);
function cal(n)
{
    j=i;
    i++;
     x+=document.getElementById(n).value;
    console.log(x);
    document.getElementById("screen").value=x;
 /*   var y=document.getElementById("S").value;*/
}
/*
    if(x=="+")
{
    add(a);
}
else if(x=="-")
{
    sub(a);
}
else if(x=="*")
{
    mul(a);
}
else if(x=="/")
{
    div(a);
}
    a[i]=x;
}
*/
function add()
{

    console.log("##### "+a[i]+" "+i+" "+j);
     sum=+a[i] + +a[j];
    console.log("sum is: "+sum);
    eval();
}



function eval1()
{
    var k;
    for (k = 0; k < a.length; k++) { 
     console.log("your array: "+a[k]);
    }
     console.log("****************");
        console.log(x);
        
        for(k=0;k<x.length;k++)
        {
            console.log("^^ "+x.charAt(k));

                
                num1=parseInt(x.charAt(k));
            
            if(x.charAt(k)=='+')
            {
                console.log("$$$$$$ num" +num1);
                num1=+num2 + +parseInt(x.charAt(++k));
            }
            else{
                num2=num1;
            }

        }
console.log("total is "+num1);
document.getElementById("screen").value=num1;
}