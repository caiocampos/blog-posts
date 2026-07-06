import { JSX } from "react"
import Layout from "@/components/layout"

export const EmptyRoute = (): JSX.Element => (
  <Layout title="Página não encontrada">
    <div className="flex h-64 items-center justify-center text-muted-foreground">
      A página que você procura não existe.
    </div>
  </Layout>
)
