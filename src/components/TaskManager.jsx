import { useState } from "react"
export default function TaskManager({ onAdd }) {
  const [action, setAction] = useState("payment")
  const [target, setTarget] = useState("")
  const [amount, setAmount] = useState("")
  const submit = (e) => { e.preventDefault(); if (!target || !amount) return; onAdd({ action, target, amount: parseFloat(amount) }); setTarget(""); setAmount(""); }
  return (
    <div className="card">
      <h3>\uD83E\uDD16 New Agent Task</h3>
      <select className="input" value={action} onChange={(e) => setAction(e.target.value)}>
        <option value="payment">x402 Payment</option>
        <option value="trade">Arbitrage Trade</option>
        <option value="claim">Token Claim</option>
      </select>
      <input className="input" placeholder="Target address" value={target} onChange={(e) => setTarget(e.target.value)} />
      <input className="input" placeholder="Amount (USD)" type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button className="btn" onClick={submit} disabled={!target || !amount}>Dispatch Agent</button>
    </div>
  )
}
