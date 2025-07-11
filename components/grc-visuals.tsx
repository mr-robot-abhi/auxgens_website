"use client"

import { motion } from "framer-motion"
import { Shield, Scale, Settings, Users, Database, Server, Smartphone, CheckCircle } from "lucide-react"

export default function GRCVisuals() {
  return (
    <div className="p-6 space-y-16">
      {/* Visual 1: Governance, Risk, Compliance Matrix */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        <div className="bg-green-100/80 dark:bg-green-900/40 p-6 rounded-2xl shadow-md border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Service</h3>
          <ul className="space-y-3 text-sm">
            {[
              { icon: Settings, text: "Process" },
              { icon: Users, text: "People" },
              { icon: Database, text: "Data" },
              { icon: Server, text: "Infrastructure" },
              { icon: Smartphone, text: "Applications" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <item.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {["Governance", "Risk", "Compliance"].map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border-t-4 border border-gray-200/50 dark:border-gray-700/50"
            style={{
              borderTopColor: ["#3b82f6", "#facc15", "#f97316"][i],
            }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              {
                [
                  <Scale key="scale" className="w-5 h-5" />,
                  <Shield key="shield" className="w-5 h-5" />,
                  <CheckCircle key="check" className="w-5 h-5" />,
                ][i]
              }
              {category}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {[
                [
                  "Policy & procedure definition",
                  "ISMS Awareness, Rollout",
                  "Data governance, ownership",
                  "Security baseline standards",
                  "SLA's, CIA assessments",
                ],
                [
                  "Risk assessment framework",
                  "3rd party security assessments",
                  "Data risk assessment",
                  "IT Risk assessment",
                  "Application risk management",
                ],
                [
                  "ITSM, KPI's periodic audits",
                  "Access reviews compliance",
                  "Data protection act, PII",
                  "Security configuration",
                  "SDLC, ITSM reviews",
                ],
              ][i].map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div
                    className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0"
                    style={{ color: ["#3b82f6", "#facc15", "#f97316"][i] }}
                  ></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Compliance Standards Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gray-700/90 dark:bg-gray-800/90 backdrop-blur-sm text-white p-4 rounded-lg text-center max-w-7xl mx-auto"
      >
        <p className="font-bold text-lg">
          ISO 27001, HIPAA, PCI DSS, SAS 70 - Internal audits, remediation, health check, readiness assessments
        </p>
      </motion.div>

      {/* Visual 2: Risk & Compliance Transformation Flow */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-white dark:text-white">Managed GRC Services</h2>
        <div className="flex justify-between items-center gap-6 flex-wrap">
          {[
            {
              title: "Assess",
              icon: "📋",
              bg: "bg-blue-100/80 dark:bg-blue-900/40",
              border: "border-blue-200/50 dark:border-blue-800/50",
              items: ["Cyber Resilience", "Security Review", "VCISO", "Control Assurance"],
            },
            {
              title: "Transform",
              icon: "🔄",
              bg: "bg-purple-100/80 dark:bg-purple-900/40",
              border: "border-purple-200/50 dark:border-purple-800/50",
              items: ["Migration", "Integration", "GRC Automation", "Framework Mapping"],
            },
            {
              title: "Manage",
              icon: "🛠️",
              bg: "bg-green-100/80 dark:bg-green-900/40",
              border: "border-green-200/50 dark:border-green-800/50",
              items: ["Monitoring", "Continuous Improvement", "Risk Mitigation", "Policy Enforcement"],
            },
          ].map((stage, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`${stage.bg} ${stage.border} border p-6 rounded-2xl shadow-lg w-full sm:w-[30%] backdrop-blur-sm`}
            >
              <div className="text-4xl mb-3">{stage.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{stage.title}</h3>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                {stage.items.map((point, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-green-600/90 to-green-700/90 backdrop-blur-sm text-white p-6 rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-2">Regulatory Compliance & Continuous Improvement</h3>
          <p className="text-lg opacity-90">Managed GRC Services - Archer, Alyne</p>
        </motion.div>
      </motion.section>
    </div>
  )
}
