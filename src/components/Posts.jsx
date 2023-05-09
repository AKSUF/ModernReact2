import React from 'react'

const Posts = ({match}) => {
    const {params}=match;
    return (
        <div>
            <h1>Hello={params.category}/{params.topic}</h1>
        </div>
    )
}

export default Posts
