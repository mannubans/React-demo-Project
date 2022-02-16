import React,{useState} from 'react'
import Pagination from "./Pagination";
import PaginAPI from "../API/PaginAPI";
const PaginContent = () => {
    const [posts, setPosts] = useState(PaginAPI);
  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <section className="pagination">
      <div className="container py-4">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-4 mb-3" key={post.id}>
              <div className="card">
                <div className="card-body">
                    <div className="pagin-img sclimg-item">
                        <img src={post.image} alt="images" className="card-media img-fluid" />
                    </div>
                    <h5>#{post.id} {post.title}</h5>
                    <p>{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={posts.length}/>
      </div>
    </section>
  );
}
export default PaginContent;