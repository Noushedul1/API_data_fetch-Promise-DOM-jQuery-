'use strict';
let prom = ()=>{
    return new Promise((resolve,reject)=>{
        console.log('Data is fetching......');
        setTimeout(()=>{
            $.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
                resolve(data);
            }).fail(()=>{
                reject('Data is failed!!!');
            });
        },2000);
    });
}
prom().then((result)=>{
    console.log(result);
    console.log(`id: ${result[2].id} and title: ${result[2].title}`);
    var myapi = document.getElementById('myapi');
    // use js DOM to fetch data
    // myapi.innerHTML=result[2].title;
    // use jQuery to fetch data
    $(document).ready(function(){
        $('#myapi').html(result[2].title);
    });
    console.log(typeof(result));
}).catch((error)=>{
    console.log(error);
});