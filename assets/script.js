function getProjects() {
    const urlGitHub = 'https://api.github.com/users/GomesGuilhermePT07/repos';
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none';
            showProjects(response)
        })
        .catch((e) => {
            console.log(e);
        })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')

    for(let i=0; i<data.length; i++){
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']

        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}

getProjects();

document.querySelectorAll('a.nav-links').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 190; // Ajusta o valor aqui
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('logo').addEventListener('click', function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('sabermais').addEventListener('click', function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    });
});