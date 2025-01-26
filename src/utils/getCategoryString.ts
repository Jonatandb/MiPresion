export const categoryType = {
  NORMAL: "Normal",
  NORMAL_ELEVATED: "Normal Elevada",
  STAGE_1: "Nivel 1",
  STAGE_2: "Nivel 2",
  STAGE_3: "Nivel 3",
  SYSTOLIC_AISOLATED: "Sistólica Aislada",
  OUT_OF_RANGE: "Valores fuera de rango"
}

export const getCategoryString = (systolic: number | string, diastolic: number | string) => {
  try {
    if (typeof systolic !== "number") {
      systolic = Number(systolic)
    }
    if (typeof diastolic !== "number") {
      diastolic = Number(diastolic)
    }
  } catch (error) {
    return categoryType.OUT_OF_RANGE
  }

  if (systolic < 130 && diastolic < 85) {
    return categoryType.NORMAL
  } else if ((systolic >= 130 && systolic <= 139) && (diastolic >= 85 && diastolic <= 89)) {
    return categoryType.NORMAL_ELEVATED
  } else if ((systolic >= 140 && systolic <= 159) && (diastolic >= 90 && diastolic <= 99)) {
    return categoryType.STAGE_1
  } else if ((systolic >= 160 && systolic <= 179) && (diastolic >= 100 && diastolic <= 109)) {
    return categoryType.STAGE_2
  } else if (systolic >= 180 && diastolic >= 110) {
    return categoryType.STAGE_3
  } else if (systolic >= 140 && diastolic < 90) {
    return categoryType.SYSTOLIC_AISOLATED
  }

  return categoryType.OUT_OF_RANGE
}