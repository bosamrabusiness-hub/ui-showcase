import { EditorialList } from "@/components/site/EditorialList";
import { news } from "@/lib/mock-data";
const NewsList = () => <EditorialList title="News" subtitle="Releases, sales, and announcements." items={news} basePath="/news" />;
export default NewsList;
