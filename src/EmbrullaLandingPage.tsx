import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }),
};

export default function EmbrullaLandingPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.section className="text-center space-y-6" variants={fadeUp} custom={0}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Embrulla – The Smart Way to Revive Lost Leads
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Stop Losing Money on Dormant Leads. Automatically Revive and Monetize Them, Hassle-Free.
          </p>
          <motion.div className="space-x-4" variants={fadeUp} custom={1}>
            <a href="https://calendly.com/tylerdoiron-ai-consulting" target="_blank" rel="noopener">
              <Button className="text-lg px-6 py-3">Book Your Free Demo</Button>
            </a>
            <Button variant="outline" className="text-lg px-6 py-3">
              Download Info Pack
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}
