

let searchbtn = document.querySelector("#btn")
let userName = document.querySelector("#inp")
let username = document.querySelector("#username")
let img = document.querySelector('#img')
let following = document.querySelector('#following')
let follower = document.querySelector('#follower')
let repo = document.querySelector('#repo')
let disc = document.querySelector('#disc')
let visit = document.querySelector('#visit')

 
searchbtn.addEventListener('click',()=>{
    if(userName.value == ""){
        alert('Enter Username please')
    }
    else{
    fetch(`https://api.github.com/users/${userName.value}`)
    .then(data=>data.json())
    .then(data => {console.log(data)
        if(userName.value === data.login){
            
            img.src = data.avatar_url
            username.innerHTML = data.login
            disc.innerHTML = data.bio
            follower.innerHTML = data.followers
            following.innerHTML = data.following
            repo.innerHTML = data.public_repos
            visit.href = data.html_url
            userName.value = ""
        }
        else
        {
            alert('user not found')
            userName.value = ""
        }

    
        
    
    
    })
    .catch(error=>{console.log(error);})
}
})