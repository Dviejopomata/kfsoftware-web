import getAllPostPreviews from "@/lib/getAllPostPreviews";
import getAllProductsPreview from "@/lib/getAllProductsPreview";

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPostPreviews().map((post) => ({
        title: post.module.meta.title,
        link: `${post.link}`,
      })),
    },
  };
}
export async function getProjectStaticProps() {
  return {
    props: {
      posts: getAllProductsPreview().map((post) => ({
        title: post.module.meta.title,
        link: `${post.link}`,
      })),
    },
  };
}
