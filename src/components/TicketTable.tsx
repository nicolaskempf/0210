import type { Ticket } from '../types'
import { StatusBadge } from './StatusBadge'

interface TicketTableProps {
  tickets: Ticket[]
  onSelect: (ticket: Ticket) => void
}

export function TicketTable({ tickets, onSelect }: TicketTableProps) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-gray-200 px-4 py-3">
        <h3 className="font-semibold">Chamados recentes</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3 font-medium">Chamado</th>
              <th className="px-4 py-3 font-medium">Título</th>
              <th className="px-4 py-3 font-medium">Categoria</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Prioridade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tickets.map(ticket => (
              <tr key={ticket.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-600">
                  <button onClick={() => onSelect(ticket)}>#{ticket.id}</button>
                </td>
                <td className="px-4 py-3">{ticket.title}</td>
                <td className="px-4 py-3 text-gray-500">{ticket.category}</td>
                <td className="px-4 py-3"><StatusBadge value={ticket.status} /></td>
                <td className="px-4 py-3"><StatusBadge value={ticket.priority} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}