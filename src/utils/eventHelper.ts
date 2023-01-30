import router from "next/router";

/**
 * Open link helper
 * @param url
 * @param newWindow
 */
export function openLink(url: string, newWindow: boolean) {
  if (newWindow) {
    window.open(url, "_blank");
  } else {
    router.push(url);
  }
}

/**
 * Open alert helper
 * @param msg
 */
export function openAlert(msg: string) {
  window.alert(msg);
}
