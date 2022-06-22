//import posts from '../posts/ex.json';


import posts from '../../posts/parousiastiko.json';

export async function get({ params }) {
  // `params.id` comes from [id].js
  console.log('param:'+params.post)

  for (let i in posts) {
    
    var rel_link=posts[i].date+'-'+posts[i].title
    console.log('trueid: '+rel_link)
    if (rel_link === params.post) {
      
      return {
        body: { post: posts[i] }
      };
    }
  }

  return {
    status: 404
  };
}
