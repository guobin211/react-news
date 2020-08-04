import React from "react"
import { UploadFile } from "@/components/Upload/upload.component"

export interface UploadListComponentProps {
  fileList: UploadFile[]
  onRemove: (_file: UploadFile) => void
}

const UploadListComponent: React.FC<UploadListComponentProps> = (props) => {
  const { fileList, onRemove } = props
  return (
    <ul className="viking-upload-list">
      {fileList.map((item) => {
        return (
          <li className="viking-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>{item.name}</span>
            <span className="file-status">
              {(item.status === "uploading" || item.status === "ready") && <span>ready</span>}
              {item.status === "success" && <span>success</span>}
              {item.status === "error" && <span>error</span>}
            </span>
            <span className="file-actions">
              <span onClick={() => onRemove(item)}>remove</span>
            </span>
            {item.status === "uploading" && <span>uploading</span>}
          </li>
        )
      })}
    </ul>
  )
}

export default UploadListComponent
