import { ReactNode } from "react"

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className="space-y-5 text-center py-10 px-6 lg:px-25">
      {children}
    </section>
  )
}

export default SectionContainer
