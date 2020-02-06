import React from 'react';
import {
    Link,
    useParams
} from 'react-router-dom';

function Page() {

    const params = useParams();
    console.table(params.pageId);

    
    return (
        <div>
            <h1>
                Site Number: {params.pageId}
            </h1>
        </div>

    );
}

export default Page;