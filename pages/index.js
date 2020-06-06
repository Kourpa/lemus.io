import Parallax from '../components/parallax'

export default function Home() {
  return (
    <div className="container">
      <Parallax/>
      <div>
        This is a placeholder
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          width: 100%;
          height: 100%;
        }

        .container {
          width: 100vw;
          height: 100vh;
          background-color: rgba(255, 255, 255, .8);
        }

      `}</style>
    </div>
  )
}

