import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div style={{display: "flex", flexDirection: "column"}}>
        <Link to="/functional-component">
            <button>Functional Component</button>
        </Link>
        <Link to="/class-component">
            <button>Class Component</button>
        </Link>
    </div>
)
