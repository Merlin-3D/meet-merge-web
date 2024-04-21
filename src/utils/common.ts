import { destroyCookie, parseCookies, setCookie } from "nookies";

export const meetLink = (Math.random() + 1).toString(36).substring(7);
export const randUserId = Math.floor(Math.random() * 16) + 5;

export const USER_ID = "x-key";

export const currentUserFromCookies = (): string | null => {
  const cookies = parseCookies();
  const userToken = cookies[USER_ID];
  const user = userToken;
  return user;
};

export const setUserFromCookies = (user: string): void => {
  destroyCookie;
  setCookie(null, USER_ID, JSON.stringify(user), {
    secure: true,
    // expires: expirationDate,
    path: "/",
  });
};

export const removeUserFromCookies = () => {
  setCookie(null, USER_ID, "", {
    maxAge: 0 * 0 * 0 * 0,
    path: "/",
  });
};
