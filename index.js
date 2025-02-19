require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
  "login": "Sandeepji-5",
  "id": 121304075,
  "node_id": "U_kgDOBzr0Cw",
  "avatar_url": "https://avatars.githubusercontent.com/u/121304075?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sandeepji-5",
  "html_url": "https://github.com/Sandeepji-5",
  "followers_url": "https://api.github.com/users/Sandeepji-5/followers",
  "following_url": "https://api.github.com/users/Sandeepji-5/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sandeepji-5/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sandeepji-5/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sandeepji-5/subscriptions",
  "organizations_url": "https://api.github.com/users/Sandeepji-5/orgs",
  "repos_url": "https://api.github.com/users/Sandeepji-5/repos",
  "events_url": "https://api.github.com/users/Sandeepji-5/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sandeepji-5/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sandeep Vishwakarma",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2022-12-23T15:08:47Z",
  "updated_at": "2025-02-18T11:39:20Z"
} 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{res.send('Sandeep Vishwakarma')})

app.get('/login',(req, res)=>res.send('<h1>Please Login at Sandeep code</h1>'))   

app.get('/youtube',(req, res)=>res.send('<h1>Subscribe Sandeep code</h1>'))

app.get('/githubData',(req, res)=>{
  res.json(githubData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
