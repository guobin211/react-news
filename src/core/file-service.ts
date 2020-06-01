export abstract class BaseFileService<T> {
  abstract uploadFile: () => Promise<T>
  abstract uploadFileS: () => Promise<T>
  abstract downloadFile: () => Promise<T>
}
