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

  getPostsCategories = async () => {
    return await this.getResource(`/post-categories`);
  };

  getOurWorks = async () => {
    const ourWorks = await this.getResource(`/our-works`);
    return this._transformOurWorks(ourWorks);
  };

  get5LastPosts = async () => {
    return await this.getResource(`/posts?_limit=5`);
  };

  getAllPosts = async () => {
    return await this.getResource(`/posts`);
  };

  getCategoriesBySlug = async (slug) => {
    return await this.getResource(`/posts?post_categories.slug=${slug}`);
  };

  getPostBySlug = async (slug, category) => {
    const postBySlug = await this.getResource(`/posts?slug=${slug}`);
    return this.transformPostBySlug(postBySlug, slug, category);
  };

  getRelevantPosts = async (post, postSlug) => {
    const relevantCategories = post[0].post_categories.map((item) => item.slug);
    return await this.getResource(
      `/posts?post_categories.slug=${relevantCategories[0]}&post_categories.slug=${relevantCategories[1]}&_limit=3&slug_ncontains=${postSlug}`
    );
  };

  _transformOurWorks = (ourWorks) => {
    return ourWorks.works.map(({ id, url }) => ({
      id,
      url: this._API_URL + url,
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
