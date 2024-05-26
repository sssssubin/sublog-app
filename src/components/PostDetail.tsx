import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">김수빈</div>
          <div className="post__date">yyyy.mm.dd</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">
            <Link to={`/posts/edit/1`}>수정</Link>
          </div>
        </div>
        <div className="post__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem accusamus, molestiae ea alias ab, repellendus natus tempora, quibusdam exercitationem blanditiis a quidem? Ipsa soluta consequuntur incidunt natus voluptate voluptates?
        </div>
      </div>
    </div>
  );
}