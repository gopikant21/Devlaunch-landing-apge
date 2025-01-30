"use client";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    price: "$2,999",
    features: [
      "Custom Website Development",
      "Mobile Responsive Design",
      "5 Pages",
      "Basic SEO Setup",
      "2 Rounds of Revisions",
    ],
  },
  {
    name: "Professional",
    price: "$5,999",
    features: [
      "Everything in Basic",
      "E-commerce Integration",
      "Custom Features",
      "Advanced SEO",
      "Premium Support",
      "Analytics Dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Custom Software Development",
      "API Integration",
      "Advanced Security",
      "Dedicated Support Team",
      "Priority Response",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Pricing Plans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-indigo-500 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
