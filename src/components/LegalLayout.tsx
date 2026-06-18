interface Section {
  heading: string;
  body: string;
}

interface Props {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalLayout({ title, lastUpdated, sections }: Props) {
  return (
    <div className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mb-12 text-sm text-muted">Last updated: {lastUpdated}</p>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{s.heading}</h2>
              <p className="text-sm leading-relaxed text-muted whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
