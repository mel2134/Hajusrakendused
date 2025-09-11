let givenProfile = ""
let profileName = ""
let profileId = ""
let profileLink = ""
let profileRepos = ""
function render(){
    document.getElementById("app").innerHTML = `
        <div>
        <h1>Github profile viewer</h1>
        <p>Please enter profile name:</p>
        <input />
        <div class="content">
            <h1 id="name">Name: ${profileName}</h1>
            <p id="repos">Public repos: ${profileRepos}</p>
            <p id="profileUrl">Link: <a href="${profileLink}" target="_blank">${profileLink}</a></p>
        </div>
    </div>
    `
}
render()
const input = document.querySelector("input")
input.addEventListener("change",updateValue)
let fetchProfile = async (name)=>{
    console.log(name)
    let fetchedData;
    await fetch(`https://api.github.com/users/${name}`,
        {headers: {Authorization: 'Bearer '}})
        .then((resp)=> resp.json())
        .then((data)=>(fetchedData=data))
    profileName = fetchedData.login
    profileId = fetchedData.id
    profileLink = fetchedData.html_url
    profileRepos = fetchedData.public_repos
    render()
}
function updateValue(e){
    givenProfile = e.target.value;
    fetchProfile(givenProfile)
}