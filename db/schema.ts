import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const projects = pgTable("projects", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    description: varchar(),
    url: varchar().notNull(),

});
