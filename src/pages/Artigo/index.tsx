import apiClient from '../../services/api-client';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "../../components/ArticleView";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<string>('');
  const [autor, setAutor] = useState({
    nome: "",
    avatar: "",
  });
  const [dataPublicacao] = useState(new Date());
  const {id} = useParams()

  useEffect(() => {    
    loadArticle();
  }, []);

  async function loadArticle() {
    try {
      const response = await apiClient.get(`/artigos/${id}`)
      setArticle(response.data.conteudo)    
      setAutor({nome: response.data.autor.nome, avatar: response.data.autor.avatar})
    }
    catch (err: any) {
      console.log(err)      
    }
    
  }

  return (
    <div className="m-10">
      <ArticleView
        article={article}
        autor={autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={ '10min' }
      />
    </div>
  );
};