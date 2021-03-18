// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
const key = process.env.GOOGLE_PLACES_API_KEY;

export default function getMarvelCharacter(req, res) {
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shop+lafayette&key=${process.env.GOOGLE_PLACES_API_KEY}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch(err => console.log(err));
}
