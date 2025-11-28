"use client";

export default function SaveDateBtn() {
  const handleSaveDate = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:20260104T090000",
      "DTEND:20260104T120000",
      "SUMMARY:សិរីមង្គលពិធីភ្ជាប់ពាក្យ",
      "DESCRIPTION:សូមអញ្ជើញចូលរួមពិធីភ្ជាប់ពាក្យយើង❤️",
      "LOCATION:Phnom Penh",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    // Create blob
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });

    // Try using webcal first (works best on phone)
    const webcalUrl = URL.createObjectURL(blob).replace("blob:", "webcal:");

    // If mobile, use webcal link (auto open calendar)
    if (/iPhone|iPad|Android/i.test(navigator.userAgent)) {
      window.location.href = webcalUrl;
    } else {
      // Desktop fallback → Download .ics file
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "save-the-date.ics";
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <button
      onClick={handleSaveDate}
      className="px-6 py-3 font-text font-medium text-primary border-primary border-2 rounded-xl shadow-md cursor-pointer"
    >
      កត់ទុកក្នុងប្រតិទិន
    </button>
  );
}
