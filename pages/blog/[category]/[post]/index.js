import Main from '../../../../Layouts/Main/Main';
import StrapiService from '../../../../components/StrapiService/StrapiService';
import Post from '../../../../components/Post';

const BlogPost = (props) => {
  return (
    <Main headTitle={'Tattoo one love | ' + props.postBySlug.title}>
      <Post {...props} />
    </Main>
  );
};

export const getStaticPaths = async () => {
  const strapiService = new StrapiService();
  const allPosts = await strapiService.getAllPosts();

  const paths = allPosts.map((item) => ({
    params: {
      post: item.slug,
      category: item.post_categories[0].slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { category, post } = context.params;
  const { API_URL } = process.env;

  const strapiService = new StrapiService();
  const postBySlug = await strapiService.getPostBySlug(post, category);
  const relevantPosts = await strapiService.getRelevantPosts(postBySlug, post);

  const allCategories = await strapiService.getPostsCategories();

  return {
    props: {
      postBySlug: postBySlug[0],
      relevantPostsData: relevantPosts,
      allCategories,

      API_URL,
    },
  };
};

export default BlogPost;
