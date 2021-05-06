const BASE_URL = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://bullentin-board-api.herokuapp.com'

const callAPI = async (endpoint: string, method: "POST" | "GET", body?: any) => {
  const url = `${BASE_URL}/api/v1/${endpoint}`
  const accessToken = sessionStorage.getItem('access-token');
  const uid = sessionStorage.getItem('uid');
  const client = sessionStorage.getItem('client')
  const config: RequestInit = {
      headers: {
          'access-token': `${accessToken}`,
          'uid': `${uid}`,
          'client': `${client}`,
          'Content-Type': 'application/json',
      },
      method
  }

  if(body) {
    config.body = JSON.stringify(body);
  }

  const data = await fetch(url, config)
  if(!data.ok) throw Error("通信に失敗しました。");

  return data.json();
}

const postWithCredential = async (endpoint: string, body: any) => {
  return callAPI(endpoint, "POST", body);
}

const getWithCredential = async (endpoint: string) => {
  return callAPI(endpoint, "GET");
} 

export const getTopics = () => getWithCredential("topics");
export const getComments = () => getWithCredential("comments");

export const postComment = (body: any) => postWithCredential("comments", body);