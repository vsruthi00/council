# Knowledge: ml-scientist

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Data Leakage

**Principle:** Data leakage occurs when information from outside the training window contaminates the model, producing artificially high performance that does not transfer to production. Forms: (1) target leakage: a feature encodes the label or is derived from it; (2) temporal leakage: future data is visible at training time (test samples from before the cutoff, features computed over the full dataset); (3) preprocessing leakage: scaling, imputation, or encoding fitted on the full dataset before the train/test split. Every preprocessing step must be fitted on training data only and applied to validation and test data.

**When it applies:** Any supervised learning pipeline, any time-series model, any feature engineering step.

---

## Train/Validation/Test Discipline

**Principle:** The test set is held out until final evaluation. It is not used for any model selection, architecture choice, or hyperparameter tuning decision. All of those decisions use the validation set (or cross-validation on the training set). Using the test set more than once inflates the apparent performance. The split ratios and the split method (random, stratified, time-ordered) must be reported with the results.

**When it applies:** Every machine learning experiment that reports a performance number.

---

## Evaluation Design and Metrics

**Principle:** The evaluation metric must measure the actual goal, not a proxy that is easy to compute. Classification accuracy is misleading on imbalanced datasets: a model that always predicts the majority class can reach 99% accuracy while being useless. Use task-appropriate metrics: F1-score and AUC-ROC for binary classification with class imbalance; NDCG and precision at k for ranking; RMSE and MAE for regression; BLEU/ROUGE for generation (with caveats about their limitations). Report confidence intervals or standard deviation over multiple runs.

**When it applies:** Any ML experiment that reports performance results.

---

## Overfitting and Regularization

**Principle:** Overfitting occurs when a model learns the training data, including its noise, rather than the underlying pattern. Signs: training loss much lower than validation loss; performance degrades on new data. Mitigations: regularization (L1/L2 weight penalty, dropout), early stopping on validation loss, data augmentation, reducing model capacity, or collecting more training data. A model evaluated only on training data has not been evaluated at all.

**When it applies:** Any model training loop; any time training and validation loss curves are available.

---

## Reproducibility and Seeds

**Principle:** A machine learning experiment that cannot be reproduced is not a result; it is an anecdote. Set random seeds for all stochastic operations: data shuffling, weight initialization, dropout masks, sampling. Record the training environment: library versions, hardware type, OS, and Python version. Provide a requirements file or container image. A result that cannot be reproduced cannot be iterated on or compared against future work.

**When it applies:** Every training run that produces a result intended to be compared or reported.

---

## Baseline-First Discipline

**Principle:** Every ML result must be compared to a non-trivial, appropriately calibrated baseline. For classification: majority-class predictor or a simple logistic regression. For regression: last-value predictor or a linear model. For recommendation: most-popular or most-recent items. A model that does not beat a sensible baseline is not delivering value, regardless of its absolute metric score.

**When it applies:** Before reporting any ML result; whenever a new model is proposed as an improvement.

---

## Distribution Shift

**Principle:** A model trained on one data distribution may fail when deployed to a different distribution. Forms: covariate shift (input distribution changes but the relationship between input and output does not), label shift (output distribution changes), and concept drift (the relationship between input and output changes over time). Check whether training data is representative of the production population. Monitor for distribution shift in production with statistical tests on input feature distributions.

**When it applies:** Any model deployed to a population or time window different from its training data.

---

## Honest Reporting of Negative Results

**Principle:** Selectively reporting only successful runs while omitting failed experiments is p-hacking and produces inflated performance claims. A negative result (the model did not work, or did not beat the baseline) is a valid and useful result. It must be reported with the same detail as a positive result. Report: what was tried, what the results were, and what hypothesis the negative result rules out.

**When it applies:** Any ML experiment report or decision record that involves a model evaluation.
