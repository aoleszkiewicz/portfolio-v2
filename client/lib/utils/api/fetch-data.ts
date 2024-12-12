import qs from 'qs';
import { getStrapiURL } from './strapi-helpers';
import { Response } from '@/lib/types/api/strapi-types';

async function fetchData<TData>(
  path: string,
  urlParamsObject = {},
  options = {},
) {
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
    const data: Response<TData> = await fetch(requestUrl, mergedOptions).then(
      (response) => response.json(),
    );

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    );
  }
}

export { fetchData };
