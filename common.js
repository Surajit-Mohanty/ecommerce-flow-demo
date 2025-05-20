// Save login
function loginUser(name, email) {
  sessionStorage.setItem('user', JSON.stringify({
    name, email, loginTime: new Date().toLocaleString()
  }));
  window.location.href = 'productpage.html';
}

// Load user
function loadUser() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (!user) window.location.href = 'index.html';
  return user;
}

// Render header
function renderHeader() {
  const user = loadUser();
  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = `
    <div class="left">👤 ${user.name} | 📧 ${user.email} | 🕒 ${user.loginTime}</div>
    <div class="right"><button onclick="logout()">Logout</button></div>
  `;
  document.body.prepend(header);
}

function logout() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

// Cart Logic
function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existing = cart.find(p => p.id === item.id);
  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function clearCart() {
  localStorage.removeItem('cart');
}
