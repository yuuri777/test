let xhr=new XMLHttpRequest();

xhr.open('GET','https://zip-cloud.appspot.com/api/search?zipcode=1070062')

xhr.send();

xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 &&xhr.status === 200) {
        let objectAddress = JSON.parse(xhr.responseText);
        console.log(objectAddress.results[0].address1);
        console.log(objectAddress.results[0].address2);
        console.log(objectAddress.results[0].address3);
        console.log(objectAddress.results[0].zipcode);
    }
}
