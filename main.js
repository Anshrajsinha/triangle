const t = document.getElementById("triangle")

let n = 6;
let string = "";
 
for(let i=n; i>=1; i--)  
    {  
      for(let j=1; j<=i; j++)  
      {  
         if(j==1 || j==i || i==n)  {
          string += "* "  
         } else {  
          string += "&nbsp&nbsp&nbsp"
         }  
      }  
      string += "<br>"  
    }

t.innerHTML = string