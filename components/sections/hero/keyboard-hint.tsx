'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useLanguageContext } from '@/hooks/useLanguage'

export function KeyboardHint() {
    const { t } = useLanguageContext()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 right-2 hidden lg:flex flex-col items-center gap-3"
        >
            <div className="flex items-center gap-2">
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="p-2 rounded-lg glass border border-primary/20 bg-primary/5 shadow-lg shadow-primary/10"
                >
                    <ArrowUp className="w-4 h-4 text-primary" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="p-2 rounded-lg glass border border-primary/20 bg-primary/5 shadow-lg shadow-primary/10"
                >
                    <ArrowDown className="w-4 h-4 text-primary" />
                </motion.div>
            </div>

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/80 select-none">
                {t('hero.keyboardHint')}
            </span>
        </motion.div>
    )
}
