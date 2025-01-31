
import { createContext, useEffect, useState } from "react"
import { LogData } from "@/components/AddEditLog/AddEditLog"

export interface LogContextState {
  logs: LogData[]
  selectedLogId: string
  setSelectedLogId: (id: string) => void
  addLog: (log: LogData) => void;
  updateLog: (log: LogData) => void;
  deleteLog: (id: string) => void;
  getLogById: (id: string) => LogData | undefined
  resetLogs: () => void
}

const LogContext = createContext<LogContextState>({} as LogContextState)

const initialState: LogData[] = localStorage.getItem("logs") ? JSON.parse(localStorage.getItem("logs") as string) : []

const sortLogs = (logs: LogData[]) => logs.sort((a, b) => b.date.localeCompare(a.date))

const LogContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [logs, setLogs] = useState<LogData[]>(() => sortLogs(initialState))
  const [selectedLogId, setSelectedLogId] = useState("")

  const addLog = (newLog: LogData) => {
    const id = crypto.randomUUID()
    newLog.id = id
    setLogs(prevLogs => sortLogs([...prevLogs, newLog]))
    setSelectedLogId("")
  }

  const updateLog = (updatedLog: LogData) => {
    setLogs(prevLogs => {
      const newLogs = prevLogs.map(log =>
        log.id === updatedLog.id
          ? { ...log, ...updatedLog }
          : log
      )
      return sortLogs(newLogs)
    })
    setSelectedLogId("")
  }

  const deleteLog = (id: string) => {
    setLogs(logs.filter(log => log.id !== id))
    setSelectedLogId("")
  }

  const getLogById = (id: string) => logs.find(log => log.id === id)

  const resetLogs = () => {
    setLogs([])
    setSelectedLogId("")
  }

  useEffect(() => {
    localStorage.setItem("logs", JSON.stringify(logs))
  }, [logs])



  return (
    <LogContext.Provider value={{ logs, addLog, updateLog, deleteLog, selectedLogId, setSelectedLogId, getLogById, resetLogs }}>
      {children}
    </LogContext.Provider>
  )
}

export { LogContext, LogContextProvider }