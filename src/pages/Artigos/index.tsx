import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../services/api-client";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getArticles()
  }, []);

  const getArticles = async () => {
    setLoading(true)
    try {
      const response = await apiClient.get(`/artigos`)
      setArticles(response.data)
    }
    catch (error: any){
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <div className="my-30">
      <ArticleList
        articles={articles}
        loading={loading}
      />
    </div>
  );
};