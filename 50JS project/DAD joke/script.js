const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)



const config = {
  headers: {
    'Accept': 'application/json'
  }
}
generateJoke();

async function generateJoke() {
  try {
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    jokeEl.innerHTML = data.joke
  } catch (err) {
    console.log(err);
  }

}

// using ,then
// function generateJoke() {
//   fetch('https://icanhazdadjoke.com', config).
//     then(
//       res =>
//         res.json()

//     ).
//     then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }

