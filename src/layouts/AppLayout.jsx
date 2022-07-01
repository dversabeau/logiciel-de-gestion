import React from 'react'

export default function AppLayout({children}) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
