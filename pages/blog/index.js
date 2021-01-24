import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import tinytime from "tinytime";
import getAllPostPreviews from "@/lib/getAllPostPreviews";

const posts = getAllPostPreviews();
const postDateTemplate = tinytime("{MMMM} {DD}, {YYYY}");

export default function BlogIndex({}) {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Header />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="divide-y divide-gray-200">
          <Head></Head>
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Blog
            </h1>
            <p className="text-lg leading-7 text-gray-500">
              Noticias y chascarrillos sobre tecnologia.
            </p>
          </div>

          <ul className="divide-y divide-gray-200">
            {posts.map(({ link, module: { default: Component, meta } }) => {
              return (
                <li key={link} className="py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Publicado el</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <time dateTime={meta.date}>
                          {postDateTemplate.render(new Date(meta.date))}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                          <Link href={link}>
                            <a className="text-gray-900">{meta.title}</a>
                          </Link>
                        </h2>
                        <div className="prose max-w-none text-gray-500">
                          <Component />
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link href={link}>
                          <a
                            className="text-teal-500 hover:text-teal-600"
                            aria-label={`Leer "${meta.title}"`}
                          >
                            Leer más &rarr;
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/blog/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul> */}
        </div>
      </div>
    </>
  );
}
