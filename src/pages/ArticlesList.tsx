import { EditorialList } from "@/components/site/EditorialList";
import { articles } from "@/lib/mock-data";
const ArticlesList = () => <EditorialList title="Articles" subtitle="Guides and deep dives." items={articles} basePath="/articles" />;
export default ArticlesList;
