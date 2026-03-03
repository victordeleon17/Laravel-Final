export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="flex items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">FocusFlow v1</h1>
            <p className="mt-1 text-slate-300">
              App estática (Vite + Docker + GitHub Actions + Doppler)
            </p>
          </div>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
            assignment-04
          </span>
        </header>

        <main className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2 rounded-2xl bg-white/5 p-6 shadow">
            <h2 className="text-xl font-semibold">Panel</h2>
            <p className="mt-2 text-slate-300">
              Interfaz estática con tarjetas, progreso y lista de tareas mock.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Card title="Tiempo hoy" value="2h 15m" sub="Enfocado" />
              <Card title="Pomodoros" value="5" sub="Completados" />
              <Card title="Racha" value="7 días" sub="Constante" />
            </div>

            <div className="mt-6 rounded-2xl bg-black/20 p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Progreso semanal</h3>
                <span className="text-sm text-slate-300">72%</span>
              </div>
              <div className="mt-3 h-3 w-full rounded-full bg-white/10">
                <div className="h-3 w-[72%] rounded-full bg-indigo-400" />
              </div>
              <p className="mt-3 text-sm text-slate-300">
                Objetivo: 10 horas de enfoque por semana.
              </p>
            </div>
          </section>

          <aside className="rounded-2xl bg-white/5 p-6 shadow">
            <h2 className="text-xl font-semibold">Tareas (mock)</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li className="rounded-xl bg-black/20 p-3">✅ Configurar Vite</li>
              <li className="rounded-xl bg-black/20 p-3">✅ Tailwind listo</li>
              <li className="rounded-xl bg-black/20 p-3">⬜ Dockerizar app</li>
              <li className="rounded-xl bg-black/20 p-3">⬜ Pipeline GitHub Actions</li>
              <li className="rounded-xl bg-black/20 p-3">⬜ Push a Docker Hub</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">
                Tip: cada commit genera una imagen con tags <code>latest</code> y <code>SHA</code>.
              </p>
            </div>
          </aside>
        </main>

        <footer className="mt-12 text-sm text-slate-400">
          Hecho con Vite + React + Tailwind · Docker + CI/CD
        </footer>
      </div>
    </div>
  );
}

function Card({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-sm text-slate-300">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{sub}</p>
    </div>
  );
}
