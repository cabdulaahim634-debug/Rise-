// SomMen - Interactive Functionality for Men's Shopping

document.addEventListener('DOMContentLoaded', () => {
  // 1. Cart Count & Total Price update
  let cartCount = 2;
  let cartTotal = 260.00;

  const cartCountBadge = document.querySelector('.cart-count');
  const cartAmountText = document.querySelector('.cart-amount');
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  // Create toast notification element
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Alaabta si guul leh ayaa loogu daray gaariga!</span>';
  document.body.appendChild(toast);

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const title = card.querySelector('.product-title').innerText;
      const priceText = card.querySelector('.current-price').innerText.replace('$', '');
      const price = parseFloat(priceText) || 0;

      cartCount++;
      cartTotal += price;

      if (cartCountBadge) cartCountBadge.textContent = cartCount;
      if (cartAmountText) cartAmountText.textContent = `$${cartTotal.toFixed(2)}`;

      // Show toast
      toast.querySelector('span').textContent = `"${title.substring(0, 22)}..." waxaa lagu daray gaariga!`;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    });
  });

  // 2. Filter Category Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.textContent.trim().toLowerCase();

      productCards.forEach(card => {
        const catName = card.querySelector('.category-name').textContent.trim().toLowerCase();
        if (filterValue === 'dhammaan' || catName.includes(filterValue) || filterValue.includes(catName)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Simple Realtime Countdown Clock
  let hours = 11;
  let minutes = 42;
  let seconds = 30;

  const timeBlocks = document.querySelectorAll('.countdown-timer .time-num');
  if (timeBlocks.length === 4) {
    setInterval(() => {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
      }
      timeBlocks[1].textContent = hours < 10 ? '0' + hours : hours;
      timeBlocks[2].textContent = minutes < 10 ? '0' + minutes : minutes;
      timeBlocks[3].textContent = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
  }
});
