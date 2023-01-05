import { useContext } from 'react'
import { CycleContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './style'

export function History() {
  const { cycles } = useContext(CycleContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>A 2 Meses</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>A 2 Meses</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>A 2 Meses</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>A 2 Meses</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>A 2 Meses</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
