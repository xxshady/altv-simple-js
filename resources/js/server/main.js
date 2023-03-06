import alt from "alt-server"

alt.log("~gl~server js start")

alt.on("playerConnect", (player) => {
  player.spawn("mp_m_freemode_01", new alt.Vector3(0, 0, 72))
})
