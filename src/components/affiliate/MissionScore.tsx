import { motion } from "motion/react";
import { Shield, Zap, Target, Award } from "lucide-react";

interface MissionScoreProps {
  score: number; // 0-100
  durability: string;
  reliability: string;
  fieldTested: boolean;
}

export function MissionScore({ score, durability, reliability, fieldTested }: MissionScoreProps) {
  const getScoreRating = (score: number) => {
    if (score >= 90) return { text: "MISSION CRITICAL", color: "text-green-500", bg: "bg-green-500/10" };
    if (score >= 80) return { text: "FIELD READY", color: "text-blue-500", bg: "bg-blue-500/10" };
    if (score >= 70) return { text: "OPERATIONAL", color: "text-yellow-500", bg: "bg-yellow-500/10" };
    return { text: "CONDITIONAL", color: "text-orange-500", bg: "bg-orange-500/10" };
  };

  const rating = getScoreRating(score);

  return (
    <div className="bg-zinc-900 border-2 border-orange-600 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-6 h-6 text-orange-600" />
        <h3 className="text-zinc-100 uppercase tracking-wider">
          Mission Effectiveness Score
        </h3>
      </div>

      {/* Score Display */}
      <div className="text-center mb-6">
        <motion.div
          className="inline-block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <div className="relative w-32 h-32 mx-auto">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-zinc-800"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="text-orange-600"
                initial={{ strokeDasharray: "351.86", strokeDashoffset: "351.86" }}
                animate={{ strokeDashoffset: `${351.86 * (1 - score / 100)}` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl text-orange-600">{score}</span>
              <span className="text-zinc-500 text-xs uppercase">/ 100</span>
            </div>
          </div>
        </motion.div>
        <div className={`mt-4 inline-block ${rating.bg} ${rating.color} px-4 py-2 rounded uppercase text-sm tracking-wider`}>
          {rating.text}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-orange-600" />
            <span className="text-zinc-500 text-xs uppercase">Durability</span>
          </div>
          <p className="text-zinc-100 uppercase tracking-wide">{durability}</p>
        </div>
        <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-orange-600" />
            <span className="text-zinc-500 text-xs uppercase">Reliability</span>
          </div>
          <p className="text-zinc-100 uppercase tracking-wide">{reliability}</p>
        </div>
      </div>

      {fieldTested && (
        <div className="mt-4 flex items-center gap-2 text-green-500 text-sm">
          <Award className="w-4 h-4" />
          <span className="uppercase tracking-wide">Field-Tested & Verified</span>
        </div>
      )}
    </div>
  );
}
