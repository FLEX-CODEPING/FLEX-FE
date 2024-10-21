import axios from 'axios';


const BASE_URL = 'http://dev.do-flex.co.kr:8080/api';


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZW1haWwiOiJtaW5qYWVAZ21haWwuY29tIiwiZXhwIjoxNzI5NDcwODY3fQ.hrxqdISgjFEUjeT2ypcYgz_wDYe9MOYCWxa4-lPohIY';


export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blog/posts`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;  
  } catch (error) {
    throw new Error('오류남 ㅠ');
  }
};
