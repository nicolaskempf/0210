interface SidebarProps { page: string; onNavigate: (page: string) => void }
export function Sidebar({page,onNavigate}: SidebarProps) {
  const item=(label:string,value:string)=><button onClick={()=>onNavigate(value)} className={`w-full rounded-lg px-3 py-2 text-left text-sm ${page===value?'bg-blue-600 text-white':'text-gray-300 hover:bg-gray-800'}`}>{label}</button>
  return <aside className="w-full bg-gray-900 p-4 md:min-h-screen md:w-56 md:shrink-0"><div className="mb-6"><h1 className="text-lg font-bold text-white">HelpDesk TI</h1><p className="text-xs text-gray-400">Projeto Integrado</p></div><nav className="space-y-2">{item('Início','dashboard')}{item('Chamados','tickets')}{item('Novo chamado','new')}</nav></aside>
}