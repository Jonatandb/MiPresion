import React, { useEffect, useState } from 'react';

import pill from '@/assets/pill.png';

import styles from './AddEditLog.module.css'
import { useLogContext } from '@/hooks/useLogContext';

export interface LogData {
  id: string,
  systolic: number | string;
  diastolic: number | string;
  pulse: number | string;
  medicine: boolean;
  notes: string;
  date: string;
}

const initialState: LogData = {
  id: '',
  systolic: '',
  diastolic: '',
  pulse: '',
  medicine: false,
  notes: '',
  date: new Date().toISOString().slice(0, 16)
}

interface AddEditLogProps {
  onClose: () => void
}

const AddEditLog = ({ onClose }: AddEditLogProps) => {
  const [data, setData] = useState<LogData>(initialState);
  const { selectedLogId, getLogById, deleteLog, updateLog } = useLogContext()
  const { addLog } = useLogContext()
  const datePickerRef = React.useRef(null);
  const systolicRef = React.useRef(null);
  const diastolicRef = React.useRef(null);
  const pulseRef = React.useRef(null);

  const handleSubmit = () => {
    if (!data.systolic) {
      alert('Ingrese sistólica')
      if (systolicRef.current)
        (systolicRef.current as HTMLInputElement).focus()
      return
    }
    if (!data.diastolic) {
      alert('Ingrese diastólica')
      if (diastolicRef.current)
        (diastolicRef.current as HTMLInputElement).focus()
      return
    }
    if (!data.pulse) {
      alert('Ingrese pulso (BPM)')
      if (pulseRef.current)
        (pulseRef.current as HTMLInputElement).focus()
      return
    }
    if (!data.date) {
      data.date = new Date().toISOString().slice(0, 16)
    }

    if (!data.id) {
      addLog(data)
    } else {
      updateLog(data)
    }

    onClose()
  }

  const handleDelete = () => {
    if (window.confirm('Estas seguro de eliminar el registro?')) {
      deleteLog(data.id)
      onClose()
    }
  }

  useEffect(() => {
    if (!data.date) {
      if (datePickerRef.current) {
        const datePicker = datePickerRef.current as HTMLInputElement;
        datePicker.value = new Date().toISOString().slice(0, 16);
      }
    }
  }, [data.date])

  useEffect(() => {
    if (selectedLogId) {
      const logToUpdate = getLogById(selectedLogId)
      logToUpdate && setData(logToUpdate)
    }
  }, [selectedLogId, getLogById])

  return (
    <div className={styles.addEditLogContainer}>
      <div className={styles.header}>
        <button
          className={`${styles.cancelButton} ${styles.button}`}
          onClick={onClose}>
          Cancelar
        </button>
        {
          data.id && (
            <button
              className={`${styles.cancelButton} ${styles.button}`}
              onClick={handleDelete}>
              Eliminar
            </button>
          )}
        <button
          className={`${styles.addButton} ${styles.button}`}
          onClick={handleSubmit}>
          {data.id ? 'Actualizar' : 'Agregar'}
        </button>
      </div>
      <div className={styles.content}>
        <h2>{data.id ? 'Actualizar' : 'Agregar'} Registro</h2>

        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label htmlFor="systolic">Sistólica</label>
            <input type="number" id="systolic" ref={systolicRef} placeholder='120' onChange={e => setData({ ...data, systolic: parseInt(e.target.value) || '' })} value={data.systolic} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="diastolic">Diastólica</label>
            <input type="number" id="diastolic" ref={diastolicRef} placeholder='80' min={1} onChange={e => setData({ ...data, diastolic: parseInt(e.target.value) || '' })} value={data.diastolic} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="pulse">Pulso (BPM)</label>
            <input type="number" id="pulse" ref={pulseRef} placeholder='68' min={1} onChange={e => setData({ ...data, pulse: parseInt(e.target.value) || '' })} value={data.pulse} />
          </div>
        </div>

        <div className={`${styles.row} ${styles.column}`}>
          <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
            <label htmlFor="date">Fecha</label>
            <div className={styles.dateContainer}>
              <input type="datetime-local" id="date" ref={datePickerRef} min={1} onChange={e => setData({ ...data, date: e.target.value })} value={data.date} />
            </div>
          </div>
          <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
            <label className={styles.pillLabel} htmlFor="pill">Medicina
              <div className={styles.pillContainer}>
                <input type="checkbox" id="pill" onChange={e => setData({ ...data, medicine: e.target.checked })} checked={data.medicine} />
                <img className={styles.pillIcon} width="16" height="16" src={pill} alt="Ícono de píldora" />
              </div>
            </label>
          </div>
        </div>

        <div className={`${styles.row} ${styles.column}`}>
          <div className={styles.inputContainer}>
            <textarea id="notes" placeholder='Notas' rows={4} autoComplete='off' maxLength={200} onChange={e => setData({ ...data, notes: e.target.value })} value={data.notes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEditLog
