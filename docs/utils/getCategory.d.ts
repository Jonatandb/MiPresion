export declare const categoryType: {
    NORMAL: string;
    NORMAL_ELEVATED: string;
    STAGE_1: string;
    STAGE_2: string;
    STAGE_3: string;
    SYSTOLIC_AISOLATED: string;
    OUT_OF_RANGE: string;
};
type CategoryKeyType = keyof typeof categoryType;
interface Category {
    key: CategoryKeyType;
    value: string;
    condition: (systolic: number, diastolic: number) => boolean;
}
export declare const getCategory: (systolic: number | string, diastolic: number | string) => Category | {
    key: string;
    value: string;
};
export {};
