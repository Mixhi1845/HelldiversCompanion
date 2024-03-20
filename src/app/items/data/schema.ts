import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  image: z.string(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  armorrating: z.string(),
  speed: z.string(),
  staminaregen: z.string(),
  passive: z.string(),
  passivedesc: z.string()
})

export type Task = z.infer<typeof taskSchema>