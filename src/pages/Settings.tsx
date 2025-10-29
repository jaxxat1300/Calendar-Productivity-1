export function SettingsPage(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-5">
        <div className="font-medium mb-2">Theme</div>
        <p className="text-sm opacity-80 mb-3">Use the toggle in the header to switch between light and dark.</p>
      </div>
      <div className="card p-5">
        <div className="font-medium mb-2">Integrations</div>
        <p className="text-sm opacity-80">Future: Connect Google Calendar, Gmail, Apple Health, Strava.</p>
      </div>
    </div>
  )
}


