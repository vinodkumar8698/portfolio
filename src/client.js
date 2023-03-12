import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'vcpfsbxq',
  dataset: 'production',
  apiVersion: '2023-03-12',
  useCdn: true,
  token: 'skhK1PutsaQX6InOwHMmRT3TTTsuqBr85rQuVJkKvfJ2p1btu0xisSyBmYOWmXya8dICI7gE9jF3knqMSRpuObkFS9ykXu2ghw1npEgpyTquuSnOSODYTNnWbl6sd6lrIpin992ZhhwQVYRVyQ65X0az3nuBDpCXGBjwkvM8g2a56Fa0dJmG',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
