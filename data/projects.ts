export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: string;
  status: string;
  problem: string;
  description: string;
  highlights: string[];
  stack: string[];
  repository: string;
  approach: string;
  considerations: string;
  flow: string[];
}
export const projects: Project[] = [
  {
    id: "arthadrishti", number: "01", name: "ArthaDrishti", subtitle: "Smart Financial Assistant",
    category: "Financial intelligence", status: "Full-stack application",
    problem: "Financial statements hold answers. Getting to them should be simpler.",
    description: "A personal financial intelligence platform that turns uploaded bank and credit-card PDFs into organized transactions, spending insights, and source-grounded answers.",
    highlights: ["Deterministic financial calculations", "Document retrieval with RAG", "Transaction analytics & categorization"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "FastAPI", "Python", "Pydantic", "SQLAlchemy", "Alembic", "PostgreSQL", "pgvector", "RAG", "Embeddings", "Docker"],
    repository: "https://github.com/prashantkr102004-ui/ArthaDrishti",
    approach: "PDF uploads feed transaction extraction, merchant normalization, and categorization. PostgreSQL stores the transactions and powers summaries, monthly trends, merchant analysis, and period comparisons. An AI assistant routes questions to tools and retrieves supporting document passages.",
    considerations: "The backend and database calculate financial results. The language model interprets questions and explains verified outputs. JWT authentication and Argon2id password hashing support user accounts. Budgets, goals, subscription detection, and foundations for forecasting extend the analysis; this is not a banking or trading platform.",
    flow: ["Financial PDFs", "Extract & normalize", "PostgreSQL + pgvector", "Analytics & grounded answers"],
  },
  {
    id: "foodbridge", number: "02", name: "FoodBridge", subtitle: "Surplus food. Shared purpose.",
    category: "Social-impact platform", status: "Full-stack application",
    problem: "Good food goes unused while communities need it.",
    description: "A food donation platform connecting surplus-food donors with NGOs and volunteers, from nearby discovery to collection and distribution.",
    highlights: ["Role-based donation workflows", "Geolocation & nearby-food discovery", "Collection-to-distribution tracking"],
    stack: ["React", "Vite", "React Router", "Axios", "Leaflet", "React-Leaflet", "FastAPI", "Python", "SQLAlchemy", "Alembic", "PostgreSQL", "JWT"],
    repository: "https://github.com/prashantkr102004-ui/FoodBridge",
    approach: "Donors post food with images and pickup locations. NGOs and volunteers discover nearby donations through browser geolocation, Haversine distance calculations, and OpenStreetMap / Leaflet maps. A shared lifecycle tracks each donation from available to accepted, collected, and distributed.",
    considerations: "Role-based access separates donors, NGOs, volunteers, and administrators. Double-acceptance prevention protects the collection workflow, with cancelled and expired states for exceptions. In-app notifications, rule-based recommendations, impact analytics, CSV reports, and automated tests support coordination without inventing impact figures.",
    flow: ["Available", "Accepted", "Collected", "Distributed"],
  },
  {
    id: "marketguard", number: "03", name: "AI MarketGuard", subtitle: "Market signals, with context.",
    category: "Applied machine learning", status: "Learning-focused analysis system",
    problem: "A market prediction means little without context and careful evaluation.",
    description: "A learning-focused market-analysis system combining historical data, technical indicators, ML direction predictions, explainability, and leakage-aware backtesting.",
    highlights: ["Leakage-aware backtesting", "Walk-forward model evaluation", "Explainability & historical sentiment"],
    stack: ["Python", "FastAPI", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "FinBERT", "PostgreSQL", "React", "Vite", "Recharts"],
    repository: "https://github.com/prashantkr102004-ui/Ai_STOCK_Analysis",
    approach: "Historical CSV and Parquet data is cleaned and transformed into technical features including RSI, MACD, moving averages, volatility, and returns. XGBoost direction predictions are compared with Logistic Regression and Random Forest. The React dashboard surfaces signals, risk scores, feature importance, fundamentals, and optional historical FinBERT sentiment.",
    considerations: "Chronological train, validation, and test splits, time-series validation, and walk-forward evaluation address the temporal nature of market data. Backtesting accounts for transaction costs and slippage. Predictions are analytical ML outputs for learning and research, not trading instructions or guarantees of returns.",
    flow: ["Historical data", "25 model features", "XGBoost", "Walk-forward evaluation"],
  },
  {
    id: "revenue-rescue", number: "04", name: "RevenueRescue AI", subtitle: "A second look at failed payments.",
    category: "Payment infrastructure", status: "Buildathon MVP · 2026",
    problem: "A failed payment should be a visible recovery opportunity.",
    description: "Built for the Razorpay /buildathon 2026: a merchant dashboard and payment foundation for turning failed payment events into structured recovery cases.",
    highlights: ["Razorpay Test Mode integration", "Duplicate-safe payment state", "Recovery cases & audit trails"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Python", "FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "PostgreSQL", "Razorpay Test Mode"],
    repository: "https://github.com/prashantkr102004-ui/REVENUE_RESCUE",
    approach: "A Next.js dashboard connects to FastAPI and PostgreSQL models for merchants, customers, orders, payments, recovery cases, and recovery actions. The implemented payment flow includes Test Mode order creation, Checkout, signature verification, and webhook handling.",
    considerations: "Duplicate-safe payment state handling, webhook events, audit logs, Alembic migrations, and backend tests establish the foundation. AI scoring and advanced automated recovery remain future layers. The current work is a hackathon MVP using Razorpay Test Mode.",
    flow: ["Test payment", "Verified webhook", "Payment state", "Recovery case"],
  },
  {
    id: "self-healing-ml", number: "05", name: "Autonomous Self-Healing ML System", subtitle: "When the data changes, the system responds.",
    category: "Adaptive ML · MLOps", status: "Experimental system",
    problem: "Models need monitoring as the data around them changes.",
    description: "A predictive-maintenance pipeline exploring drift detection, validated retraining, and model recovery with the NASA CMAPSS turbofan-engine dataset.",
    highlights: ["ADWIN & KS drift detection", "Shadow A/B evaluation", "Validated model promotion"],
    stack: ["Python", "FastAPI", "Scikit-learn", "River", "SciPy", "NumPy", "Pandas", "React", "Vite", "Recharts"],
    repository: "https://github.com/prashantkr102004-ui/AUTONOMOUS-SELF-HEALING-ML-SYSTEM",
    approach: "Random Forest regression predicts Remaining Useful Life from streaming sensor data. ADWIN monitors concept drift, KS tests monitor feature drift, and Isolation Forest detects anomalies. The system explores autonomous retraining, candidate validation, shadow A/B evaluation, and model promotion.",
    considerations: "Adaptive ingestion-rate control, audit logging, and fault injection support experiments in ML reliability. A FastAPI API and React dashboard expose the pipeline. This is advanced experimentation with adaptive systems, not a claim of production deployment.",
    flow: ["Sensor stream", "RUL prediction", "Drift monitoring", "Validate & retrain"],
  },
  {
    id: "decision-autopsy", number: "06", name: "Decision Autopsy", subtitle: "One decision. Four possible futures.",
    category: "AI interaction design", status: "AI-assisted application",
    problem: "Important decisions deserve more than a generic answer.",
    description: "A decision exploration app using structured AI workflows to ask better questions, surface four possible futures, and reveal a meaningful fork point.",
    highlights: ["Multi-stage AI workflow", "Four-futures exploration", "Companion-style follow-up"],
    stack: ["React", "Vite", "Python", "FastAPI", "Pydantic"],
    repository: "https://github.com/prashantkr102004-ui/Decision-Autopsy",
    approach: "Chat-driven intake interprets a decision and its context, asks high-impact follow-up questions, and identifies a framing pattern. Structured AI-agent routes generate four alternative timelines, highlight a fork point, and continue with companion-style conversation.",
    considerations: "Pydantic schemas structure the backend responses. Quick replies, a four-futures panel, a fork-point visualization, and local session persistence shape the interface. Generated futures are possibilities for reflection, not predictions of what will happen.",
    flow: ["Decision & context", "Follow-up questions", "Four possible futures", "Fork point & reflection"],
  },
];
