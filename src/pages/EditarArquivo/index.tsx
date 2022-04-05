import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../services/api-client";

export const EditarArquivoPage = () => {

  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams()
  const navigator = useNavigate()

  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  async function buscarArtigo() {
    try {
      const response = await apiClient.get<ArticleThumbnailProps>(`/artigos/${id}`)
      setArtigo(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (artigo: ArticleThumbnailProps) => {
    if (artigo.id) {
      try {
        await apiClient.patch<ArticleThumbnailProps>(`/artigos/${id}`, {...artigo})
        navigator(`/artigo/${artigo.id}`)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const response = await apiClient.post<ArticleThumbnailProps>(`/artigos`, {...artigo})
        navigator(`/artigo/${response.data.id}`)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const deleteArticle = async (articleId: number) => {
    try {
      await apiClient.delete<ArticleThumbnailProps>(`/artigos/${articleId}`)
      navigator('/artigos')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm article={artigo} onSubmit={handleSubmit} deleteArticle={deleteArticle}/>
      </div>
    </>
  );
};