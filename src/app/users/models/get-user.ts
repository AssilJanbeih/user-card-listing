export interface GetUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

export interface GetUserList{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: GetUser[]
}

export interface GetUserInfo{
  data: GetUser
}
