import { IGithubUser } from "@/interfaces/IGithubUser";

export const getUserGithub = async (): Promise<IGithubUser> => {
  const response = await fetch("https://api.github.com/users/pedropdin");

  const data = await response.json();
  
  const { avatar_url, html_url } = data;


  return { avatar_url, html_url }
}