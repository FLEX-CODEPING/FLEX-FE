interface SummaryTypes {
  title: string;
  content: string;
}

interface SourcesTypes {
  date: string;
  title: string;
  content: string;
  url: string;
}

interface NewsDataTypes {
  summaries: SummaryTypes[];
  sources: SourcesTypes[];
  status: string;
  task_id: string;
}

