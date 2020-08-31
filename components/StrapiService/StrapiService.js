import fetch from 'isomorphic-unfetch';

export default class SwapiService {
  _API_URL = process.env.API_URL;

  getResource = async (url) => {
    const res = await fetch(`${this._API_URL}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getImportantMessage = async () => {
    return await this.getResource(`/important-message`);
  };
  // POSTS
  getPostsCategories = async () => {
    return await this.getResource(`/post-categories?_sort=updated_at:DESC`);
  };
  getAllPostsCount = async () => {
    return await this.getResource(`/posts/count`);
  };
  getNLastPosts = async (N) => {
    return await this.getResource(`/posts?_sort=updated_at:DESC&_limit=${N}`);
  };
  getPostBySlug = async (slug, category) => {
    const postBySlug = await this.getResource(`/posts?slug=${slug}`);
    return this.transformPostBySlug(postBySlug, slug, category);
  };
  getAllPosts = async () => {
    return await this.getResource(`/posts?_sort=updated_at:DESC`);
  };
  getRelevantPosts = async (post, postSlug) => {
    const relevantCategories = post[0].post_categories.map((item) => item.slug);
    return await this.getResource(
      `/posts?_sort=updated_at:DESC&post_categories.slug=${relevantCategories[0]}&post_categories.slug=${relevantCategories[1]}&_limit=3&slug_ncontains=${postSlug}`
    );
  };
  // OUR WORKS
  getOurWorks = async () => {
    const ourWorks = await this.getResource(`/our-works`);
    return this._transformOurWorks(ourWorks);
  };
  // CATEGORIES
  getCategoriesBySlug = async (slug) => {
    return await this.getResource(`/posts?post_categories.slug=${slug}`);
  };
  // REGULAMIN
  getRegulaminData = async () => {
    return await this.getResource(`/regulamin`);
  };
  getPPData = async () => {
    return await this.getResource(`/polityka-prywatnosci`);
  };
  getPCData = async () => {
    return await this.getResource(`/polityka-cookies`);
  };
  // TRANSFORM DATA
  _transformOurWorks = (ourWorks) => {
    return ourWorks.works.map(({ id, url, width, height, formats, name }) => ({
      id,
      url: this._API_URL + url,
      width,
      height,
      name,
      formats: {
        ...formats,
        thumbnail: {
          ...formats.thumbnail,
          url: this._API_URL + formats.thumbnail.url,
        },
        small: {
          ...formats.small,
          url: this._API_URL + formats.small.url,
        },
        medium: {
          ...formats.medium,
          url: this._API_URL + formats.medium.url,
        },
        large: {
          ...formats.large,
          url: this._API_URL + formats.large.url,
        },
      },
    }));
  };
  transformPostBySlug = (post, slug, category) => {
    return post.map((item) => ({
      title: item.title,
      content: item.content,
      updated_at: item.updated_at,
      href: this._API_URL + item.img.url,
      post_categories: item.post_categories,
      linkToThisPost:
        'https://tattoo-one-love.com/blog/' + category + '/' + slug,
    }));
  };
}
