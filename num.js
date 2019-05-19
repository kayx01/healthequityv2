const List = document.querySelector('#learn');
const form = document.querySelector('#data');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let year = document.createElement('span');
    let city = document.createElement('span');
    let country = document.createElement('span');
    let question = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    year.textContent = doc.data().year;
    city.textContent = doc.data().city;
    country.textContent = doc.data().country;
    question.textContent = doc.data().question;

    li.appendChild(year);
    li.appendChild(city);
    li.appendChild(country);
    li.appendChild(question);

    List.appendChild(li);
}

// getting data
db.collection('question').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('question').add({
        year: form.year.value,
        city: form.city.value,
        country: form.country.value,
        question: form.question.value
    });
    form.year.value = '';
    form.city.value = '';
    form.country.value = '';
    form.question.value = '';
});