import Cookies from "js-cookie";

class WebCookies {
    static SetCookie = (cookiename, userin) => {
        Cookies.set(cookiename,userin, {
            expires: 1,
            secure: true,
            sameSite: "Strict",
            path: "/"
        })
    }

    static GetCookie = (cookiename) => {
     return Cookies.get(cookiename);
    }

    static RemoveCookie = (cookiename) => {
        Cookies.remove(cookiename);
       }

}
export default WebCookies;