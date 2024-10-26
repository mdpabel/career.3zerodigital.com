import { createClient, EntryCollection } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// Fetch all Star of the Month entries
export const fetchStarsOfTheMonth = async () => {
  const response = await client.getEntries({
    content_type: 'starOfTheMonth',
  });

  return response.items;
};
