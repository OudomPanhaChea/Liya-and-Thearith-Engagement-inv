import Image from "next/image";

import Pin from '@/public/images/Pin.png';
import QRCode from '@/public/images/QRLocation.png'
import Link from "next/link";

const LocationSection = () => {
  return (
    <div className="flex flex-col items-center pt-24">
      <div className="text-center text-primary mt-12 w-full px-6 space-y-8">
        <h1 className="text-2xl font-subheading font-medium">ទីតាំងកម្មវិធី</h1>

        <div className="w-full p-4 border-2 border-primary rounded-lg backdrop-blur-xs shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1954.3418487824042!2d104.9010323!3d11.5745177!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzI5LjYiTiAxMDTCsDU0JzA3LjMiRQ!5e0!3m2!1sen!2skh!4v1764312635946!5m2!1sen!2skh"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-md"
          ></iframe>
        </div>

        <div className="flex gap-6 items-stretch justify-between">
          <Link
            href={'https://maps.app.goo.gl/PA4QUsP8WmMjRY4p9'}
            target="_blank"
            className="py-4 border-2 gap-8 border-primary rounded-lg shadow-sm w-1/2 flex flex-col items-center justify-center"
          >
            <Image src={Pin} alt="pin" className="" />
            <p className="font-text font-medium text-sm md:text-base ">ចុចទីនេះដើម្បីមើលទីតាំង</p>
          </Link>

          <div className="py-4 border-2 border-primary rounded-lg shadow-sm w-1/2 flex flex-col items-center justify-center">
            <Image src={QRCode} alt="qrcode" className="w-[80%]" />
            <p className="font-text font-medium text-sm md:text-base -mt-6">ស្កែនទីនេះដើម្បីមើលទីតាំង</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
