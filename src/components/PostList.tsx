import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabTaype = "all" | "my";

export default function PostList({ hasNavigation = true }) {
  const [activeTab, setActiveTAb] = useState<TabTaype>("all");
  return (   
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div 
            role="presentation" 
            onClick={() => setActiveTAb("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}>전체</div>
          <div 
            role="presentation"             
            onClick={() => setActiveTAb("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}>나의 글</div>
        </div>
      )}      
      <div className="post__list">
        {[...Array(10)].map((e, index) => (        
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">김수빈</div>
                <div className="post__date">yyyy.mm.dd</div>
              </div>
              <div className="post__title">게시글 {index}</div>  
              <div className="post__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem accusamus, molestiae ea alias ab, repellendus natus tempora, quibusdam exercitationem blanditiis a quidem? Ipsa soluta consequuntur incidunt natus voluptate voluptates?
              </div>
            </Link>     
            <div className="post__utils-box">
              <div className="post__delete">삭제</div>
              <div className="post__edit">수정</div>
            </div>       
          </div> 
        ))}
      </div>
    </> 
  )
}