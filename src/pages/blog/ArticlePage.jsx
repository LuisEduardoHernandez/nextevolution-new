import { useParams } from "react-router-dom";
import articles from "./blogNews.json";

export default function ArticlePage() {
  const { url } = useParams();
  const article = articles.find((a) => a.url === url);

  if (!article) return <p>Artículo no encontrado</p>;

  return (
    <div className="max-w-3xl mx-auto pt-32 pb-16 px-4">
      <h1 className="text-3xl font-bold mb-4 creato-display">{article.title}</h1>
      <div className="mb-6 text-gray-500">{article.date} • {article.category}</div>
      <img src={article.image} alt={article.title} className="mb-6 rounded-xl shadow" />

    
     {article.description ? (
         <p className="creato-display" dangerouslySetInnerHTML={{ __html: article.description }} />
        ) : (
          <p>No description available.</p>
        )}
    </div>
  );
}