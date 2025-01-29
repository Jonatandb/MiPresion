import { addDays } from "date-fns"
import { LogData } from "@/components/AddEditLog/AddEditLog"

export const getOldestAndLatestLogDate = (logs: LogData[]) => {
  const oldestLogDate = new Date(logs[logs.length - 1].date).toISOString().substring(0, 10)
  const latestLogDate = logs.length > 1 ? new Date(logs[0].date).toISOString().substring(0, 10) : new Date(addDays(oldestLogDate, 1)).toISOString().substring(0, 10)
  return {
    oldestLogDate,
    latestLogDate
  }
}