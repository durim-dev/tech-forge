"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Button
      className="w-full p-0 hover:cursor-pointer hover:bg-transparent hover:text-destructive"
      variant="ghost"
      onClick={logout}
      size="xs"
    >
      Logout
    </Button>
  )
}
