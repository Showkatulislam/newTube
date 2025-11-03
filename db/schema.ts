
import { pgTable, text, timestamp, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";

export const usertable = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerkId").unique().notNull(),
    name: varchar({ length: 255 }).notNull(),
    //Todo banner url
    imgUrl: text("img_url").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),

}, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)])