import { Document as PrismicDocument } from 'prismic-javascript/d.ts/documents';
import { Client } from './prismic-configuration';
import { PrismicDocsResponse } from './models';
import Prismic from 'prismic-javascript';
import { MapParamData } from '@stencil/router';
import fs from 'fs'

export const getPage: MapParamData = async (_params, url) => {
  let data: any = {};

  switch (url.pathname) {
    case '/':
      const homeSync = fs.existsSync('./local/home.prismic.json')
      if (homeSync) {
        data = JSON.parse(fs.readFileSync('./local/home.prismic.json').toString())
      } else {
        data = {
          ...(await queryPrismic('capacitor_homepage')),
          whitepaper_ad: await queryPrismic('capacitor_whitepaper_ad'),
          announcement: await queryPrismic('capacitor_homepage_announcement'),
        };
        data.announcement_bar = await queryPrismic('announcement_bar');
        fs.writeFileSync('./local/home.prismic.json', JSON.stringify(data))
      }
      break;
    case '/community':
      const communitySync = fs.existsSync('./local/community.prismic.json')
      if (communitySync) {
        data = JSON.parse(fs.readFileSync('./local/community.prismic.json').toString())
      } else {
        data = await queryPrismic('capacitor_community');
        data.announcement_bar = await queryPrismic('announcement_bar');
        fs.writeFileSync('./local/community.prismic.json', JSON.stringify(data))
      }
      break;
    case '/enterprise':
      const enterpriseSync = fs.existsSync('./local/enterprise.prismic.json')
      if (enterpriseSync) {
        data = JSON.parse(fs.readFileSync('./local/enterprise.prismic.json').toString())
      } else {
        data = await queryPrismic('capacitor_enterprise');
        data.announcement_bar = await queryPrismic('announcement_bar');
        fs.writeFileSync('./local/enterprise.prismic.json', JSON.stringify(data))
      }
      break;
  }

  return data;
};

export const getBlogPost = async (slug: string): Promise<PrismicDocument> => {
  const prismicClient = Client();
  return prismicClient.getByUID('blog', slug, {});
};

export const getBlogPosts = async (
  _page: number = 0,
  pageSize = 10,
): Promise<PrismicDocsResponse> => {
  const prismicClient = Client();

  const res = await prismicClient.query(
    Prismic.Predicates.at('document.type', 'blog'),
    { pageSize },
  );

  return {
    docs: res.results,
    _prismic: {
      ...res,
    },
  };
};

export const queryPrismic = async (prismicId: string) => {
  try {
    const prismicClient = Client();
    const response: PrismicDocument = await prismicClient.getSingle(
      prismicId,
      {},
    );

    return response.data;
  } catch (e) {
    console.warn(e);
  }
};
