//import posts from '../posts/ex.json';


import posts from '../../posts/parousiastiko.json';

export async function get({ params }) {
  // `params.id` comes from [id].js
  //console.log('param:'+params.category)
  var catposts = [{}]; //για καποιο λόγο θέλει τετοιον ορισμό
  for (let i in posts) {
    
    var categ=posts[i].categories
    //console.log(categ[0])
    if (categ[0] === params.category) {
      // /console.log(posts[i])
      catposts.push(posts[i]);
      
    }
  }
  catposts.shift() //διώχνω το κενο πρώτο στοιχείο
  //console.log(catposts)
  if (catposts.length != 0){
    return {
      body: { posts: catposts }
    };
  }
  return {
     status: 404
  };
}
