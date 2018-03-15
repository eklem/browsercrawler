fetch('https://eklem.github.io/norch-zapier-bookmarklet/') 
.then((response) => { 
  response.text().then(body => console.log(body))
})
