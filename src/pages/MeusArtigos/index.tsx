import { useEffect, useState } from "react";
import axios from 'axios'
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function buscaMeusArtigos() {
    // através de generics, posso informar ao axios o tipo de objeto que vamos
    // operar.
    const response = await axios.get<ArticleThumbnailProps[]>(
      'http://3.221.159.196:3307/artigos/meus-artigos', {
        headers: {
        Authorization: `bearer ${localStorage.token}`
      }}
    );
    setArticles(response.data);    
  }
  
  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  useEffect(() => {
    setArticles(
      geraArtigos(5).map((artigo) => ({ ...artigo, editavel: true }))
    );
  }, []);

  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};