const baseUrlInput = document.getElementById('baseUrl');
const tokenInput = document.getElementById('token');
const statusEl = document.getElementById('status');

chrome.storage.sync.get(['bidcoopBaseUrl', 'bidcoopToken'], (result) => {
  if (result.bidcoopBaseUrl) baseUrlInput.value = result.bidcoopBaseUrl;
  if (result.bidcoopToken) tokenInput.value = result.bidcoopToken;
});

document.getElementById('save').addEventListener('click', () => {
  const bidcoopBaseUrl = baseUrlInput.value.trim().replace(/\/$/, '');
  const bidcoopToken = tokenInput.value.trim();

  chrome.storage.sync.set({ bidcoopBaseUrl, bidcoopToken }, () => {
    statusEl.textContent = '✓ Guardado.';
    setTimeout(() => { statusEl.textContent = ''; }, 2500);
  });
});
