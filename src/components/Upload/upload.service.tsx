export function postFormData(url: string, formData: FormData, signal?: AbortSignal): Promise<Response> {
  return window.fetch(url, {
    method: "POST",
    body: formData,
    signal
  })
}

export interface XHRConfig {
  url: string
  body:
    | string
    | Document
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
  onprogress?: (ev: ProgressEvent) => void
}

export function uploadFile(config: XHRConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", config.url, true)
    if (config.onprogress) {
      xhr.onprogress = config.onprogress
    }
    xhr.onerror = (ev) => reject(ev)
    xhr.onload = () => {
      try {
        resolve(JSON.parse(xhr.responseText))
      } catch (e) {
        resolve(xhr.responseText)
      }
    }
    xhr.setRequestHeader("Content-type", "multipart/form-data")
    xhr.send(config.body)
  })
}
