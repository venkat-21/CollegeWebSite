import "./Feed.css";
import College from "./College";

function Feed() {
 
  return (
    <div className="feeds">
      <div className="colleges">
        {colleges.map((college) => {
          return <College {...college} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
