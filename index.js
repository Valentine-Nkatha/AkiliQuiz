const categorySelect = document.getElementById('categorySelect');

categorySelect.addEventListener('change', () => {
  localStorage.setItem('selectedCategory', categorySelect.value);
});
