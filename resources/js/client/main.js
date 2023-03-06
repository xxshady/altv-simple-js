import alt from "alt-client"

alt.log("~gl~client js start")

const webView = new alt.WebView(
  "http://resource/client/ui/index.html"
)

webView.emit("setSomeText", "someText")
