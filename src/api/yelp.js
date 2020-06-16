import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer RHldQ_yHAzgBDIWrflkvCL8tuYycThGhPDj4pu1l6ug_-oI1n8A3HGDZdsKVw6awkBp_QOyGaJ9rOQ_pfY2AKReuF-Do3_0dpBp3S4PzysDED4S1LDY0lOKHOJLaXnYx'
  }
});