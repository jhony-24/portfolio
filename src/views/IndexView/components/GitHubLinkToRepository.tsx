import React from "react"
import { FaGithub } from "react-icons/fa"

export default function GitHubLinkToRepository() {
  return (
    <div className="fixed left-10 top-3 z-20">
      <a href="https://github.com/jhony-24" target="_blank">
        <FaGithub size={30} />
      </a>
    </div>
  )
}
