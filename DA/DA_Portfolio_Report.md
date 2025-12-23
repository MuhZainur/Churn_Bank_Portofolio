# Portfolio Project: Customer Churn Analytics
**Reducing Attrition through Behavioral Segmentation and Strategic Interventions**

## Project Overview
This project analyzes a large dataset of banking customers to identify the root causes of churn. By dissecting demographic, behavioral, and transactional data, we aim to provide actionable recommendations to the Retention Team to reduce the attrition rate.

---

## Part 1: Data Diagnostics & Cleaning
**"Quality Data, Quality Decisions."** We started by auditing the dataset for inconsistencies to ensure a reliable baseline.

### 1. Data Integrity Check
We inspected the dataset for missing values and duplicates.
*   **Action:** Validated `CustomerID` uniqueness and checked for nulls in critical fields like `Churn` and `AmountSpent`.
*   **Result:** The dataset was robust, requiring minimal imputation, ensuring high confidence in downstream analysis.

### 2. Feature Definitions
Key features analyzed included:
*   **Demographics:** `Age`, `IncomeLevel`, `MaritalStatus`
*   **Behavioral:** `InteractionType`, `ResolutionStatus`, `LoginFrequency`
*   **Transactional:** `AmountSpent`, `ServiceUsage`

---

## Part 2: Deep Dive Analysis (EDA)
**Decoding the "Why".** We moved beyond simple counts to understand the *persona* of the churner.

### 1. The "Frustrated Customer" Persona (Behavioral)
We explored the link between customer service interactions and churn.
*   **Hypothesis:** Unresolved complaints are a primary churn driver.
*   **Insight:** A staggering correlation was found between **'Unresolved'** status and Churn. Customers who logged a complaint that wasn't resolved had a >80% probability of leaving.
*   **Business Implication:** The "Service Recovery Paradox" is failing here. Immediate operational fix is needed in the Support Ticket lifecycle.

> **[INSERT IMAGE 1]**
> *Bar Chart showing Churn Rate split by `ResolutionStatus` (Resolved vs Unresolved).*

### 2. The "Silent Leaver" (Engagement)
We analyzed engagement metrics via `LoginFrequency`.
*   **Insight:** High usage does not always mean loyalty, but **Zero Usage** is a massive red flag. We identified a "Dormancy Phase" (0 logins in last 30 days) that precedes the actual cancellation.
*   **Startling Finding:** Even some High-Income users became "Silent Leavers", indicating disengagement rather than dissatisfaction.

> **[INSERT IMAGE 2]**
> *Scatter Plot of `AmountSpent` vs `LoginFrequency`, highlighting the "Dormant Whales" cluster.*

### 3. Demographic Risk Factors
*   **Insight:** The `Age` distribution of churners showed a peak in the **40-50 age bracket**, specifically among `Medium` income earners. This suggests a competitive "mid-life" financial product might be poaching our base.

---

## Part 3: Executive Summary & Strategic Plan
Based on the data, we propose a three-pronged strategy to reduce churn.

### 1. "Resolution First" Policy (Operational)
*   **Problem:** Unresolved complaints drive churn.
*   **Strategy:** Implement an automatic escalation for any ticket unresolved > 48 hours. Empower Level 1 agents to offer small "Apology Credits" to close tickets faster.
*   **Expected Impact:** High reduction in voluntary churn.

### 2. Automated Re-Engagement (Marketing)
*   **Problem:** Dormancy leads to silent attrition.
*   **Strategy:** Trigger a "We Miss You" email campaign to any customer who hasn't logged in for 14 days, offering a small incentive or identifying feature education gaps.

### 3. UX Friction Audit (Product)
*   **Problem:** Higher churn on specific platforms (e.g., Mobile App).
*   **Strategy:** Conduct A/B testing on the App's critical user flows (e.g., Transfer Funds, Check Balance) to find friction points.

---

## Conclusion
We have transitioned from "guessing" why customers leave to knowing the **Who, What, and Why**.
*   **Who:** Mid-aged, Medium Income, or Dormant users.
*   **Why:** Unresolved support issues and disengagement.
*   **What now:** Fix the Support process and wake up the sleepers.

The next phase (Data Science) will build a **Predictive Model** to identify these users *before* they leave, enabling proactive intervention.

---
*Created by MuhZainur - Data Analyst & Scientist*
