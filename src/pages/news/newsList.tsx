import { Link } from "react-router-dom";
import news from "../../data.json";

function NewsList() {
    return (
        <>
            <ul>
                {news.map((post) => (
                    <div key={post.id}>
                        <li>
                            <Link to={`/news/${post.id}`}>{post.title}</Link>
                        </li>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default NewsList;