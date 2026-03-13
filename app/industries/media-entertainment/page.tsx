import MediaEntertainment from "../../../src/pages_migrated/industries/MediaEntertainment";
import { getPageBySlug } from "../../../src/lib/wordpress";

export default async function MediaEntertainmentPage() {
  const wordpressData = await getPageBySlug("media-entertainment");
  return <MediaEntertainment wordpressData={wordpressData} />;
}
