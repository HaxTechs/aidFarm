import Link from "next/link"
import * as React from "react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground">About AidFarm</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          AidFarm is a locally operated poultry supplier serving individuals,
          restaurants and bulk buyers across Ghana. (Placeholder content.)
        </p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-foreground">Our Mission</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Provide healthy, affordable poultry through humane farming and
            reliable logistics.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-foreground">How We Farm</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We follow hygienic practices and maintain quality at each stage of
            rearing and processing. (Placeholder — details coming later.)
          </p>
        </section>
      </div>
    </main>
  )
}
