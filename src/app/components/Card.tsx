type Props = {
  title: string
  className?: string
}

export default function Card({ title, className = '' }: Props) {
  return (
    <div
      className={
        'flex min-h-44 flex-col rounded-lg bg-gray-100 shadow-md shadow-gray-300 p-10 ' +
        className
      }
    >
      <p className="text-lg text-center">{title}</p>
    </div>
  )
}
