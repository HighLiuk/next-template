import { FC, PropsWithChildren } from "react"

type Props = {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  )
}

export default Layout
