export default function CareerMailsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#11253e]">Career Mails</h1>
        <p className="text-gray-500 text-sm mt-1">Review job applications and CVs submitted through the careers page.</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-[#11253e] text-sm">Applications</h2>
          <span className="bg-[#f99d1c]/10 text-[#f99d1c] text-xs font-semibold px-2.5 py-1 rounded-full">0 applications</span>
        </div>
        <div className="flex flex-col items-center justify-center py-16 text-center px-4">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#11253e" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-[#11253e] font-semibold">No applications received yet</p>
          <p className="text-gray-400 text-sm mt-1">Job applications submitted via the careers page will show here.</p>
        </div>
      </div>
    </div>
  );
}
