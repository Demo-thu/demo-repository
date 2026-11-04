import { Injectable, Logger } from '@nestjs/common';

export type ClassifySuggestion = {
  name: string;
  /** Nhóm theo enum ItemCategory (STATIONERY | BOOKS | IT_DEVICES); null khi AI xếp vào "Khác" hoặc không chắc. */
  category: 'STATIONERY' | 'BOOKS' | 'IT_DEVICES' | null;
  labelVi: string;
  confidence: number;
};

type AiRow = { name: string; label_vi: string; confidence: number; project_category: ClassifySuggestion['category']; needs_review: boolean };

/**
 * Gọi service AI phân loại (Warehouse/ai-classifier, `python serve.py`).
 * AI chỉ để gợi ý ở màn Nhập kho: nếu service tắt/lỗi thì trả mảng rỗng, không làm hỏng việc nhập kho.
 */
@Injectable()
export class ClassifierService {
  private readonly logger = new Logger(ClassifierService.name);
  private readonly url = process.env.AI_CLASSIFIER_URL ?? 'http://127.0.0.1:8765/predict';

  async suggest(names: string[]): Promise<ClassifySuggestion[]> {
    if (!names.length) return [];
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ names }),
        signal: AbortSignal.timeout(3000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const rows = (await response.json()) as AiRow[];
      return rows.map((row) => ({
        name: row.name,
        category: row.needs_review ? null : row.project_category,
        labelVi: row.label_vi,
        confidence: row.confidence,
      }));
    } catch (error) {
      this.logger.warn(`AI phân loại không khả dụng (${this.url}): ${(error as Error).message}`);
      return [];
    }
  }
}
