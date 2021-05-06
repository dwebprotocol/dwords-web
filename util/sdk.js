import { SDK } from 'dweb-sdk'

const {
  DDatabase,
  DDrive,
  resolveName,
  keyPair,
  registerExtension,
  close } = await SDK ({
    applicationName: "dwords",
    persist: true,
    swarmOpts: {
      ephemeral: true,
      webrtcBootstrap: [
        "wss://webrtc.dwebx.net",
        "wss://webrtc.peepsx.com",
        "wss://webrtc.dsocial.network"
      ],
      wsProxy: "wss://dswarm.dwebx.net"
    },
    baseOpts: {
      sparse: true,
      valueEncoding: "utf-8"
    },
    driveOpts: {
      sparse: true
    }
  })

export {
  DDatabase,
  DDrive,
  resolveName,
  keyPair,
  registerExtension,
  close
}