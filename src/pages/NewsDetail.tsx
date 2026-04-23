import { EditorialDetail } from "@/components/site/EditorialDetail";
import { news } from "@/lib/mock-data";
const NewsDetail = () => <EditorialDetail items={news} basePath="/news" notFoundLabel="News article not found" />;
export default NewsDetail;
