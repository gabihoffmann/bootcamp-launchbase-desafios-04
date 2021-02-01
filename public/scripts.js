const currentPage = window.location.pathname;
const menuItens = document.querySelectorAll("header .links a");

for (item of menuItens) {
  const id = item.getAttribute("id");
  if (currentPage.includes(id)) {
    item.classList.add("active");
  }
}
