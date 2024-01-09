import Card from '@/app/components/Card'

export default function Services() {
  return (
    <div
      id="services"
      className="flex w-full max-w-6xl items-center mx-auto mt-10"
    >
      <div className="flex flex-row gap-3 w-full justify-between">
        <Card
          className="flex-1 items-center justify-center"
          title="Web Development"
        />
        <Card
          className="flex-1 items-center justify-center"
          title="Mobile App Development"
        />
        <Card
          className="flex-1 items-center justify-center"
          title="Dashboard Development"
        />
        <Card
          className="flex-1 items-center justify-center"
          title="Landing page Development"
        />
      </div>
    </div>
  )
}
