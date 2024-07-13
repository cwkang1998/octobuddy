import {
	boolean,
	decimal,
	pgTable,
	serial,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: varchar("did").primaryKey(),
	name: varchar("name"),
	default_paying_account: varchar("default_paying_account"),
	default_receiving_account: varchar("default_receiving_account"),
});

export const user_contacts = pgTable("user_contacts", {
	id: varchar("did").primaryKey(),
	friend_did: varchar("friend_did").references(() => users.id),
});

export const expenses = pgTable("expenses", {
	id: serial("id").primaryKey(),
	name: varchar("name"),
	organizer: varchar("organizer").references(() => users.id),
	total_amount: decimal("total_amount", { precision: 100, scale: 2 }),
	created_timestamp: timestamp("created_timestamp").defaultNow(),
});

export const expense_users = pgTable("expense_users", {
	id: serial("id").primaryKey(),
	user_id: varchar("user_id").references(() => users.id),
	expense_id: varchar("expense_id").references(() => expenses.id),
	paying_address: varchar("paying_address"),
	receiving_address: varchar("receiving_address"),
  settled_date: timestamp("settled_date"),
	is_settled: boolean("is_settled").default(false),
});