CREATE TABLE "public"."logs" ("activity" text NOT NULL, "points" Numeric NOT NULL, "block_timestamp" timestamptz NOT NULL, "transaction_hash" text NOT NULL, PRIMARY KEY ("transaction_hash") );
