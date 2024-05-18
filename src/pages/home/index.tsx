import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div>
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      </div>
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
      <footer>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </footer>
    </div>
  );
}