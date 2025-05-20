function sendCartToSFMC(data) {
  fetch('https://your-sfmc-cloudpage-or-webhook.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}
