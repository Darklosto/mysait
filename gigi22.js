// JS для основы

// Добавление функциональности для кнопки
var button = document.querySelector('.button');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Добавление функциональности для ссылки
var link = document.querySelector('a');
link.addEventListener('click', function(event) {
  event.preventDefault();
  alert('Link clicked!');
});
