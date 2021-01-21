export default async function preview(req, res) {
  const { slug } = req.query;

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});
  console.log("PREVIEW", slug);
  // Redirect to the path from the fetched post
  // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/blog/${slug}` });
  res.end();
}
