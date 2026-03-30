import { Cpu, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { getUser } from "@/lib/supabase/auth"
import { UserMenu } from "./user-menu"

export const Header = async () => {
  const user = await getUser()

  console.log({ user })

  return (
    <header className="bg-red sticky top-0 z-50 border-b bg-white backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2">
          <Cpu /> <p className="text-xl font-bold">TechForge</p>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/pc-builds">Pc Builds</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div>
            <input
              placeholder="Search Products"
              className="rounded border p-2"
            />
          </div>

          <div>
            {user?.email ? (
              <UserMenu />
            ) : (
              <Button asChild size="sm">
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>

          <div>
            <Button variant="outline" asChild>
              <Link href="/cart">
                <ShoppingCart />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
