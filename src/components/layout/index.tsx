import { useLocation, useNavigate } from "react-router-dom"
import {
  pages,
  type IPages,
  type IPage,
  RouterPath,
} from "@/routing/router-path"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import PostsIcon from "@/assets/posts.svg"

const Layout = ({
  children,
  title,
  subtitle,
  className,
  ...rest
}: {
  children?: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const pageKey = (
    (location.pathname === RouterPath.HOME
      ? RouterPath.POSTS
      : location.pathname) || ""
  ).slice(1) as keyof IPages
  const page: IPage | undefined = pages[pageKey]

  return (
    <div className="min-h-dvh bg-background">
      <Toaster />
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-secondary font-bold text-secondary-foreground">
              <img src={PostsIcon} />
            </div>
            <div>
              <h1 className="text-lg leading-tight font-semibold">
                {title ?? "Blog Posts"}
              </h1>
              {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
          <Tabs
            value={page?.path}
            onValueChange={(value) => navigate(value as string)}
          >
            <TabsList>
              {Object.values(pages).map(
                ({ id, name, path, icon: Icon }: IPage) => (
                  <TabsTrigger key={id} value={path}>
                    <Icon className="size-4" />
                    {name}
                  </TabsTrigger>
                )
              )}
            </TabsList>
          </Tabs>
        </div>
      </header>
      <main className={cn("mx-auto max-w-5xl px-4 py-6", className)} {...rest}>
        {children}
      </main>
    </div>
  )
}

export default Layout
