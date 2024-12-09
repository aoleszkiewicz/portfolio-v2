import qs from 'qs';
import { getStrapiURL } from './strapi-helpers';

async function fetchData<T>(
  path: string,
  urlParamsObject = {},
  options = {},
): Promise<T> {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ''}`,
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${requestUrl}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    );
  }
}

export { fetchData };
