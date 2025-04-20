import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import {convertToISODate} from "../utils";
import TimeAgo from "react-timeago";
import Comments from "./Comments";
import VotesHandler from "./VotesHandler.jsx";
import useApiRequest from "./useApiRequest.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import commentIcon from "./assets/commentIcon.svg"

function SingleArticle() {
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    error,
  } = useApiRequest(getSingleArticle, article_id);

  if (error) return (<ErrorComponent error={error}/>);

  if (isLoading) {
    return <LoadingSpinner loadingMessage={`Loading article...`} />;
  }

  return (
    <div className="article">

<div className="article-info">
       <div className="card-heading">
            <p className="topic">{article.topic}</p>
            <p>•</p>
            <p className="article-time">
              <TimeAgo date={convertToISODate(article.created_at)} />
            </p>
          </div>
        <p className="author">{article.author}</p>
        
        </div>



        <p className="article-title">{article.title}</p>
        <p>{article.body}</p>

        <img src={article.article_img_url} alt={article.title} className="article-img" />


   


      
      <div className="reactions">
        <VotesHandler article={article} />

        <div className="pill"><img src={commentIcon}/> {article.comment_count}</div>
      </div>

      <Comments article_id={article.article_id} />
    </div>
  );
}

export default SingleArticle;
