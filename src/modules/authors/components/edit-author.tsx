import { FormEvent, useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IAddAuthorRequestDTO } from "../interfaces/author.interface"

const emptyForm = { name: "", nickname: "", birthDate: "" }

const EditAuthor = ({
  onSubmit,
}: {
  onSubmit: (values: IAddAuthorRequestDTO) => Promise<void>
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
    await onSubmit(form)
    setIsInserting(false)
    setIsOpen(false)
  }

  const isValid = form.name.trim() && form.nickname.trim() && form.birthDate

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
            <DialogTitle>Novo Autor</DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo para cadastrar um novo autor.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Label htmlFor="author-name">Nome</Label>
            <Input
              id="author-name"
              required
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="author-nickname">Apelido</Label>
            <Input
              id="author-nickname"
              required
              value={form.nickname}
              onChange={(event) =>
                setForm({ ...form, nickname: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="author-birth-date">Data de Nascimento</Label>
            <Input
              id="author-birth-date"
              type="date"
              required
              value={form.birthDate}
              onChange={(event) =>
                setForm({ ...form, birthDate: event.target.value })
              }
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

export default EditAuthor
