import { createClient } from "@/lib/supabase/server"
import { Suspense } from "react"

async function CategoriesData() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from("categories").select()
  return <pre>{JSON.stringify(categories, null, 2)}</pre>
}

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <Suspense fallback={<div>Loading categories...</div>}>
        <CategoriesData />
      </Suspense>
    </div>
  )
}
