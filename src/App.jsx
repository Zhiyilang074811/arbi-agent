import { useState } from 'react'
import Header from './components/Header'
import TaskManager from './components/TaskManager'
import AgentStatus from './components/AgentStatus'
import TaskLog from './components/TaskLog'
export default function App() {
  const [tasks, setTasks] = useState([])
  const [status, setStatus] = useState('idle')
  const addTask = async (task) => {
    setStatus('running')
    const t = { id: Date.now(), ts: new Date().toLocaleTimeString(), ...task, status: 'pending' }
    setTasks([t, ...tasks])
    await new Promise(r => setTimeout(r, 1500))
    const ok = Math.random() > 0.15
    setTasks(prev => prev.map(x => x.id === t.id ? { ...x, status: ok ? 'success' : 'error' } : x))
    setStatus(ok ? 'idle' : 'error')
  }
  return <div className="app"><Header /><div className="subtitle">Autonomous AI Agent for Arbitrum x402 Payments & Trading</div><AgentStatus s={status} /><TaskManager onAdd={addTask} /><TaskLog tasks={tasks} /></div>
}
