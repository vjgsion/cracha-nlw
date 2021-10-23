function getGithubProfileInfo() {
  const url = 'https://api.github.com/users/vjgsion'

  fetch(url).then(response => response.json())
  .then(data => {
     userName.textContent = data.name
     userBio.textContent = data.bio
     userLink.href = data.html_url
     userImg.src = data.avatar_url
     userLogin.textContent = data.login
  })
  
}

getGithubProfileInfo()
