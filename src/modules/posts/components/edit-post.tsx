import { FormEvent, useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AuthorSelect from "@/modules/authors/components/author-select"
import { IAddPostRequestDTO } from "../interfaces/post.interface"

const emptyForm = { title: "", body: "", author: "" }

const EditPost = ({
  onSubmit,
}: {
  onSubmit: (idAuthor: string, post: IAddPostRequestDTO) => Promise<void>
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isInserting, setIsInserting] = useState(false)
  const [form, setForm] = useState(emptyForm)

  const onOpenChange = (open: boolean) => {
    if (open) {
      setForm(emptyForm)
    }
    setIsOpen(open)
  }

  const onFinish = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsInserting(true)
    await onSubmit(form.author, { title: form.title, body: form.body })
    setIsInserting(false)
    setIsOpen(false)
  }

  const isValid = form.title.trim() && form.body.trim() && form.author

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger
        render={
          <Button>
            <Plus />
            Novo
          </Button>
        }
      />
      <DialogContent>
        <form onSubmit={onFinish} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Nova Postagem</DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo para criar uma nova postagem.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Label htmlFor="post-title">Título</Label>
            <Input
              id="post-title"
              required
              value={form.title}
              onChange={(event) =>
                setForm({ ...form, title: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="post-body">Texto</Label>
            <Textarea
              id="post-body"
              required
              rows={5}
              value={form.body}
              onChange={(event) =>
                setForm({ ...form, body: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="post-author">Autor</Label>
            <AuthorSelect
              value={form.author}
              onValueChange={(author) => setForm({ ...form, author })}
            />
          </div>
          <DialogFooter>
            <Button type="submit" loading={isInserting} disabled={!isValid}>
              Criar
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setForm(emptyForm)}
            >
              Limpar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditPost
