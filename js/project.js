       console.log("Estamos aquí");
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((json) => {

        let project = json[0]
        console.log(project);

         document.querySelector(".project-page-title").innerText =  project.title
         document.querySelector(".project-detail").innerText =  project.body

      })
      // {
      //   // let project = result[0]
      //   //  console.log(project)

      //   // let title = document.querySelector(".project-page-title")
      //   // title.innerText = project.title;
      //   // let body = document.querySelector(".project-detail")
      //   // body.innerText = project.body;
      // }
      
      // );


  }

  getData()