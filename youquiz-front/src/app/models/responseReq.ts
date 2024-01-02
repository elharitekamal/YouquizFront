export interface QuestionReq{
    id?: number,
    numberOfCorrectResponses ?: number | null;
    numberOfResponses ?: number | null;
    questionText ?: string | null;
    type ?: string;
    subject_id ?: number | null;
    level_id ?: number | null;
}