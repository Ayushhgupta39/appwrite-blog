import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import dbService from '../services/database';
import { Container, PostForm } from '../components';

function EditPost() {
    const [post, setPosts] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            }).catch((error) => console.log(error))
        } else {
            navigate("/");
        }
    }, [slug, navigate])

  return post ? (
    <div>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
