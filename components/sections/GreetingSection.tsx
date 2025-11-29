"use client";
import Image from "next/image";

import NameBanner from "@/public/images/liya-and-thearith.png";
import SaveDateBtn from "../SaveDateBtn";

const GreetingSection = () => {
  return (
    <div
      id="greeting"
      className="min-h-screen flex flex-col items-center relative"
    >
      {/* Name Banner */}
      <div className="name-banner w-[40%] flex justify-center">
        <Image src={NameBanner} alt="name" priority className="scale-100" />
      </div>

      <div className="heading text-center text-primary mt-12 w-full px-6 space-y-8">
        <h1 className="text-2xl font-subheading font-medium">
          សិរីមង្គលពិធីភ្ជាប់ពាក្យ
        </h1>

        <div className="flex items-center justify-between">
          <div className="text-start font-subheading space-y-4">
            <h3>លោក ទិត ផាណារ៉ូ</h3>
            <h3>លោកស្រី កែ សុខចិន្តា</h3>
          </div>
          <div className="text-end font-subheading space-y-4">
            <h3>លោក ជា ថុង</h3>
            <h3>លោកស្រី សុខ លាងគ្រី</h3>
          </div>
        </div>

        <h2 className="font-subheading font-medium">សូមគោរពអញ្ចើញ</h2>
        <p className="font-text font-medium">
          ឯកឧត្តម អ្នកឧកញ៉ា លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី​ អ្នកនាងកញ្ញា
          អញ្ជើញចូលរួមជាអធិបតីភាព និងជាភ្ញៀវកិត្តិយស ចម្រើន ជោគជ័យ សិរីសួស្តី
          ក្នុងកម្មវិធីសិរីមង្គលភ្ជាប់ពាក្យ កូនប្រុស កូនស្រី របស់យើងខ្ញុំ។
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between font-heading font-medium px-6">
            <p>កូនប្រុសនាម</p>
            <p>កូនស្រីនាម</p>
          </div>
          <p className="font-heading">ជាគូនឹង</p>
          <div className="flex items-center justify-between font-subheading text-2xl font-medium">
            <h3>យឺន សុធារិទិ្ធ</h3>
            <h3>ជា ថាលីយ៉ា</h3>
          </div>
        </div>

        <div className="font-subheading font-medium space-y-2">
          <h2>ដែលនឹងប្រព្រឹត្តទៅនៅ</h2>
          <h2>ថ្ងៃអាទិត្យ ទី៤ ខែមករា ឆ្នាំ២០២៦</h2>
          <h2>ស្ថិតនៅ ផ្លូវ៦១៤ ផ្សារ៧មករា ផ្ទះលេខ១១A</h2>
          <h2>សង្កាត់បឹងកក់ទី២ ខណ្ឌទួលគោក</h2>
          <h2>រាជធានីភ្នំពេញ</h2>
        </div>

        <SaveDateBtn />
      </div>
    </div>
  );
};

export default GreetingSection;
