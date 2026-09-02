import { Helmet } from "react-helmet-async";

const SITE_URL = "https://hiltonpharmachem.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Drop <SEO title=... description=... path=... /> at the top of any page
 * component to override the default meta tags from index.html for that route.
 */
export default function SEO({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  keywords,
  jsonLd,
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
