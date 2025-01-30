"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$2,999",
    gradient: "from-blue-500/10 to-cyan-500/10",
    accentColor: "blue-400",
    features: [
      "Custom Website Development",
      "Mobile Responsive Design",
      "5 Pages",
      "Basic SEO Setup",
      "2 Rounds of Revisions",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,999",
    gradient: "from-violet-500/10 to-purple-500/10",
    accentColor: "violet-400",
    features: [
      "Everything in Basic",
      "E-commerce Integration",
      "Custom Features",
      "Advanced SEO",
      "Premium Support",
      "Analytics Dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    gradient: "from-rose-500/10 to-pink-500/10",
    accentColor: "rose-400",
    features: [
      "Everything in Professional",
      "Custom Software Development",
      "API Integration",
      "Advanced Security",
      "Dedicated Support Team",
      "Priority Response",
    ],
    popular: false,
  },
];

const PricingCard = ({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative p-1 rounded-2xl ${
        plan.popular ? "scale-105" : "scale-100"
      }`}
    >
      {/* Animated Border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: plan.popular ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl"
      />

      {/* Card Content */}
      <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/30 overflow-hidden">
        {/* Background Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
        />

        {/* Glass Overlay */}
        <div className="absolute inset-[1px] bg-gray-900/80 backdrop-blur-xl rounded-2xl" />

        {/* Content */}
        <div className="relative">
          {plan.popular && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </motion.div>
          )}

          <motion.h3
            className={`text-2xl font-clash font-semibold mb-4 text-gray-100 group-hover:text-${plan.accentColor} tracking-tighter`}
          >
            {plan.name}
          </motion.h3>

          <div className="flex items-baseline mb-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold text-white"
            >
              {plan.price}
            </motion.span>
            {plan.price !== "Custom" && (
              <span className="text-gray-400 ml-2">/project</span>
            )}
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center text-gray-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`w-5 h-5 rounded-full bg-${plan.accentColor}/10 mr-3 flex-shrink-0 flex items-center justify-center`}
                >
                  <svg
                    className={`w-3 h-3 text-${plan.accentColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 * i }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl relative group/button overflow-hidden`}
          >
            <span
              className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-20`}
            />
            <span className="absolute inset-0 bg-gray-900 opacity-80 group-hover/button:opacity-0 transition-opacity duration-500" />
            <span
              className={`absolute inset-[1px] rounded-xl bg-gray-900 group-hover/button:bg-${plan.accentColor}/10 transition-colors duration-500`}
            />
            <motion.span className="relative text-sm font-cal tracking-wider-plus uppercase flex items-center justify-center gap-2">
              Get Started
              <svg
                className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-clash font-bold mb-4 text-white/90 tracking-tighter">
            Pricing Plans
          </motion.h2>
          <motion.p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your project
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
