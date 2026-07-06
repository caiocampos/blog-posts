import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const PostCard = ({
  id,
  title,
  body,
  creationDate,
  authorName,
  authorNickname,
  deletePost,
}: {
  id: string
  title: string
  body: string
  creationDate: string
  authorName: string
  authorNickname: string
  deletePost: (id: string) => Promise<void>
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 text-sm text-muted-foreground">
        <span>
          Autor: {authorName} ({authorNickname})
        </span>
        <span>Data: {new Date(creationDate).toLocaleDateString()}</span>
        <p className="mt-2 line-clamp-3 text-foreground">{body}</p>
      </CardContent>
      <CardContent className="flex justify-end gap-2 pt-0">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger render={<Button variant="outline">Abrir</Button>} />
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                Autor: {authorName} ({authorNickname}) &middot; Data:{" "}
                {new Date(creationDate).toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>
            <p className="max-h-[50vh] overflow-y-auto whitespace-pre-wrap">
              {body}
            </p>
            <DialogFooter>
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button variant="destructive">
                      <Trash2 />
                      Apagar
                    </Button>
                  }
                />
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Apagar postagem</AlertDialogTitle>
                    <AlertDialogDescription>
                      Tem certeza que deseja apagar a postagem &quot;{title}
                      &quot;? Essa ação não pode ser desfeita.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={async () => {
                        await deletePost(id)
                        setIsOpen(false)
                      }}
                    >
                      Apagar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <DialogClose render={<Button variant="outline">Fechar</Button>} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export default PostCard
