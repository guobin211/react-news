import { LocalEnum, localService } from "./local-service"

interface AppState {
  version: string
  i18n: string
  theme: string
  token: string
}

export class AppService {
  private appState: AppState = {
    version: "",
    i18n: "zh",
    theme: "",
    token: ""
  }
  /**
   * 获取本地信息
   */
  private initLocalState() {
    const local: AppState | undefined = localService.getData(LocalEnum.AppState)
    if (local) {
      if (local.version !== this.appState.version) {
        this.updateApp()
      } else {
        Object.assign(this.appState, local)
      }
    }
  }

  /**
   * 获取远程信息
   */
  private initRemoteState() {}
  /**
   * 更新app
   */
  private updateApp() {
    localService.clear()
    localService.setDefault()
  }

  bootstrap() {
    return new Promise((resolve, reject) => {
      this.initLocalState()
      this.initRemoteState()
      setTimeout(() => {
        resolve()
      }, 0)
    })
  }
}

export const appService = new AppService()
