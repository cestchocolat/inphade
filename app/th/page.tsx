import { HomePage } from "@/components/HomePage";
import { getDictionary } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("th");

export default function Page() {
  return <HomePage locale="th" dictionary={getDictionary("th")} />;
}
