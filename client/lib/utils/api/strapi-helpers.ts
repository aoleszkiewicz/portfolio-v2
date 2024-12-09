function getStrapiURL(path = '') {
  return `${process.env.STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}

function getStrapiMedia(url: string) {
  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export { getStrapiURL, getStrapiMedia, formatDate };
