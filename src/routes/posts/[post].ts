//import posts from '../posts/ex.json';
import posts from '../../posts/parousiastiko.json';

export async function get({ params }) {
  // `params.id` comes from [id].js
  console.log(params.post)

  for (let i in posts) {
    if (posts[i].date === params.post) {
      return {
        body: { post: posts[i] }
      };
    }
  }

  return {
    status: 404
  };
}
