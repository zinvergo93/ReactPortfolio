import React from 'react';
import { Link } from 'react-router-dom';


export default function Blog (params) {
    return (
        <div>
            <h2>Blog Page</h2>

            <div>
                <Link to = "/about-me"> Read more about this guy</Link>
            </div>
        </div>
    )
};
