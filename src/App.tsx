import React from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"

// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import { getQueryClient } from "./modules/queryClient"
import { Body } from "./Body"

function App() {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
