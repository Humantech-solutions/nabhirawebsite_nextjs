export default function ContactFormPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#11253e]">Contact Form</h1>
        <p className="text-gray-500 text-sm mt-1">Review and manage all contact enquiries submitted through the website.</p>
      </div>

      {/* Placeholder table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-[#11253e] text-sm">All Enquiries</h2>
          <span className="bg-[#f99d1c]/10 text-[#f99d1c] text-xs font-semibold px-2.5 py-1 rounded-full">0 entries</span>
        </div>
        <div className="flex flex-col items-center justify-center py-16 text-center px-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#11253e" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-[#11253e] font-semibold">No contact enquiries yet</p>
          <p className="text-gray-400 text-sm mt-1">Submissions from the contact form will appear here.</p>
        </div>
      </div>
    </div>
  );
}
