
import { createContext, useEffect, useState } from "react";
import { LogData } from "@/components/AddEditLog/AddEditLog";

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

const LogContext = createContext<LogContextState>({} as LogContextState);

const initialState: LogData[] = localStorage.getItem('logs') ? JSON.parse(localStorage.getItem('logs') as string) : [];

const LogContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [logs, setLogs] = useState<LogData[]>(initialState)
  const [selectedLogId, setSelectedLogId] = useState('')

  const addLog = (newLog: LogData) => {
    const id = crypto.randomUUID()
    newLog.id = id
    setLogs(prevLogs => [...prevLogs, newLog].sort((a, b) => b.date.localeCompare(a.date)))
    setSelectedLogId('')
  }

  const updateLog = (updatedLog: LogData) => {
    const OldLog = logs.find(oldLog => oldLog.id === updatedLog.id)
    if (!OldLog) return
    setLogs(prevLogs => {
      return [
        ...prevLogs.filter(log => log.id !== updatedLog.id),
        { ...OldLog, ...updatedLog }
      ].sort((a, b) => b.date.localeCompare(a.date))
    })
    setSelectedLogId('')
  }

  const deleteLog = (id: string) => {
    setLogs(logs.filter(log => log.id !== id))
    setSelectedLogId('')
  }

  const getLogById = (id: string) => logs.find(log => log.id === id)

  const resetLogs = () => {
    setLogs([])
    setSelectedLogId('')
  }

  useEffect(() => {
    localStorage.setItem('logs', JSON.stringify(logs))
  }, [logs])

  return (
    <LogContext.Provider value={{ logs, addLog, updateLog, deleteLog, selectedLogId, setSelectedLogId, getLogById, resetLogs }}>
      {children}
    </LogContext.Provider>
  )
}

export { LogContext, LogContextProvider }