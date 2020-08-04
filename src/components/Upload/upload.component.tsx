import React, { ChangeEvent, useRef, useState } from "react"
import DragComponent from "@/components/Upload/drag.component"
import UploadListComponent from "@/components/Upload/upload-list.component"

import "./_upload.css"

export type UploadFileStatus = "ready" | "uploading" | "success" | "error"

export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent?: number
  raw?: File
  response?: any
  error?: any
}

export interface UploadComponentProps {
  action: string
  files: UploadFile[]
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  onChange?: (file: File) => void
  onRemove?: (file: UploadFile) => void
  multiple?: boolean
  drag?: boolean
}

const UploadComponent: React.FC<UploadComponentProps> = (props) => {
  const { drag, children, multiple, files } = props
  const [fileList, setFileList] = useState<UploadFile[]>(files || [])
  const fileInput = useRef<HTMLInputElement>(null)

  const uploadFiles = (files: FileList) => {
    const postFiles: File[] = Array.from(files)
    const post = (file: File) => {
      const _file: UploadFile = {
        uid: Date.now() + file.lastModified + "",
        size: file.size,
        name: file.name,
        status: "ready"
      }
      setFileList((prev) => {
        return [_file, ...prev]
      })
    }
    postFiles.forEach(post)
  }

  const handleFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ""
    }
  }

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleRemove = (file: UploadFile) => {}

  return (
    <div className="viking-upload-component">
      <div className="viking-upload-input" style={{ display: "inline-block" }} onClick={handleClick}>
        {drag ? (
          <DragComponent
            onFile={(files) => {
              uploadFiles(files)
            }}
          >
            {children}
          </DragComponent>
        ) : (
          children
        )}
        <input
          className="viking-file-input"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          multiple={multiple}
        />
      </div>
      <UploadListComponent fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

export default UploadComponent
