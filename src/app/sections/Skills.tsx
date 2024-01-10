import Card from '@/app/components/Card'

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex w-full h-96 items-center justify-center mx-auto bg-yellow-500 py-10 px-5"
    >
      <div className="grid grid-cols-2 sm:flex max-w-6xl flex-row gap-3 w-full justify-between">
        <Card
          className="flex-1 items-center justify-center"
          title="JavaScript, TypeScript"
        />
        <Card
          className="flex-1 items-center justify-center"
          title="React, Nextjs"
        />
        <Card
          className="flex-1 items-center justify-center"
          title="Svelte, SvelteKit"
        />
        <Card
          className="flex-1 items-center justify-center"
          title="Tailwind, Bootstrap, Bulma"
        />
      </div>
    </div>
  )
}
