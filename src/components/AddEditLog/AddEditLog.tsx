import React, { useCallback, useEffect, useState } from "react"
import { useLogContext } from "@/hooks/useLogContext"
import { useThemeContext } from "@/hooks/useTheme"
import BloodPressureLevels from "@/components/BloodPressureLevels/BloodPressureLevels"
import OutOfRangeValues from "@/components/OutOfRangeValues/OutOfRangeValues"
import { formatToISODateString } from "@/utils/formatDateUtils"
import { categoryType, getCategory } from "@/utils/getCategory"
import getPNGIconPath from "@/utils/getPNGIconPath"
import { Theme } from "@/contexts/ThemeEnum"
import Seo from "../SEO/SEO"

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
  arrhythmia: boolean
}

interface AddEditLogProps {
  onClose: () => void
}

const AddEditLog = ({ onClose }: AddEditLogProps) => {
  const [data, setData] = useState<LogData>(() => {
    const initialState: LogData = {
      id: "",
      systolic: "",
      diastolic: "",
      pulse: "",
      date: formatToISODateString(),
      medicine: false,
      arrhythmia: false,
      notes: ""
    }
    return initialState
  })
  const { theme } = useThemeContext()
  const [showOutOfRangeMessage, setShowOutOfRangeMessage] = useState(false)
  const { selectedLogId, setSelectedLogId, getLogById, addLog, updateLog, deleteLog } = useLogContext()

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

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...data }

    type LogDataNumberKeys = "systolic" | "diastolic" | "pulse"

    const numValue = Number(event.target.value)
    if (isNaN(numValue) || numValue < 0 || numValue > 500) {
      updatedData[event.target.name as LogDataNumberKeys] = ""
    } else {
      updatedData[event.target.name as LogDataNumberKeys] = Math.floor(numValue)
    }

    setData(updatedData)
  }


  useEffect(() => {
    if (!data.date && datePickerRef.current) {
      (datePickerRef.current as HTMLInputElement).value = formatToISODateString()
    }
    setShowOutOfRangeMessage(hasOutOfRangeValues(data.systolic, data.diastolic))
  }, [data.date, data.systolic, data.diastolic, hasOutOfRangeValues])

  useEffect(() => {
    if (selectedLogId) {
      const logToUpdate = getLogById(selectedLogId)
      logToUpdate && setData(logToUpdate)
    }

    return () => setSelectedLogId("")
  }, [selectedLogId, getLogById, setSelectedLogId])

  return (
    <>
      <Seo title="Agregar Medición" />

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
                name="systolic"
                ref={systolicRef}
                placeholder='120'
                min={1}
                max={999}
                value={data.systolic}
                onKeyDown={handleKeyDown}
                onFocus={() => handleFocus(systolicRef)}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="diastolic">Diastólica</label>
              <input
                type="number"
                id="diastolic"
                name="diastolic"
                ref={diastolicRef}
                placeholder='80'
                min={1}
                max={999}
                value={data.diastolic}
                onKeyDown={handleKeyDown}
                onFocus={() => handleFocus(diastolicRef)}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="pulse">Pulso <span className={styles.bpmText}>(BPM)</span></label>
              <input
                type="number"
                id="pulse"
                name="pulse"
                ref={pulseRef}
                placeholder='68'
                min={1}
                max={999}
                value={data.pulse}
                onKeyDown={handleKeyDown}
                onFocus={() => handleFocus(pulseRef)}
                onChange={handleOnChange}
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
                <input type="datetime-local"
                  id="date"
                  ref={datePickerRef}
                  onChange={e => setData({ ...data, date: e.target.value })}
                  value={data.date}
                />
              </div>
            </div>
            <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
              <label className={styles.iconLabel} htmlFor="medicine">Medicina
                <div className={styles.iconContainer}>
                  <input type="checkbox"
                    id="medicine"
                    onChange={e => setData({ ...data, medicine: e.target.checked })}
                    checked={data.medicine} />
                  <img className={styles.icon}
                    width="16" height="16"
                    src={data?.medicine ? getPNGIconPath("pill") : getPNGIconPath("pill", theme)}
                    alt={`Ícono píldora ${data?.medicine ? "" : "no "}tomada`}
                    title={`Píldora ${data?.medicine ? "" : "no "}tomada`}
                  />
                </div>
              </label>
            </div>
            <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
              <label className={styles.iconLabel} htmlFor="arrhythmia">Arritmia (latido irregular)
                <div className={styles.iconContainer}>
                  <input type="checkbox"
                    id="arrhythmia"
                    onChange={e => setData({ ...data, arrhythmia: e.target.checked })}
                    checked={data.arrhythmia} />
                  <img className={styles.icon}
                    width="16" height="16"
                    src={data?.arrhythmia ? getPNGIconPath("heart") : getPNGIconPath("heart", theme)}
                    alt={`Ícono píldora ${data?.arrhythmia ? "" : "no "}tomada`}
                    title={`Píldora ${data?.arrhythmia ? "" : "no "}tomada`}
                  />
                </div>
              </label>
            </div>
          </div>

          <div className={`${styles.row} ${styles.column}`}>
            <div className={styles.inputContainer}>
              <textarea id="notes"
                placeholder='Notas'
                rows={4}
                autoComplete='off'
                maxLength={200}
                onChange={e => setData({ ...data, notes: e.target.value })}
                value={data.notes}
                className={
                  data?.notes
                    ? styles.hasContent
                    : theme === Theme.Dark
                      ? styles.emptyDark
                      : styles.emptyLight}
              />
            </div>
          </div>

          <BloodPressureLevels />

          <i id="outOfRangesValues"></i>
          <OutOfRangeValues />

          <a className={styles.backToTop} href="#top">Volver arriba</a>
        </div>
      </div>
    </>

  )
}

export default AddEditLog
