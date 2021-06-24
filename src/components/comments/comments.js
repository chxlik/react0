import {useEffect, useState} from "react";
import Comment from "../Comment/comment";

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}