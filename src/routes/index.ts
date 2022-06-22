//import posts from '../posts/ex.json';
import posts from '../posts/parousiastiko.json';

export async function get() {
  // `params.id` comes from [id].js
  console.log(posts)
  if (posts) {
    return {
      body: { posts }
    };
  }
 
  return {
    status: 404
  };
}
