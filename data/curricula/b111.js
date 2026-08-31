// FEARN Curriculum Data — B111: Financial Modeling & Valuation
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "b111-u1",
        "level": "Module",
        "title": "Cost of Capital & Valuation Foundations (8 Sessions)",
        "goal": "CAPM, Beta regressions, Hamada equation, WACC formulation, and corporate debt tax shields.",
        "lessonIds": [
            "b111-u1-l1",
            "b111-u1-l2",
            "b111-u1-l3",
            "b111-u1-l4",
            "b111-u1-l5",
            "b111-u1-l6",
            "b111-u1-l7",
            "b111-u1-l8",
            "b111-u1-l9"
        ]
    },
    {
        "id": "b111-u2",
        "level": "Module",
        "title": "3-Statement Financial Modeling & DCF Valuation (8 Sessions)",
        "goal": "Income statement, balance sheet, cash flow integration, Gordon growth, and exit multiples.",
        "lessonIds": [
            "b111-u2-l1",
            "b111-u2-l2",
            "b111-u2-l3",
            "b111-u2-l4",
            "b111-u2-l5",
            "b111-u2-l6",
            "b111-u2-l7",
            "b111-u2-l8"
        ]
    },
    {
        "id": "b111-u3",
        "level": "Module",
        "title": "Options, M&A Accretion & Financial Engineering (9 Sessions)",
        "goal": "Black-Scholes PDE, Real Options, M&A purchase price allocation, and FX risk arbitrage.",
        "lessonIds": [
            "b111-u3-l1",
            "b111-u3-l2",
            "b111-u3-l3",
            "b111-u3-l4",
            "b111-u3-l5",
            "b111-u3-l6",
            "b111-u3-l7",
            "b111-u3-l8",
            "b111-u3-l9"
        ]
    }
];
  var LESSONS = {
  "b111-u1-l1": {
    "id": "b111-u1-l1",
    "unit": "b111-u1",
    "level": "Unit 1",
    "objective": "Foundations of Financial Markets: Asset Classes, Equities, Bonds, Time Value of Money (PV/FV), Returns & Risk Measurement.",
    "presentation": {
      "explanation": "Corporate finance and asset valuation rest upon the fundamental principle of the **Time Value of Money (TVM)**: a dollar received today is worth more than a dollar received in the future due to its earning capacity (interest/investment returns) and the erosive effect of inflation. The relationship between present value ($PV$) and future value ($FV$) across $t$ periods at discount rate $r$ is defined by compounding and discounting: $FV = PV(1+r)^t$ and $PV = \\frac{FV}{(1+r)^t}$. Financial markets facilitate the allocation of capital across two primary asset classes: (1) **Debt / Fixed Income (Bonds)**: Contractual liabilities where the borrower pays periodic interest (coupon) and returns principal at maturity, holding senior claim in liquidation; and (2) **Equities (Stocks)**: Residual ownership shares granting voting rights and rights to residual cash flows (dividends, share repurchases) after all debt obligations are satisfied. An asset's total return over holding period $t$ comprises capital appreciation plus cash yield: $R_t = \\frac{P_t - P_{t-1} + D_t}{P_{t-1}}$. In financial economics, risk is formally modeled as the volatility or dispersion of returns around their expected mean, quantified by the standard deviation ($\\sigma$). Understanding these baseline mechanics is essential before deriving the Capital Asset Pricing Model (CAPM) or computing Weighted Average Cost of Capital (WACC).",
      "examples": [
        {
          "target": "Present Value formula discounts future cash flows: $PV = \\frac{CF}{(1+r)^t}$, illustrating that higher risk hurdle rates ($r$) lower today's valuation.",
          "reading": "Present value discounts future cash flows back to today using the required rate of return.",
          "translation": "Present value discounts future cash flows back to today using the required rate of return."
        },
        {
          "target": "Equity holders represent the residual claimant in corporate capital structure, bearing equity risk after contractual debt holders are paid.",
          "reading": "Equity holders receive profits only after operational expenses, interest, and taxes are settled.",
          "translation": "Equity holders receive profits only after operational expenses, interest, and taxes are settled."
        }
      ],
      "mnemonics": [
        "Finance Core Axiom: Cash today > Cash tomorrow (TVM); Higher Expected Return demands Higher Bearing of Risk ($\\sigma$)."
      ],
      "culturalNotes": [
        "The mathematics of compound interest dates back thousands of years to ancient Mesopotamian clay tablets in Babylon (circa 2000 BCE), which recorded compound debt calculations on barley and silver loans."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the core premise behind the Time Value of Money (TVM)?",
          "options": [
            "A given sum of money today has greater value than the same sum in the future because it can earn interest and invest in productive assets. (Foundations of Financial Markets (U1))",
            "Money loses all value if kept in a bank account overnight. (Foundations of Financial Markets (U1))",
            "Future money is always more valuable because companies print more of it. (Foundations of Financial Markets (U1))",
            "Stock prices never change over time. (Foundations of Financial Markets (U1))"
          ],
          "answerIndex": 0,
          "explanation": "TVM reflects opportunity cost, potential investment yields, and inflation over time."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How does the claim priority of bondholders (debt) differ from stockholders (equity) if a corporation undergoes bankruptcy liquidation?",
          "options": [
            "Bondholders hold senior legal claims and must be repaid before common equity holders receive any residual liquidation proceeds. (Foundations of Financial Markets (U1))",
            "Equity holders are paid first before all debts. (Foundations of Financial Markets (U1))",
            "Bondholders and equity holders divide all remaining cash equally regardless of debt agreements. (Foundations of Financial Markets (U1))",
            "The government confiscates all assets without paying anyone. (Foundations of Financial Markets (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Debt holds contractual seniority over residual equity claims in the capital structure hierarchy."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "If an investor purchases a stock for $100, receives $5 in dividends during the year, and sells the stock for $110 at year-end, what was their total annual return ($R$)?",
          "options": [
            "15% (Foundations of Financial Markets (U1))",
            "5% (Foundations of Financial Markets (U1))",
            "10% (Foundations of Financial Markets (U1))",
            "20% (Foundations of Financial Markets (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Total return = ($110 - $100 + $5) / $100 = $15 / $100 = 15%.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What statistical measure is standardly used in financial modeling to quantify the total volatility (dispersion of returns) of an asset?",
          "options": [
            "Standard deviation (Foundations of Financial Markets (U1))",
            "Price-to-Earnings ratio (Foundations of Financial Markets (U1))",
            "Gross domestic product (Foundations of Financial Markets (U1))",
            "Auditor billable hours (Foundations of Financial Markets (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Standard deviation of historical returns quantifies the volatility and dispersion of outcomes around the expected return.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 1: Time Value of Money & DCF Foundations"
  },
  "b111-u1-l2": {
    "id": "b111-u1-l2",
    "unit": "b111-u1",
    "level": "Introductory",
    "objective": "The Capital Asset Pricing Model (CAPM) & The Security Market Line (Derivation of expected return $E[R_i] = R_f + \\beta_i (E[R_m] - R_f)$; Risk-free rate selection using 10-year sovereign yields; Equity Risk Premium (ERP) estimation; Systematic non-diversifiable risk vs Idiosyncratic risk; The Security Market Line (SML) and Jensen's Alpha $\\alpha_i$).",
    "presentation": {
      "explanation": "The Capital Asset Pricing Model (Sharpe 1964, Lintner 1965, Mossin 1966):\n- **The Fundamental CAPM Equation**:\n  $$E[R_i] = R_f + \\beta_i \\left( E[R_m] - R_f \\right)$$\n  - $R_f$: Risk-Free Rate (typically the yield on the 10-year US Treasury bond or local sovereign bond in local currency);\n  - $E[R_m] - R_f$: Equity Risk Premium (ERP / Market Risk Premium), the excess return demanded by investors for bearing average market equity risk (empirically $4.5\\% - 6.0\\%$);\n  - $\\beta_i$: Asset Beta, measuring systematic covariance with the market portfolio:\n    $$\\beta_i = \\frac{\\text{Cov}(R_i, R_m)}{\\text{Var}(R_m)} = \\rho_{i, m} \\frac{\\sigma_i}{\\sigma_m}$$\n- **Total Risk Decomposition**:\n  $$\\text{Total Variance } \\sigma_i^2 = \\beta_i^2 \\sigma_m^2 + \\sigma_{\\epsilon_i}^2$$\n  - $\\beta_i^2 \\sigma_m^2$: **Systematic Risk** (market-wide macroeconomic shocks, non-diversifiable);\n  - $\\sigma_{\\epsilon_i}^2$: **Idiosyncratic Risk** (firm-specific shocks, eliminated in a well-diversified portfolio via the Central Limit Theorem);\n- **Jensen's Alpha ($\\alpha_i$)**:\n  $$\\alpha_i = R_i - \\left[ R_f + \\beta_i (R_m - R_f) \\right]$$\n  - Measures risk-adjusted excess performance generated by active management relative to the Security Market Line (SML).",
      "examples": [
        {
          "target": "If Rf = 4.0%, ERP = 5.5%, and Beta = 1.20, CAPM calculates cost of equity as 4.0% + 1.20 * 5.5% = 10.60%.",
          "reading": "If Rf = 4.0%...",
          "translation": "If Rf = 4.0%, ERP = 5.5%, and Beta = 1.20, CAPM calculates cost of equity as 10.60%."
        }
      ],
      "mnemonics": [
        "CAPM: E[R] = Rf + Beta * ERP! Systematic risk (Beta) vs Idiosyncratic risk (Diversified away)! Beta = Cov(i, m) / Var(m)! Jensen's Alpha = Actual Return - CAPM Expected!"
      ],
      "culturalNotes": [
        "William Sharpe was awarded the 1990 Nobel Memorial Prize in Economic Sciences for creating the Capital Asset Pricing Model."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If the risk-free rate is 3.5%, the expected market return is 9.0%, and a stock has a beta of 1.40, what is the cost of equity according to CAPM?",
          "options": [
            "5.50% (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "12.60% (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "11.20% (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "9.00% (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))"
          ],
          "answerIndex": 2,
          "explanation": "11.20% (3.5% + 1.40 * 5.5%)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which component of a stock's total return variance can be completely eliminated through broad portfolio diversification?",
          "options": [
            "Inflation Risk (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "Beta Risk (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "Idiosyncratic (Firm-Specific / Unsystematic)",
            "Systematic Market Risk (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))"
          ],
          "answerIndex": 2,
          "explanation": "Idiosyncratic (Firm-Specific / Unsystematic) Risk."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The Capital Asset Pricing Model prices equity by compensating investors solely for systematic non-diversifiable risk as quantified by asset beta relative to the market portfolio.\"",
          "options": [
            "The Capital Asset Pricing Model prices equity by compensating investors solely for systematic non-diversifiable risk as quantified by asset beta relative to the market portfolio. (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "Idiosyncratic risk receives an extra premium in equilibrium CAPM pricing. (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "The risk-free rate is always negative in developed economies. (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "CAPM assumes all stocks have identical returns regardless of risk. (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate CAPM analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What statistical parameter measures an asset's risk-adjusted excess return above the Security Market Line?",
          "options": [
            "Standard Deviation (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "Sharpe Ratio (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "Beta (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))",
            "Jensen's Alpha (The Capital Asset Pricing Model CAPM  The Security Market Line Derivation of expected return ERi  Rf  betai ERm  Rf (U1))"
          ],
          "answerIndex": 3,
          "explanation": "Jensen's Alpha (alpha).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 2: Capital Budgeting Metrics (NPV, IRR & Payback)"
  },
  "b111-u1-l3": {
    "id": "b111-u1-l3",
    "unit": "b111-u1",
    "level": "Introductory",
    "objective": "Beta Estimation, Rolling Regressions & Shrinkage Adjustments (Linear regression of asset returns on market index returns: $R_{i, t} - R_{f, t} = \\alpha_i + \\beta_i (R_{m, t} - R_{f, t}) + \\epsilon_t$; Standard error of beta; Blume's mean-reverting adjustment $\\beta_{\\text{adj}} = \\frac{1}{3}(1.0) + \\frac{2}{3}\\beta_{\\text{raw}}$; Vasicek Bayesian shrinkage estimation).",
    "presentation": {
      "explanation": "Empirical Beta Estimation and Statistical Shrinkage Techniques:\n- **The Characteristic Line OLS Regression**:\n  - Regressing 60 monthly (or 252 daily) excess returns of asset $i$ against market index $m$ (e.g., S&P 500):\n    $$(R_{i, t} - R_{f, t}) = \\alpha_i + \\beta_i (R_{m, t} - R_{f, t}) + \\epsilon_t$$\n  - **Standard Error of Beta**: $\\text{SE}(\\hat{\\beta}) = \\frac{\\sigma_\\epsilon}{\\sigma_m \\sqrt{N}}$;\n- **The Problem of Mean Reversion (Blume 1975)**:\n  - Over time, firms become more diversified, enter new product markets, and converge toward average macroeconomic risk (Beta of 1.0);\n  - **Blume Adjustment (Bloomberg Standard)**:\n    $$\\beta_{\\text{Blume}} = 0.33 + 0.67 \\cdot \\beta_{\\text{raw}} = \\frac{1}{3}(1.0) + \\frac{2}{3} \\beta_{\\text{raw}}$$\n- **Vasicek Bayesian Shrinkage (Vasicek 1973)**:\n  - Adjusts beta based on the precision of its estimation (standard error $\\sigma_{\\beta_i}^2$) relative to the cross-sectional market beta variance $\\sigma_{\\bar{\\beta}}^2$:\n    $$\\beta_{\\text{Vasicek}} = w_i \\beta_{\\text{raw}} + (1 - w_i) \\bar{\\beta} \\quad \\text{where } w_i = \\frac{\\sigma_{\\bar{\\beta}}^2}{\\sigma_{\\bar{\\beta}}^2 + \\sigma_{\\beta_i}^2}$$.",
      "examples": [
        {
          "target": "If a stock has a raw regression beta of 1.60, Blume adjustment calculates adjusted beta as 0.33 + 0.67 * 1.60 = 1.402.",
          "reading": "If a stock has...",
          "translation": "If a stock has a raw regression beta of 1.60, Blume adjustment calculates adjusted beta as 1.402."
        }
      ],
      "mnemonics": [
        "Beta Estimation! 60-month OLS regression! Blume Adjustment: Beta_adj = 0.33 + 0.67 * Beta_raw! Mean reversion to 1.0! Vasicek Bayesian shrinkage weights by standard error!"
      ],
      "culturalNotes": [
        "Bloomberg terminals apply Marshall Blume's 1975 formula by default on the BETA command across all global equities."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Using the standard Blume formula (Beta_adj = 0.33 + 0.67 * Beta_raw), what is the adjusted beta for a utility stock with a raw historical beta of 0.70?",
          "options": [
            "0.799 (Beta Estimation (U1))",
            "0.700 (Beta Estimation (U1))",
            "0.469 (Beta Estimation (U1))",
            "1.000 (Beta Estimation (U1))"
          ],
          "answerIndex": 0,
          "explanation": "0.799 (0.33 + 0.469)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why do empirical financial economists adjust raw regression betas toward 1.0 using shrinkage techniques?",
          "options": [
            "Because all stocks eventually go bankrupt. (Beta Estimation (U1))",
            "Because beta cannot exceed 1.0. (Beta Estimation (U1))",
            "Because regression errors must sum to 1.0. (Beta Estimation (U1))",
            "Because empirical evidence demonstrates that firm betas mean-revert toward the market average over multi-year horizons. (Beta Estimation (U1))"
          ],
          "answerIndex": 3,
          "explanation": "Because firm betas mean-revert toward 1.0 over time."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The Vasicek shrinkage estimator shrinks uncertain raw beta estimates with high standard errors more aggressively toward the cross-sectional market prior mean of 1.0.\"",
          "options": [
            "Beta regression requires at least 500 years of daily data. (Beta Estimation (U1))",
            "Blume adjustment multiplies raw beta by 10. (Beta Estimation (U1))",
            "Vasicek adjustment sets all stock returns to zero. (Beta Estimation (U1))",
            "The Vasicek shrinkage estimator shrinks uncertain raw beta estimates with high standard errors more aggressively toward the cross-sectional market prior mean of 1.0. (Beta Estimation (U1))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Vasicek beta shrinkage analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What default time horizon is standard in institutional equity research for estimating raw monthly betas?",
          "options": [
            "1 Quarter (Beta Estimation (U1))",
            "100 Years (Beta Estimation (U1))",
            "60 Months (Beta Estimation (U1))",
            "10 Days (Beta Estimation (U1))"
          ],
          "answerIndex": 2,
          "explanation": "60 Months (5 Years of Monthly Returns).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 3: Modern Portfolio Theory & Mean-Variance Optimization"
  },
  "b111-u1-l4": {
    "id": "b111-u1-l4",
    "unit": "b111-u1",
    "level": "Intermediate",
    "objective": "Capital Structure & The Hamada Equation: Unlevering & Relevering Beta (Mathematical derivation of asset/unlevered beta $\\beta_U$ from equity/levered beta $\\beta_L$; The Hamada Equation: $\\beta_L = \\beta_U [1 + (1 - T_c)(D/E)]$; Debt beta $\\beta_D$ adjustment for distressed firms; Unlevering peer comparables and relevering to target capital structure).",
    "presentation": {
      "explanation": "Unlevering and Relevering Betas: The Hamada Equation:\n- **The Financial Problem**:\n  - A company's observed equity beta $\\beta_L$ reflects two distinct risks: **1. Business/Operating Risk** (nature of operations), and **2. Financial Risk** (debt leverage);\n  - To value a private company or change a firm's capital structure, we must isolate pure operating risk (**Unlevered Asset Beta $\\beta_U$**) from peer comparables;\n- **The Hamada Equation (Robert Hamada 1972)**:\n  - Assuming debt beta $\\beta_D = 0$ and debt interest provides a permanent corporate tax shield at rate $T_c$:\n    $$\\beta_L = \\beta_U \\left[ 1 + (1 - T_c) \\frac{D}{E} \\right]$$\n  - **Unlevering Formula**:\n    $$\\beta_U = \\frac{\\beta_L}{1 + (1 - T_c) \\frac{D}{E}}$$\n- **Generalized Unlevering with Debt Beta (Fernandez Formula)**:\n  - When debt is risky and has non-zero beta $\\beta_D$:\n    $$\\beta_U = \\frac{\\beta_L + \\beta_D (1 - T_c) \\frac{D}{E}}{1 + (1 - T_c) \\frac{D}{E}}$$\n- **The 3-Step Pure-Play Peer Comps Workflow**:\n  - **1.** Collect levered betas $\\beta_{L, i}$, debt-to-equity ratios $(D/E)_i$, and tax rates $T_{c, i}$ for 5–10 public peer companies;\n  - **2.** Unlever each peer to compute $\\beta_{U, i}$ and take the median unlevered beta $\\bar{\\beta}_U$;\n  - **3.** Relever $\\bar{\\beta}_U$ using the target firm's target capital structure $(D/E)_{\\text{target}}$.",
      "examples": [
        {
          "target": "If a peer has levered beta 1.50, D/E = 0.50, and tax rate 20%, unlevered beta is 1.50 / (1 + 0.80 * 0.50) = 1.071.",
          "reading": "If a peer has...",
          "translation": "If a peer has levered beta 1.50, D/E = 0.50, and tax rate 20%, unlevered beta is 1.071."
        }
      ],
      "mnemonics": [
        "Hamada Equation! Beta_L = Beta_U * [1 + (1 - Tc) * (D/E)]! Unlever peer betas to find pure business risk Beta_U! Relever to target D/E! Debt beta Beta_D for distressed credit!"
      ],
      "culturalNotes": [
        "Robert Hamada published this derivation in 1972 in the Journal of Finance, merging Modigliani-Miller capital structure theory with the CAPM."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If an enterprise has an unlevered asset beta of 0.90, a marginal corporate tax rate of 25%, and targets a debt-to-equity ratio of 0.80, what is its relevered equity beta?",
          "options": [
            "0.90 (Capital Structure  The Hamada Equation (U1))",
            "2.00 (Capital Structure  The Hamada Equation (U1))",
            "1.10 (Capital Structure  The Hamada Equation (U1))",
            "1.44 (Capital Structure  The Hamada Equation (U1))"
          ],
          "answerIndex": 3,
          "explanation": "1.44 (0.90 * [1 + 0.75 * 0.80] = 0.90 * 1.60)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why do investment bankers unlever the betas of public peer companies before calculating the cost of capital for a target acquisition?",
          "options": [
            "To remove the distorting effects of differing financial leverage across peers, isolating pure operating business risk. (Capital Structure  The Hamada Equation (U1))",
            "To reduce taxes to zero. (Capital Structure  The Hamada Equation (U1))",
            "Because debt has no cost. (Capital Structure  The Hamada Equation (U1))",
            "To convert equity into cash. (Capital Structure  The Hamada Equation (U1))"
          ],
          "answerIndex": 0,
          "explanation": "To remove differing financial leverage and isolate pure operating business risk."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The Hamada equation isolates operational asset risk by stripping financial leverage from equity beta, allowing analysts to relever the median industry beta to the target capital structure.\"",
          "options": [
            "Debt-to-equity ratio has zero mathematical impact on equity beta. (Capital Structure  The Hamada Equation (U1))",
            "Unlevered beta is always larger than levered beta for firms with debt. (Capital Structure  The Hamada Equation (U1))",
            "The Hamada equation isolates operational asset risk by stripping financial leverage from equity beta, allowing analysts to relever the median industry beta to the target capital structure. (Capital Structure  The Hamada Equation (U1))",
            "The Hamada equation assumes corporate income taxes do not exist. (Capital Structure  The Hamada Equation (U1))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Hamada equation analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What happens to a firm's levered equity beta Beta_L as it issues debt to repurchase shares, increasing its D/E ratio?",
          "options": [
            "Beta_L decreases to zero. (Capital Structure  The Hamada Equation (U1))",
            "Beta_L increases linearly with the debt-to-equity ratio. (Capital Structure  The Hamada Equation (U1))",
            "Beta_L becomes negative. (Capital Structure  The Hamada Equation (U1))",
            "Beta_L remains strictly constant. (Capital Structure  The Hamada Equation (U1))"
          ],
          "answerIndex": 1,
          "explanation": "Beta_L increases linearly with the debt-to-equity ratio.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 4: The Capital Asset Pricing Model (CAPM) & Beta Estimation"
  },
  "b111-u1-l5": {
    "id": "b111-u1-l5",
    "unit": "b111-u1",
    "level": "Intermediate",
    "objective": "Weighted Average Cost of Capital (WACC): Formulation & Market-Value Weights (WACC = (E/V)*r_e + (D/V)*r_d*(1 - T_c) + (P/V)*r_p; Market value weights vs book value weights; Circularity in target vs implied weights; Tax shield deductibility and blended hurdle rates).",
    "presentation": {
      "explanation": "The Weighted Average Cost of Capital (WACC):\n- **The Canonical WACC Formula**:\n  $$\\text{WACC} = w_e \\cdot r_e + w_d \\cdot r_d (1 - T_c) + w_p \\cdot r_p$$\n  where:\n  - $w_e = \\frac{E}{V}$, $w_d = \\frac{D}{V}$, $w_p = \\frac{P}{V}$ with total enterprise capital $V = E + D + P$;\n  - $r_e$: Cost of Equity (derived via CAPM);\n  - $r_d$: Pre-tax Cost of Debt (yield-to-maturity on corporate debt);\n  - $1 - T_c$: After-tax adjustment reflecting interest expense tax deductibility (**Debt Tax Shield**);\n  - $r_p$: Cost of Preferred Equity ($r_p = D_p / P_0$, with zero tax deductibility);\n- **Critical Institutional Rules of WACC**:\n  - **1. Market Value Weights**: Weights must strictly use **Market Value of Equity ($E = \\text{Share Price} \\times \\text{Shares Outstanding}$)** and Market Value of Debt, NEVER historical book accounting values;\n  - **2. The Hurdle Rate**: WACC represents the minimum required rate of return an enterprise must earn on its existing asset base to satisfy all debt and equity capital providers;\n  - **3. Consistency Principle**: Cash flows discounted at WACC must strictly be **Free Cash Flow to Firm (FCFF / Unlevered Free Cash Flow)**.",
      "examples": [
        {
          "target": "If E/V = 70%, D/V = 30%, Cost of Equity = 10%, Pre-tax Cost of Debt = 6%, and Tax Rate = 25%, WACC = 0.70*10% + 0.30*6%*0.75 = 8.35%.",
          "reading": "If E/V = 70%...",
          "translation": "If E/V = 70%, D/V = 30%, re = 10%, rd = 6%, and Tc = 25%, WACC is 8.35%."
        }
      ],
      "mnemonics": [
        "WACC = (E/V)*re + (D/V)*rd*(1-Tc) + (P/V)*rp! Always use Market Values, NOT Book Values! Debt Tax Shield (1 - Tc)! Discount FCFF at WACC!"
      ],
      "culturalNotes": [
        "WACC is the central discount rate used in over 90% of fairness opinions submitted to the SEC in corporate mergers and acquisitions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If an enterprise has market equity of $600M (cost of equity 12%) and debt of $400M (pre-tax cost of debt 5%), with a 20% corporate tax rate, what is its WACC?",
          "options": [
            "8.80% (Weighted Average Cost of Capital WACC (U1))",
            "7.20% (Weighted Average Cost of Capital WACC (U1))",
            "12.00% (Weighted Average Cost of Capital WACC (U1))",
            "10.00% (Weighted Average Cost of Capital WACC (U1))"
          ],
          "answerIndex": 0,
          "explanation": "8.80% (7.20% + 1.60%)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why must capital structure weights (E/V and D/V) in WACC be calculated using market values rather than accounting book values?",
          "options": [
            "Because market values reflect the current economic opportunity cost of capital required by financial markets. (Weighted Average Cost of Capital WACC (U1))",
            "Because accounting book values change every second. (Weighted Average Cost of Capital WACC (U1))",
            "Because GAAP requires book values. (Weighted Average Cost of Capital WACC (U1))",
            "Because market values are always zero. (Weighted Average Cost of Capital WACC (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Because market values reflect the current economic opportunity cost of capital."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Discounting unlevered free cash flows at the weighted average cost of capital accounts for the interest tax shield in the discount rate while valuing the total enterprise.\"",
          "options": [
            "WACC discounts levered equity cash flows directly. (Weighted Average Cost of Capital WACC (U1))",
            "Discounting unlevered free cash flows at the weighted average cost of capital accounts for the interest tax shield in the discount rate while valuing the total enterprise. (Weighted Average Cost of Capital WACC (U1))",
            "Interest payments are never tax deductible under corporate law. (Weighted Average Cost of Capital WACC (U1))",
            "Preferred stock receives an automatic 50% corporate tax shield. (Weighted Average Cost of Capital WACC (U1))"
          ],
          "answerIndex": 1,
          "explanation": "Accurate WACC analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which free cash flow metric must be discounted at WACC to produce Enterprise Value without double-counting capital structure effects?",
          "options": [
            "Free Cash Flow to Firm (Weighted Average Cost of Capital WACC (U1))",
            "Free Cash Flow to Equity (Weighted Average Cost of Capital WACC (U1))",
            "Net Income (Weighted Average Cost of Capital WACC (U1))",
            "EBITDA (Weighted Average Cost of Capital WACC (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Free Cash Flow to Firm (FCFF).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 5: Weighted Average Cost of Capital (WACC) & Cost of Capital"
  },
  "b111-u1-l6": {
    "id": "b111-u1-l6",
    "unit": "b111-u1",
    "level": "Intermediate",
    "objective": "The Cost of Debt: Yield-to-Maturity (YTM), Credit Default Spreads & Synthetic Ratings (Yield-to-Maturity on publicly traded bonds; Credit default spread lookup tables based on Interest Coverage Ratio $\\text{ICR} = \\frac{\\text{EBIT}}{\\text{Interest Expense}}$; Damodaran synthetic credit rating framework; Marginal borrowing rate vs historical coupon rate).",
    "presentation": {
      "explanation": "Estimating the Pre-Tax Cost of Debt ($r_d$):\n- **The Fundamental Principle**:\n  - The cost of debt is the **current marginal market borrowing rate** for the company, NOT its historical coupon rate on old bonds;\n- **Methods of Estimation**:\n  - **1. Yield-to-Maturity (YTM) on Liquid Bonds**:\n    - For companies with publicly traded, liquid long-term bonds:\n      $$P_0 = \\sum_{t=1}^T \\frac{C}{(1 + r_d)^t} + \\frac{M}{(1 + r_d)^T}$$\n    - Solve for internal rate of return $r_d$ (YTM);\n  - **2. Credit Default Spread Approach (For Rated Companies)**:\n    $$r_d = R_f + \\text{Credit Default Spread}_{\\text{Rating}}$$\n    (e.g., if $R_f = 4.0\\%$ and BBB spread is $1.80\\%$, $r_d = 5.80\\%$);\n  - **3. Synthetic Credit Rating (Aswath Damodaran Framework)**:\n    - For private or unrated companies, compute the **Interest Coverage Ratio (ICR)**:\n      $$\\text{ICR} = \\frac{\\text{Operating Income (EBIT)}}{\\text{Annual Interest Expense}}$$\n    - Map ICR into synthetic rating table (e.g., $\\text{ICR} > 8.5 \\implies \\text{AAA}$ with spread $0.60\\%$; $\\text{ICR} \\in [3.0, 4.5] \\implies \\text{BBB}$ with spread $1.75\\%$).",
      "examples": [
        {
          "target": "If a company has EBIT of $50M and interest of $10M, ICR = 5.0 yields a synthetic A rating with a 1.25% default spread over Treasury yield.",
          "reading": "If a company has...",
          "translation": "If a company has EBIT of $50M and interest of $10M, ICR = 5.0 yields a synthetic A rating."
        }
      ],
      "mnemonics": [
        "Cost of Debt rd! Current marginal rate, NOT historical coupon! YTM on public debt! Synthetic Rating via Interest Coverage Ratio (ICR = EBIT / Interest Expense)! Default spread + Rf!"
      ],
      "culturalNotes": [
        "Professor Aswath Damodaran (NYU Stern - \"The Dean of Valuation\") maintains the world's definitive global synthetic credit spread tables updated semi-annually."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If an unrated enterprise generates $60M in EBIT and pays $15M in annual interest expense, what is its Interest Coverage Ratio (ICR)?",
          "options": [
            "4.0x (The Cost of Debt (U1))",
            "0.25x (The Cost of Debt (U1))",
            "45.0x (The Cost of Debt (U1))",
            "15.0x (The Cost of Debt (U1))"
          ],
          "answerIndex": 0,
          "explanation": "4.0x ($60M / $15M)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why is using a firm's historical bond coupon rate incorrect when determining the cost of debt for a forward-looking WACC calculation?",
          "options": [
            "Because coupon rates reflect past borrowing costs, whereas WACC requires the marginal cost of raising new debt in current market conditions. (The Cost of Debt (U1))",
            "Because bonds never mature. (The Cost of Debt (U1))",
            "Because coupon rates violate GAAP. (The Cost of Debt (U1))",
            "Because coupon rates are always zero. (The Cost of Debt (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Because coupon rates reflect past borrowing costs, not current marginal rates."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Synthetic credit rating estimation computes the interest coverage ratio from operating earnings to map unrated private enterprises to empirical corporate default spreads.\"",
          "options": [
            "Synthetic credit rating estimation computes the interest coverage ratio from operating earnings to map unrated private enterprises to empirical corporate default spreads. (The Cost of Debt (U1))",
            "Credit default spreads are fixed at 50% for all companies. (The Cost of Debt (U1))",
            "Interest coverage ratio is calculated by dividing total assets by stock price. (The Cost of Debt (U1))",
            "Cost of debt equals dividend yield on common stock. (The Cost of Debt (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Cost of debt analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If the 10-year Treasury yield is 4.25% and a corporate bond rating carries a default spread of 175 basis points (1.75%), what is the pre-tax cost of debt?",
          "options": [
            "4.25% (The Cost of Debt (U1))",
            "1.75% (The Cost of Debt (U1))",
            "7.50% (The Cost of Debt (U1))",
            "6.00% (The Cost of Debt (U1))"
          ],
          "answerIndex": 3,
          "explanation": "6.00% (4.25% + 1.75%).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 6: Capital Structure Theory & Modigliani-Miller Theorems"
  },
  "b111-u1-l7": {
    "id": "b111-u1-l7",
    "unit": "b111-u1",
    "level": "Intermediate",
    "objective": "Modigliani-Miller Theorems & The Limits of Leverage (MM Proposition I without taxes: $V_L = V_U$; MM Proposition II without taxes: $r_e = r_0 + (r_0 - r_d)(D/E)$; MM Proposition I with corporate taxes: $V_L = V_U + T_c D$; Trade-off Theory of Capital Structure: balancing tax shields against the present value of Expected Financial Distress Costs).",
    "presentation": {
      "explanation": "The Modigliani-Miller Capital Structure Theorems (1958, 1963):\n- **MM Proposition I (Without Taxes - Irrelevance Theorem)**:\n  - In frictionless markets (no taxes, no bankruptcy costs, symmetric information), **total enterprise value is independent of capital structure**:\n    $$V_L = V_U$$\n- **MM Proposition II (Without Taxes)**:\n  - The cost of equity rises linearly with leverage to exactly offset the cheaper cost of debt:\n    $$r_e = r_0 + (r_0 - r_d) \\frac{D}{E}$$\n- **MM Proposition I (With Corporate Taxes 1963)**:\n  - Interest deductibility creates a perpetual **Debt Tax Shield** valued at $T_c D$:\n    $$V_L = V_U + T_c D$$\n  - Suggests optimal leverage is 100% debt!\n- **Static Trade-Off Theory (Real-World Equilibrium)**:\n  - In reality, excessive debt creates **Expected Costs of Financial Distress** (legal bankruptcy fees, customer flight, key employee attrition, supplier contraction):\n    $$V_L = V_U + \\text{PV}(\\text{Interest Tax Shield}) - \\text{PV}(\\text{Financial Distress Costs})$$\n  - Optimal capital structure occurs at the exact leverage ratio $D^*$ where marginal tax shield benefit equals marginal distress cost.",
      "examples": [
        {
          "target": "Trade-off theory balances the present value of debt tax shields (Tc * D) against rising financial distress costs to identify optimal leverage D*.",
          "reading": "Trade-off theory...",
          "translation": "Trade-off theory balances debt tax shields against financial distress costs."
        }
      ],
      "mnemonics": [
        "Modigliani-Miller 1958: VL = VU (No taxes = Capital structure irrelevance)! MM 1963: VL = VU + Tc*D (Taxes create tax shield)! Trade-off Theory: VL = VU + PV(Tax Shield) - PV(Distress Costs)! Optimal D* at marginal intersection!"
      ],
      "culturalNotes": [
        "Franco Modigliani (1985 Nobel) and Merton Miller (1990 Nobel) revolutionized corporate finance by proving these irrelevance and tax theorems."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Under Modigliani-Miller Proposition I with corporate taxes, what is the value of a levered firm (V_L) relative to an unlevered firm (V_U)?",
          "options": [
            "V_L = V_U - D (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "V_L = V_U / (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "V_L = T_c * D (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "V_L = V_U + T_c * D (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))"
          ],
          "answerIndex": 3,
          "explanation": "V_L = V_U + T_c * D."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What real-world cost prevents corporations from adopting 100% debt capital structures according to the Trade-off Theory?",
          "options": [
            "Corporate tax rates reaching 100%. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "Lack of printing presses. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "Stock exchanges prohibiting debt. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "The present value of expected financial distress and bankruptcy costs. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))"
          ],
          "answerIndex": 3,
          "explanation": "The present value of expected financial distress and bankruptcy costs."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The static trade-off theory establishes that optimal corporate leverage balances the tax benefits of debt interest deductions against the escalating probability of financial distress.\"",
          "options": [
            "Modigliani-Miller proved that equity is always cheaper than debt. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "Financial distress costs are zero in bankruptcy. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "Corporate value is maximized with zero revenue. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "The static trade-off theory establishes that optimal corporate leverage balances the tax benefits of debt interest deductions against the escalating probability of financial distress. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Modigliani-Miller analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In the absence of corporate taxes and market frictions, what happens to WACC as a company changes its debt-to-equity ratio under MM Proposition I?",
          "options": [
            "WACC equals the risk-free rate. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "WACC increases exponentially. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "WACC remains completely constant. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))",
            "WACC drops to zero. (ModiglianiMiller Theorems  The Limits of Leverage MM Proposition I without taxes (U1))"
          ],
          "answerIndex": 2,
          "explanation": "WACC remains completely constant.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 7: Financial Statement Analysis & Dupont Decomposition"
  },
  "b111-u1-l8": {
    "id": "b111-u1-l8",
    "unit": "b111-u1",
    "level": "Advanced",
    "objective": "Adjusted Present Value (APV) Framework for Highly Leveraged Transactions (The APV valuation equation: $\\text{APV} = \\text{Unlevered Base-Case NPV} + \\text{PV}(\\text{Financing Side Effects})$; Unlevered cost of equity $r_0$; Valuing debt tax shields under fixed debt schedules ($r_d$ discount rate, Miles-Ezzell vs Harris-Pringle); Valuing subsidized financing and flotation costs).",
    "presentation": {
      "explanation": "The Adjusted Present Value (APV) Framework (Stewart Myers 1974):\n- **Why APV Over WACC for LBOs and Dynamic Debt**:\n  - Standard WACC assumes a **constant debt-to-equity ratio** ($D/E$) over time;\n  - In Leveraged Buyouts (LBOs) and project finance, debt follows a **fixed dollar repayment schedule** (e.g., paying down $500M of debt over 5 years), making $D/E$ change every single quarter!\n  - APV unbundles the valuation of operations from financing side-effects, avoiding circular WACC iterations;\n- **The APV Formula**:\n  $$\\text{APV} = \\text{Base-Case Unlevered Value } (V_U) + \\text{PV}(\\text{Tax Shields}) - \\text{PV}(\\text{Bankruptcy Costs}) + \\text{PV}(\\text{Subsidized Debt})$$\n- **Step-by-Step APV Valuation**:\n  - **1. Base-Case Unlevered Enterprise Value ($V_U$)**:\n    - Discount all projected Free Cash Flows to Firm (FCFF) at the **unlevered cost of equity $r_0$** (derived from unlevered asset beta $\\beta_U$):\n      $$V_U = \\sum_{t=1}^T \\frac{\\text{FCFF}_t}{(1 + r_0)^t} + \\frac{\\text{Terminal Value}_U}{(1 + r_0)^T}$$\n  - **2. Present Value of Tax Shields**:\n    - If debt dollar levels are predetermined (fixed schedule), discount annual interest tax shields ($T_c \\cdot r_d \\cdot D_t$) at the **cost of debt $r_d$** (since tax shields have the same default risk as the debt itself):\n      $$\\text{PV}(\\text{Tax Shields}) = \\sum_{t=1}^T \\frac{T_c \\cdot r_d \\cdot D_{t-1}}{(1 + r_d)^t}$$.",
      "examples": [
        {
          "target": "In an LBO with a 5-year debt paydown schedule, APV values the core enterprise at unlevered r0 and discounts annual tax shields at rd.",
          "reading": "In an LBO...",
          "translation": "In an LBO with a 5-year debt paydown schedule, APV values the core enterprise at unlevered r0."
        }
      ],
      "mnemonics": [
        "APV Framework (Stewart Myers 1974)! APV = Unlevered Base Value (V_U at r0) + PV(Tax Shields at rd)! Essential for LBOs where D/E changes every year! Avoids WACC circularity!"
      ],
      "culturalNotes": [
        "Private equity mega-funds (KKR, Blackstone, Apollo) use APV as their primary valuation engine for structuring complex multi-tranche LBO debt repayments."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why is the Adjusted Present Value (APV) method mathematically superior to WACC for valuing Leveraged Buyouts (LBOs)?",
          "options": [
            "Because LBOs have changing debt-to-equity ratios as debt is aggressively paid down, violating WACC's constant-D/E assumption. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "Because APV eliminates all corporate taxes. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "Because APV requires no cash flow forecasts. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "Because WACC cannot be calculated on computers. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Because LBOs have changing debt-to-equity ratios as debt is paid down."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Under the APV framework with predetermined fixed debt dollar levels, at what discount rate should interest tax shields be discounted?",
          "options": [
            "At the WACC (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "At the risk-free rate (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "At zero (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "At the cost of debt r_d (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))"
          ],
          "answerIndex": 3,
          "explanation": "At the cost of debt r_d (reflecting debt default risk)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The Adjusted Present Value framework separates the valuation of fundamental operational cash flows from financing side effects, providing precision for transactions with changing leverage ratios.\"",
          "options": [
            "Tax shields have zero financial value in buyout modeling. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "Unlevered cost of equity is always higher than levered cost of equity. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "The Adjusted Present Value framework separates the valuation of fundamental operational cash flows from financing side effects, providing precision for transactions with changing leverage ratios. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "APV cannot be used for any company with debt. (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate APV analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What discount rate is used to compute the base-case unlevered enterprise value V_U in the APV model?",
          "options": [
            "The weighted average cost of capital (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "The unlevered cost of equity (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "The pre-tax cost of debt (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))",
            "The levered cost of equity (Adjusted Present Value APV Framework for Highly Leveraged Transactions The APV valuation equation (U1))"
          ],
          "answerIndex": 1,
          "explanation": "The unlevered cost of equity (r_0).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 8: Working Capital Management & Cash Conversion Cycle"
  },
  "b111-u1-l9": {
    "id": "b111-u1-l9",
    "unit": "b111-u1",
    "level": "Advanced",
    "objective": "Module Capstone: Enterprise Cost of Capital & Capital Structure Synthesis (Comprehensive institutional integration: multi-factor CAPM, Fama-French 3-factor and 5-factor models, synthetic credit rating spreads, Hamada relevering, and WACC vs APV selection matrix).",
    "presentation": {
      "explanation": "Module Capstone: The Master Cost of Capital & Valuation Architecture:\n- **The Multi-Factor Asset Pricing Frontier**:\n  - **Fama-French 5-Factor Model (2015)**:\n    $$E[R_i] - R_f = \\beta_{i, m} \\text{ERP} + s_i \\text{SMB} + h_i \\text{HML} + r_i \\text{RMW} + c_i \\text{CMA}$$\n    (Size, Value, Profitability, and Investment factors);\n- **The WACC vs APV Decision Framework**:\n  - **Use WACC when**: The firm maintains a target debt-to-equity ratio over time;\n  - **Use APV when**: Debt levels are fixed in absolute dollar terms (LBOs, real estate project financing, restructuring);\n- **Complete Parameter Synthesis Pipeline**:\n  - 1. Unlever peer raw betas $\\beta_{L} \\to \\beta_U$ via Hamada equation;\n  - 2. Calculate corporate synthetic credit rating from Interest Coverage Ratio (ICR);\n  - 3. Relever $\\beta_U \\to \\beta_{L, \\text{target}}$ and compute Cost of Equity via CAPM;\n  - 4. Construct institutional WACC / APV hurdle rates.",
      "examples": [
        {
          "target": "The valuation architecture integrates Fama-French factor risk premiums, Hamada unlevering, and the WACC vs APV selection matrix.",
          "reading": "The valuation architecture...",
          "translation": "The valuation architecture integrates Fama-French factor risk premiums, Hamada unlevering, and WACC vs APV selection."
        }
      ],
      "mnemonics": [
        "Module Capstone! CAPM & Fama-French 5-Factor! Hamada Unlevering/Relevering! Synthetic Ratings from ICR! WACC (Constant D/E) vs APV (Fixed Debt Schedule)! Complete Cost of Capital Mastery!"
      ],
      "culturalNotes": [
        "Eugene Fama (2013 Nobel) and Kenneth French expanded CAPM into empirical multi-factor models that form the backbone of quantitative hedge fund factor investing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which multi-factor pricing model expands CAPM by adding Size (SMB), Value (HML), Profitability (RMW), and Investment (CMA) factors?",
          "options": [
            "The Black-Scholes Model (Module Capstone (U1))",
            "The Gordon Growth Model (Module Capstone (U1))",
            "The Hamada Equation (Module Capstone (U1))",
            "The Fama-French 5-Factor Model (Module Capstone (U1))"
          ],
          "answerIndex": 3,
          "explanation": "The Fama-French 5-Factor Model."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In corporate valuation, under what capital structure policy is standard WACC mathematically equivalent to Adjusted Present Value (APV)?",
          "options": [
            "When debt is rebalanced continuously to maintain a strictly constant market debt-to-equity ratio (Miles-Ezzell condition)",
            "When the company has zero cash flow. (Module Capstone (U1))",
            "When tax rates are 100%. (Module Capstone (U1))",
            "Never. (Module Capstone (U1))"
          ],
          "answerIndex": 0,
          "explanation": "When debt is rebalanced continuously to maintain a constant market D/E ratio."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The institutional cost of capital synthesis establishes a rigorous parameter pipeline from multi-factor risk estimation and credit rating spreads to optimal hurdle rate formulation.\"",
          "options": [
            "Fama-French models only work on commodity wheat futures. (Module Capstone (U1))",
            "The institutional cost of capital synthesis establishes a rigorous parameter pipeline from multi-factor risk estimation and credit rating spreads to optimal hurdle rate formulation. (Module Capstone (U1))",
            "Cost of capital cannot be estimated using financial data. (Module Capstone (U1))",
            "All companies have identical WACCs regardless of industry. (Module Capstone (U1))"
          ],
          "answerIndex": 1,
          "explanation": "Accurate Cost of capital synthesis analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What factor in the Fama-French model captures the excess return of high book-to-market (value) stocks over low book-to-market (growth) stocks?",
          "options": [
            "HML (Module Capstone (U1))",
            "SMB (Module Capstone (U1))",
            "CMA (Module Capstone (U1))",
            "RMW (Module Capstone (U1))"
          ],
          "answerIndex": 0,
          "explanation": "HML (High Minus Low).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 9: Corporate Valuation Overview (DCF, Comps, Precedents)"
  },
  "b111-u2-l1": {
    "id": "b111-u2-l1",
    "unit": "b111-u2",
    "level": "Intermediate",
    "objective": "3-Statement Financial Modeling Architecture: Dynamic Integration of P&L, Balance Sheet & Cash Flow (The core accounting linkages: Net Income flow into Retained Earnings; D&A flow from Income Statement into Cash Flow and PP&E schedules; Working capital changes; Cash Flow ending balance linking to Balance Sheet Cash).",
    "presentation": {
      "explanation": "The 3-Statement Integrated Financial Model:\n- **The Architectural Engine of Corporate Finance**:\n  - Dynamically links the **Income Statement (P&L)**, **Balance Sheet (BS)**, and **Cash Flow Statement (CFS)** across historical and forecast horizons;\n- **The 4 Fundamental Integration Linkages**:\n  - **1. Net Income Link**: Net Income from P&L flows into the top line of Cash Flow from Operations (CFO) AND adds to **Retained Earnings** on the Balance Sheet ($\\text{Ending RE} = \\text{Beginning RE} + \\text{Net Income} - \\text{Dividends}$);\n  - **2. Depreciation & Amortization (D&A)**: Non-cash expense on P&L is added back in CFO, and reduces Net PP&E on the Balance Sheet ($\\text{Ending Net PP\\&E} = \\text{Beginning Net PP\\&E} + \\text{CapEx} - \\text{D\\&A}$);\n  - **3. Working Capital Changes ($\\Delta\\text{NWC}$)**: Balance sheet asset/liability movements flow into CFO (Increase in Current Assets is a cash outflow; Increase in Current Liabilities is a cash inflow);\n  - **4. The Cash Plug**: Ending Cash on CFS flows directly to **Cash & Cash Equivalents** on the Balance Sheet, forcing $\\text{Total Assets} = \\text{Total Liabilities} + \\text{Total Equity}$ without circular errors.",
      "examples": [
        {
          "target": "Net Income flows to the Cash Flow Statement and Retained Earnings, while ending Cash from the CFS balances the Balance Sheet.",
          "reading": "Net Income flows...",
          "translation": "Net Income flows to the Cash Flow Statement and Retained Earnings."
        }
      ],
      "mnemonics": [
        "3-Statement Architecture! 1. Net Income -> CFO & Retained Earnings! 2. D&A -> CFO addback & PP&E reduction! 3. Working Capital changes -> CFO! 4. Ending Cash from CFS plugs to Balance Sheet Cash! Assets = Liabilities + Equity!"
      ],
      "culturalNotes": [
        "Investment banking analysts build 3-statement models as the mandatory starting baseline before executing any M&A, LBO, or IPO valuation."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How does a $10M increase in Depreciation affect the 3 statements assuming a 20% corporate tax rate?",
          "options": [
            "Operating Income drops by $10M, Net Income drops by $8M, Cash Flow from Operations increases by $2M (3Statement Financial Modeling Architecture (U2))",
            "Net income increases by $10M. (3Statement Financial Modeling Architecture (U2))",
            "Total assets increase by $8M. (3Statement Financial Modeling Architecture (U2))",
            "Cash decreases by $10M. (3Statement Financial Modeling Architecture (U2))"
          ],
          "answerIndex": 0,
          "explanation": "Operating Income drops by $10M, Net Income drops by $8M, Cash Flow from Operations increases by $2M."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Where does the ending Cash balance calculated at the bottom of the Cash Flow Statement flow into the Balance Sheet?",
          "options": [
            "Directly into Cash & Cash Equivalents under Current Assets, balancing the balance sheet. (3Statement Financial Modeling Architecture (U2))",
            "Into Long-Term Debt. (3Statement Financial Modeling Architecture (U2))",
            "Into Accounts Payable. (3Statement Financial Modeling Architecture (U2))",
            "Into Common Stock. (3Statement Financial Modeling Architecture (U2))"
          ],
          "answerIndex": 0,
          "explanation": "Directly into Cash & Cash Equivalents under Current Assets."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The three-statement financial model dynamically links operating income, capital expenditures, debt amortization, and working capital into an auto-balancing balance sheet.\"",
          "options": [
            "The three-statement financial model dynamically links operating income, capital expenditures, debt amortization, and working capital into an auto-balancing balance sheet. (3Statement Financial Modeling Architecture (U2))",
            "Balance sheets never need to balance in Wall Street models. (3Statement Financial Modeling Architecture (U2))",
            "Depreciation is a cash outflow that reduces bank reserves directly. (3Statement Financial Modeling Architecture (U2))",
            "Retained earnings are kept in physical gold vaults. (3Statement Financial Modeling Architecture (U2))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate 3-statement model analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What accounting equation must strictly hold true across every projected forecast column in a 3-statement financial model?",
          "options": [
            "CapEx = Dividends (3Statement Financial Modeling Architecture (U2))",
            "Net Income = Revenue * WACC (3Statement Financial Modeling Architecture (U2))",
            "EBITDA = Cash Flow (3Statement Financial Modeling Architecture (U2))",
            "Total Assets = Total Liabilities + Shareholders' Equity (3Statement Financial Modeling Architecture (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Total Assets = Total Liabilities + Shareholders' Equity.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 1: Dynamic 3-Statement Financial Modeling"
  },
  "b111-u2-l2": {
    "id": "b111-u2-l2",
    "unit": "b111-u2",
    "level": "Intermediate",
    "objective": "Working Capital Modeling: DSO, DIO, DPO & The Cash Conversion Cycle (Days Sales Outstanding $\\text{DSO} = \\frac{\\text{AR}}{\\text{Revenue}} \\times 365$; Days Sales of Inventory $\\text{DSI/DIO} = \\frac{\\text{Inventory}}{\\text{COGS}} \\times 365$; Days Payable Outstanding $\\text{DPO} = \\frac{\\text{AP}}{\\text{COGS}} \\times 365$; The Cash Conversion Cycle $\\text{CCC} = \\text{DSO} + \\text{DIO} - \\text{DPO}$; Non-Cash Working Capital forecasting and cash flow impact).",
    "presentation": {
      "explanation": "Working Capital Modeling and the Cash Conversion Cycle (CCC):\n- **Non-Cash Net Working Capital (NWC)**:\n  $$\\text{NWC} = (\\text{Current Assets} - \\text{Cash}) - (\\text{Current Liabilities} - \\text{Short-Term Debt})$$\n  - A positive change $\\Delta\\text{NWC} > 0$ represents cash tied up in operations (a **cash outflow** in CFO);\n- **The Activity Driver Ratios**:\n  - **1. Days Sales Outstanding (DSO - Accounts Receivable)**:\n    $$\\text{DSO} = \\frac{\\text{Accounts Receivable}}{\\text{Total Revenue}} \\times 365 \\implies \\text{Forecast AR} = \\frac{\\text{DSO}}{365} \\times \\text{Forecast Revenue}$$\n  - **2. Days Inventory Outstanding (DIO - Inventory)**:\n    $$\\text{DIO} = \\frac{\\text{Inventory}}{\\text{COGS}} \\times 365 \\implies \\text{Forecast Inventory} = \\frac{\\text{DIO}}{365} \\times \\text{Forecast COGS}$$\n  - **3. Days Payable Outstanding (DPO - Accounts Payable)**:\n    $$\\text{DPO} = \\frac{\\text{Accounts Payable}}{\\text{COGS}} \\times 365 \\implies \\text{Forecast AP} = \\frac{\\text{DPO}}{365} \\times \\text{Forecast COGS}$$\n- **The Cash Conversion Cycle (CCC)**:\n  $$\\text{CCC} = \\text{DSO} + \\text{DIO} - \\text{DPO}$$\n  - Measures days between cash paid to suppliers and cash collected from customers;\n  - *Negative CCC* (e.g., Amazon, Apple): Customers pay immediately while suppliers are paid 90 days later, generating vast free float cash.",
      "examples": [
        {
          "target": "If DSO = 45 days, DIO = 60 days, and DPO = 70 days, the Cash Conversion Cycle is 45 + 60 - 70 = 35 days.",
          "reading": "If DSO = 45 days...",
          "translation": "If DSO = 45 days, DIO = 60 days, and DPO = 70 days, the Cash Conversion Cycle is 35 days."
        }
      ],
      "mnemonics": [
        "Working Capital! DSO = (AR/Rev)*365! DIO = (Inv/COGS)*365! DPO = (AP/COGS)*365! Cash Conversion Cycle CCC = DSO + DIO - DPO! Negative CCC generates free operational float cash!"
      ],
      "culturalNotes": [
        "Dell revolutionized PC manufacturing in the 1990s by achieving a negative Cash Conversion Cycle through just-in-time custom builds."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If a company has DSO of 40 days, DIO of 50 days, and negotiates with suppliers to increase DPO from 30 days to 60 days, what is its new Cash Conversion Cycle?",
          "options": [
            "30 days (Working Capital Modeling (U2))",
            "60 days (Working Capital Modeling (U2))",
            "90 days (Working Capital Modeling (U2))",
            "150 days (Working Capital Modeling (U2))"
          ],
          "answerIndex": 0,
          "explanation": "30 days (40 + 50 - 60)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How does an increase in Accounts Receivable on the Balance Sheet affect the Cash Flow Statement?",
          "options": [
            "It represents uncollected revenue and is subtracted as a cash outflow from Cash Flow from Operations. (Working Capital Modeling (U2))",
            "It has zero impact on cash. (Working Capital Modeling (U2))",
            "It increases financing cash flow. (Working Capital Modeling (U2))",
            "It is added as a cash inflow. (Working Capital Modeling (U2))"
          ],
          "answerIndex": 0,
          "explanation": "It is subtracted as a cash outflow from Cash Flow from Operations."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The cash conversion cycle quantifies working capital operational efficiency, where a negative cycle enables the enterprise to fund business growth using supplier credit float.\"",
          "options": [
            "Working capital is always equal to total long-term debt. (Working Capital Modeling (U2))",
            "DSO measures the number of employees in a factory. (Working Capital Modeling (U2))",
            "Accounts payable must be paid in gold bullion daily. (Working Capital Modeling (U2))",
            "The cash conversion cycle quantifies working capital operational efficiency, where a negative cycle enables the enterprise to fund business growth using supplier credit float. (Working Capital Modeling (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Working capital analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What activity ratio measures the average number of days required to turn inventory into completed sales?",
          "options": [
            "Days Sales Outstanding (Working Capital Modeling (U2))",
            "Days Payable Outstanding (Working Capital Modeling (U2))",
            "Days Inventory Outstanding (Working Capital Modeling (U2))",
            "Asset Turnover (Working Capital Modeling (U2))"
          ],
          "answerIndex": 2,
          "explanation": "Days Inventory Outstanding (DIO / DSI).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 2: Working Capital & Fixed Asset Roll-Forwards"
  },
  "b111-u2-l3": {
    "id": "b111-u2-l3",
    "unit": "b111-u2",
    "level": "Intermediate",
    "objective": "Debt Schedules: Mandatory Amortization, Revolver Sweeps & Circularity Resolution (Modeling senior term loan tranches with mandatory amortization schedules; Cash sweeps using excess free cash flow; Revolver credit facility drawdown and repayment mechanics; Resolving circular interest calculations in financial spreadsheets).",
    "presentation": {
      "explanation": "Debt Schedules and Cash Sweep Mechanics:\n- **The Multi-Tranche Debt Schedule Architecture**:\n  - Models capital structure debt tranches: 1. Revolving Credit Facility, 2. Senior Term Loan A (amortizing), 3. Senior Term Loan B (bullet), 4. Subordinated Notes;\n- **Mechanical Rules of Debt Schedules**:\n  - **1. Beginning Balance**: Sourced from previous period ending balance;\n  - **2. Mandatory Amortization**: Fixed contractual principal paydowns ($1\\% - 5\\%$ annually);\n  - **3. Optional Prepayment / Cash Sweep ($\\text{Sweep \\%}$)**:\n    - Excess Free Cash Flow before Debt is calculated;\n    - Contractually mandated percentage (e.g., $50\\% - 100\\%$) sweeps to prepay highest-interest debt tranches;\n  - **4. Revolver Facility Plug**:\n    - If Cash falls below minimum operational liquidity threshold ($C_{\\min}$), the model automatically draws down the Revolver;\n    - If excess cash exists, model repays outstanding Revolver balance before accumulating cash;\n- **The Circular Interest Problem**:\n  - Interest Expense depends on Average Debt $\\implies$ Net Income depends on Interest $\\implies$ Cash Flow depends on Net Income $\\implies$ Ending Debt depends on Cash Flow $\\implies$ Average Debt changes!;\n  - **Resolution**: Enable Excel/model iterative calculations or lag debt balances by 1 period.",
      "examples": [
        {
          "target": "A 50% cash sweep applies half of excess free cash flow to accelerate debt paydown, reducing interest expense and resolving circularity.",
          "reading": "A 50% cash sweep...",
          "translation": "A 50% cash sweep applies half of excess free cash flow to accelerate debt paydown."
        }
      ],
      "mnemonics": [
        "Debt Schedule! Beginning Balance - Mandatory Amortization - Cash Sweep + Drawdowns = Ending Balance! Revolver liquidity plug! Average Debt Interest = Circular loop resolved via iteration!"
      ],
      "culturalNotes": [
        "Investment banking models use a dedicated \"Circularity Breaker\" toggle switch ($0$ or $1$) to safely debug spreadsheets without infinite loop calculation crashes."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What financial modeling mechanism automatically repays debt using surplus operational cash flow after meeting mandatory capital expenditures and debt service?",
          "options": [
            "A Stock Split (Debt Schedules (U2))",
            "A Dividend Recapitalization (Debt Schedules (U2))",
            "A Goodwill Write-Down (Debt Schedules (U2))",
            "A Cash Sweep (Debt Schedules (U2))"
          ],
          "answerIndex": 3,
          "explanation": "A Cash Sweep (Sweep Mechanics)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why does calculating interest expense on average debt balances create circular references in financial models?",
          "options": [
            "Because debt balances cannot be divided by two. (Debt Schedules (U2))",
            "Because interest rates are random. (Debt Schedules (U2))",
            "Because banks prohibit spreadsheets. (Debt Schedules (U2))",
            "Because interest expense affects net income, which changes cash flow, which changes ending debt, which alters average debt and interest. (Debt Schedules (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Because interest affects net income, changing cash and ending debt in a closed loop."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The debt schedule models sequential repayment priority across senior and subordinated tranches, utilizing cash sweep algorithms to accelerate deleveraging in leveraged buyout transactions.\"",
          "options": [
            "Debt schedules are only used in municipal bankruptcy courts. (Debt Schedules (U2))",
            "Revolver facilities must be repaid before accounts payable. (Debt Schedules (U2))",
            "The debt schedule models sequential repayment priority across senior and subordinated tranches, utilizing cash sweep algorithms to accelerate deleveraging in leveraged buyout transactions. (Debt Schedules (U2))",
            "Mandatory amortization is prohibited under federal banking laws. (Debt Schedules (U2))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Debt schedule analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What Excel feature is toggled to resolve circular reference loops between average debt interest expenses and ending cash balances?",
          "options": [
            "Conditional Formatting (Debt Schedules (U2))",
            "Iterative Calculation (Debt Schedules (U2))",
            "Data Validation (Debt Schedules (U2))",
            "Goal Seek (Debt Schedules (U2))"
          ],
          "answerIndex": 1,
          "explanation": "Iterative Calculation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 3: Debt Schedules & Cash Sweeps"
  },
  "b111-u2-l4": {
    "id": "b111-u2-l4",
    "unit": "b111-u2",
    "level": "Intermediate",
    "objective": "Free Cash Flow to Firm (FCFF) vs Free Cash Flow to Equity (FCFE): Mathematical Formulations (Derivation of Unlevered FCFF: $\\text{FCFF} = \\text{EBIT}(1 - T_c) + \\text{D\\&A} - \\text{CapEx} - \\Delta\\text{NWC}$; Derivation of Levered FCFE: $\\text{FCFE} = \\text{Net Income} + \\text{D\\&A} - \\text{CapEx} - \\Delta\\text{NWC} + \\text{Net Borrowing}$; Matching cash flows to appropriate discount rates (FCFF with WACC $\\implies$ Enterprise Value; FCFE with $r_e \\implies$ Equity Value)).",
    "presentation": {
      "explanation": "FCFF vs FCFE: The Foundational Cash Flow Duality of Valuation:\n- **1. Free Cash Flow to Firm (FCFF / Unlevered Free Cash Flow)**:\n  - The cash generated by core operations available to **ALL capital providers** (debt holders, preferred shareholders, common equity holders) after paying taxes, reinvesting in working capital, and funding capital expenditures:\n    $$\\text{FCFF} = \\text{EBIT} \\cdot (1 - T_c) + \\text{D\\&A} - \\text{CapEx} - \\Delta\\text{NWC}$$\n    where $\\text{EBIT}(1 - T_c) = \\text{NOPAT}$ (Net Operating Profit After Taxes);\n  - **Alternative Formulation from CFO**:\n    $$\\text{FCFF} = \\text{CFO} + \\text{Interest Expense}(1 - T_c) - \\text{CapEx}$$\n  - **Discounting Rule**: Discount FCFF at **WACC** $\\implies$ yields **Enterprise Value ($EV$)**;\n- **2. Free Cash Flow to Equity (FCFE / Levered Free Cash Flow)**:\n  - The residual cash available exclusively to **common equity shareholders** after debt service (interest and principal repayments) and net new borrowing:\n    $$\\text{FCFE} = \\text{Net Income} + \\text{D\\&A} - \\text{CapEx} - \\Delta\\text{NWC} + \\text{New Debt Issued} - \\text{Debt Repaid}$$\n    $$\\text{FCFE} = \\text{CFO} - \\text{CapEx} + \\text{Net Borrowing}$$\n  - **Discounting Rule**: Discount FCFE at **Cost of Equity ($r_e$)** $\\implies$ yields **Equity Value ($P_0$)** directly.",
      "examples": [
        {
          "target": "FCFF = EBIT*(1-Tc) + D&A - CapEx - DeltaNWC discounts at WACC to yield Enterprise Value.",
          "reading": "FCFF = EBIT*(1-Tc)...",
          "translation": "FCFF = EBIT*(1-Tc) + D&A - CapEx - DeltaNWC discounts at WACC to yield Enterprise Value."
        }
      ],
      "mnemonics": [
        "FCFF = NOPAT + D&A - CapEx - Delta NWC -> Discount at WACC = Enterprise Value! FCFE = Net Income + D&A - CapEx - Delta NWC + Net Debt -> Discount at Cost of Equity = Equity Value! Never mismatch cash flows and discount rates!"
      ],
      "culturalNotes": [
        "A classic blunder in junior financial modeling is discounting FCFF at Cost of Equity or FCFE at WACC, producing catastrophic valuation errors."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If an enterprise has EBIT of $100M, a 25% tax rate, D&A of $20M, CapEx of $30M, and an increase in working capital of $10M, what is its FCFF?",
          "options": [
            "$55M (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "$75M (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "$100M (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "$45M (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))"
          ],
          "answerIndex": 0,
          "explanation": "$55M ($75M + $20M - $30M - $10M)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which discount rate must strictly be used when discounting Free Cash Flow to Equity (FCFE) in a DCF model?",
          "options": [
            "Weighted Average Cost of Capital (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "Pre-tax Cost of Debt (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "Treasury Bill Yield (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "Cost of Equity (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Cost of Equity (r_e)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Free cash flow to firm represents unlevered cash generated by core operations available to all capital providers, discounted at WACC to derive enterprise value.\"",
          "options": [
            "FCFE must be discounted at the risk-free rate. (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "Free cash flow to firm represents unlevered cash generated by core operations available to all capital providers, discounted at WACC to derive enterprise value. (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "Net borrowing is added to FCFF to calculate enterprise value. (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "FCFF is calculated by subtracting total revenue from dividends. (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))"
          ],
          "answerIndex": 1,
          "explanation": "Accurate FCFF and FCFE analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What term in the FCFF equation represents Net Operating Profit After Taxes (EBIT * (1 - T_c))?",
          "options": [
            "NOPAT (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "Net Income (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "Gross Profit (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))",
            "EBITDA (Free Cash Flow to Firm FCFF vs Free Cash Flow to Equity FCFE (U2))"
          ],
          "answerIndex": 0,
          "explanation": "NOPAT.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 4: FCFF vs FCFE Valuation Mechanics"
  },
  "b111-u2-l5": {
    "id": "b111-u2-l5",
    "unit": "b111-u2",
    "level": "Intermediate",
    "objective": "Terminal Value Calculations: The Gordon Growth Model vs The Exit Multiple Method (The Gordon Growth Perpetual Model: $\\text{TV} = \\frac{\\text{FCFF}_{T+1}}{\\text{WACC} - g} = \\frac{\\text{FCFF}_T (1 + g)}{\\text{WACC} - g}$; Selecting perpetual growth rate $g \\le \\text{GDP Growth}$; The Exit Multiple Method: $\\text{TV} = \\text{EBITDA}_T \\times (\\text{EV} / \\text{EBITDA})_{\\text{exit}}$; Implied perpetual growth checks; Present value of terminal value discounting).",
    "presentation": {
      "explanation": "Terminal Value (TV) Mechanics in DCF Valuation:\n- **The Significance of Terminal Value**:\n  - In a standard 5-to-10 year DCF forecast, Terminal Value accounts for **65% to 85% of total Enterprise Value**;\n- **The Two Canonical Methodologies**:\n  - **1. The Gordon Growth Perpetual Model (Perpetuity Growth Method)**:\n    $$\\text{TV}_T = \\frac{\\text{FCFF}_{T+1}}{\\text{WACC} - g} = \\frac{\\text{FCFF}_T \\cdot (1 + g)}{\\text{WACC} - g}$$\n    - **The Golden Constraint on $g$**: Perpetual long-term growth rate $g$ **CANNOT exceed the nominal GDP growth rate of the economy** ($2.0\\% - 3.0\\%$ in developed markets); if $g > \\text{GDP}$, the company would mathematically grow to consume 100% of world GDP!;\n  - **2. The Exit Multiple Method (Market Approach)**:\n    $$\\text{TV}_T = \\text{EBITDA}_T \\times \\left( \\frac{\\text{EV}}{\\text{EBITDA}} \\right)_{\\text{exit}}$$\n    - Applies a normalized exit multiple based on mature peer comparable transactions;\n  - **3. Cross-Checking the Implied Perpetuity Growth Rate**:\n    - When using the Exit Multiple Method, always compute the implied growth rate to verify sanity:\n      $$g_{\\text{implied}} = \\frac{\\text{TV}_T \\cdot \\text{WACC} - \\text{FCFF}_{T+1}}{\\text{TV}_T + \\text{FCFF}_{T+1}}$$\n- **Discounting Terminal Value to Present Value**:\n  $$\\text{PV}(\\text{TV}) = \\frac{\\text{TV}_T}{(1 + \\text{WACC})^T}$$.",
      "examples": [
        {
          "target": "If Year 5 FCFF is $100M, WACC is 8.0%, and perpetual growth g is 2.5%, TV5 = $100M * 1.025 / (0.08 - 0.025) = $1,863.6M.",
          "reading": "If Year 5 FCFF...",
          "translation": "If Year 5 FCFF is $100M, WACC is 8.0%, and g is 2.5%, TV5 = $1,863.6M."
        }
      ],
      "mnemonics": [
        "Terminal Value! Gordon Growth: TV = FCFF_{T+1} / (WACC - g)! Perpetual growth g <= GDP growth rate (2-3%)! Exit Multiple: TV = EBITDA_T * (EV/EBITDA)! Discount TV to PV: PV(TV) = TV / (1+WACC)^T!"
      ],
      "culturalNotes": [
        "Warren Buffett and Charlie Munger frequently caution that DCF models are hypersensitive to terminal growth assumptions, dubbing over-optimistic terminal values \"financial mysticism\"."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If Year 5 FCFF is $50M, WACC is 9.0%, and the perpetual growth rate g is 2.0%, what is the undiscounted Terminal Value at Year 5 under Gordon Growth?",
          "options": [
            "$500.00M (Terminal Value Calculations (U2))",
            "$1,000.00M (Terminal Value Calculations (U2))",
            "$555.55M (Terminal Value Calculations (U2))",
            "$728.57M (Terminal Value Calculations (U2))"
          ],
          "answerIndex": 3,
          "explanation": "$728.57M ($51.0M / 0.07)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why is it economically impossible for a perpetual long-term growth rate g in a Gordon Growth model to exceed the nominal GDP growth rate of the broader economy?",
          "options": [
            "Because the company would mathematically become larger than the entire global economy over time. (Terminal Value Calculations (U2))",
            "Because SEC rules cap growth at 1%. (Terminal Value Calculations (U2))",
            "Because inflation would reach infinity. (Terminal Value Calculations (U2))",
            "Because WACC would equal zero. (Terminal Value Calculations (U2))"
          ],
          "answerIndex": 0,
          "explanation": "Because the company would mathematically become larger than the entire global economy."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Terminal value typically constitutes seventy to eighty percent of total enterprise value in a discounted cash flow model, necessitating rigorous sensitivity testing of exit multiples and growth rates.\"",
          "options": [
            "Terminal value typically constitutes seventy to eighty percent of total enterprise value in a discounted cash flow model, necessitating rigorous sensitivity testing of exit multiples and growth rates. (Terminal Value Calculations (U2))",
            "Gordon growth formula requires WACC to be strictly smaller than g. (Terminal Value Calculations (U2))",
            "Terminal value is always zero in corporate valuation. (Terminal Value Calculations (U2))",
            "Exit multiples cannot be applied to EBITDA. (Terminal Value Calculations (U2))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Terminal value analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How is undiscounted Terminal Value calculated at time T using the Exit Multiple method with an EV/EBITDA multiple of 10.0x and Year T EBITDA of $80M?",
          "options": [
            "$8M (Terminal Value Calculations (U2))",
            "$80M (Terminal Value Calculations (U2))",
            "$8,000M (Terminal Value Calculations (U2))",
            "$800M (Terminal Value Calculations (U2))"
          ],
          "answerIndex": 3,
          "explanation": "$800M ($80M * 10.0x).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 5: Terminal Value Calculations (Gordon Growth vs Exit Multiples)"
  },
  "b111-u2-l6": {
    "id": "b111-u2-l6",
    "unit": "b111-u2",
    "level": "Intermediate",
    "objective": "The Enterprise Value to Equity Value Bridge: Net Debt & Diluted Share Count (The valuation bridge: $\\text{Equity Value} = \\text{Enterprise Value} - \\text{Total Debt} + \\text{Cash} - \\text{Minority Interest} - \\text{Preferred Stock} + \\text{Associates/Investments}$; Treasury Stock Method (TSM) for in-the-money stock options and RSUs; Fully diluted shares outstanding ($FDSO$); Implied Share Price $= \\frac{\\text{Equity Value}}{FDSO}$).",
    "presentation": {
      "explanation": "The Enterprise Value to Equity Value Bridge and Dilution Modeling:\n- **The Master Valuation Bridge**:\n  - Once DCF computes **Enterprise Value ($EV$)** (the value of core operating assets):\n    $$\\text{Equity Value} = EV - \\text{Total Debt} + \\text{Cash \\& Cash Equivalents} - \\text{Non-Controlling (Minority) Interests} - \\text{Preferred Stock} + \\text{Equity Investments in Associates}$$\n  - **Net Debt ($ND$)**: $\\text{Total Debt} - \\text{Cash} \\implies \\text{Equity Value} = EV - \\text{Net Debt} - \\text{Other Claims}$;\n- **The Treasury Stock Method (TSM) for Diluted Shares**:\n  - When a company has in-the-money stock options and warrants with exercise price $K < P_{\\text{market}}$:\n    - **1. Proceeds from Exercise**: $N_{\\text{options}} \\times K$;\n    - **2. Shares Repurchased at Market**: $\\text{Shares Bought} = \\frac{\\text{Proceeds}}{P_{\\text{market}}} = \\frac{N_{\\text{options}} \\cdot K}{P_{\\text{market}}}$;\n    - **3. Net Dilutive Shares Issued**: $\\Delta N = N_{\\text{options}} \\left( 1 - \\frac{K}{P_{\\text{market}}} \\right)$;\n  - **Fully Diluted Shares Outstanding ($FDSO$)**:\n    $$FDSO = \\text{Basic Shares} + \\Delta N_{\\text{Options (TSM)}} + \\text{Unvested RSUs} + \\text{Convertible Securities}$$\n- **Implied Target Share Price**:\n  $$\\text{Implied Share Price} = \\frac{\\text{Equity Value}}{FDSO}$$.",
      "examples": [
        {
          "target": "If EV = $1,000M, Debt = $300M, Cash = $100M, Equity Value is $800M; with 80M diluted shares, implied share price is $10.00.",
          "reading": "If EV = $1,000M...",
          "translation": "If EV = $1,000M, Debt = $300M, Cash = $100M, Equity Value is $800M, and share price is $10.00."
        }
      ],
      "mnemonics": [
        "Enterprise to Equity Bridge! Equity Value = EV - Debt + Cash - Minority Interest - Preferred Stock! Net Debt = Debt - Cash! Treasury Stock Method TSM: Net Dilution = Options * (1 - K/P)! Implied Share Price = Equity Value / FDSO!"
      ],
      "culturalNotes": [
        "Fairness opinions presented to boards of directors in public acquisitions hinge on the precise execution of the Treasury Stock Method and Net Debt bridge."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If an enterprise has an Enterprise Value of $5,000M, Total Debt of $1,200M, Cash of $400M, and Minority Interest of $200M, what is its Equity Value?",
          "options": [
            "$4,000M (The Enterprise Value to Equity Value Bridge (U2))",
            "$3,600M (The Enterprise Value to Equity Value Bridge (U2))",
            "$6,400M (The Enterprise Value to Equity Value Bridge (U2))",
            "$5,000M (The Enterprise Value to Equity Value Bridge (U2))"
          ],
          "answerIndex": 0,
          "explanation": "$4,000M ($5,000M - $1,200M + $400M - $200M)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Under the Treasury Stock Method (TSM), if an employee exercises 100,000 options at strike $20 when the market stock price is $50, how many net new dilutive shares are issued?",
          "options": [
            "60,000 shares (The Enterprise Value to Equity Value Bridge (U2))",
            "Zero (The Enterprise Value to Equity Value Bridge (U2))",
            "100,000 shares (The Enterprise Value to Equity Value Bridge (U2))",
            "40,000 shares (The Enterprise Value to Equity Value Bridge (U2))"
          ],
          "answerIndex": 0,
          "explanation": "60,000 shares (Proceeds $2M buys back 40,000 shares at $50, leaving 60,000 net new shares)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The Treasury Stock Method assumes option exercise proceeds are fully deployed to repurchase common shares at current market prices, determining net dilutive share count.\"",
          "options": [
            "Minority interest represents shares owned by the government. (The Enterprise Value to Equity Value Bridge (U2))",
            "Enterprise value is always equal to share price multiplied by basic shares. (The Enterprise Value to Equity Value Bridge (U2))",
            "Cash is subtracted from enterprise value to find equity value. (The Enterprise Value to Equity Value Bridge (U2))",
            "The Treasury Stock Method assumes option exercise proceeds are fully deployed to repurchase common shares at current market prices, determining net dilutive share count. (The Enterprise Value to Equity Value Bridge (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Valuation bridge analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What financial metric is calculated by dividing total Equity Value by Fully Diluted Shares Outstanding (FDSO)?",
          "options": [
            "Earnings Per Share (The Enterprise Value to Equity Value Bridge (U2))",
            "Enterprise Multiple (The Enterprise Value to Equity Value Bridge (U2))",
            "Implied Share Price (The Enterprise Value to Equity Value Bridge (U2))",
            "Book Value Per Share (The Enterprise Value to Equity Value Bridge (U2))"
          ],
          "answerIndex": 2,
          "explanation": "Implied Share Price.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 6: Enterprise Value to Equity Value Bridge"
  },
  "b111-u2-l7": {
    "id": "b111-u2-l7",
    "unit": "b111-u2",
    "level": "Advanced",
    "objective": "DCF Sensitivity Analysis: Two-Way Data Tables, Tornado Charts & Monte Carlo Simulations (Building institutional $5 \\times 5$ two-way sensitivity matrices for WACC vs Terminal Growth Rate $g$ and WACC vs Exit Multiple; Tornado charts ranking value sensitivity to gross margins, CapEx, and revenue growth; Monte Carlo stochastic DCF modeling generating probability distributions of equity value).",
    "presentation": {
      "explanation": "Valuation Sensitivity Testing and Monte Carlo Simulation:\n- **The Necessity of Sensitivity Analysis**:\n  - A single DCF output is a point estimate subject to modeling error; institutional investment committees demand sensitivity ranges and probabilistic distribution analysis;\n- **Two-Way Sensitivity Data Tables (The Matrix Standard)**:\n  - **Matrix 1: WACC vs Perpetual Growth Rate $g$**:\n    - Rows: WACC varied in steps of $\\pm 0.50\\%$ (e.g., $7.0\\%, 7.5\\%, 8.0\\%, 8.5\\%, 9.0\\%$);\n    - Columns: Growth rate $g$ varied in steps of $\\pm 0.25\\%$ (e.g., $1.5\\%, 2.0\\%, 2.5\\%, 3.0\\%, 3.5\\%$);\n    - Cells calculate implied share price, identifying the \"fair value envelope\";\n  - **Matrix 2: WACC vs Exit Multiple** (e.g., EV/EBITDA 8.0x to 12.0x);\n- **Tornado Charts & Elasticity Ranking**:\n  - Varies key input drivers by $\\pm 10\\%$ (Revenue Growth, Gross Margin, SG&A %, CapEx %, Tax Rate, WACC);\n  - Plots horizontal bars sorted from widest value variance to narrowest, visualizing which operational levers drive greatest enterprise value volatility;\n- **Monte Carlo Stochastic DCF Simulation**:\n  - Replaces deterministic inputs with probability distributions (e.g., Revenue Growth $\\sim \\text{Normal}(\\mu, \\sigma)$, Margin $\\sim \\text{Beta}(\\alpha, \\beta)$);\n  - Executes 10,000 simulation trials to generate cumulative probability distribution $P(\\text{Share Price} \\ge X)$.",
      "examples": [
        {
          "target": "Two-way sensitivity tables map implied share price across varying WACC and terminal growth rates to construct an institutional valuation range.",
          "reading": "Two-way sensitivity...",
          "translation": "Two-way sensitivity tables map implied share price across varying WACC and terminal growth rates."
        }
      ],
      "mnemonics": [
        "DCF Sensitivity! Two-Way Tables: WACC vs Growth Rate g & WACC vs Exit Multiple! Tornado Charts rank input elasticity! Monte Carlo 10,000-trial probability distribution of share price!"
      ],
      "culturalNotes": [
        "Goldman Sachs and Morgan Stanley valuation pitchbooks feature two-way sensitivity tables as standard disclosure for all major public fairness opinions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which two variables are standardly evaluated in an institutional two-way DCF sensitivity data table to define the core valuation range?",
          "options": [
            "WACC and Perpetual Terminal Growth Rate (DCF Sensitivity Analysis (U2))",
            "Tax Rate and Number of Employees (DCF Sensitivity Analysis (U2))",
            "Dividends and Office Rent (DCF Sensitivity Analysis (U2))",
            "Inventory and Accounts Payable (DCF Sensitivity Analysis (U2))"
          ],
          "answerIndex": 0,
          "explanation": "WACC and Perpetual Terminal Growth Rate (g)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What graphical tool sorts input parameter sensitivities horizontally from widest value impact to smallest impact on target enterprise value?",
          "options": [
            "Pie Chart (DCF Sensitivity Analysis (U2))",
            "Tornado Chart (DCF Sensitivity Analysis (U2))",
            "Radar Chart (DCF Sensitivity Analysis (U2))",
            "Scatter Plot (DCF Sensitivity Analysis (U2))"
          ],
          "answerIndex": 1,
          "explanation": "Tornado Chart (Diagrami Tornado)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Monte Carlo DCF simulations execute thousands of random parameter draws to generate continuous probability distributions of implied equity value and downside risk.\"",
          "options": [
            "Sensitivity tables are prohibited by securities regulators. (DCF Sensitivity Analysis (U2))",
            "Monte Carlo models require all inputs to be deterministic constants. (DCF Sensitivity Analysis (U2))",
            "Monte Carlo DCF simulations execute thousands of random parameter draws to generate continuous probability distributions of implied equity value and downside risk. (DCF Sensitivity Analysis (U2))",
            "Tornado charts are only used in meteorological forecasting. (DCF Sensitivity Analysis (U2))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate DCF sensitivity analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What happens to the implied share price in a DCF sensitivity table when WACC decreases and the perpetual growth rate g increases?",
          "options": [
            "The implied share price drops to zero. (DCF Sensitivity Analysis (U2))",
            "The implied share price increases significantly (expanding valuation multiples)",
            "The share price becomes negative. (DCF Sensitivity Analysis (U2))",
            "The share price remains unchanged. (DCF Sensitivity Analysis (U2))"
          ],
          "answerIndex": 1,
          "explanation": "The implied share price increases significantly.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 7: DCF Sensitivity & Scenario Analysis"
  },
  "b111-u2-l8": {
    "id": "b111-u2-l8",
    "unit": "b111-u2",
    "level": "Advanced",
    "objective": "Module Capstone: Building a Wall-Street-Grade Integrated 3-Statement DCF Model (Full comprehensive modeling capstone: constructing dynamic revenue build, working capital schedules, fixed asset roll-forwards, debt sweeps, FCFF extraction, terminal value discounting, and share price bridge).",
    "presentation": {
      "explanation": "Module Capstone: The Complete Institutional 3-Statement DCF Model Architecture:\n- **The End-to-End Financial Engineering Flow**:\n  - **1. Historical Data Ingestion**: Clean 3-5 years of historical financial statements and standardize EBITDA, non-operating items, and normalized working capital;\n  - **2. Operating Assumptions & Revenue Build**: Price $\\times$ Volume unit drivers, segment revenue growth, COGS margin %, SG&A operating leverage;\n  - **3. Balance Sheet Supporting Schedules**:\n    - Working Capital Schedule (DSO, DIO, DPO);\n    - PP&E & Depreciation Schedule (CapEx roll-forward, straight-line D&A);\n    - Debt & Interest Schedule (Senior Term Loan amortization, Cash Sweep, Revolver plug);\n  - **4. Statement Integration**: Auto-balancing Balance Sheet with zero hardcoded plugs;\n  - **5. FCFF Extraction & Discounting**: Computing NOPAT + D&A - CapEx - $\\Delta$NWC, discounting at WACC;\n  - **6. Terminal Value & Net Debt Bridge**: Gordon Growth + Exit Multiple dual TV, deducting Net Debt and minority interests to calculate Implied Fair Value per Share.",
      "examples": [
        {
          "target": "Module Capstone completes the construction of a fully dynamic, auto-balancing Wall Street 3-statement DCF financial model.",
          "reading": "Module Capstone...",
          "translation": "Module Capstone completes the construction of an integrated 3-statement DCF model."
        }
      ],
      "mnemonics": [
        "Module Capstone! Historical normalization -> Dynamic operating drivers -> Supporting schedules (NWC, PP&E, Debt) -> Integrated 3-Statement Engine -> FCFF at WACC -> Dual TV -> Share Price Bridge! Complete Wall Street Mastery!"
      ],
      "culturalNotes": [
        "This end-to-end model mirrors the exact modeling tests administered to candidates during private equity and hedge fund associate recruitment rounds."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What complete modeling workflow does completing Module of B111 represent?",
          "options": [
            "Basic accounting entries only (Module Capstone (U2))",
            "Introductory spreadsheet navigation (Module Capstone (U2))",
            "Simple arithmetic (Module Capstone (U2))",
            "Complete Mastery of Institutional 3-Statement Financial Modeling and DCF Valuation (Module Capstone (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Complete Mastery of Institutional 3-Statement Financial Modeling and DCF Valuation."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In an integrated 3-statement model, what metric is calculated as NOPAT plus D&A minus CapEx minus change in NWC?",
          "options": [
            "Net Income (Module Capstone (U2))",
            "Gross Profit (Module Capstone (U2))",
            "Retained Earnings (Module Capstone (U2))",
            "Free Cash Flow to Firm (Module Capstone (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Free Cash Flow to Firm (FCFF)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The financial modeling capstone synthesizes revenue operating schedules, balance sheet roll-forwards, debt sweeps, and cash flow discounting into an auto-balancing institutional DCF model.\"",
          "options": [
            "Financial modeling requires guessing share prices randomly. (Module Capstone (U2))",
            "The financial modeling capstone synthesizes revenue operating schedules, balance sheet roll-forwards, debt sweeps, and cash flow discounting into an auto-balancing institutional DCF model. (Module Capstone (U2))",
            "Cash sweeps are illegal in corporate finance. (Module Capstone (U2))",
            "DCF models do not require balance sheets. (Module Capstone (U2))"
          ],
          "answerIndex": 1,
          "explanation": "Accurate Financial modeling capstone analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the final output of an integrated DCF model after bridging Enterprise Value through Net Debt and dividing by diluted shares?",
          "options": [
            "Implied Fair Value Per Share (Module Capstone (U2))",
            "EBITDA Margin (Module Capstone (U2))",
            "Historical Cost (Module Capstone (U2))",
            "Total Assets (Module Capstone (U2))"
          ],
          "answerIndex": 0,
          "explanation": "Implied Fair Value Per Share (Target Price).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 8: Module Capstone: Integrated 3-Statement DCF Model"
  },
  "b111-u3-l1": {
    "id": "b111-u3-l1",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "The Black-Scholes-Merton Model & Greek Sensitivities (Black-Scholes-Merton PDE under Geometric Brownian Motion; Closed-form call $C = S_0 N(d_1) - K e^{-rT} N(d_2)$ and put $P = K e^{-rT} N(-d_2) - S_0 N(-d_1)$; The Option Greeks: Delta $\\Delta$, Gamma $\\Gamma$, Theta $\\Theta$, Vega $\\mathcal{V}$, and Rho $\\rho$; Dynamic Delta Hedging).",
    "presentation": {
      "explanation": "The Black-Scholes-Merton (1973) Option Pricing Model:\n- **The Black-Scholes PDE**:\n  $$\\frac{\\partial V}{\\partial t} + \\frac{1}{2} \\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + r S \\frac{\\partial V}{\\partial S} - r V = 0$$\n- **Analytical Solutions for European Options**:\n  $$C(S, t) = S_0 N(d_1) - K e^{-r T} N(d_2)$$\n  $$P(S, t) = K e^{-r T} N(-d_2) - S_0 N(-d_1)$$\n  where:\n  $$d_1 = \\frac{\\ln(S_0 / K) + \\left( r + \\frac{\\sigma^2}{2} \\right) T}{\\sigma \\sqrt{T}}, \\quad d_2 = d_1 - \\sigma \\sqrt{T}$$\n- **The Five Option Greeks**:\n  - **Delta ($\\Delta = \\frac{\\partial V}{\\partial S} = N(d_1)$)**: Price sensitivity and hedge ratio ($0 \\le \\Delta_{\\text{call}} \\le 1$);\n  - **Gamma ($\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{N'(d_1)}{S \\sigma \\sqrt{T}}$)**: Curvature/acceleration of Delta with respect to underlying price;\n  - **Theta ($\\Theta = \\frac{\\partial V}{\\partial t}$)**: Time decay rate per calendar day;\n  - **Vega ($\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma} = S \\sqrt{T} N'(d_1)$)**: Volatility sensitivity per $1\\%$ change in $\\sigma$;\n  - **Rho ($\\rho = \\frac{\\partial V}{\\partial r} = K T e^{-rT} N(d_2)$)**: Interest rate sensitivity.",
      "examples": [
        {
          "target": "Black-Scholes call option pricing weights underlying price S0 by N(d1) and discounted strike K by N(d2).",
          "reading": "Black-Scholes call...",
          "translation": "Black-Scholes call option pricing weights underlying price S0 by N(d1) and discounted strike K by N(d2)."
        }
      ],
      "mnemonics": [
        "Black-Scholes: C = S*N(d1) - K*e^{-rT}*N(d2)! d1 has +0.5*sigma^2, d2 = d1 - sigma*sqrt(T)! Greeks: Delta (Hedge ratio), Gamma (Delta slope), Theta (Time decay), Vega (Volatility), Rho (Interest rate)!"
      ],
      "culturalNotes": [
        "Fischer Black, Myron Scholes, and Robert Merton developed the model; Scholes and Merton received the 1997 Nobel Prize (Black had passed away in 1995)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which option Greek measures the change in an option's Delta with respect to a change in the underlying asset price?",
          "options": [
            "Gamma (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Theta (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Rho (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Vega (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Gamma."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In the Black-Scholes call formula C = S*N(d1) - K*e^{-rT}*N(d2), what does N(d2) represent under risk-neutral probabilities?",
          "options": [
            "The stock volatility. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "The risk-free rate. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "The hedge ratio Delta. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "The risk-neutral probability that the call option will expire in-the-money (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))"
          ],
          "answerIndex": 3,
          "explanation": "The risk-neutral probability that the option expires in-the-money."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Dynamic delta hedging neutralizes portfolio directional price risk by continuously adjusting stock positions equal to the option delta N(d1).\"",
          "options": [
            "Dynamic delta hedging neutralizes portfolio directional price risk by continuously adjusting stock positions equal to the option delta N (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Black-Scholes model assumes stock prices follow a linear straight line. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Vega measures option sensitivity to company dividend yield. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Theta is always positive for long option positions. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Black-Scholes analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What happens to the time decay Theta of a standard long European option as expiration approaches?",
          "options": [
            "Theta becomes zero. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Theta becomes positive. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Theta remains constant. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))",
            "Theta decay accelerates rapidly as time to expiration approaches zero. (The BlackScholesMerton Model  Greek Sensitivities BlackScholesMerton PDE under Geometric Brownian Motion (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Theta decay accelerates rapidly.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 1: The Black-Scholes-Merton Model & Greek Sensitivities"
  },
  "b111-u3-l2": {
    "id": "b111-u3-l2",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "The Implied Volatility Surface, Volatility Smiles & Numerical Root-Finding (Newton-Raphson inversion of Black-Scholes formula $\\sigma_{n+1} = \\sigma_n - \\frac{C_{\\text{BS}}(\\sigma_n) - C_{\\text{market}}}{\\mathcal{V}(\\sigma_n)}$; Volatility Smile and Skew across strike prices; Term structure of volatility; Fat tails and jump diffusion models).",
    "presentation": {
      "explanation": "Implied Volatility and the Volatility Surface:\n- **Implied Volatility (IV)**:\n  - The market's consensus forecast of annualized future asset volatility $\\sigma_{\\text{implied}}$, obtained by inverting Black-Scholes against observed market option prices $C_{\\text{market}}$;\n  - Because Black-Scholes has no closed-form inverse for $\\sigma$, we solve numerically using **Newton-Raphson Iteration**:\n    $$\\sigma_{n+1} = \\sigma_n - \\frac{C_{\\text{BS}}(\\sigma_n) - C_{\\text{market}}}{\\mathcal{V}(\\sigma_n)}$$\n    where $\\mathcal{V}(\\sigma) = \\frac{\\partial C}{\\partial \\sigma}$ is the option Vega (first derivative);\n- **The Volatility Smile & Skew (Post-1987 Phenomenon)**:\n  - Prior to the 1987 stock crash, implied volatility was flat across strikes (as Black-Scholes assumes constant $\\sigma$);\n  - Post-1987 equity options exhibit a persistent **Volatility Skew / Smirk**: Out-of-the-money puts ($K < S_0$) trade at much higher implied volatilities than calls ($K > S_0$), reflecting market fear of catastrophic downward market crashes (**Fat Tails / Leptokurtosis**);\n- **The 3D Volatility Surface**: Plots $\\sigma_{\\text{implied}}(K, T)$ across both strike dimension $K$ and expiration maturity $T$.",
      "examples": [
        {
          "target": "Newton-Raphson iteratively recovers implied volatility by dividing the price error by the option Vega.",
          "reading": "Newton-Raphson iteratively...",
          "translation": "Newton-Raphson iteratively recovers implied volatility by dividing price error by Vega."
        }
      ],
      "mnemonics": [
        "Implied Volatility! Invert Black-Scholes via Newton-Raphson: sigma_{n+1} = sigma_n - (C_BS - C_mkt) / Vega! Volatility Skew (Fat tails & crash fear since 1987)! 3D Volatility Surface across K and T!"
      ],
      "culturalNotes": [
        "The Chicago Board Options Exchange (CBOE) calculates the VIX Index (\"Wall Street's Fear Gauge\") from the implied volatility surface of S&P 500 options."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which option Greek acts as the first derivative denominator in the Newton-Raphson root-finding algorithm for extracting implied volatility?",
          "options": [
            "Delta (The Implied Volatility Surface (U3))",
            "Gamma (The Implied Volatility Surface (U3))",
            "Theta (The Implied Volatility Surface (U3))",
            "Vega (The Implied Volatility Surface (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Vega (V)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why do equity index option markets exhibit a pronounced volatility skew, where deep out-of-the-money puts trade at higher implied volatilities?",
          "options": [
            "Because investors price in fat-tail crash risk and demand downside disaster insurance after the 1987 crash. (The Implied Volatility Surface (U3))",
            "Because puts are cheaper to print. (The Implied Volatility Surface (U3))",
            "Because interest rates are negative. (The Implied Volatility Surface (U3))",
            "Because call options are illegal. (The Implied Volatility Surface (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Because investors price in fat-tail crash risk."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The implied volatility surface captures non-constant volatility dynamics across strike prices and expiration horizons, resolving Black-Scholes fat-tail distribution anomalies.\"",
          "options": [
            "Newton-Raphson inversion cannot converge on digital computers. (The Implied Volatility Surface (U3))",
            "Volatility skew was eliminated in 1987. (The Implied Volatility Surface (U3))",
            "Implied volatility is always constant at 10% across all strikes. (The Implied Volatility Surface (U3))",
            "The implied volatility surface captures non-constant volatility dynamics across strike prices and expiration horizons, resolving Black-Scholes fat-tail distribution anomalies. (The Implied Volatility Surface (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Implied volatility surface analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What financial index, known as the market's fear gauge, measures 30-day forward implied volatility of the S&P 500 index?",
          "options": [
            "The Dow Jones Index (The Implied Volatility Surface (U3))",
            "The Federal Funds Rate (The Implied Volatility Surface (U3))",
            "The CBOE VIX Index (The Implied Volatility Surface (U3))",
            "The Consumer Price Index (The Implied Volatility Surface (U3))"
          ],
          "answerIndex": 2,
          "explanation": "The CBOE VIX Index.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 2: The Implied Volatility Surface & Volatility Smiles"
  },
  "b111-u3-l3": {
    "id": "b111-u3-l3",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "Real Options in Strategic Capital Budgeting (Managerial flexibility as financial options; Option to Delay/Wait (American Call); Option to Expand/Scale (Call); Option to Abandon/Liquidate (American Put); Binomial Lattice trees vs DCF under high uncertainty; Value of Flexibility: $\\text{Strategic Value} = \\text{Traditional NPV} + \\text{Real Option Value}$).",
    "presentation": {
      "explanation": "Real Options Analysis in Strategic Capital Budgeting (Myers 1977, Dixit & Pindyck 1994):\n- **The Failure of Traditional Static DCF**:\n  - Traditional DCF assumes management makes a one-time irrevocable commitment at $t=0$ and passively observes cash flows;\n  - In reality, managers actively adjust decisions as uncertainty resolves: expanding profitable projects, delaying investments, or abandoning failing assets;\n- **The Real Options Taxonomy**:\n  - **1. Option to Delay / Wait (American Call Option)**:\n    - Value of waiting for market clarity before investing CapEx $I$ (strike price $K$) in underlying asset $V$ ($S_0$);\n  - **2. Option to Expand / Growth Option (Call Option)**:\n    - Investing follow-on CapEx $I_E$ to scale production capacity by factor $\\alpha$ if market demand is high (e.g., R&D drug discovery pipeline);\n  - **3. Option to Abandon / Salvage (American Put Option)**:\n    - Liquidation value $L$ acts as a protective put floor against catastrophic downside losses;\n- **Valuation via Binomial Lattice Trees**:\n  - Up-factor $u = e^{\\sigma \\sqrt{\\Delta t}}$, Down-factor $d = 1/u = e^{-\\sigma \\sqrt{\\Delta t}}$;\n  - Risk-neutral probability $p = \\frac{e^{r \\Delta t} - d}{u - d}$;\n  - Backward induction rolls back payoffs: $V_{\\text{node}} = \\max(\\text{Exercise Payoff}, \\, e^{-r \\Delta t} [p V_u + (1-p) V_d])$;\n  - **Strategic Value Equation**:\n    $$\\text{Expanded Strategic NPV} = \\text{Static DCF NPV} + \\text{Real Option Value}$$.",
      "examples": [
        {
          "target": "Real options analysis proves that strategic flexibility adds positive option value to projects with negative static NPV under high volatility.",
          "reading": "Real options analysis...",
          "translation": "Real options analysis proves that strategic flexibility adds positive option value under uncertainty."
        }
      ],
      "mnemonics": [
        "Real Options! Static NPV misses managerial flexibility! Option to Delay = Call! Option to Expand = Growth Call! Option to Abandon = Protective Put! Binomial Lattice: u = e^{sigma*sqrt(dt)}, d = 1/u! Strategic Value = Static NPV + Real Option Value!"
      ],
      "culturalNotes": [
        "Pharmaceutical giants (Pfizer, Roche) and mining/energy conglomerates evaluate clinical trials and exploration reserves using Real Options binomial lattices."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which type of financial option mathematically models a mining company's right to sell off plant equipment for salvage value if commodity prices crash?",
          "options": [
            "An American Put Option (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "A Forward Contract (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "A Convertible Bond (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "A European Call Option (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))"
          ],
          "answerIndex": 0,
          "explanation": "An American Put Option (Option to Abandon)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why can a project with a negative static DCF NPV have a highly positive strategic value when evaluated with Real Options?",
          "options": [
            "Because high volatility increases option value, and management can choose to delay or abandon if outcomes are unfavorable. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "Because DCF models are always incorrect. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "Because real options ignore costs. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "Because interest rates are set to zero. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Because volatility increases option value, and management can delay or abandon."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Real options valuation models strategic managerial flexibility as contingent claims, using binomial lattices to value growth options and abandonment floors.\"",
          "options": [
            "Binomial lattice trees cannot be solved using backward induction. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "Real options can only be traded on public equity exchanges. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "Real options valuation models strategic managerial flexibility as contingent claims, using binomial lattices to value growth options and abandonment floors. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "Traditional static DCF captures 100% of managerial flexibility. (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Real options analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What formula calculates the upward price jump factor u in a standard Cox-Ross-Rubinstein binomial option lattice?",
          "options": [
            "u = 1 + r (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "u = e^ (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "u = sigma / delta_t (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))",
            "u = log (Real Options in Strategic Capital Budgeting Managerial flexibility as financial options (U3))"
          ],
          "answerIndex": 1,
          "explanation": "u = e^(sigma * sqrt(delta_t)).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 3: Real Options in Strategic Capital Budgeting"
  },
  "b111-u3-l4": {
    "id": "b111-u3-l4",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "M&A Financial Modeling: Purchase Price Allocation (PPA), Goodwill & Asset Step-Up (M&A transaction structure (Stock vs Asset purchase); Purchase Price Allocation (PPA) rules under IFRS 3 / ASC 805; Allocating purchase equity value, identifying tangible asset fair value write-ups, identifiable intangible assets (patents, brand, customer lists), Deferred Tax Liabilities (DTL) creation: $\\text{DTL} = \\text{Asset Step-Up} \\times T_c$; Calculating residual Goodwill: $\\text{Goodwill} = \\text{Purchase Price} - \\text{Fair Value of Net Identifiable Assets}$).",
    "presentation": {
      "explanation": "M&A Purchase Price Allocation (PPA) and Goodwill Creation:\n- **The Accounting Mechanics of an Acquisition (ASC 805 / IFRS 3)**:\n  - When Company $A$ acquires Company $T$ for Purchase Equity Price $P$:\n  - Historical book values of Target's assets are rewritten to **Fair Market Value** at closing;\n- **The Step-by-Step PPA Schedule**:\n  - **1. Determine Purchase Price of Equity**: $\\text{Offer Price per Share} \\times \\text{Target Diluted Shares}$;\n  - **2. Fair Value Asset Step-Ups**: Write up book assets to fair value:\n    - Property, Plant & Equipment (PP&E) step-up $\\Delta\\text{PP\\&E}$;\n    - Identifiable Intangible Assets (Trademarks, Customer Relationships, Technology IP) $\\Delta\\text{Intangibles}$;\n  - **3. Deferred Tax Liability (DTL) Creation**:\n    - In a stock purchase (tax-free reorganization), asset write-ups are recognized for book accounting but NOT for tax purposes;\n    - Generates a future taxable temporary difference, creating a new **Deferred Tax Liability** on the closing balance sheet:\n      $$\\text{New DTL} = (\\Delta\\text{PP\\&E} + \\Delta\\text{Intangibles}) \\times T_c$$\n  - **4. Allocating Residual Goodwill**:\n    $$\\text{Goodwill} = \\text{Purchase Equity Value} - \\text{Book Value of Target Equity} - (\\Delta\\text{PP\\&E} + \\Delta\\text{Intangibles}) + \\text{New DTL}$$\n    - Goodwill represents the residual premium paid for unidentifiable future synergies, talent, and market position (tested annually for impairment, not amortized under US GAAP).",
      "examples": [
        {
          "target": "Goodwill equals purchase equity price minus target book equity minus fair value step-ups plus newly created deferred tax liabilities.",
          "reading": "Goodwill equals...",
          "translation": "Goodwill equals purchase equity price minus target book equity minus step-ups plus new DTL."
        }
      ],
      "mnemonics": [
        "M&A PPA! Purchase Price Allocation! Asset Step-Up on PP&E & Intangibles! DTL Creation = Asset Step-Up * Tax Rate! Goodwill = Purchase Price - Fair Value of Net Assets + DTL! Goodwill is tested annually for impairment!"
      ],
      "culturalNotes": [
        "In mega-mergers like Disney's $71B acquisition of 21st Century Fox, PPA allocated over $30B to newly created goodwill and identifiable entertainment IP intangibles."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If an acquirer pays $500M for a target with book equity of $200M, writes up intangible assets by $100M, and has a 25% tax rate, what new Deferred Tax Liability (DTL) is created?",
          "options": [
            "$25M (MA Financial Modeling (U3))",
            "$100M (MA Financial Modeling (U3))",
            "$125M (MA Financial Modeling (U3))",
            "$0 (MA Financial Modeling (U3))"
          ],
          "answerIndex": 0,
          "explanation": "$25M ($100M * 25%)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Under modern US GAAP (ASC 805) and IFRS 3, how is corporate Goodwill accounted for on the balance sheet following an acquisition?",
          "options": [
            "It is expensed immediately on day 1. (MA Financial Modeling (U3))",
            "It is capitalized as an indefinite-lived asset and tested annually for impairment, but not amortized. (MA Financial Modeling (U3))",
            "It is subtracted from cash. (MA Financial Modeling (U3))",
            "It is amortized linearly over 5 years. (MA Financial Modeling (U3))"
          ],
          "answerIndex": 1,
          "explanation": "It is capitalized and tested annually for impairment."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Purchase price allocation writes up target tangible and intangible assets to fair market value, establishing deferred tax liabilities and capitalizing residual goodwill on the consolidated balance sheet.\"",
          "options": [
            "Goodwill is a physical inventory asset stored in warehouses. (MA Financial Modeling (U3))",
            "Purchase price allocation writes up target tangible and intangible assets to fair market value, establishing deferred tax liabilities and capitalizing residual goodwill on the consolidated balance sheet. (MA Financial Modeling (U3))",
            "DTL is created when target book value exceeds purchase price. (MA Financial Modeling (U3))",
            "All M&A transactions are prohibited from creating goodwill. (MA Financial Modeling (U3))"
          ],
          "answerIndex": 1,
          "explanation": "Accurate Purchase price allocation analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What accounting formula defines residual Goodwill created in an acquisition?",
          "options": [
            "Purchase Price - Fair Value of Net Identifiable Assets (MA Financial Modeling (U3))",
            "EBITDA * WACC (MA Financial Modeling (U3))",
            "Total Assets + Total Liabilities (MA Financial Modeling (U3))",
            "Revenue minus Cost of Goods Sold (MA Financial Modeling (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Purchase Price - Fair Value of Net Identifiable Assets.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 4: M&A Financial Modeling & Purchase Price Allocation"
  },
  "b111-u3-l5": {
    "id": "b111-u3-l5",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "M&A Accretion/Dilution Analysis & Synergy Valuation (EPS Accretion/Dilution modeling: $\\text{Pro Forma EPS} = \\frac{\\text{Acquirer NI} + \\text{Target NI} + \\text{After-Tax Synergies} - \\text{After-Tax Interest on New Debt} - \\text{Lost Interest on Cash}}{\\text{Acquirer Shares} + \\text{New Shares Issued}}$; Cost synergies (hard) vs Revenue synergies (soft); The Break-Even P/E rule in 100% stock deals ($P/E_{\\text{acquirer}} > P/E_{\\text{target}} \\implies \\text{Accretive}$)).",
    "presentation": {
      "explanation": "M&A Accretion/Dilution Analysis and Synergy Engineering:\n- **The Definition of Accretion/Dilution**:\n  - A transaction is **Accretive** if Pro Forma Earnings Per Share (EPS) exceeds the Acquirer's standalone EPS ($\\text{Pro Forma EPS} > \\text{Standalone EPS}$);\n  - A transaction is **Dilutive** if Pro Forma EPS decreases;\n- **The Pro Forma EPS Equation**:\n  $$\\text{Pro Forma EPS} = \\frac{\\text{Acquirer Net Income} + \\text{Target Net Income} + \\text{Synergies}(1 - T_c) - \\text{New Debt Interest}(1 - T_c) - \\text{Lost Cash Interest}(1 - T_c)}{\\text{Acquirer Standalone Shares} + \\text{New Shares Issued to Target}}$$\n- **The Golden Break-Even P/E Rule in 100% Stock Transactions**:\n  - In an all-stock deal with zero synergies:\n    - If $\\mathbf{P/E_{\\text{Acquirer}} > P/E_{\\text{Target}}}$ $\\implies$ Transaction is strictly **ACCRETIVE**;\n    - If $\\mathbf{P/E_{\\text{Acquirer}} < P/E_{\\text{Target}}}$ $\\implies$ Transaction is strictly **DILUTIVE**;\n- **Synergy Taxonomy & Risk Discounting**:\n  - **1. Cost Synergies (Hard Synergies)**: Headcount rationalization, redundant corporate HQ elimination, shared IT systems, supply chain purchasing power (valued at $70\\% - 90\\%$ realization probability);\n  - **2. Revenue Synergies (Soft Synergies)**: Cross-selling products into new geographic networks, pricing power (discounted heavily by Wall Street due to execution risk).",
      "examples": [
        {
          "target": "In an all-stock deal, if the acquirer trades at 20x P/E and buys a target at 15x P/E, the transaction is immediately EPS accretive.",
          "reading": "In an all-stock deal...",
          "translation": "In an all-stock deal, if acquirer P/E > target P/E, the deal is accretive."
        }
      ],
      "mnemonics": [
        "M&A Accretion/Dilution! Pro Forma EPS = (Consolidated Net Income + After-Tax Synergies - Financing Costs) / Pro Forma Shares! All-Stock Rule: Acquirer P/E > Target P/E = Accretive! Cost Synergies (Hard) vs Revenue Synergies (Soft)!"
      ],
      "culturalNotes": [
        "Wall Street equity research analysts scrutinize Day-1 EPS accretion as a primary metric when rating M&A announcements."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In a 100% stock-financed acquisition with no synergies, what condition guarantees that the transaction will be immediately accretive to the acquirer's EPS?",
          "options": [
            "The target has zero debt. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "The acquirer has a lower stock price. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "The target has more employees. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "The acquirer's P/E multiple is strictly higher than the target's purchase P/E multiple (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))"
          ],
          "answerIndex": 3,
          "explanation": "The acquirer's P/E multiple is strictly higher than the target's purchase P/E multiple."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why do investment bankers and equity analysts apply a higher discount rate and lower realization probability to revenue synergies compared to cost synergies?",
          "options": [
            "Because cost synergies are illegal. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Because revenue synergies are always zero. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Because GAAP requires it. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Because revenue synergies depend on uncertain customer purchasing behavior and cross-selling execution, whereas cost redundancies are directly controllable. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Because revenue synergies depend on uncertain customer behavior and cross-selling."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Accretion/dilution models evaluate post-merger earnings per share expansion by synthesizing financing interest costs, share dilution, and tax-effected operational synergies.\"",
          "options": [
            "Accretion/dilution models evaluate post-merger earnings per share expansion by synthesizing financing interest costs, share dilution, and tax-effected operational synergies. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "P/E ratios have zero relevance in stock acquisition modeling. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Cost synergies are always subtracted from net income. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Dilution occurs only when a company pays off all its debt. (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Accretion/dilution analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If an acquisition decreases the combined company's pro forma EPS from $4.00 standalone to $3.60 pro forma, how is the transaction classified?",
          "options": [
            "Accretive (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Break-even (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Synergistic (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))",
            "Dilutive (MA AccretionDilution Analysis  Synergy Valuation EPS AccretionDilution modeling (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Dilutive (by $0.40 per share).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 5: M&A Accretion/Dilution Analysis & Synergy Valuation"
  },
  "b111-u3-l6": {
    "id": "b111-u3-l6",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "Leveraged Buyout (LBO) Model Mechanics: Debt Tranches, Returns Waterfall & Equity IRR (LBO capital structure: Revolver, Term Loan A, Term Loan B, Mezzanine/Subordinated Debt, and Sponsor Equity; Uses & Sources of Funds; Value creation decomposition: Deleveraging, Multiple Expansion, and EBITDA Operational Growth; Calculating Internal Rate of Return ($\\text{IRR} = (\\text{MoIC})^{1/t} - 1$) and Multiple on Invested Capital (MoIC)).",
    "presentation": {
      "explanation": "Leveraged Buyout (LBO) Modeling and Private Equity Returns:\n- **The Anatomy of an LBO**:\n  - A financial sponsor (private equity fund) acquires a target company using a high proportion of debt ($60\\% - 80\\%$ of purchase price) and minimal equity ($20\\% - 40\\%$);\n  - The target's future cash flows are deployed aggressively to pay down debt over a 3-to-7 year holding period, magnifying returns to the equity sponsor;\n- **Sources & Uses of Funds Table**:\n  $$\\sum \\text{Sources} \\equiv \\sum \\text{Uses}$$\n  - **Uses**: Purchase Equity Value + Refinancing Existing Debt + Advisory/Financing Fees;\n  - **Sources**: Senior Secured Debt + Subordinated Debt + Sponsor Equity (the plug);\n- **The Three Drivers of LBO Value Creation**:\n  - **1. Deleveraging (Debt Paydown)**: Using operational free cash flow to pay down principal transfers enterprise value from debt holders to equity holders;\n  - **2. Operational EBITDA Growth**: Growing revenue and expanding margins;\n  - **3. Multiple Expansion**: Selling at an exit multiple higher than the entry multiple ($(\\text{EV}/\\text{EBITDA})_{\\text{exit}} > (\\text{EV}/\\text{EBITDA})_{\\text{entry}}$);\n- **Returns Metrics**:\n  - **Multiple on Invested Capital (MoIC / Cash-on-Cash)**:\n    $$\\text{MoIC} = \\frac{\\text{Total Exit Equity Proceeds}}{\\text{Initial Sponsor Equity Check}}$$\n  - **Internal Rate of Return (IRR)** over holding period $t$ years:\n    $$\\text{IRR} = (\\text{MoIC})^{1/t} - 1$$\n  - Private Equity Benchmark: **$\\text{IRR} \\ge 20\\% - 25\\%$** and **$\\text{MoIC} \\ge 2.0x - 3.0x$**.",
      "examples": [
        {
          "target": "A 2.5x MoIC over a 5-year LBO holding period generates an equity IRR of (2.5)^{1/5} - 1 = 20.11%.",
          "reading": "A 2.5x MoIC...",
          "translation": "A 2.5x MoIC over a 5-year LBO holding period generates an equity IRR of 20.11%."
        }
      ],
      "mnemonics": [
        "LBO Mechanics! Sources = Uses! Capital structure: 70% Debt + 30% Sponsor Equity! 3 Value Drivers: 1. Deleveraging, 2. EBITDA Growth, 3. Multiple Expansion! MoIC = Exit Equity / Entry Equity! IRR = (MoIC)^{1/t} - 1! PE Target: 20-25% IRR!"
      ],
      "culturalNotes": [
        "The 1988 $25B hostile leveraged buyout of RJR Nabisco by KKR immortalized LBO financial engineering in Bryan Burrough's book *Barbarians at the Gate*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If a private equity sponsor invests $100M of equity in an LBO and exits 5 years later with $248.8M in equity proceeds, what is the realized IRR?",
          "options": [
            "20.00% (Leveraged Buyout LBO Model Mechanics (U3))",
            "50.00% (Leveraged Buyout LBO Model Mechanics (U3))",
            "14.88% (Leveraged Buyout LBO Model Mechanics (U3))",
            "24.88% (Leveraged Buyout LBO Model Mechanics (U3))"
          ],
          "answerIndex": 0,
          "explanation": "20.00% ( ^0.2 - 1 = 1.20 - 1)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which of the following represents the three fundamental economic drivers of private equity equity returns in an LBO?",
          "options": [
            "Printing currency, inflation, and government bailouts (Leveraged Buyout LBO Model Mechanics (U3))",
            "Stock splits, dividend cuts, and inventory buildup (Leveraged Buyout LBO Model Mechanics (U3))",
            "Deleveraging (Debt Paydown)",
            "Accounts payable delays only (Leveraged Buyout LBO Model Mechanics (U3))"
          ],
          "answerIndex": 2,
          "explanation": "Deleveraging (Debt Paydown), EBITDA Operational Growth, and Multiple Expansion."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Leveraged buyout models maximize equity returns by utilizing target operational cash flows to amortize senior debt, transferring enterprise value to the financial sponsor.\"",
          "options": [
            "Private equity funds target an IRR of zero percent. (Leveraged Buyout LBO Model Mechanics (U3))",
            "LBOs are funded with 100% cash and zero debt. (Leveraged Buyout LBO Model Mechanics (U3))",
            "MoIC is calculated by dividing annual revenue by total debt. (Leveraged Buyout LBO Model Mechanics (U3))",
            "Leveraged buyout models maximize equity returns by utilizing target operational cash flows to amortize senior debt, transferring enterprise value to the financial sponsor. (Leveraged Buyout LBO Model Mechanics (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate LBO analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What table in an LBO model details exactly where capital is raised and how it is deployed for purchase price, debt refinancing, and transaction fees?",
          "options": [
            "Income Statement (Leveraged Buyout LBO Model Mechanics (U3))",
            "Tax Schedule (Leveraged Buyout LBO Model Mechanics (U3))",
            "Sources and Uses of Funds Table (Leveraged Buyout LBO Model Mechanics (U3))",
            "Depreciation Schedule (Leveraged Buyout LBO Model Mechanics (U3))"
          ],
          "answerIndex": 2,
          "explanation": "Sources and Uses of Funds Table.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 6: Leveraged Buyout (LBO) Model Mechanics"
  },
  "b111-u3-l7": {
    "id": "b111-u3-l7",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "Convertible Bonds & Hybrid Securities Modeling (Convertible bond architecture: Conversion Ratio $CR$, Conversion Price $CP = \\frac{\\text{Par}}{CR}$, Conversion Value $CV = CR \\times S_0$, and Conversion Premium; The Bond Floor (straight debt value discounted at $r_d$); Decomposing convertibles into Straight Bond + Embedded Black-Scholes Call Option; Contingent Convertible (CoCo) bonds and write-down triggers).",
    "presentation": {
      "explanation": "Convertible Bonds and Hybrid Financial Engineering:\n- **Anatomy of a Convertible Bond**:\n  - A hybrid debt instrument paying a regular fixed coupon that gives the bondholder the right to convert the bond into a predetermined number of common shares;\n- **Core Structural Formulas**:\n  - **1. Conversion Ratio ($CR$)**: Number of common shares received per bond (typically $Par = \\$1,000$):\n    $$CR = \\frac{\\text{Par Value}}{\\text{Conversion Price } CP}$$\n  - **2. Conversion Value ($CV$)**: The equity value of the bond if converted immediately:\n    $$CV = CR \\times S_0$$\n  - **3. Straight Bond Floor ($B_0$)**: The value of the bond as pure non-convertible debt (discounted at straight debt yield $r_d$):\n    $$B_0 = \\sum_{t=1}^T \\frac{C}{(1 + r_d)^t} + \\frac{Par}{(1 + r_d)^T}$$\n  - **4. Convertible Market Price ($P_{\\text{conv}}$)**:\n    $$P_{\\text{conv}} = \\max(B_0, CV) + \\text{Option Time Value}$$\n    - When stock price crashes, the bond trades at its **Straight Bond Floor** (downside debt protection);\n    - When stock price surges, the bond trades at its **Conversion Value** (participating in equity upside);\n- **Bifurcated Valuation Framework**:\n  $$\\text{Convertible Value} = \\text{Straight Bond Floor } B_0 + \\text{Black-Scholes Call Option on } CR \\text{ Shares at Strike } CP$$.",
      "examples": [
        {
          "target": "A $1,000 par convertible with a conversion price of $50 has a conversion ratio of 20 shares; if stock price is $60, conversion value is $1,200.",
          "reading": "A $1,000 par convertible...",
          "translation": "A $1,000 par convertible with conversion price $50 has conversion ratio 20; if stock is $60, conversion value is $1,200."
        }
      ],
      "mnemonics": [
        "Convertible Bonds! Conversion Ratio CR = Par / CP! Conversion Value CV = CR * Stock Price! Bond Floor B_0 (Downside protection)! Hybrid Decomposition = Straight Bond + Embedded Black-Scholes Call Option!"
      ],
      "culturalNotes": [
        "High-growth tech companies (Tesla, Square, Airbnb) frequently issue zero-coupon convertible bonds to raise billions in cheap financing with minimal interest expense."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If a $1,000 par value convertible bond has a conversion price of $25 per share, what is its conversion ratio (number of shares per bond)?",
          "options": [
            "25 shares (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "10 shares (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "50 shares (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "40 shares (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))"
          ],
          "answerIndex": 3,
          "explanation": "40 shares ($1,000 / $25)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What financial component provides downside protection to a convertible bond investor when the issuer's common stock price plummets?",
          "options": [
            "The Straight Bond Floor (the discounted value of contractual bond coupons and principal repayment)",
            "The conversion premium. (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "The stock dividend. (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "The call option. (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))"
          ],
          "answerIndex": 0,
          "explanation": "The Straight Bond Floor."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"A convertible bond bifurcates into a straight debt floor that protects downside capital and an embedded call option that captures equity appreciation.\"",
          "options": [
            "Convertible bonds cannot be converted into stock under any circumstances. (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "Conversion price is equal to total company market cap. (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "A convertible bond bifurcates into a straight debt floor that protects downside capital and an embedded call option that captures equity appreciation. (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "The straight bond floor is always zero. (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Convertible bond analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the conversion value of a convertible bond with a conversion ratio of 50 shares when the common stock is trading at $30 per share?",
          "options": [
            "$3,000 (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "$1,500 (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "$1,000 (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))",
            "$500 (Convertible Bonds  Hybrid Securities Modeling Convertible bond architecture (U3))"
          ],
          "answerIndex": 1,
          "explanation": "$1,500 (50 * $30).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 7: Convertible Bonds & Hybrid Securities Modeling"
  },
  "b111-u3-l8": {
    "id": "b111-u3-l8",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "Cross-Border Valuation, Foreign Exchange (FX) Risk & Interest Rate Parity (Covered Interest Rate Parity (CIRP): Forward rate formula $F = S_0 \\frac{1 + r_d}{1 + r_f}$; Uncovered Interest Rate Parity (UIRP) and Purchasing Power Parity (PPP); Cross-border DCF methodologies: Home-currency approach vs Foreign-currency approach; Incorporating Country Risk Premiums (CRP) into emerging market hurdle rates).",
    "presentation": {
      "explanation": "Cross-Border Corporate Valuation and Foreign Exchange Arbitrage:\n- **The Covered Interest Rate Parity (CIRP) Theorem**:\n  - In efficient global financial markets, forward FX exchange rates prevent riskless spatial interest rate arbitrage:\n    $$F = S_0 \\left( \\frac{1 + r_{\\text{domestic}}}{1 + r_{\\text{foreign}}} \\right)$$\n    - $S_0$: Current spot exchange rate (Domestic per Foreign, e.g., $\\text{USD}/\\text{EUR}$);\n    - $F$: Forward exchange rate for delivery at time $T$;\n    - $r_d, r_f$: Domestic and foreign nominal risk-free interest rates;\n- **Two Equivalent Cross-Border DCF Methodologies**:\n  - **Method 1: Foreign Currency Approach (Local Currency)**:\n    - 1. Forecast cash flows in foreign currency (e.g., Brazilian Reais - BRL);\n    - 2. Calculate local WACC including **Country Risk Premium (CRP)** ($r_{e, \\text{local}} = R_{f, \\text{local}} + \\beta \\text{ERP} + \\text{CRP}$);\n    - 3. Discount foreign cash flows at local WACC to get Local Enterprise Value;\n    - 4. Convert Local Enterprise Value to domestic currency at current spot rate $S_0$;\n  - **Method 2: Home Currency Approach (Converted Cash Flows)**:\n    - 1. Convert projected foreign cash flows to domestic currency (USD) at forward FX rates $F_t$;\n    - 2. Discount converted USD cash flows at domestic WACC;\n  - **Mathematical Law**: Under CIRP, **Method 1 and Method 2 yield identical present values**.",
      "examples": [
        {
          "target": "Covered Interest Rate Parity dictates that forward exchange rate F = S0 * (1 + rd) / (1 + rf) to eliminate currency arbitrage.",
          "reading": "Covered Interest Rate...",
          "translation": "Covered Interest Rate Parity dictates that F = S0 * (1 + rd) / (1 + rf)."
        }
      ],
      "mnemonics": [
        "Cross-Border Valuation! Covered Interest Rate Parity CIRP: F = S0 * (1+rd)/(1+rf)! Foreign Currency Approach (Discount at Local WACC with Country Risk Premium CRP) == Home Currency Approach (Convert at Forward F and discount at Domestic WACC)!"
      ],
      "culturalNotes": [
        "Multinational corporations (Apple, Toyota, Unilever) manage cross-border M&A currency exposure using multi-billion dollar CIRP forward hedge contracts."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "According to Covered Interest Rate Parity, if the spot USD/EUR rate is 1.10, the US risk-free rate is 5.0%, and the Eurozone risk-free rate is 2.0%, what is the 1-year forward rate F?",
          "options": [
            "1.1324 (CrossBorder Valuation (U3))",
            "1.0686 (CrossBorder Valuation (U3))",
            "1.2000 (CrossBorder Valuation (U3))",
            "1.1000 (CrossBorder Valuation (U3))"
          ],
          "answerIndex": 0,
          "explanation": "1.1324 (1.10 * 1.05 / 1.02)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "When valuing an emerging market subsidiary in local currency, what risk premium must be added to the cost of equity to reflect sovereign default risk and political volatility?",
          "options": [
            "Country Risk Premium (CrossBorder Valuation (U3))",
            "Option Delta (CrossBorder Valuation (U3))",
            "Liquidity Discount (CrossBorder Valuation (U3))",
            "Goodwill Premium (CrossBorder Valuation (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Country Risk Premium (CRP)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Covered interest rate parity aligns forward foreign exchange pricing with international interest rate differentials, ensuring cross-border discounted cash flow valuations remain arbitrage-free.\"",
          "options": [
            "Cross-border valuation requires setting all foreign cash flows to zero. (CrossBorder Valuation (U3))",
            "Covered interest rate parity aligns forward foreign exchange pricing with international interest rate differentials, ensuring cross-border discounted cash flow valuations remain arbitrage-free. (CrossBorder Valuation (U3))",
            "Interest rate parity guarantees that all countries have identical inflation rates. (CrossBorder Valuation (U3))",
            "Foreign exchange rates cannot be hedged using forward contracts. (CrossBorder Valuation (U3))"
          ],
          "answerIndex": 1,
          "explanation": "Accurate Cross-border valuation analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Under international financial parity conditions, which two cross-border DCF approaches yield mathematically identical enterprise values?",
          "options": [
            "The Foreign Currency approach (discounting in local currency)",
            "Accounting book value and historical cost (CrossBorder Valuation (U3))",
            "LBO modeling and bankruptcy liquidation (CrossBorder Valuation (U3))",
            "Gordon growth and liquidation value (CrossBorder Valuation (U3))"
          ],
          "answerIndex": 0,
          "explanation": "The Foreign Currency approach and the Home Currency approach.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 8: Cross-Border Valuation & FX Risk"
  },
  "b111-u3-l9": {
    "id": "b111-u3-l9",
    "unit": "b111-u3",
    "level": "Advanced",
    "objective": "B111 Master Capstone: Institutional Investment Banking Valuation & M&A Pitchbook Defense (The final comprehensive synthesis: Multi-methodology valuation football field (DCF, Precedent Transactions, Public Comps, LBO, 52-Week Range), M&A deal structuring, accretion/dilution defense, and board-level valuation presentation).",
    "presentation": {
      "explanation": "B111 Master Capstone: The Investment Banking Valuation & M&A Defense Engine:\n- **The Master \"Football Field\" Valuation Chart**:\n  - Synthesizes all institutional valuation methodologies into a single unified comparative benchmark display for board directors:\n    - **1. Discounted Cash Flow (DCF)**: Fundamental intrinsic operating value ($EV$ and implied share price range across WACC $\\pm 0.5\\%$ and $g \\pm 0.25\\%$);\n    - **2. Comparable Public Companies (Trading Comps)**: Market trading multiples (EV/EBITDA, EV/Sales, P/E) across peer median and 25th-75th percentiles;\n    - **3. Precedent M&A Transactions (Deal Comps)**: Historic control transaction multiples including **M&A Control Premiums ($20\\% - 40\\%$)**;\n    - **4. Leveraged Buyout (LBO) Floor**: Maximum purchase price an LBO sponsor can pay to achieve a target $20\\%$ equity IRR;\n    - **5. 52-Week High/Low Trading Range**: Historical psychological market anchor;\n- **The Complete Transaction Engineering Sequence**:\n  - 1. Build dynamic 3-statement integrated DCF with debt sweep;\n  - 2. Compute WACC with Hamada-relevered betas and synthetic credit ratings;\n  - 3. Execute Purchase Price Allocation (PPA), DTL creation, and goodwill capitalization;\n  - 4. Construct Accretion/Dilution pro forma model with cost and revenue synergies;\n  - 5. Defend transaction price, financing mix, and strategic option value before the Board.",
      "examples": [
        {
          "target": "The valuation football field synthesizes DCF intrinsic value, trading comps, precedent transactions, and LBO floor prices into a board-level pitchbook.",
          "reading": "The valuation football field...",
          "translation": "The valuation football field synthesizes DCF, trading comps, deal comps, and LBO floor prices."
        }
      ],
      "mnemonics": [
        "B111 Master Capstone! The Football Field Chart! DCF Intrinsic Value + Trading Comps + Precedent Deal Comps + LBO Floor + 52-Week Range! M&A PPA & Goodwill + Accretion/Dilution + Real Options! Complete Investment Banking Mastery!"
      ],
      "culturalNotes": [
        "This capstone represents the definitive quantitative standard expected of elite investment bankers at Goldman Sachs, Morgan Stanley, and J.P. Morgan presenting M&A recommendations to Fortune 500 boards of directors."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What visual summary chart in institutional investment banking compares valuation ranges across DCF, Public Comps, Precedent M&A Transactions, and LBO Floor analysis?",
          "options": [
            "The Valuation Football Field Chart (B111 Master Capstone (U3))",
            "The Scatter Plot (B111 Master Capstone (U3))",
            "The Waterfall Chart (B111 Master Capstone (U3))",
            "The Venn Diagram (B111 Master Capstone (U3))"
          ],
          "answerIndex": 0,
          "explanation": "The Valuation Football Field Chart."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What complete curriculum does mastering B111 represent?",
          "options": [
            "Basic bookkeeping (B111 Master Capstone (U3))",
            "Complete University-Level Mastery of Financial Modeling, Corporate Valuation, Options Engineering, and M&A Deal Architecture (B111 Master Capstone (U3))",
            "Spreadsheet formatting (B111 Master Capstone (U3))",
            "Introductory personal finance (B111 Master Capstone (U3))"
          ],
          "answerIndex": 1,
          "explanation": "Complete University-Level Mastery of Financial Modeling, Corporate Valuation, Options Engineering, and M&A Deal Architecture (25 Sessions)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The investment banking valuation capstone synthesizes intrinsic discounted cash flows, relative trading multiples, precedent control transactions, and LBO returns into a unified board-level football field analysis.\"",
          "options": [
            "The investment banking valuation capstone synthesizes intrinsic discounted cash flows, relative trading multiples, precedent control transactions, and LBO returns into a unified board-level football field analysis. (B111 Master Capstone (U3))",
            "Valuation pitchbooks only contain historical stock prices without analysis. (B111 Master Capstone (U3))",
            "Football field charts are used exclusively in sports management. (B111 Master Capstone (U3))",
            "All M&A deals must be approved by the United Nations. (B111 Master Capstone (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate B111 Master Capstone analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do Precedent M&A Transaction multiples typically trade at a premium over Public Trading Comps in a valuation football field?",
          "options": [
            "Because past transactions are adjusted for inflation only. (B111 Master Capstone (U3))",
            "Because public comps do not include stock prices. (B111 Master Capstone (U3))",
            "Because debt is excluded in M&A. (B111 Master Capstone (U3))",
            "Because precedent transactions include a Control Premium paid by the acquirer to gain 100% operational control and extract synergies. (B111 Master Capstone (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Because precedent transactions include a Control Premium.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 9: B111 Master Capstone: Investment Banking Pitchbook Defense"
  }
};
  var CURRICULUM = { id: 'b111', name: "B111: Financial Modeling & Valuation", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['b111'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
