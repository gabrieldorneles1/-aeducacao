import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://tech-talent.hasura.app'
})

export const config = {
    headers:{
        "x-hasura-access-key": 'CQOsnv00PT6e7E8UY06ti0tmFgs4GGT7DZrnZvJqS649gBVFUSH1dmiRpmIJdsd4',
      'x-hasura-role': 'user',
      'x-hasura-user-id': 'Gabriel-Dorneles-27',
      'Content-Type': 'application/json'
    }
  };


