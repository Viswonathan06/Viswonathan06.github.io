---
title: "SHARD: Safe and Helpful Alignment via Self-Reframing Distillation"
collection: publications
category: manuscripts
permalink: /publication/2026-06-14-shard-safe-helpful-alignment
excerpt: 'We introduce SHARD, a self-reframing distillation method that rewrites sensitive prompts to surface benign intent, reframes responses into safe and helpful ones, and fine-tunes the model on its self-reframed outputs — improving safe-helpfulness without sacrificing safety.'
date: 2026-06-14
venue: 'Findings of EMNLP 2026'
citation: 'Viswonathan Manoranjan, Amogh Gupta, Anvesh Rao Vijjini, Thomas Hofweber, and Snigdha Chaturvedi (2026). &quot;SHARD: Safe and Helpful Alignment via Self-Reframing Distillation.&quot; <i>Findings of the Association for Computational Linguistics: EMNLP 2026</i>. To appear.'
---

Large language models often struggle with sensitive prompts. They may refuse outright, provide generic safety boilerplate, or fail to address the user's legitimate informational needs that can be answered safely. We introduce SHARD, a self-reframing distillation method to improve safe-helpfulness. It first rewrites sensitive prompts to surface benign intent using philosophical guidelines, then reframes its original responses into safe, more helpful ones, and finally fine-tunes the model on its self-reframed responses. Across DNA and the English subset of LINGUASAFE, SHARD improves helpfulness for most model families while preserving safety. It also remains competitive with distillation from a larger teacher model, suggesting that models can internalize safe and helpful behavior elicited from their own.

