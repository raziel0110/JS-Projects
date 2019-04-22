import axios from "axios";
const KEY = "AIzaSyBeUEXsAuQvYRhqyy06wA0GC4BZ350eLpQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
