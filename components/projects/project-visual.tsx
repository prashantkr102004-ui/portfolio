import type { Project } from "@/data/projects";

const visualLabels: Record<string, string> = {
  arthadrishti: "AD / SYSTEM ARCHITECTURE",
  foodbridge: "FB / DONATION LIFECYCLE",
  marketguard: "MG / ANALYSIS PIPELINE",
  "revenue-rescue": "RR / PAYMENT FLOW",
};

const visualCaptions: Record<string, string> = {
  arthadrishti: "AI EXPLAINS. THE BACKEND CALCULATES.",
  foodbridge: "FROM SURPLUS TO SHARED.",
  marketguard: "ILLUSTRATIVE · NOT MARKET DATA",
  "revenue-rescue": "RAZORPAY TEST MODE",
};

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <figure className={`project-visual visual-${project.id}`} aria-label={`${project.name} conceptual architecture`}>
      <div className="visual-top">
        <span className="mono">{visualLabels[project.id]}</span>
        <span className="visual-cross" aria-hidden="true">
          +
        </span>
      </div>

      {project.id === "arthadrishti" ? <FinanceVisual /> : null}
      {project.id === "foodbridge" ? <FoodBridgeVisual flow={project.flow} /> : null}
      {project.id === "marketguard" ? <MarketGuardVisual /> : null}
      {project.id === "revenue-rescue" ? <RevenueRescueVisual /> : null}

      <figcaption className="visual-bottom mono">
        <span>CONCEPTUAL SYSTEM VIEW</span>
        <span>{visualCaptions[project.id]}</span>
      </figcaption>
    </figure>
  );
}

function FinanceVisual() {
  return (
    <div className="finance-diagram">
      <div className="document-stack">
        <span className="document-label mono">STATEMENT.PDF</span>
        <div />
        <div />
        <div />
        <span className="document-lines" />
      </div>
      <div className="flow-connector">
        <span>extract</span>
        <i />
      </div>
      <div className="database-node">
        <span className="node-symbol" aria-hidden="true">
          ▤
        </span>
        <strong>Verified data</strong>
        <span className="mono">PostgreSQL · pgvector</span>
      </div>
      <div className="branch-lines" aria-hidden="true" />
      <div className="output-nodes">
        <div>
          <span className="node-dot" />
          Analytics
          <span className="mono">CALCULATED</span>
        </div>
        <div>
          <span className="node-dot" />
          AI assistant
          <span className="mono">GROUNDED</span>
        </div>
      </div>
    </div>
  );
}

function FoodBridgeVisual({ flow }: { flow: string[] }) {
  return (
    <div className="food-diagram">
      <div className="food-orbit" aria-hidden="true">
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>
      <div className="food-source">
        <span className="mono">SURPLUS FOOD</span>
        <strong>Donor</strong>
      </div>
      <div className="food-connection">
        <span>Nearby discovery</span>
        <i />
      </div>
      <div className="food-destination">
        <strong>NGO + Volunteer</strong>
        <span className="mono">COLLECT & DISTRIBUTE</span>
      </div>
      <div className="lifecycle">
        {flow.map((step, index) => (
          <span key={step}>
            <i>{index + 1}</i>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function MarketGuardVisual() {
  return (
    <div className="market-diagram">
      <div className="chart-caption mono">HISTORICAL INPUT → MODEL EVALUATION</div>
      <svg viewBox="0 0 600 150" role="img" aria-label="Schematic time-series plot showing chronological training, validation, and test regions">
        <defs>
          <pattern id="chartGrid" width="50" height="30" patternUnits="userSpaceOnUse">
            <path d="M50 0H0V30" fill="none" stroke="currentColor" strokeOpacity=".12" />
          </pattern>
        </defs>
        <rect width="600" height="150" fill="url(#chartGrid)" />
        <rect x="360" width="120" height="150" fill="currentColor" opacity=".04" />
        <path
          d="M0 121 22 110 40 123 61 103 82 112 101 93 126 106 146 72 165 85 190 69 213 89 230 65 250 71 272 51 290 67 311 43 330 63 351 45 370 55 390 32 410 53 430 43 450 63 470 42 490 50 510 26 530 38 552 17 574 33 600 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M360 0V150M480 0V150" stroke="currentColor" strokeDasharray="4 5" opacity=".4" />
      </svg>
      <div className="chart-legend mono">
        <span>TRAIN</span>
        <span>VALIDATE</span>
        <span>TEST</span>
      </div>
      <div className="model-comparison">
        <span>Historical data</span>
        <span>Feature engineering</span>
        <strong>XGBoost ↗</strong>
      </div>
    </div>
  );
}

function RevenueRescueVisual() {
  return (
    <div className="revenue-diagram">
      <div className="payment-event">
        <span className="event-icon" aria-hidden="true">
          ↻
        </span>
        <div>
          <span className="mono">PAYMENT EVENT</span>
          <strong>Every state, accounted for.</strong>
        </div>
      </div>
      <div className="payment-steps">
        {["Signature verified", "Duplicate checked", "State recorded"].map((step) => (
          <div key={step}>
            <span aria-hidden="true">✓</span>
            {step}
          </div>
        ))}
      </div>
      <div className="recovery-node">
        <span>Recovery case</span>
        <span className="mono">MERCHANT VISIBILITY ↗</span>
      </div>
    </div>
  );
}
