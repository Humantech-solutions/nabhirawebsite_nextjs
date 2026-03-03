import MediaEntertainment from "../../../src/pages_migrated/MediaEntertainment";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('media-entertainment');
  return <MediaEntertainment wordpressData={wordpressData} />;
}
