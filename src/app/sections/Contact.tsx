import Card from '@/app/components/Card'

export default function Contact() {
  return (
    <div
      id="contacts"
      className="flex flex-row gap-10 w-full justify-between max-w-6xl h-96 items-center mx-auto py-10"
    >
      <div className="flex-1 flex-col">
        <div className="w-full flex flex-col gap-5">
          <input
            className="p-2 rounded-md outline outline-slate-200 w-full"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            required
          ></input>

          <input
            className="p-2 rounded-md outline outline-slate-200 w-full"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          ></input>

          <input
            className="p-2 rounded-md outline outline-slate-200 w-full"
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            autoComplete="off"
          ></input>

          <textarea
            className="p-2 rounded-md outline outline-slate-200 w-full"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button className="px-5 bg-lime-600 rounded-md text-white py-3 uppercase font-bold">
            Send
          </button>
        </div>
      </div>
      <div className="flex-1">Map section</div>
    </div>
  )
}
