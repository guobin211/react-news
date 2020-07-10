import React from "react"

/**
 * 静态loading
 */
export const Loading: React.FC = (props: any) => {
  return (
    <div className="center">
      <svg
        className="m-loading"
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
  )
}
