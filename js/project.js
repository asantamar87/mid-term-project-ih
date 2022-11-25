  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((json) => {

        let project = json[0]
        console.log(project);

         document.querySelector(".project-page-title").innerText =  project.title
         document.querySelector(".project-detail").innerText =  project.body

      })

  }

  getData()