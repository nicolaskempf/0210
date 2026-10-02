interface LoginProps {
  onLogin: () => void
}

export function Login({ onLogin }: LoginProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">HelpDesk TI</h1>
          <p className="mt-1 text-sm text-gray-500">Entre no sistema de chamados</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold">E-mail</label>
            <input required type="email" className="input" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">Senha</label>
            <input required type="password" className="input" placeholder="Senha" />
          </div>
          <button type="submit" className="btn-primary w-full">Entrar</button>
        </div>
      </form>
    </div>
  )
}