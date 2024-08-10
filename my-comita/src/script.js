document.querySelector('.js-activate-all').addEventListener('click', function() {
  // Найти все чекбоксы на странице
  const checkboxes = document.querySelectorAll('.card input[type="checkbox"]');
  
  // Пройтись по каждому чекбоксу и отметить его
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = true;
      // Вызвать событие change, чтобы CSS изменения также применились
      checkbox.dispatchEvent(new Event('change'));
  });
});