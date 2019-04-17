import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ea0ffbf40f3e378873d7583f26634396469475494950ef06b4c329cb4e04b375"
  }
});
