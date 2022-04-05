import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../services/api-client";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function buscaMeusArtigos() {
    setLoading(true)
    try {
      const response = await apiClient.get<ArticleThumbnailProps[]>('/artigos/meus-artigos');
      setArticles(response.data) 
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  
  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  return (
    <div className="my-30">
      <ArticleList articles={articles} loading={loading}/>
    </div>
  );
};