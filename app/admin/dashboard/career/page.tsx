export default function CareerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#11253e]">Career</h1>
        <p className="text-gray-500 text-sm mt-1">Manage job openings and listings posted on the careers page.</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-[#11253e] text-sm">Job Listings</h2>
          <span className="bg-[#f99d1c]/10 text-[#f99d1c] text-xs font-semibold px-2.5 py-1 rounded-full">0 listings</span>
        </div>
        <div className="flex flex-col items-center justify-center py-16 text-center px-4">
          <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#11253e" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-[#11253e] font-semibold">No job listings yet</p>
          <p className="text-gray-400 text-sm mt-1">Add job openings here to display them on the careers page.</p>
        </div>
      </div>
    </div>
  );
}
