CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text,
  status text NOT NULL DEFAULT 'free',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS entitlements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product text NOT NULL,
  status text NOT NULL DEFAULT 'free',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, product)
);

CREATE TABLE IF NOT EXISTS waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  email text NOT NULL,
  product text NOT NULL DEFAULT 'protocol-ai-pro',
  source text NOT NULL DEFAULT 'protocol-ai',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (email, product)
);

CREATE TABLE IF NOT EXISTS usage_quotas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tool text NOT NULL,
  period text NOT NULL,
  period_key text NOT NULL,
  limit_count integer NOT NULL,
  used_count integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, tool, period, period_key)
);

CREATE TABLE IF NOT EXISTS tool_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  tool text NOT NULL,
  source text NOT NULL DEFAULT 'web',
  input_summary text,
  output_summary text,
  fallback boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'success',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  ip_hash text,
  user_agent_hash text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS ai_cost_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_run_id uuid REFERENCES tool_runs(id) ON DELETE SET NULL,
  provider text NOT NULL,
  model text NOT NULL,
  input_tokens integer NOT NULL DEFAULT 0,
  output_tokens integer NOT NULL DEFAULT 0,
  estimated_cost_usd numeric(12, 6) NOT NULL DEFAULT 0,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS wizard_briefs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  email text,
  source text NOT NULL DEFAULT 'discovery-wizard',
  status text NOT NULL DEFAULT 'lead',
  org text,
  pain text,
  urgency text,
  stack text,
  vision text,
  brief text,
  fallback boolean NOT NULL DEFAULT false,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS validation_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  proyecto text NOT NULL,
  score integer NOT NULL DEFAULT 0,
  fase text NOT NULL DEFAULT 'Idea Temprana',
  tam numeric NOT NULL DEFAULT 0,
  sam numeric NOT NULL DEFAULT 0,
  som numeric NOT NULL DEFAULT 0,
  score_dolor integer NOT NULL DEFAULT 0,
  score_beachhead integer NOT NULL DEFAULT 0,
  score_fundador integer NOT NULL DEFAULT 0,
  score_canal integer NOT NULL DEFAULT 0,
  hip_validadas integer NOT NULL DEFAULT 0,
  hip_totales integer NOT NULL DEFAULT 0,
  brief text,
  estado text NOT NULL DEFAULT 'En Progreso',
  airtable_record_id text,
  sync_status text NOT NULL DEFAULT 'pending',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_tool_runs_user_tool_created ON tool_runs (user_id, tool, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_entries_product ON waitlist_entries (product, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wizard_briefs_created ON wizard_briefs (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_validation_sessions_created ON validation_sessions (created_at DESC);
