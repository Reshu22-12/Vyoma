import {
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Headphones className="w-5 h-5 text-blue-600" />,
    title: "24x7 Support",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    title: "Secure Payments",
  },
  {
    icon: <Truck className="w-5 h-5 text-blue-600" />,
    title: "Fast Delivery",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    title: "Best Quality",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="mt-6 mb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-100 rounded-xl px-10 py-6">
          
          {/* ICON ROW */}
          <div className="flex justify-between gap-10 overflow-x-auto sm:overflow-visible">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center gap-1 min-w-[100px]"
              >
                {/* Icon */}
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-xs font-medium text-center text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
