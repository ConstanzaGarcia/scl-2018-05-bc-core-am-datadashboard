window.onload = () => {
  // Mostrar lista de usuarios 

  const button = document.getElementById('lista');
  const container = document.getElementById('tabla');

  const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

  fetch(usersJSON)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderUsers(data);
    });

  const renderUsers = data => {
    button.addEventListener('click', () => {
      const render = data.forEach(element => {
        return alumnassss.innerHTML += `<p>${element.name.toUpperCase()}</p>`;
      });
      return render;
    });
  };


  // Mostrar progreso de las alumnas 
  const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

  fetch(progressJSON)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderProgress(data);
    });

  const renderProgress = data => {
    button.addEventListener('click', () => {
      const render = data.forEach(element => {
        return progresos.innerHTML += `<p>${element.progress}</p>`;
      });
      return render;
    });
  };

  // Mostrar cohorts de las alumnas
  const cohortsJSON = '../data/cohorts.json';

  fetch(cohortsJSON)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCohorts(data);
    });

  const renderCohorts = data => {
    button.addEventListener('click', () => {
      const render = data.forEach(element => {
        return cohortss.innerHTML += `<p>${element.cohorts}</p>`;
      });
      return render;
    });
  };

  // Esta función recibe tres parametros.  Que ve el progreso del alumno 
  window.computeUsersStats = (users, progress, courses) => {
    for (let i = 0; i < users.length; i++) {
      let userId = users[i].id; //Busca el ID de las alumnas
      let userProgress = progress[usersId]; //users es un array y progress es un objeto
      for (j = 0; j < userProgress.length; j++) {
        if (JSON.stringify(userProgress[j]) === '{}') { // si es el progreso esta vacio rellena con 0
          user[i] = {
            stats: 0,
            exercises: { percent: 0, },
            reads: { percent: 0, },
            quizzes: {
              percent: 0,
              scoreAvg: 0,
            }

          }
        }
      }

    }
  };

  window.sortUsers = (users, orderBy, orderDirection) => {

  };

  // Barra de busqueda: declaramos la variable vacía que es donde se va ingresar el nombre que queremos buscar, por eso vamos
  //  al filtro 
  window.filterUsers = (users, search) => {
    button.addEventListener('click', () => {
      let newusers = [];
      return users.filter((element) => {
        return element.name.toUpperCase().indexOf(search.toLowerCase()) >= 0;
        document.getElementById('alumnassss').innerHTML = ' ';
      });
      return newusers;
    });
  };


  window.processCohortData = (options) => {

  };
};
