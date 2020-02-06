import React from 'react';
import { 
    Link,
    useParams,
    useRouteMatch 
} from 'react-router-dom';

const blogPosts = [
    'zeroth post',
    'first post',
    'second post',
    'third post'
];

function Blog() {

    const params = useParams();
    console.table(params.blogId);
    const match = useRouteMatch();
    console.table(match);
    return (
        <div>
            <ul>
                {blogPosts.map((b, i) => (
                    <li><Link to={String(i)}>{b}</Link></li>
                ))}
            </ul>
            <p>
                {blogPosts[params.blogId]}
            </p>
        </div>
    );

}

export default Blog;