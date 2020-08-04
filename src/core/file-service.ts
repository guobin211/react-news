export abstract class BaseFileService<T> {
  abstract uploadFile: () => Promise<T>
  abstract uploadFiles: () => Promise<T>
  abstract downloadFile: () => Promise<T>
}

export interface ApiFile {
  "/api/file": FileResp
  "/api/files": FilesResp
}

export interface FileResp {
  success: boolean
  msg: string
  body: string
}

export interface FilesResp {
  success: boolean
  msg: string
  body: string[]
}

/**
 * 给不同的接口定义不同的返回类型
 * @param url URL extends keyof ApiFile
 */
export function getFile<URL extends keyof ApiFile>(url: URL): Promise<ApiFile[URL]> {
  return fetch(url).then((res) => res.json())
}
