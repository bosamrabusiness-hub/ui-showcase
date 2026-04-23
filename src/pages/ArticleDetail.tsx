import { EditorialDetail } from "@/components/site/EditorialDetail";
import { articles } from "@/lib/mock-data";
const ArticleDetail = () => <EditorialDetail items={articles} basePath="/articles" notFoundLabel="Article not found" />;
export default ArticleDetail;
