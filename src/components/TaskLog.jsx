export default function TaskLog({ tasks }) {
  if (!tasks.length) return null
  return (
    <div className="card">
      <h3>\uD83D\uDCCB Task Log</h3>
      {tasks.map((t) => (
        <div key={t.id} style={{ padding: "0.75rem 0", borderBottom: "1px solid #2d2d4a" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
            <span>{t.ts}</span>
            <span className={`status ${t.status === "success" ? "success" : t.status === "error" ? "error" : "pending"}`}>
              {t.status === "success" ? "\u2713 Success" : t.status === "error" ? "\u2717 Failed" : "\u25cb Pending"}
            </span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.875rem", marginTop: "0.25rem" }}>
            [{t.action.toUpperCase()}] \u2192 {t.target.slice(0, 10)}...${t.amount}
          </div>
        </div>
      ))}
    </div>
  )
}
