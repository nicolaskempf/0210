import type { FormEvent } from 'react'

interface NewTicketProps {
  onCancel: () => void
  onCreated: () => void
}

export function NewTicket({ onCancel, onCreated }: NewTicketProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert('Chamado criado com sucesso! (dado simulado)')
    onCreated()
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <p className="text-sm font-semibold text-indigo-600">Atendimento</p>
        <h2 className="mt-1 text-2xl font-bold">Novo chamado</h2>
        <p className="mt-1 text-slate-500">Preencha os dados para registrar sua solicitação.</p>
      </div>
      <form onSubmit={handleSubmit} className="card space-y-5 p-6">
        <div>
          <label className="mb-2 block text-sm font-semibold">Título</label>
          <input required className="input" placeholder="Ex.: Computador não liga" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">Categoria</label>
            <select className="input">
              <option>Hardware</option><option>Software</option><option>Rede</option><option>Acesso</option><option>Impressão</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">Prioridade</label>
            <select className="input">
              <option>Baixa</option><option>Média</option><option>Alta</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold">Descrição</label>
          <textarea required rows={6} className="input resize-none" placeholder="Explique o problema com o máximo de detalhes..." />
        </div>
        <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
          <button type="button" onClick={onCancel} className="btn-secondary">Cancelar</button>
          <button type="submit" className="btn-primary">Criar chamado</button>
        </div>
      </form>
    </div>
  )
}