export default function Home() {
  return (
    <>
    <Head />
    <Footer />
    </>
  )
}

function Head() {
  return (
    <header>
      <h1 className="text-4xl items-center bg-emerald-500 p-4">Cookie Stand Admin</h1>
    </header>
  )
}

function Footer() {
  return (
    <p className="bg-emerald-500 p-4 mt-4"> &copy 2021</p>
  )
}

