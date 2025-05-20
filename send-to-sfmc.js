// ✅ Valid in normal browser script
async function sendCartToSFMC(data) {
  const timestamp = new Date().toLocaleString("en-US");

  const formData = new URLSearchParams({
    email: data.email,
    name: data.name,
    cartItems: JSON.stringify(data.cartItems),
    timestamp
  });

  const response = await fetch("https://mcbpcpxtk6qzkpnzk1spgzn07rh0.pub.sfmc-content.com/dyp1jbqcr2l", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData
  });

  const result = await response.text();
  console.log("SFMC response:", result);
}
