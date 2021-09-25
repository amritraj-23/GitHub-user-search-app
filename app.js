const input = document.getElementById("inp");
const button = document.getElementById("btn");
const image = document.getElementById("image");
const Name = document.getElementById("name");
const userName = document.getElementById("userName");
const bio = document.getElementById("bio");
const repo = document.getElementById("repo");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const output = document.getElementById("output")


button.addEventListener('click', () => { 
    const res = input.value;
    console.log(res);
    if (res != "") {
        output.style.display = "block";
        const Url = `https://api.github.com/users/${res}`;
        fetch(Url)
            .then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                const img = data.avatar_url;
                image.setAttribute('src', img);
                Name.innerHTML ="Name: "  +data.name;
                userName.innerHTML ="UserName: " +data.login;
                bio.innerHTML ="Bio: " +data.bio;
                repo.innerHTML = "Repo: "  +data.public_repos;
                followers.innerHTML = "Followers: "  + data.followers;
                following.innerHTML = "Following: "  + data.following;
            }).catch((err) => {
                alert("match not found")
            })

    }
    input.value = "";
})