class Film {
  
  constructor(name,
    country,
    genre,
    rej,
    scen,
    prod,
    oper,
    comp,
    budj,
    cash,
    age,
    time,
    date,
    img){
  this.name = name;
  this.country = country;
  this.genre = genre;
  this.rej = rej;
  this.scen = scen;
  this.prod = prod;
  this.oper = oper;
  this.comp = comp;
  this.budj = budj;
  this.cash = cash;
  this.age = age;
  this.time = time;
  this.date = date;
  this.img = img;
  this.guid = guid();
  }
}

const GENRE_POS = 3;
const COUNTRY_POS = 2;
const DATE_POS = 13;

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}


let storage_arr;
if (localStorage.getItem("arr") == null){
  storage_arr = [];
  console.log  
} else if (localStorage.getItem("arr") != "") {
  storage_arr =JSON.parse(localStorage.getItem("arr"));
}


document.onsubmit = function () {
  let film = new Film(
    document.getElementsByName("name")[0].value,
    document.getElementsByName("country")[0].value,
    document.getElementsByName("genre")[0].value,
    document.getElementsByName("rej")[0].value,
    document.getElementsByName("scen")[0].value,
    document.getElementsByName("prod")[0].value,
    document.getElementsByName("oper")[0].value,
    document.getElementsByName("comp")[0].value,
    document.getElementsByName("budj")[0].value,
    document.getElementsByName("cash")[0].value,
    document.getElementsByName("age")[0].value,
    document.getElementsByName("time")[0].value,
    document.getElementsByName("date")[0].value,
    document.getElementsByName("img")[0].value
  );

  
  storage_arr.push(film);
  console.log(storage_arr);
  localStorage.setItem("arr",JSON.stringify(storage_arr));

  let icon_container = document.getElementById("films_list");
    let oneFilmContainer = document.createElement("div");
    oneFilmContainer.classList.add('card');
    let posterContainer = document.createElement("div");
    let poster = document.createElement("img");
    poster.src = film.img;
    //posterContainer.style.backgroundImage = "url(" + film.img + ")";
    posterContainer.classList.add("poster-img");
    posterContainer.appendChild(poster);
    let name = document.createElement("p");
    name.innerHTML = "Название: " +  film.name
    let country = document.createElement("p");
    country.innerHTML =  "Страна: " + film.country
    let genre = document.createElement("p");
    genre.innerHTML = "Жанр: " + film.genre
    let rej = document.createElement("p");
    rej.innerHTML = "Режиссер: " + film.rej
    let scen = document.createElement("p");
    scen.innerHTML = "Сценарист: " + film.scen
    let prod = document.createElement("p");
    prod.innerHTML = "Продюссер: " + film.prod
    let oper = document.createElement("p");
    oper.innerHTML = "Оператор: " + film.oper
    let comp = document.createElement("p");
    comp.innerHTML = "Композитор: " + film.comp
    let budj = document.createElement("p");
    budj.innerHTML = "Бюджет: " + film.budj + "$"
    let cash = document.createElement("p");
    cash.innerHTML = "Кассовые сборы: " + film.cash + "$"
    let age = document.createElement("p");
    age.innerHTML = "Возрастное ограничение: " + film.age + "+"
    let time = document.createElement("p");
    time.innerHTML = "Длительность: " + film.time
    let date = document.createElement("p");
    date.innerHTML = "Дата выхода: " + film.date
    let guid = document.createElement("p");
    guid.innerHTML = film.guid
    guid.style.display = "none"
    let delete_button = document.createElement("button");
    delete_button.innerHTML = "Удалить фильм";
    delete_button.classList.add("del_but");
    delete_button.addEventListener("click",function(e){
      let storage =JSON.parse(localStorage.getItem("arr"));

      for (let i=0;i<storage.length;i++){
        if (storage[i].guid == e.target.previousSibling.textContent){
          
          storage.splice(i,1);
          localStorage.setItem("arr",JSON.stringify(storage));
        }
      }
      e.target.parentNode.remove();
    })
    
    oneFilmContainer.appendChild(posterContainer);
    oneFilmContainer.appendChild(name);
    oneFilmContainer.appendChild(country);
    oneFilmContainer.appendChild(genre);
    oneFilmContainer.appendChild(rej);
    oneFilmContainer.appendChild(scen);
    oneFilmContainer.appendChild(prod);
    oneFilmContainer.appendChild(oper);
    oneFilmContainer.appendChild(comp);
    oneFilmContainer.appendChild(budj);
    oneFilmContainer.appendChild(cash);
    oneFilmContainer.appendChild(age);
    oneFilmContainer.appendChild(time);
    oneFilmContainer.appendChild(date);
    oneFilmContainer.appendChild(guid);
    oneFilmContainer.appendChild(delete_button);
    icon_container.appendChild(oneFilmContainer);
  
};



window.onbeforeunload = function() {
    
  return true;
};

let load = function () {
  if (localStorage.getItem("arr") != ""){ 
    let storage =JSON.parse(localStorage.getItem("arr"));
    
  for (let i = 0; i < storage.length; i++) {
    let film = storage[i];
    console.log(film);
    let icon_container = document.getElementById("films_list");
    let oneFilmContainer = document.createElement("div");
    oneFilmContainer.classList.add('card');
    let posterContainer = document.createElement("div");
    let poster = document.createElement("img");
    poster.src = film.img;
    //posterContainer.style.backgroundImage = "url(" + film.img + ")";
    posterContainer.classList.add("poster-img");
    posterContainer.appendChild(poster);
    let name = document.createElement("p");
    name.innerHTML = "Название: " +  film.name
    let country = document.createElement("p");
    country.innerHTML =  "Страна: " + film.country
    let genre = document.createElement("p");
    genre.innerHTML = "Жанр: " + film.genre
    let rej = document.createElement("p");
    rej.innerHTML = "Режиссер: " + film.rej
    let scen = document.createElement("p");
    scen.innerHTML = "Сценарист: " + film.scen
    let prod = document.createElement("p");
    prod.innerHTML = "Продюссер: " + film.prod
    let oper = document.createElement("p");
    oper.innerHTML = "Оператор: " + film.oper
    let comp = document.createElement("p");
    comp.innerHTML = "Композитор: " + film.comp
    let budj = document.createElement("p");
    budj.innerHTML = "Бюджет: " + film.budj + "$"
    let cash = document.createElement("p");
    cash.innerHTML = "Кассовые сборы: " + film.cash + "$"
    let age = document.createElement("p");
    age.innerHTML = "Возрастное ограничение: " + film.age + "+"
    let time = document.createElement("p");
    time.innerHTML = "Длительность: " + film.time
    let date = document.createElement("p");
    date.innerHTML = "Дата выхода: " + film.date
    let guid = document.createElement("p");
    guid.innerHTML = film.guid
    guid.style.display = "none"
    let delete_button = document.createElement("button");
    delete_button.innerHTML = "Удалить фильм";
    delete_button.classList.add("del_but");
    delete_button.addEventListener("click",function(e){
      let storage =JSON.parse(localStorage.getItem("arr"));

      for (let i=0;i<storage.length;i++){
        if (storage[i].guid == e.target.previousSibling.textContent){
          
          storage.splice(i,1);
          localStorage.setItem("arr",JSON.stringify(storage));
        }
      }
      e.target.parentNode.remove();
    })
    
    oneFilmContainer.appendChild(posterContainer);
    oneFilmContainer.appendChild(name);
    oneFilmContainer.appendChild(country);
    oneFilmContainer.appendChild(genre);
    oneFilmContainer.appendChild(rej);
    oneFilmContainer.appendChild(scen);
    oneFilmContainer.appendChild(prod);
    oneFilmContainer.appendChild(oper);
    oneFilmContainer.appendChild(comp);
    oneFilmContainer.appendChild(budj);
    oneFilmContainer.appendChild(cash);
    oneFilmContainer.appendChild(age);
    oneFilmContainer.appendChild(time);
    oneFilmContainer.appendChild(date);
    oneFilmContainer.appendChild(guid);
    oneFilmContainer.appendChild(delete_button);
    icon_container.appendChild(oneFilmContainer);
  }
}
};

function clear() {
    document.getElementById("text_help").innerHTML = "";
}


function delete_film(arr,film) {
    let index = arr.indexOf(film,0);
    arr.splice(index,1);
}

function filter() {
    
    let films = document.getElementById("films_list");
    films.innerHTML = "";
    load();
    let childs = films.childNodes;
    let usr_choice_countr = document.getElementById("filter_select_country").value;
    let usr_choice_genre = document.getElementById("filter_select_genre").value
    let usr_choice_year = document.getElementById("filter_select_year").value
    console.log(usr_choice_countr)
    for (let i=0;i<childs.length;i++){
        let child = childs[i];

        if (usr_choice_countr == "" && usr_choice_genre!="" && usr_choice_year!=""){
          if (!child.childNodes[GENRE_POS].innerHTML.includes(usr_choice_genre) || !child.childNodes[DATE_POS].innerHTML.includes(usr_choice_year)){
            child.remove();
            i--;
          }
        }

        if (usr_choice_countr != "" && usr_choice_genre=="" && usr_choice_year!=""){
          if (!child.childNodes[COUNTRY_POS].innerHTML.includes(usr_choice_countr) || !child.childNodes[DATE_POS].innerHTML.includes(usr_choice_year)){
            child.remove();
            i--;
          }
        }
        if (usr_choice_countr != "" && usr_choice_genre!="" && usr_choice_year==""){
          if (!child.childNodes[GENRE_POS].innerHTML.includes(usr_choice_genre) || !child.childNodes[COUNTRY_POS].innerHTML.includes(usr_choice_countr)){
            child.remove();
            i--;
          }
        }
        if (usr_choice_countr != "" && usr_choice_genre=="" && usr_choice_year==""){
          if (!child.childNodes[COUNTRY_POS].innerHTML.includes(usr_choice_countr)){
            
            console.log(child.childNodes[1].innerHTML)
            console.log(child.childNodes[COUNTRY_POS].innerHTML)
            child.remove();
            i--;
          }
        }
        if (usr_choice_countr == "" && usr_choice_genre!="" && usr_choice_year==""){
          if (!child.childNodes[GENRE_POS].innerHTML.includes(usr_choice_genre)){
            child.remove();
            i--;
          }
        }
        if (usr_choice_countr == "" && usr_choice_genre=="" && usr_choice_year!=""){
          if (!child.childNodes[DATE_POS].innerHTML.includes(usr_choice_year)){
            child.remove();
            i--;
          }
        }
        if (usr_choice_countr != "" && usr_choice_genre!="" && usr_choice_year!=""){
          if (!child.childNodes[COUNTRY_POS].innerHTML.includes(usr_choice_countr) || !child.childNodes[GENRE_POS].innerHTML.includes(usr_choice_genre)
           || !child.childNodes[DATE_POS].innerHTML.includes(usr_choice_year)){
            child.remove();
            i--;
          }
        }               
    }
    
}