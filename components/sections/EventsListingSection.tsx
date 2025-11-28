import React from "react";

const EventsListingSection = () => {
  return (
    <div className="flex flex-col items-center pt-24">
      <div className="text-primary text-center mt-12 w-[90%] px-6 space-y-8">
        <h1 className="text-2xl font-subheading font-medium">
          កម្មវិធីសិរីមង្គលពិធីភ្ជាប់ពាក្យ
        </h1>

        <h2 className="font-subheading text-lg font-medium">ថ្ងៃអាទិត្យ ទី៤ ខែមករា ឆ្នាំ២០២៦</h2>
        <h2 className="font-subheading text-lg font-medium">កម្មវិធីពេលព្រឹក</h2>

        <div className="font-text flex justify-between items-center font-medium">
          <h3>ម៉ោង ៨៖០០នាទី</h3>
          <h3>ចាប់ផ្ដើមកម្មវិធី</h3>
        </div>
        
        <div className="font-text flex justify-between items-center font-medium">
          <h3>ម៉ោង ៩៖០០នាទី</h3>
          <h3>កម្មវិធីបំពាក់ចិញ្ជៀន</h3>
        </div>

        <div className="font-text flex justify-between items-center font-medium">
          <h3>ម៉ោង ១១៖០០នាទី</h3>
          <h3>កិត្តិយសពិសារអាហារថ្ងៃត្រង់</h3>
        </div>

        <h2 className="font-subheading text-lg font-medium">កម្មវិធីពេលល្ងាច</h2>
        <p className="font-text font-medium px-6">អញ្ជើញភ្ញៀវកិត្តិយសទាំងអស់ពិសារភោជនាហារស្ថិតនៅទីតាំងដដែលដោយមេត្រីភាព។</p>
      </div>
    </div>
  );
};

export default EventsListingSection;
