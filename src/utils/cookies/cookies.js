export function setCookie(name, value, days) {
  const expires = days ? `; max-age=${days * 24 * 60 * 60}` : "";
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/`;
}

export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === encodeURIComponent(name)) return decodeURIComponent(value);
  }
  return null;
}