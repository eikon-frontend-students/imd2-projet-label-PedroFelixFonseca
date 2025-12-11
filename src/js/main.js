const artistLinks = document.querySelectorAll('.artist_link');
let hoverImage = null;

artistLinks.forEach(link => {
  link.addEventListener('mouseenter', (e) => {
    if (!hoverImage) {
      hoverImage = document.createElement('img');
      hoverImage.style.position = 'fixed';
      hoverImage.style.pointerEvents = 'none';
      hoverImage.style.zIndex = '1000';
      hoverImage.style.width = '200px';
      hoverImage.style.height = '200px';
      hoverImage.style.borderRadius = '8px';
      document.body.appendChild(hoverImage);
    }
    hoverImage.src = link.dataset.image;
    hoverImage.style.opacity = '1';
  });

  link.addEventListener('mousemove', (e) => {
    if (hoverImage) {
      hoverImage.style.left = e.clientX - 100 + 'px';
      hoverImage.style.top = e.clientY - 100 + 'px';
    }
  });

  link.addEventListener('mouseleave', () => {
    if (hoverImage) {
      hoverImage.style.opacity = '0';
    }
  });
});