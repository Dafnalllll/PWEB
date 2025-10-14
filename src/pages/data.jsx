import React from 'react'
import Sidebar from "../components/sidebar/sidebar";
export const Data = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Data Page</h1>
      </div>
    </div>
  )
}

export default Data;