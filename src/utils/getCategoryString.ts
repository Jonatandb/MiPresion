export const categoryType = {
  NORMAL: "Normal",
  NORMAL_ELEVADA: "Normal Elevada",
  NIVEL_1: "Nivel 1",
  NIVEL_2: "Nivel 2",
  NIVEL_3: "Nivel 3",
  SISTOLICA_AISLADA: "Sistólica Aislada",
  DATOS_INCORRECTOS: "DATOS INCORRECTOS"
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
    return categoryType.DATOS_INCORRECTOS
  }

  if (systolic < 130 && diastolic < 85) {
    return categoryType.NORMAL
  } else if ((systolic >= 130 && systolic <= 139) && (diastolic >= 85 && diastolic <= 89)) {
    return categoryType.NORMAL_ELEVADA
  } else if ((systolic >= 140 && systolic <= 159) && (diastolic >= 90 && diastolic <= 99)) {
    return categoryType.NIVEL_1
  } else if ((systolic >= 160 && systolic <= 179) && (diastolic >= 100 && diastolic <= 109)) {
    return categoryType.NIVEL_2
  } else if (systolic >= 180 && diastolic >= 110) {
    return categoryType.NIVEL_3
  } else if (systolic >= 140 && diastolic < 90) {
    return categoryType.SISTOLICA_AISLADA
  }

  return categoryType.DATOS_INCORRECTOS
}