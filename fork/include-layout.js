async function loadPartial(selector, path) {
  const placeholder = document.querySelector(selector);
  if (!placeholder) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Gagal memuat ${path}`);

    placeholder.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

Promise.all([
  loadPartial("#header-placeholder", "./header.html"),
  loadPartial("#footer-placeholder", "./footer.html")
]);
