export const categoryType = {
  NORMAL: "Normal",
  NORMAL_ELEVATED: "Normal Elevada",
  STAGE_1: "Nivel 1",
  STAGE_2: "Nivel 2",
  STAGE_3: "Nivel 3",
  SYSTOLIC_AISOLATED: "Sistólica Aislada",
  OUT_OF_RANGE: "Valores fuera de rango"
}

type CategoryKeyType = keyof typeof categoryType

interface Category {
  key: CategoryKeyType
  value: string
  condition: (systolic: number, diastolic: number) => boolean
}

const categories: Category[] = [
  {
    key: "NORMAL",
    value: categoryType.NORMAL,
    condition: (systolic, diastolic) => systolic < 130 && diastolic < 85,
  },
  {
    key: "NORMAL_ELEVATED",
    value: categoryType.NORMAL_ELEVATED,
    condition: (systolic, diastolic) =>
      (systolic >= 130 && systolic <= 139) && (diastolic >= 85 && diastolic <= 89),
  },
  {
    key: "STAGE_1",
    value: categoryType.STAGE_1,
    condition: (systolic, diastolic) =>
      (systolic >= 140 && systolic <= 159) && (diastolic >= 90 && diastolic <= 99),
  },
  {
    key: "STAGE_2",
    value: categoryType.STAGE_2,
    condition: (systolic, diastolic) =>
      (systolic >= 160 && systolic <= 179) && (diastolic >= 100 && diastolic <= 109),
  },
  {
    key: "STAGE_3",
    value: categoryType.STAGE_3,
    condition: (systolic, diastolic) => systolic >= 180 && diastolic >= 110,
  },
  {
    key: "SYSTOLIC_AISOLATED",
    value: categoryType.SYSTOLIC_AISOLATED,
    condition: (systolic, diastolic) => systolic >= 140 && diastolic < 90,
  },
]

export const getCategory = (systolic: number | string, diastolic: number | string) => {
  try {
    if (typeof systolic !== "number") {
      systolic = Number(systolic)
    }
    if (typeof diastolic !== "number") {
      diastolic = Number(diastolic)
    }
  } catch (error) {
    return { key: "OUT_OF_RANGE", value: categoryType.OUT_OF_RANGE }
  }

  const category = categories.find((c) => c.condition(systolic, diastolic))

  return category || { key: "OUT_OF_RANGE", value: categoryType.OUT_OF_RANGE }
}