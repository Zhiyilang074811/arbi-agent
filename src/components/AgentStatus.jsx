export default function AgentStatus({ s }) {
  const labels = { idle: '\u25cf Idle', running: '\u25cb Running...', error: '\u2717 Error' }
  const cls = { idle: 'success', running: 'pending', error: 'error' }
  return <div className={`status ${cls[s] || 'idle'}`}>{labels[s] || '\u25cf Idle'}</div>
}
