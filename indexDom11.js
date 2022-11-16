let form = document.getElementById('form');
let input=form.querySelectorAll('input');
// let users=document.getElementById('users');
let ul=document.getElementById('list');
// console.log(ul);
function myobj(username,email){
    this.username=username;
    this.email=email;
}
// console.log(user);
input[2].addEventListener('click',()=>{
    let username=input[0].value;
    let email=input[1].value;
    // let usernamestring=tooString(username);
    let user=JSON.stringify(new myobj(username,email));
    localStorage.setItem(username,user);
})
for(let i=0;i<localStorage.length;i++){
    let ki=localStorage.key(i);
    let values=localStorage.getItem(ki);
    let value=JSON.parse(values);
    let list=document.createElement('li');
    list.className='list-people';
    list.textContent=`Name: ${value.username} Email:${value.email}`;
    ul.appendChild(list);
    // console.log(list);

}
