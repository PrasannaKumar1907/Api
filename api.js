const btn = document.getElementById('btn');
        const jokeques = document.getElementById('jokeques');
        const jokeans = document.getElementById('jokeans');
        const showDogsBtn = document.getElementById('dogBtn');
        const dogImage = document.getElementById('dogImage');
        const adviceBtn = document.getElementById('adviceBtn');
        const advice = document.getElementById('advice');
        btn.onclick = () => {
            axios.get('https://official-joke-api.appspot.com/random_joke')
                .then(function (res) {
                    btn.textContent = "Next Joke";
                    jokeques.style.opacity = 0;
                    jokeans.style.opacity = 0;
                    setTimeout(() => {
                        jokeques.innerHTML = res.data.setup;
                        jokeques.style.opacity = 1;
                    }, 500);
                    setTimeout(() => {
                        jokeans.innerHTML = res.data.punchline;
                        jokeans.style.opacity = 1;
                    }, 2000);
                })
                .catch(function (err) {
                    console.log(err);
                });
        };
        showDogsBtn.onclick = () => {
            axios.get('https://dog.ceo/api/breeds/image/random')
                .then(function (res) {
                    showDogsBtn.textContent = "Another Dog";
                    dogImage.style.display = "none";
                    setTimeout(() => {
                        dogImage.src = res.data.message;
                        dogImage.style.display = "block";
                    }, 500);
                })
                .catch(function (err) {
                    console.log(err);
                });
        };
        adviceBtn.onclick = () => {
            axios.get('https://api.adviceslip.com/advice')
                .then(function (res) {
                    advice.style.opacity = 0;
                    setTimeout(() => {
                        advice.innerHTML = `"${res.data.slip.advice}"`;
                        advice.style.opacity = 1;
                    }, 500);
                })
                .catch(function (err) {
                    console.log(err);
                });
        };