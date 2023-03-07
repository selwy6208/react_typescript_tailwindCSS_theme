import React from "react"
import { Route, Routes } from "react-router-dom"

import OutMultipleValue from "./page"

export function Body() {
  return (
    <Routes>
      <Route path="/" element={<OutMultipleValue />} />
    </Routes>
  )
}