const init = () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('input#searchByID');
        

        fetch(`http://localhost:3000/movies/${input.value}`)
          .then(responce => responce.json())
          .then(data => {
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
          })
    
    });

}
  


document.addEventListener('DOMContentLoaded', init);