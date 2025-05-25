function updateVariant(select) {
  const selectedOption = select.options[select.selectedIndex];
  const newPrice = selectedOption.dataset.price;
  const card = select.closest('.animal-card');
  const priceElement = card && card.querySelector('.price');
  if (priceElement && newPrice) {
    priceElement.textContent = newPrice;
  }

  const hiddenInput = card && card.querySelector('input[name="id"]');
  if (hiddenInput) {
    hiddenInput.value = selectedOption.value;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const swiperElements = document.querySelectorAll('.pricingSwiper');
  swiperElements.forEach((el) => {
    new Swiper(el, {
      slidesPerView: 'auto',
      spaceBetween: 64,
      breakpoints: {
        768: {
          slidesPerView: 'auto',
        },
      },
    });
  });
});
