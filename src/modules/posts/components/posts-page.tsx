import { useCallback, useEffect, useMemo, useState } from "react"
import { observer } from "mobx-react-lite"
import { RefreshCw, Search } from "lucide-react"
import Layout from "@/components/layout"
import useStores from "@/common/hooks/use-stores"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import EditPost from "./edit-post"
import { IAddPostRequestDTO, IPost } from "../interfaces/post.interface"
import PostCard from "./post-card"

const Posts = () => {
  const { posts } = useStores()
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [postList, setPostList] = useState<Array<IPost>>([])

  const loadPosts = useCallback(async () => {
    setIsLoading(true)
    const postsResult = await posts.getAll("")
    setPostList(postsResult)
    setIsLoading(false)
  }, [posts])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial data fetch on mount
    loadPosts()
  }, [loadPosts])

  const requestNewPost = useCallback(
    async (idAuthor: string, post: IAddPostRequestDTO) => {
      await posts.create(idAuthor, post)
      await loadPosts()
    },
    [posts, loadPosts]
  )

  const deletePost = useCallback(
    async (id: string) => {
      await posts.delete(id)
      await loadPosts()
    },
    [posts, loadPosts]
  )

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) {
      return postList
    }
    return postList.filter(
      ({ title, author }) =>
        title.toLowerCase().includes(term) ||
        author?.name?.toLowerCase().includes(term) ||
        author?.nickname?.toLowerCase().includes(term)
    )
  }, [postList, search])

  return (
    <Layout title="Postagens">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Busque por título ou autor"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <EditPost onSubmit={requestNewPost} />
            <Button
              variant="outline"
              size="icon"
              loading={isLoading}
              onClick={() => loadPosts()}
            >
              <RefreshCw />
            </Button>
          </div>
        </div>
        {filteredPosts.length === 0 && !isLoading ? (
          <div className="flex h-32 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
            Nenhuma postagem encontrada.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map(({ id, title, body, creationDate, author }) => (
              <PostCard
                key={id}
                id={id}
                title={title}
                body={body}
                creationDate={creationDate}
                authorName={author?.name}
                authorNickname={author?.nickname}
                deletePost={deletePost}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

const PostsObserver = observer(Posts)

export default PostsObserver
