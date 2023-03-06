fetch("./data.json") // получить данные из файла data.json
  .then(function(response) { // потом (когда данные получены)
    return response.json(); // преобразовать json в javascript объект/массив
  })
  .then(function(data) { // потом

    // создать список
    const ul = document.createElement("ul");
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      li.textContent = data[i]; // получить строку
      ul.append(li);
    }
    document.body.append(ul);

  });


fetch("./students.json") // получить данные из файла data.json
  .then(function(response) { // потом (когда данные получены)
    return response.json(); // преобразовать json в javascript объект/массив
  })
  .then(function(data) { // потом

    // создать список
    const ul = document.createElement("ul");
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      li.textContent = data[i].name + " " + data[i].score; // получить имя и оценку
      ul.append(li);
    }
    document.body.append(ul);

  });


fetch("https://jsonplaceholder.typicode.com/todos") // получить данные из файла data.json
  .then(function(response) { // потом (когда данные получены)
    return response.json(); // преобразовать json в javascript объект/массив
  })
  .then(function(data) { // потом

    // создать список
    const ul = document.createElement("ul");
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");

      // использовать полученные данные
      li.textContent = data[i].title; // получить имя и оценку
      if (data[i].completed) {
        // li.style.textDecoration = "line-through";
        li.textContent = "✅ " + li.textContent;
      }

      ul.append(li);
    }
    document.body.append(ul);

  })
  .catch(function(reason) { // в случае ошибки
    alert("Failed to fetch todos, please check your internet conneciton.");
  });


fetch("https://jsonplaceholder.typicode.com/photos") // получить данные из файла data.json
  .then(function(response) { // потом (когда данные получены)
    return response.json(); // преобразовать json в javascript объект/массив
  })
  .then(function(data) { // потом

    // создать список
    const div = document.createElement("div");
    for (let i = 0; i < data.length; i++) {

      // создать картинку
      const img = document.createElement("img");
      img.alt = data[i].title;
      img.src = data[i].thumbnailUrl;
      // создать ссылку
      const a = document.createElement("a");
      a.title = data[i].title;
      a.href = data[i].url;
      a.target = "_blank";
      a.append(img);

      div.append(a);
    }

    document.body.append(div);
  })
  .catch(function(reason) { // в случае ошибки
    alert("Failed to fetch todos, please check your internet conneciton.");
  });