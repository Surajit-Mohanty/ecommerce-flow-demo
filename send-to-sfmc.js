export async function sendCartToSFMC({ email, name, cartItems }) {
  const timestamp = new Date().toLocaleString("en-US"); // Or use SFMC format
  const formData = new URLSearchParams({
    email,
    name,
    cartItems: JSON.stringify(cartItems),
    timestamp
  });

  const response = await fetch("https://mcbpcpxtk6qzkpnzk1spgzn07rh0.pub.sfmc-content.com/dyp1jbqcr2l", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData
  });

  const result = await response.text();
  console.log("SFMC Response:", result);
}
