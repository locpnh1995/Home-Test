export function setVideoFullScreen() {
  let iframeWidth = document.body.scrollWidth;
  let iframeHeight = Math.floor(document.body.scrollWidth * 9 / 16);
  document.getElementById("bg-video").style.width = `${iframeWidth}px`;
  document.getElementById("bg-video").style.height = `${iframeHeight}px`;
}
