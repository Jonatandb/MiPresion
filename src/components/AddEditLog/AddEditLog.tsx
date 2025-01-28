import React, { useCallback, useEffect, useState } from "react"
import { useLogContext } from "@/hooks/useLogContext"
import BloodPressureLevels from "@/components/BloodPressureLevels/BloodPressureLevels"
import OutOfRangeValues from "@/components/OutOfRangesValues/OutOfRangesValues"
import { formatToISODateString } from "@/utils/formatDateUtils"
import { categoryType, getCategory } from "@/utils/getCategory"

import pill from "@/assets/pill.png"
import WarningIcon from "@/assets/svg/warning.svg?react"

import styles from "./AddEditLog.module.css"

export interface LogData {
  id: string,
  systolic: number | string;
  diastolic: number | string;
  pulse: number | string;
  medicine: boolean;
  notes: string;
  date: string;
}

interface AddEditLogProps {
  onClose: () => void
}

const AddEditLog = ({ onClose }: AddEditLogProps) => {
  const { setSelectedLogId } = useLogContext()
  const [data, setData] = useState<LogData>(() => {
    const initialState: LogData = {
      id: "",
      systolic: "",
      diastolic: "",
      pulse: "",
      medicine: false,
      notes: "",
      date: formatToISODateString()
    }
    return initialState
  })
  const [showOutOfRangeMessage, setShowOutOfRangeMessage] = useState(false)

  const { selectedLogId, getLogById, addLog, updateLog, deleteLog } = useLogContext()
  const datePickerRef = React.useRef(null)
  const systolicRef = React.useRef(null)
  const diastolicRef = React.useRef(null)
  const pulseRef = React.useRef(null)

  const handleSubmit = () => {
    if (!data.systolic) {
      alert("Ingrese sistólica")
      if (systolicRef.current)
        (systolicRef.current as HTMLInputElement).focus()
      return
    }
    if (!data.diastolic) {
      alert("Ingrese diastólica")
      if (diastolicRef.current)
        (diastolicRef.current as HTMLInputElement).focus()
      return
    }
    if (!data.pulse) {
      alert("Ingrese pulso (BPM)")
      if (pulseRef.current)
        (pulseRef.current as HTMLInputElement).focus()
      return
    }
    if (!data.date) {
      data.date = new Date().toISOString().slice(0, 16)
    }

    if (hasOutOfRangeValues()) {
      const wantToSaveAnyway = confirm("Valores fuera de rango. ¿Guardar igual?")
      if (wantToSaveAnyway == false) {
        setShowOutOfRangeMessage(true)
        return
      }
    } else {
      setShowOutOfRangeMessage(true)
    }

    if (!data.id) {
      addLog(data)
    } else {
      updateLog(data)
    }

    onClose()
  }

  const hasOutOfRangeValues = useCallback((systolic = data.systolic, diastolic = data.diastolic) => {
    const category = getCategory(systolic, diastolic)
    return category.value === categoryType.OUT_OF_RANGE
  }, [data.systolic, data.diastolic])

  const handleDelete = () => {
    if (window.confirm("¿Eliminar esta medición?")) {
      deleteLog(data.id)
      onClose()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit()
    }
  }

  const handleFocus = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.select()
    }
  }

  const handleOnBlur = () => {
    const updatedData = { ...data }

    type LogDataNumberKeys = "systolic" | "diastolic" | "pulse"

    const validateAndSet = (key: LogDataNumberKeys, value: string | number) => {
      const numValue = Number(value)
      if (isNaN(numValue) || numValue < 0 || numValue > 500) {
        updatedData[key] = ""
      } else {
        updatedData[key] = numValue
      }
    }

    validateAndSet("systolic", data.systolic)
    validateAndSet("diastolic", data.diastolic)
    validateAndSet("pulse", data.pulse)

    setData(updatedData)
  }


  useEffect(() => {
    if (!data.date) {
      if (datePickerRef.current) {
        const datePicker = datePickerRef.current as HTMLInputElement
        datePicker.value = formatToISODateString()
      }
    } else {
      if (hasOutOfRangeValues(data.systolic, data.diastolic)) {
        setShowOutOfRangeMessage(true)
      } else {
        setShowOutOfRangeMessage(false)
      }
    }
  }, [data.date, data, hasOutOfRangeValues])

  useEffect(() => {
    if (selectedLogId) {
      const logToUpdate = getLogById(selectedLogId)
      logToUpdate && setData(logToUpdate)
    }

    return () => setSelectedLogId("")
  }, [selectedLogId, getLogById, setSelectedLogId])

  return (
    <div className={styles.addEditLogContainer}>
      <div className={styles.header}>
        <button
          className={`${styles.coloredButton} ${styles.button}`}
          onClick={onClose}>
          Cancelar
        </button>
        {
          data.id && (
            <button
              className={`${styles.coloredButton} ${styles.button}`}
              onClick={handleDelete}>
              Eliminar
            </button>
          )}
        <button
          className={`${styles.addButton} ${styles.button}`}
          onClick={handleSubmit}>
          {data.id ? "Actualizar" : "Agregar"}
        </button>
      </div>
      <div className={styles.content}>
        <h2 id="top">{data.id ? "Actualizar" : "Agregar"} Medición</h2>

        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label htmlFor="systolic">Sistólica</label>
            <input
              type="number"
              id="systolic"
              ref={systolicRef}
              placeholder='120'
              min={1}
              max={999}
              onChange={e => setData({ ...data, systolic: parseInt(e.target.value) || "" })}
              value={data.systolic} onKeyDown={handleKeyDown}
              onFocus={() => handleFocus(systolicRef)}
              onBlur={handleOnBlur}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="diastolic">Diastólica</label>
            <input
              type="number"
              id="diastolic"
              ref={diastolicRef}
              placeholder='80'
              min={1}
              max={999}
              onChange={e => setData({ ...data, diastolic: parseInt(e.target.value) || "" })}
              value={data.diastolic} onKeyDown={handleKeyDown}
              onFocus={() => handleFocus(diastolicRef)}
              onBlur={handleOnBlur}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="pulse">Pulso (BPM)</label>
            <input
              type="number"
              id="pulse"
              ref={pulseRef}
              placeholder='68'
              min={1}
              max={999}
              onChange={e => setData({ ...data, pulse: parseInt(e.target.value) || "" })}
              value={data.pulse} onKeyDown={handleKeyDown}
              onFocus={() => handleFocus(pulseRef)}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
        {showOutOfRangeMessage && (
          <div className={styles.outOfRangeMessageContainer}>
            <WarningIcon width="1rem" height="1rem" />
            <span>Valores fuera de rango</span>
            <a href="#outOfRangesValues">¿Que significa?</a>
          </div>
        )}
        <div className={`${styles.row} ${styles.column}`}>
          <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
            <label htmlFor="date">Fecha</label>
            <div className={styles.dateContainer}>
              <input type="datetime-local" id="date" ref={datePickerRef} onChange={e => setData({ ...data, date: e.target.value })} value={data.date} />
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

        <BloodPressureLevels />

        <i id="outOfRangesValues"></i>
        <OutOfRangeValues />

        <a className={styles.backToTop} href="#top">Ir arriba</a>
      </div>
    </div>
  )
}

export default AddEditLog
