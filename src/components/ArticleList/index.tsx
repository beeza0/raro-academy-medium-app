import React from "react";
import { ArticleThumbnail } from "../ArticleThumbnail";
import { ArticleListProps } from "./ArticleList.types";
import { LoadingSpinner } from "../LoadingSpinner";

export const ArticleList: React.FC<ArticleListProps> = ({
  articles, loading
}) => {
  return (
    <div className="flex flex-col items-center justify-center m-10">
      {loading ?
        <LoadingSpinner/>
      :
        <>
          {articles.length > 0 ? 
            articles.map((article) => (
              <ArticleThumbnail
                key={ article.id }
                {...article}
              />
            ))
          :
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              <div>
                <h2 className="text-gray-800 text-center text-3xl font-semibold">Sem artigos... 🙁</h2>
                <p className="mt-2 text-gray-600">O que você acha de publicar seu primeiro artigo?</p>
              </div>
              {localStorage.getItem("token") !== null ?
              <div className="flex justify-end mt-4">
                <a className="text-xl font-medium text-indigo-500" href="/artigo/novo">Vamos lá!</a>
              </div>
              :
              <div className="flex justify-end mt-4">
                <a className="text-xl font-medium text-indigo-500" href="/login">Logue na sua conta!</a>
              </div>
              }
            </div>
            }
        </>
      }
    </div>
  );
}