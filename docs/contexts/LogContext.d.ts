import { LogData } from '../components/AddEditLog/AddEditLog';
export interface LogContextState {
    logs: LogData[];
    selectedLogId: string;
    setSelectedLogId: (id: string) => void;
    addLog: (log: LogData) => void;
    updateLog: (log: LogData) => void;
    deleteLog: (id: string) => void;
    getLogById: (id: string) => LogData | undefined;
    resetLogs: () => void;
}
declare const LogContext: import('react').Context<LogContextState>;
declare const LogContextProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export { LogContext, LogContextProvider };
