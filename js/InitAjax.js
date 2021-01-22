

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function(){

/*console.log(xhr.readystate);*/

  if(xhr.readyState===4 && xhr.status===200){
       /* console.log(xhr.response);*/
    }
});

xhr.open("get","data/menu.json", true);
xhr.send();

console.log(JSON.parse(xhr.response));
const data = JSON.parse(xhr.response);