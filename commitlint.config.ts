import type { UserConfig } from "@commitlint/types";

export default {
  extends: ["@commitlint/config-conventional"],
  prompt: {
    questions: {
      type: {
        enum: {
          build: {
            emoji: "🛠️ ",
          },
          chore: {
            emoji: "♻️ ",
          },
          ci: {
            emoji: "⚙️ ",
          },
          revert: {
            emoji: "🗑️ ",
          },
        },
      },
    },
  },
} satisfies UserConfig;