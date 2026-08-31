// FEARN Curriculum Data — B110: Market Dynamics & Consumer Psychology
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "b110-u1",
        "level": "Unit 1",
        "title": "Market Structure & PCA Perceptual Mapping",
        "goal": "Eigenvector decomposition, dimensionality reduction, 2D attribute clustering, strategic positioning.",
        "lessonIds": [
            "b110-u1-l1",
            "b110-u1-l2",
            "b110-u1-l3",
            "b110-u1-l4",
            "b110-u1-l5",
            "b110-u1-l6"
        ]
    },
    {
        "id": "b110-u2",
        "level": "Unit 2",
        "title": "Conjoint Analysis & Part-Worth Utility",
        "goal": "Full-profile conjoint matrices, fractional factorial orthogonal designs, willingness-to-pay estimation.",
        "lessonIds": [
            "b110-u2-l1",
            "b110-u2-l2",
            "b110-u2-l3",
            "b110-u2-l4",
            "b110-u2-l5"
        ]
    },
    {
        "id": "b110-u3",
        "level": "Unit 3",
        "title": "Customer Economics: CLV & Cohort Modeling",
        "goal": "Markov transition matrices, discount rates, CAC-to-LTV ratio optimization, churn hazard modeling.",
        "lessonIds": [
            "b110-u3-l1",
            "b110-u3-l2",
            "b110-u3-l3",
            "b110-u3-l4",
            "b110-u3-l5"
        ]
    },
    {
        "id": "b110-u4",
        "level": "Unit 4",
        "title": "Diffusion of Innovations & Bass Forecasting",
        "goal": "Coefficient of innovation (p) vs imitation (q), S-curve adoption dynamics, chasm crossing strategy.",
        "lessonIds": [
            "b110-u4-l1",
            "b110-u4-l2",
            "b110-u4-l3",
            "b110-u4-l4",
            "b110-u4-l5"
        ]
    },
    {
        "id": "b110-u5",
        "level": "Unit 5",
        "title": "Behavioral Economics & Strategy Synthesis",
        "goal": "IKEA effect, anchoring, decoy effects, loss aversion, marketing mix modeling, C-suite market strategy.",
        "lessonIds": [
            "b110-u5-l1",
            "b110-u5-l2",
            "b110-u5-l3",
            "b110-u5-l4",
            "b110-u5-l5"
        ]
    }
];
  var LESSONS = {
  "b110-u1-l1": {
    "id": "b110-u1-l1",
    "unit": "b110-u1",
    "level": "Unit 1",
    "objective": "Foundations of Market Data & Consumer Analytics: Variables, Observations, Mean, Variance, Covariance & Normalization.",
    "presentation": {
      "explanation": "Quantitative market research and consumer behavior analysis begin with structured observational data. A market dataset is represented as a matrix of $N$ consumer respondents (rows) rating $P$ brand attributes (columns) on discrete scales (such as 1-to-7 Likert scales for reliability, speed, prestige, or price-value). Before applying advanced dimensionality reduction or clustering models, analysts must establish descriptive statistical baselines: the sample mean ($\\mu_j = \\frac{1}{N}\\sum_{i=1}^N x_{ij}$) to identify central brand perceptions, the sample variance ($s_j^2 = \\frac{1}{N-1}\\sum_{i=1}^N (x_{ij} - \\mu_j)^2$) and standard deviation to gauge perceptual consensus versus polarization, and pairwise covariance ($\\text{Cov}(X_j, X_k)$) / Pearson correlation ($r_{jk} = \\frac{\\text{Cov}(X_j, X_k)}{s_j s_k}$) to detect collinear brand associations. When attributes are measured on disparate scales (e.g. price in dollars vs rating out of 10), data must be normalized via Z-score standardization ($z_{ij} = \\frac{x_{ij} - \\mu_j}{s_j}$), centering each variable at zero mean and unit variance ($s^2=1$) to prevent high-magnitude variables from distorting Euclidean distances and subsequent principal component calculations.",
      "examples": [
        {
          "target": "Z-score standardization transforms raw attribute scores into zero-mean, unit-variance coordinates: $z = \\frac{x - \\mu}{\\sigma}$.",
          "reading": "Z-score standardization transforms raw attribute scores into zero-mean, unit-variance coordinates: z = (x - mean) / std.",
          "translation": "Z-score standardization transforms raw attribute scores into zero-mean, unit-variance coordinates: z = (x - mean) / std."
        },
        {
          "target": "A high positive covariance between «luxury» and «craftsmanship» indicates consumers who rate a brand high on luxury also perceive high craftsmanship.",
          "reading": "High positive covariance indicates joint positive association between two brand attributes.",
          "translation": "High positive covariance indicates joint positive association between two brand attributes."
        }
      ],
      "mnemonics": [
        "Market Data Pipeline: Survey matrix -> Mean (centrality) + Variance (spread) -> Z-score standardize before multi-attribute modeling."
      ],
      "culturalNotes": [
        "The 5-point and 7-point Likert scales, invented by social psychologist Rensis Likert in 1932, remain the foundational measurement instrument in modern consumer econometrics and market research."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why is Z-score standardization essential before computing distances or running Principal Component Analysis on multi-attribute brand survey data?",
          "options": [
            "It eliminates variables with different measurement units or large numeric scales from dominating the distance calculations and variance extraction. (Foundations of Market Data  Consumer Analytics (U1))",
            "It guarantees all survey respondents give identical 5-star ratings. (Foundations of Market Data  Consumer Analytics (U1))",
            "It randomly deletes half the survey respondents to speed up processing. (Foundations of Market Data  Consumer Analytics (U1))",
            "It converts all qualitative text responses into Latin nouns. (Foundations of Market Data  Consumer Analytics (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Standardization prevents attributes with large variances or scales (like annual income) from overwhelming attributes measured on small scales (like 1-to-5 ratings)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "If a brand survey shows a sample variance of zero for the attribute «Safety», what does this indicate about consumer perception?",
          "options": [
            "Every respondent gave the exact same score for safety (zero variance / absolute unanimity)",
            "Consumers consider the brand extremely dangerous. (Foundations of Market Data  Consumer Analytics (U1))",
            "The survey data was corrupted and must be thrown out. (Foundations of Market Data  Consumer Analytics (U1))",
            "The brand has no safety features. (Foundations of Market Data  Consumer Analytics (U1))"
          ],
          "answerIndex": 0,
          "explanation": "A variance of zero means all data points equal the mean, indicating complete consensus among respondents."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What statistic measures the linear association and direction of relationship between two brand attributes on a normalized scale from -1.0 to +1.0?",
          "options": [
            "Pearson correlation coefficient (Foundations of Market Data  Consumer Analytics (U1))",
            "Eigenvalue magnitude (Foundations of Market Data  Consumer Analytics (U1))",
            "Likert sum index (Foundations of Market Data  Consumer Analytics (U1))",
            "Chi-square degree (Foundations of Market Data  Consumer Analytics (U1))"
          ],
          "answerIndex": 0,
          "explanation": "The Pearson correlation coefficient normalizes covariance by the product of standard deviations, bounding the value between -1 and +1.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In an $N \\times P$ customer survey matrix where $N=500$ consumers rate $P=8$ attributes, what does each row represent?",
          "options": [
            "The complete multi-attribute response vector of an individual consumer respondent. (Foundations of Market Data  Consumer Analytics (U1))",
            "The average profit margin of the firm. (Foundations of Market Data  Consumer Analytics (U1))",
            "The global market share of competitor brands. (Foundations of Market Data  Consumer Analytics (U1))",
            "A single advertising channel budget. (Foundations of Market Data  Consumer Analytics (U1))"
          ],
          "answerIndex": 0,
          "explanation": "In a standard respondent-by-attribute matrix, rows represent individual observation units (respondents).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 1: Principles of Microeconomics & Scarcity"
  },
  "b110-u1-l2": {
    "id": "b110-u1-l2",
    "unit": "b110-u1",
    "level": "Elite",
    "objective": "Apply Principal Component Analysis (PCA) to survey data to construct strategic 2D brand perceptual maps.",
    "presentation": {
      "explanation": "In B110, we master quantitative product positioning:\n\n1. The Perceptual Mapping Problem:\n   Consumers evaluate products across dozens of attributes (price, luxury, reliability, speed, eco-friendliness). PCA projects high-dimensional correlation matrices onto the top 2 orthogonal principal components ($PC_1, PC_2$) that capture maximum variance:\n   $$\\mathbf{X}^T \\mathbf{X} \\mathbf{v}_i = \\lambda_i \\mathbf{v}_i$$\n\n2. Strategic White-Space Identification:\n   - Brands close together in PCA vector space are perceived as direct substitutes.\n   - Unoccupied quadrants represent market \"white space\" opportunities for differentiation.",
      "examples": [
        {
          "target": "PCA of Automotive Market: PC1 (Affordability vs Luxury, 58% variance), PC2 (Sportiness vs Utility, 24% variance).",
          "reading": "Perceptual Positioning",
          "translation": "2D positioning matrix mapping Porsche vs Toyota vs Volvo."
        }
      ],
      "mnemonics": [
        "PCA: Maximize variance along orthogonal eigenvectors!"
      ],
      "culturalNotes": [
        "Developed at Stanford GSB and McKinsey & Co. for C-suite market entry strategies."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In a perceptual map generated via PCA, what does a large distance between two brands signify?",
          "options": [
            "Consumers perceive the two brands as strongly differentiated with distinct value propositions (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "No statistical meaning (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "They have the same price (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "They are owned by the same parent company (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Distance in PCA factor space reflects perceived psychological difference."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the mathematical purpose of PCA in consumer research?",
          "options": [
            "To predict stock prices (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "To calculate tax returns (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "Reduce high-dimensional survey attributes into uncorrelated principal components maximizing variance (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "To replace user interviews completely (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))"
          ],
          "answerIndex": 2,
          "explanation": "PCA reduces dimensionality while retaining maximum variance."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "How does strategic marketing utilize perceptual map \"white space\"?",
          "options": [
            "To reduce advertising budget to zero (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "To close factories (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "To copy the market leader exactly (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))",
            "To identify unserved consumer attribute clusters and launch targeted product offerings with minimal direct collision (Apply Principal Component Analysis PCA to survey data to construct strategic 2D brand perceptual maps (U1))"
          ],
          "answerIndex": 3,
          "explanation": "White spaces identify unserved attribute combinations in consumer demand.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 2: Supply, Demand & Market Equilibrium"
  },
  "b110-u1-l3": {
    "id": "b110-u1-l3",
    "unit": "b110-u1",
    "level": "Unit 1",
    "objective": "Execute Eigenvalue Decomposition, SVD, and Dimensionality Reduction on Brand Attribute Matrices.",
    "presentation": {
      "explanation": "1. **Singular Value Decomposition (SVD) of Brand Data**:\nLet $X$ be an $N \\times P$ standardized data matrix ($N$ respondents/brands, $P$ perception attributes with mean 0 and variance 1):\n$$X = U \\Sigma V^T$$\n- $U$: $N \\times N$ orthogonal matrix of respondent/brand coordinate scores\n- $\\Sigma$: $N \\times P$ diagonal matrix of singular values $\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge \\sigma_P \\ge 0$\n- $V$: $P \\times P$ orthogonal matrix of attribute loadings (Principal Directions)\n\n2. **Eigenvalue Decomposition of Sample Covariance Matrix $S$**:\n$$S = \\frac{1}{N-1} X^T X = V \\Lambda V^T$$\n- $\\Lambda = \\text{diag}(\\lambda_1, \\lambda_2, \\dots, \\lambda_P)$ where $\\lambda_j = \\frac{\\sigma_j^2}{N-1}$ is the variance explained by the $j$-th principal component.\n\n3. **Scree Plot & Kaiser Criterion**:\n- **Kaiser Criterion**: Retain all principal components with eigenvalue $\\lambda_j \\ge 1.0$ (explaining more variance than an individual standardized attribute).\n- **Cumulative Variance Explained**: Retain top $K$ components such that $\\frac{\\sum_{j=1}^K \\lambda_j}{\\sum_{m=1}^P \\lambda_m} \\ge 70\\% - 80\\%$.",
      "examples": [
        {
          "target": "If the first two eigenvalues are lambda_1 = 3.8 and lambda_2 = 2.2 out of total variance 8.0, 2D PCA captures (3.8 + 2.2) / 8.0 = 75.0% of all market perception.",
          "reading": "PCA Variance Explained Calculation",
          "translation": "If the first two eigenvalues are lambda_1 = 3.8 and lambda_2 = 2.2 out of total variance 8.0, 2D PCA captures (3.8 + 2.2) / 8.0 = 75.0% of all market perception."
        }
      ],
      "mnemonics": [
        "PCA in Marketing: X = U Sigma V^T! Covariance S = V Lambda V^T! Kaiser rule: Keep eigenvalues >= 1.0! 2D Biplot maps brands and attribute vectors!"
      ],
      "culturalNotes": [
        "Karl Pearson invented Principal Component Analysis in 1901; Harold Hotelling expanded it into random variable statistics in 1933."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Under the Kaiser criterion, which principal components should be retained for perceptual mapping?",
          "options": [
            "Only the single largest component (Execute Eigenvalue Decomposition (U1))",
            "Components with negative eigenvalues (Execute Eigenvalue Decomposition (U1))",
            "All components regardless of size (Execute Eigenvalue Decomposition (U1))",
            "Components with eigenvalues lambda_j >= 1.0 (Execute Eigenvalue Decomposition (U1))"
          ],
          "answerIndex": 3,
          "explanation": "Components with eigenvalues lambda_j >= 1.0."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What geometric interpretation is given to the columns of matrix V in PCA perceptual mapping?",
          "options": [
            "They represent raw dollar prices. (Execute Eigenvalue Decomposition (U1))",
            "They represent factory coordinates. (Execute Eigenvalue Decomposition (U1))",
            "They are random noise. (Execute Eigenvalue Decomposition (U1))",
            "They represent the direction vectors (loadings)"
          ],
          "answerIndex": 3,
          "explanation": "They represent the direction vectors (loadings) of the original perceptual attributes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "If an 8-attribute brand perception survey yields eigenvalues [3.5, 2.1, 0.9, 0.6, 0.4, 0.2, 0.2, 0.1], how many components satisfy the Kaiser criterion?",
          "options": [
            "4 components (Execute Eigenvalue Decomposition (U1))",
            "2 components (Execute Eigenvalue Decomposition (U1))",
            "1 component (Execute Eigenvalue Decomposition (U1))",
            "8 components (Execute Eigenvalue Decomposition (U1))"
          ],
          "answerIndex": 1,
          "explanation": "2 components.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the sum of all eigenvalues in a PCA decomposition of a standardized correlation matrix with P attributes?",
          "options": [
            "P (Execute Eigenvalue Decomposition (U1))",
            "100.0 (Execute Eigenvalue Decomposition (U1))",
            "0.0 (Execute Eigenvalue Decomposition (U1))",
            "1.0 (Execute Eigenvalue Decomposition (U1))"
          ],
          "answerIndex": 0,
          "explanation": "P (the total number of attributes).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 3: Elasticity & Its Applications"
  },
  "b110-u1-l4": {
    "id": "b110-u1-l4",
    "unit": "b110-u1",
    "level": "Unit 1",
    "objective": "Interpret Attribute Vector Angles, Cosine Similarities, and Brand Clustering on 2D Biplots.",
    "presentation": {
      "explanation": "In a 2D PCA Perceptual Map (Biplot):\n\n1. **Attribute Vector Angles & Correlation ($r_{jk}$)**:\nThe cosine of the angle $\\theta$ between two attribute loading vectors $\\mathbf{v}_j$ and $\\mathbf{v}_k$ directly approximates their correlation coefficient in the raw customer survey data:\n$$\\cos(\\theta_{jk}) \\approx r_{jk}$$\n- $\\theta \\approx 0^\\circ (\\cos = +1.0)$: Highly positive correlation (e.g., \"Luxury\" and \"High Price\").\n- $\\theta \\approx 90^\\circ (\\cos = 0.0)$: Uncorrelated, orthogonal attributes (e.g., \"Sporty Handling\" and \"Spacious Trunk\").\n- $\\theta \\approx 180^\\circ (\\cos = -1.0)$: Strong inverse correlation (e.g., \"Budget Economy\" and \"Prestigious Status\").\n\n2. **Vector Length (Salience)**:\nThe length of an attribute vector from the origin reflects how well that attribute is explained by the 2D map ($R^2$ in reduced dimensional space). Long vectors represent dominant market differentiators.\n\n3. **Brand Projections**:\nDropping a perpendicular line from Brand $B$ onto Attribute Vector $\\mathbf{v}_j$ shows where that brand ranks on that attribute relative to competitors.",
      "examples": [
        {
          "target": "If the angle between \"Innovative\" and \"Reliable\" vectors is 30 degrees (cos 30 = 0.866), consumers perceive brands with high innovation as strongly reliable.",
          "reading": "Perceptual Map Cosine Correlation",
          "translation": "If the angle between \"Innovative\" and \"Reliable\" vectors is 30 degrees (cos 30 = 0.866), consumers perceive brands with high innovation as strongly reliable."
        }
      ],
      "mnemonics": [
        "Biplot Vector Angles: cos(0 deg) = +1 (Strong Positive correlation); cos(90 deg) = 0 (Uncorrelated); cos(180 deg) = -1 (Strong Negative correlation)! Vector length = Attribute salience!"
      ],
      "culturalNotes": [
        "Perceptual biplots are used by McKinsey, BCG, and brand consultancies to identify uncontested \"White Space\" opportunities in consumer markets."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If two attribute vectors on a perceptual biplot form a 90-degree right angle (cos = 0), what does this indicate about consumer perception?",
          "options": [
            "The two attributes are completely uncorrelated and perceived independently. (Interpret Attribute Vector Angles (U1))",
            "The attributes are identical. (Interpret Attribute Vector Angles (U1))",
            "The attributes are opposites. (Interpret Attribute Vector Angles (U1))",
            "The data is corrupted. (Interpret Attribute Vector Angles (U1))"
          ],
          "answerIndex": 0,
          "explanation": "The two attributes are completely uncorrelated."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How do you determine a brand's perceived score on a specific attribute in a 2D perceptual map?",
          "options": [
            "By counting the number of letters in the brand name (Interpret Attribute Vector Angles (U1))",
            "By projecting a perpendicular line from the brand's point onto the attribute vector line (Interpret Attribute Vector Angles (U1))",
            "By checking stock price (Interpret Attribute Vector Angles (U1))",
            "By measuring the distance to the origin only (Interpret Attribute Vector Angles (U1))"
          ],
          "answerIndex": 1,
          "explanation": "By projecting a perpendicular line from the brand's point onto the attribute vector line."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What does an attribute vector with a very short length near the center of a PCA biplot indicate?",
          "options": [
            "The attribute is the most important market driver. (Interpret Attribute Vector Angles (U1))",
            "The attribute is priced at zero dollars. (Interpret Attribute Vector Angles (U1))",
            "The attribute has low variance or is poorly represented by the two retained principal components. (Interpret Attribute Vector Angles (U1))",
            "The attribute has 100% market share. (Interpret Attribute Vector Angles (U1))"
          ],
          "answerIndex": 2,
          "explanation": "The attribute has low variance or is poorly represented by the two components.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If \"Fuel Efficiency\" and \"Horsepower\" vectors point in nearly opposite directions (angle ~ 180 degrees), what is their relationship?",
          "options": [
            "They are perceived as mutually reinforcing positive traits. (Interpret Attribute Vector Angles (U1))",
            "They are perceived as strong trade-offs with an inverse negative correlation (Interpret Attribute Vector Angles (U1))",
            "They are identical features. (Interpret Attribute Vector Angles (U1))",
            "They have zero relation. (Interpret Attribute Vector Angles (U1))"
          ],
          "answerIndex": 1,
          "explanation": "They are perceived as strong trade-offs with an inverse negative correlation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 4: Consumer Choice Theory & Indifference Curves"
  },
  "b110-u1-l5": {
    "id": "b110-u1-l5",
    "unit": "b110-u1",
    "level": "Unit 1",
    "objective": "Implement Preference Mapping (PREFMAP) and Ideal Point vs Vector Preference Formulations.",
    "presentation": {
      "explanation": "Preference Mapping (**PREFMAP** - Carroll, 1972) overlays consumer preference vectors and target customer segment **Ideal Points** onto an existing perceptual product space.\n\n1. **The Vector Preference Model (More is Always Better)**:\nConsumer utility increases monotonically along a linear direction $\\mathbf{w}_i$:\n$$U_{ik} = \\sum_{d=1}^D w_{id} Y_{kd}$$\n- $Y_{kd}$: Coordinate of Brand $k$ on Dimension $d$\n- $\\mathbf{w}_i$: Preference weight vector of segment $i$\n\n2. **The Ideal Point Model (Unfolding Model)**:\nConsumers have a specific bliss point $\\mathbf{I}_i = (I_{i1}, I_{i2})$ in perceptual space. Utility decreases quadratically with Euclidean distance from the Ideal Point:\n$$U_{ik} = - \\sum_{d=1}^D v_{id} (Y_{kd} - I_{id})^2$$\n- $v_{id}$: Salience weight of dimension $d$\n- If a brand is too sweet, too spicy, or too expensive relative to the Ideal Point, preference falls!\n\n3. **Market Segmentation via Ideal Point Clusters**:\nIdentifying uncrowded clusters of consumer Ideal Points reveals untapped market niches with high unmet demand and low competitive rivalry.",
      "examples": [
        {
          "target": "A coffee consumer has Ideal Point (Spiciness=2, Sweetness=8). A brand at (2, 8) achieves maximum utility, while a brand at (2, 2) suffers heavy utility loss.",
          "reading": "Ideal Point Distance Formulation",
          "translation": "A coffee consumer has Ideal Point (Spiciness=2, Sweetness=8). A brand at (2, 8) achieves maximum utility, while a brand at (2, 2) suffers heavy utility loss."
        }
      ],
      "mnemonics": [
        "PREFMAP: Vector Model (More is better: linear w * Y) vs Ideal Point Model (Bliss point: Utility drops with squared distance -(Y - I)^2)! Identifies White Space clusters!"
      ],
      "culturalNotes": [
        "J. Douglas Carroll introduced the PREFMAP multidimensional unfolding framework at Bell Laboratories in 1972."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Under the Ideal Point preference model, what happens to consumer utility as a product moves further away from the consumer's ideal point in perceptual space?",
          "options": [
            "Utility decreases quadratically with distance (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Utility remains constant (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Utility becomes undefined (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Utility increases linearly (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Utility decreases quadratically with distance."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "For which type of product attribute is the Ideal Point model more appropriate than the Vector (linear) model?",
          "options": [
            "Attributes with an optimal middle level (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Warranty duration (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Attributes where higher is always better (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Pure monetary cash rewards (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Attributes with an optimal middle level."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "In PREFMAP analysis, what does a dense cluster of consumer ideal points with no nearby competing brands represent?",
          "options": [
            "A monopoly protected by patents. (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "An unprofitable market that should be abandoned. (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "A statistical error in SVD calculation. (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "An attractive \"White Space\" market opportunity for a new product launch or brand repositioning. (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))"
          ],
          "answerIndex": 3,
          "explanation": "An attractive \"White Space\" market opportunity.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the mathematical form of the distance decay in Carroll's weighted Euclidean ideal point model?",
          "options": [
            "Utility = exp (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Utility = sum (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Utility = - sum (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))",
            "Utility = Brand_d - Ideal_d (Implement Preference Mapping PREFMAP and Ideal Point vs Vector Preference Formulations (U1))"
          ],
          "answerIndex": 2,
          "explanation": "Utility = - sum(v_d * (Brand_d - Ideal_d)^2).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 5: Production Functions & Cost Structures"
  },
  "b110-u1-l6": {
    "id": "b110-u1-l6",
    "unit": "b110-u1",
    "level": "Unit 1",
    "objective": "C2 Synthesis on Strategic Brand Repositioning, Defensible Moats, and Perceptual Distance Optimization.",
    "presentation": {
      "explanation": "Strategic Brand Repositioning utilizes perceptual mapping to execute profit-maximizing market maneuvers while defending against competitive encroachment.\n\n1. **Optimization of Repositioning Trajectory**:\nLet $\\mathbf{X}_0$ be a brand's current coordinate vector and $\\mathbf{X}^*$ be the target coordinate vector. The firm chooses $\\mathbf{X}^*$ to maximize Expected Market Share subject to R&D / Advertising Cost $C(\\mathbf{X}^*, \\mathbf{X}_0)$:\n$$\\max_{\\mathbf{X}^*} \\left[ \\sum_{s=1}^S N_s \\cdot P_s(\\mathbf{X}^*, \\mathbf{Comp}) \\cdot (P - MC) \\right] - C(\\mathbf{X}^*, \\mathbf{X}_0)$$\n- $C(\\mathbf{X}^*, \\mathbf{X}_0) = k \\| \\mathbf{X}^* - \\mathbf{X}_0 \\|^2$: Repositioning cost increases quadratically with perceptual distance.\n\n2. **Defensible Competitive Moats**:\n- **Perceptual Preemption**: Launching flanking fighting brands to occupy adjacent ideal point clusters before competitors enter.\n- **Asymmetric Vulnerability**: Dominant premium brands can often reposition downward into budget segments easily, whereas budget brands face severe perceptual friction when trying to move upward into luxury prestige segments.",
      "examples": [
        {
          "target": "Toyota created the Lexus brand in 1989 to occupy the high-prestige/luxury perceptual quadrant, avoiding the prohibitive cost of repositioning the economy Toyota badge.",
          "reading": "Strategic Repositioning Case Study",
          "translation": "Toyota created the Lexus brand in 1989 to occupy the high-prestige/luxury perceptual quadrant, avoiding the prohibitive cost of repositioning the economy Toyota badge."
        }
      ],
      "mnemonics": [
        "Brand Repositioning: Maximize Segment Share * Margin - Quadratic Repositioning Cost! Fighting brands for perceptual preemption! Lexus strategy overcomes upward brand friction!"
      ],
      "culturalNotes": [
        "Harvard Business School Professor Michael Porter formalized the connection between spatial positioning, cost leadership, and competitive differentiation in 1980."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why did Toyota launch Lexus as a distinct brand in 1989 instead of trying to sell luxury sedans under the Toyota nameplate?",
          "options": [
            "Because Toyota went bankrupt. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "To avoid Japanese export taxes. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "Because the cars used different fuel. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "To overcome the severe perceptual friction and brand dilution of trying to reposition an economy badge upward into luxury prestige. (C2 Synthesis on Strategic Brand Repositioning (U1))"
          ],
          "answerIndex": 3,
          "explanation": "To overcome severe perceptual friction and brand dilution."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What defensive market strategy involves launching a second flanking brand to occupy white space near an existing flagship product?",
          "options": [
            "Perceptual preemption / Fighting brand strategy (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "Price fixing (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "Hostile takeover (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "Vertical integration (C2 Synthesis on Strategic Brand Repositioning (U1))"
          ],
          "answerIndex": 0,
          "explanation": "Perceptual preemption / Fighting brand strategy."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate and evaluate: \"Repositioning an established brand across perceptual space incurs quadratic costs in R&D and marketing communications, requiring quantitative optimization against expected lifetime customer value.\"",
          "options": [
            "True: Moving brand perception requires heavy sustained investment, which must be mathematically balanced against incremental customer acquisition. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "True only for state-owned monopolies. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "False: Brand perception can be altered instantaneously with zero cost. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "False: Perceptual maps cannot track customer sentiment. (C2 Synthesis on Strategic Brand Repositioning (U1))"
          ],
          "answerIndex": 0,
          "explanation": "True.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What asymmetric vulnerability do low-cost budget brands face when attempting to enter high-end luxury market quadrants?",
          "options": [
            "Instant bankruptcy. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "Government antitrust lawsuits. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "Inability to purchase advertising. (C2 Synthesis on Strategic Brand Repositioning (U1))",
            "Severe consumer skepticism regarding prestige and craftsmanship, making upward repositioning far harder than downward brand extension. (C2 Synthesis on Strategic Brand Repositioning (U1))"
          ],
          "answerIndex": 3,
          "explanation": "Severe consumer skepticism regarding prestige and craftsmanship.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 6: Perfect Competition & Long-Run Equilibrium"
  },
  "b110-u5-l4": {
    "id": "b110-u5-l4",
    "unit": "b110-u5",
    "level": "Advanced",
    "objective": "Capstone Synthesis: Designing an End-to-End Predictive Consumer Behavior & Quantitative Pricing Engine (Integrating Conjoint Part-Worth Utilities, Multi-Attribute Market Simulation, Dynamic Willingness-to-Pay (WTP), Customer Lifetime Value Optimization, Bass Innovation Diffusion, and Prospect-Theoretic Price Architecture into an end-to-end commercial algorithmic pipeline).",
    "presentation": {
      "explanation": "Capstone Synthesis: The End-to-End Quantitative Pricing & Consumer Behavior Architecture:\n- **The Unified Quantitative Marketing Pipeline**:\n  - Integrating the entire course sequence into a cohesive, algorithmic commercial strategy engine:\n- **1. Preference Decomposition & Market Simulation (Units 1 & 2)**:\n  - Choice-Based Conjoint (CBC) with Hierarchical Bayes estimation extracts individual part-worth utilities $\\boldsymbol{\\beta}_i$;\n  - Logit choice simulator predicts market share shares $s_j = \\frac{\\sum_i P_{ij}}{N}$ under varying product configurations;\n  - Marginal Willingness-to-Pay curves: $\\text{WTP}_k = -\\frac{\\beta_{\\text{attribute } k}}{\\beta_{\\text{price}}}$;\n- **2. Longitudinal Customer Dynamics (Unit 3)**:\n  - Individual transaction rates and churn modeled via BG/NBD probability models ($P(\\text{Alive})$);\n  - Forward CLV optimization computes maximum allowable acquisition spend: $\\text{Max CAC} = \\frac{\\text{CLV}}{3.0}$;\n  - Multi-cohort customer equity tracks Markov migration across engagement tiers;\n- **3. Market Adoption & S-Curve Forecasting (Unit 4)**:\n  - Bass diffusion parameters $(p, q, M)$ forecast peak adoption timing $T^*$ and annual volume trajectory;\n  - Cross-side network externalities and subsidy pricing calibrated for platform expansion;\n- **4. Behavioral Price Menu Optimization (Unit 5)**:\n  - Prospect-theoretic framing anchors consumer reference points;\n  - SaaS Good-Better-Best tier design deploys asymmetric decoys and extremeness aversion to maximize capture of consumer surplus.",
      "examples": [
        {
          "target": "The unified quantitative pricing engine synthesizes conjoint part-worth utilities, BG/NBD lifetime values, Bass diffusion curves, and behavioral price framing.",
          "reading": "The unified quantitative pricing...",
          "translation": "The unified quantitative pricing engine synthesizes conjoint part-worth utilities, BG/NBD lifetime values, Bass diffusion curves, and behavioral price framing."
        }
      ],
      "mnemonics": [
        "Capstone Synthesis! 1. Conjoint Part-Worths & WTP! 2. BG/NBD CLV & Cohort Markov Migration! 3. Bass Diffusion S-curve & Peak T*! 4. Behavioral Menu Architecture & Decoys! Complete quantitative mastery!"
      ],
      "culturalNotes": [
        "Leading quantitative hedge funds and tech conglomerates deploy this unified analytics pipeline to forecast corporate earnings and optimize global product pricing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which four analytical pillars are synthesized in an end-to-end quantitative pricing and consumer behavior engine?",
          "options": [
            "Fixed cost accounting only (Capstone Synthesis (U5))",
            "Random guesswork and manual polling (Capstone Synthesis (U5))",
            "Conjoint Choice Simulation, BG/NBD CLV, Bass Diffusion Dynamics, and Prospect-Theoretic Menu Architecture (Capstone Synthesis (U5))",
            "Only linear regression (Capstone Synthesis (U5))"
          ],
          "answerIndex": 2,
          "explanation": "Conjoint Choice Simulation, BG/NBD CLV, Bass Diffusion Dynamics, and Prospect-Theoretic Menu Architecture."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How does an end-to-end pricing engine determine the optimal price point for a new SaaS product tier?",
          "options": [
            "By copying competitors without analysis (Capstone Synthesis (U5))",
            "By charging the exact cost of manufacturing with no margin (Capstone Synthesis (U5))",
            "By maximizing expected profit = Market Share (Price)",
            "By always setting price to zero (Capstone Synthesis (U5))"
          ],
          "answerIndex": 2,
          "explanation": "By maximizing expected profit = Market Share(Price) * (Price - Marginal Cost) * Projected CLV."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The quantitative marketing capstone establishes an integrated pipeline from discrete choice utility estimation to longitudinal customer equity and behavioral price menu architecture.\"",
          "options": [
            "The quantitative marketing capstone establishes an integrated pipeline from discrete choice utility estimation to longitudinal customer equity and behavioral price menu architecture. (Capstone Synthesis (U5))",
            "Conjoint analysis cannot be integrated with lifetime value modeling. (Capstone Synthesis (U5))",
            "Bass diffusion models are only used in retail baking. (Capstone Synthesis (U5))",
            "Quantitative marketing relies purely on subjective intuition without mathematics. (Capstone Synthesis (U5))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Capstone synthesis analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What complete mathematical mastery does completing B110 represent?",
          "options": [
            "Introductory grammar (Capstone Synthesis (U5))",
            "Elementary typing (Capstone Synthesis (U5))",
            "Basic accounting (Capstone Synthesis (U5))",
            "Complete Quantitative Mastery of Market Dynamics, Consumer Psychology, and Pricing Optimization (Capstone Synthesis (U5))"
          ],
          "answerIndex": 3,
          "explanation": "Complete Quantitative Mastery of Market Dynamics, Consumer Psychology, and Pricing Optimization.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Capstone Synthesis"
  },
  "b110-u5-l3": {
    "id": "b110-u5-l3",
    "unit": "b110-u5",
    "level": "Advanced",
    "objective": "Anchoring, Decoy Effect & Menu Architecture: Context-Dependent Choice (Tversky & Kahneman Anchoring-and-Adjustment heuristic; The Decoy Effect (Asymmetric Dominance Effect, Huber, Payne & Puto 1982); The Compromise Effect (Extremeness Aversion, Simonson 1989); Default Effects & Choice Architecture (Thaler & Sunstein Nudge theory); Price framing and SaaS Good-Better-Best tier architecture).",
    "presentation": {
      "explanation": "Context-Dependent Choice and Price Menu Architecture:\n- **Anchoring and Adjustment (Tversky & Kahneman 1974)**:\n  - Initial numerical exposure sets a cognitive anchor; subsequent estimates adjust insufficiently away from the anchor (e.g., showing a crossed-out $999 MSRP makes $499 feel like a monumental bargain);\n- **The Decoy Effect (Asymmetric Dominance - Huber et al. 1982)**:\n  - Consider target product $A$ (high quality, high price) and competitor $B$ (medium quality, medium price);\n  - Introducing **Decoy $C$** (priced similarly to $A$ but strictly inferior to $A$ in quality) causes consumers to shift preference overwhelmingly toward target product $A$, violating the **Axiom of Independence of Irrelevant Alternatives (IIA)**;\n  - *Famous Example*: The Economist subscription pricing ($59 Web, $125 Print, $125 Print+Web);\n- **The Compromise Effect (Extremeness Aversion - Simonson 1989)**:\n  - Consumers disproportionately avoid extreme options and gravitate toward the intermediate middle tier;\n  - Introducing a luxury $5,000 tier makes the $1,500 middle tier feel sensible and safe, driving massive volume to the intended target;\n- **SaaS 3-Tier Architecture (\"Good - Better - Best\")**:\n  - **Tier 1 (Good)**: Feature-constrained anchor;\n  - **Tier 2 (Better / \"Most Popular\" Badge)**: Target profit engine with optimal margin;\n  - **Tier 3 (Best / Enterprise)**: Expensive decoy anchor designed to elevate perceived value of Tier 2.",
      "examples": [
        {
          "target": "Introducing an asymmetrically dominated decoy shifts consumer choice toward the target option by providing a direct comparative contrast.",
          "reading": "Introducing an asymmetrically...",
          "translation": "Introducing an asymmetrically dominated decoy shifts consumer choice toward the target option."
        }
      ],
      "mnemonics": [
        "Anchoring & Adjustment! The Decoy Effect (Asymmetric Dominance - Huber 1982)! Violates IIA! Compromise Effect (Extremeness Aversion - Simonson 1989)! SaaS Good-Better-Best Menu Architecture! Nudge Theory!"
      ],
      "culturalNotes": [
        "Richard Thaler won the 2017 Nobel Memorial Prize in Economic Sciences for his work on behavioral economics, mental accounting, and Nudge theory."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What behavioral phenomenon occurs when adding a third, strictly inferior \"decoy\" option causes consumers to shift preference toward an asymmetrically dominating target option?",
          "options": [
            "The Decoy Effect (Anchoring (U5))",
            "The Endowment Effect (Anchoring (U5))",
            "The Sunk Cost Fallacy (Anchoring (U5))",
            "The Gambler's Fallacy (Anchoring (U5))"
          ],
          "answerIndex": 0,
          "explanation": "The Decoy Effect (Asymmetric Dominance Effect)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What pricing principle explains why introducing an ultra-expensive $10,000 tier increases sales of an adjacent $2,500 middle tier by making it feel like a reasonable compromise?",
          "options": [
            "The Law of Demand (Anchoring (U5))",
            "Price Elasticity (Anchoring (U5))",
            "Diminishing Returns (Anchoring (U5))",
            "The Compromise Effect (Anchoring (U5))"
          ],
          "answerIndex": 3,
          "explanation": "The Compromise Effect (Extremeness Aversion)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Menu choice architecture leverages the compromise effect and asymmetric decoys to channel consumer volume toward the highest-margin target tier.\"",
          "options": [
            "The decoy effect only works when all products are completely free. (Anchoring (U5))",
            "Anchoring has been proven to have zero influence on consumer willingness to pay. (Anchoring (U5))",
            "Consumers always choose the most extreme and expensive option in every market. (Anchoring (U5))",
            "Menu choice architecture leverages the compromise effect and asymmetric decoys to channel consumer volume toward the highest-margin target tier. (Anchoring (U5))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Menu architecture analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What foundational microeconomic axiom of rational choice is directly violated by the Decoy Effect?",
          "options": [
            "Transitivity of Preferences (Anchoring (U5))",
            "Non-Satiation (Anchoring (U5))",
            "Independence of Irrelevant Alternatives (Anchoring (U5))",
            "Law of One Price (Anchoring (U5))"
          ],
          "answerIndex": 2,
          "explanation": "Independence of Irrelevant Alternatives (IIA).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Anchoring, Decoy Effect & Menu Architecture"
  },
  "b110-u5-l2": {
    "id": "b110-u5-l2",
    "unit": "b110-u5",
    "level": "Advanced",
    "objective": "The Probability Weighting Function & The Fourfold Pattern of Risk (Non-linear probability weighting function $w(p) = \\frac{p^\\gamma}{(p^\\gamma + (1-p)^\\gamma)^{1/\\gamma}}$ with $\\gamma \\approx 0.65$; Overweighting of small probabilities ($p < 0.10$) vs Underweighting of moderate and high probabilities ($p > 0.40$); The Certainty Effect (Allais Paradox); The Fourfold Pattern of Risk in consumer insurance and lottery purchases).",
    "presentation": {
      "explanation": "The Non-Linear Probability Weighting Function $w(p)$ and the Fourfold Pattern of Risk:\n- **The Non-Linear Distortion of Objective Probabilities**:\n  - Human decision-makers do not weight outcomes by objective probabilities $p$, but by subjective decision weights $w(p)$;\n  - **Inverted S-Shaped Weighting Function (Prelec 1998 / Tversky & Kahneman 1992)**:\n    $$w(p) = \\frac{p^\\gamma}{(p^\\gamma + (1 - p)^\\gamma)^{1/\\gamma}} \\quad (\\text{with } \\gamma \\approx 0.65)$$\n  - **Key Structural Distortions**:\n    - **1. Overweighting of Small Probabilities ($p \\ll 1$)**: People treat 1% probability as if it were 5% (driving lottery ticket purchases and catastrophic disaster insurance);\n    - **2. Underweighting of Moderate/High Probabilities**: People treat 95% probability as if it were 80%;\n    - **3. The Certainty Effect (Sub-proportionality / Allais Paradox)**: The psychological jump from 99% to 100% (certainty) feels vastly larger than the jump from 50% to 51%;\n- **The Fourfold Pattern of Risk**:\n  $$\\begin{array}{|c|c|c|} \\hline & \\textbf{Gains} & \\textbf{Losses} \\\\ \\hline \\textbf{High Probability } (p \\approx 0.95) & \\text{Risk-Averse (Settle for sure gain)} & \\text{Risk-Seeking (Gamble to avoid loss)} \\\\ \\hline \\textbf{Low Probability } (p \\approx 0.05) & \\text{Risk-Seeking (Lottery purchases)} & \\text{Risk-Averse (Insurance purchases)} \\\\ \\hline \\end{array}$$.",
      "examples": [
        {
          "target": "The non-linear probability weighting function explains why consumers simultaneously buy lottery tickets (overweighting small gain probability) and flight insurance (overweighting small loss probability).",
          "reading": "The non-linear probability...",
          "translation": "The non-linear probability weighting function explains why consumers simultaneously buy lottery tickets and flight insurance."
        }
      ],
      "mnemonics": [
        "Probability Weighting w(p)! Inverted S-curve (gamma ≈ 0.65)! Overweight small probabilities (Lottery & Disaster Insurance)! Underweight high probabilities! Certainty Effect (99% to 100% premium)! Fourfold Pattern of Risk!"
      ],
      "culturalNotes": [
        "Maurice Allais presented his famous paradox in 1952 at a Paris conference, catching Nobel laureates Milton Friedman and Leonard Savage violating expected utility theory in their own choices."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why do consumers simultaneously buy government lottery tickets and extended warranty insurance, violating classical expected utility theory?",
          "options": [
            "Because consumers cannot perform basic multiplication. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Because insurance is always free. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Because lotteries guarantee a profit. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Because non-linear probability weighting overweights low-probability events in both gain and loss domains. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))"
          ],
          "answerIndex": 3,
          "explanation": "Because non-linear probability weighting overweights low-probability events."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What psychological effect describes the disproportionate value consumers place on eliminating risk entirely (moving from 99% to 100% certainty)?",
          "options": [
            "The Certainty Effect (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "The Decoy Effect (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "The Compromise Effect (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "The Endowment Effect (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))"
          ],
          "answerIndex": 0,
          "explanation": "The Certainty Effect (Allais Paradox)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The inverted S-shaped probability weighting function accounts for the simultaneous consumer demand for high-risk lottery tickets and risk-averse disaster insurance.\"",
          "options": [
            "The certainty effect means consumers prefer 50% probability over 100% certainty. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Objective probabilities are always evaluated perfectly linearly by consumers. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "The inverted S-shaped probability weighting function accounts for the simultaneous consumer demand for high-risk lottery tickets and risk-averse disaster insurance. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Allais paradox proves that consumers are computers. (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Probability weighting analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In the Fourfold Pattern of Risk, what consumer behavior is observed in the high-probability loss domain (e.g., 95% chance of losing $10,000 in court)?",
          "options": [
            "Risk-averse behavior (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Risk-seeking behavior (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Hyperbolic discounting (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))",
            "Indifference (The Probability Weighting Function  The Fourfold Pattern of Risk Nonlinear probability weighting function wp  fracpgammapgamma  1pgamma1gamma with gamma approx 0 (U5))"
          ],
          "answerIndex": 1,
          "explanation": "Risk-seeking behavior.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1105, Lesson 4: The non-linear probability wei"
  },
  "b110-u5-l1": {
    "id": "b110-u5-l1",
    "unit": "b110-u5",
    "level": "Unit 5",
    "objective": "Synthesize Behavioral Economics principles (Kahneman-Tversky Prospect Theory, Decoy Effect, Anchoring, Loss Aversion) into C-Suite product strategy.",
    "presentation": {
      "explanation": "Prospect Theory and Behavioral Decision Making:\n\n1. Prospect Theory Value Function (Kahneman & Tversky, 1979):\n$$v(x) = \\begin{cases} x^\\alpha & \\text{if } x \\ge 0 \\quad (\\text{Gains: concave / risk-averse, } \\alpha \\approx 0.88) \\\\ -\\lambda (-x)^\\beta & \\text{if } x < 0 \\quad (\\text{Losses: convex / risk-seeking, } \\beta \\approx 0.88, \\lambda \\approx 2.25) \\end{cases}$$\n- Loss Aversion ($\\lambda \\approx 2.25$): Losses hurt psychologically more than twice as much as equivalent gains feel pleasurable.\n\n2. Cognitive Biases in Product Strategy:\n- Decoy Effect (Asymmetric Dominance): Introducing an inferior option $C$ that makes target option $A$ look overwhelmingly superior to alternative $B$.\n- Anchoring & Adjustment: Initial presented price sets the cognitive baseline anchor.\n- Endowment / IKEA Effect: Users place disproportionately higher valuation on products they invest active effort to configure.",
      "examples": [
        {
          "target": "The Economist Decoy Pricing Experiment (Dan Ariely):\nOption 1: Web-only subscription ($59)\nOption 2: Print-only subscription ($125) -> Asymmetric Decoy\nOption 3: Print + Web combo ($125)\nResult: Option 2 serves as a decoy, shifting 84% of customers to high-margin Option 3.",
          "reading": "Pricing Strategy Teardown",
          "translation": "Demonstrates how deliberate menu architecture drives consumer revenue maximization."
        }
      ],
      "mnemonics": [
        "Losses loom larger than gains (lambda = 2.25x)!",
        "Decoy = Makes the target choice dominating!"
      ],
      "culturalNotes": [
        "Daniel Kahneman was awarded the 2002 Nobel Memorial Prize in Economic Sciences for integrating psychological insights into economic science and pricing theory."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "According to Prospect Theory, what is the empirical coefficient of Loss Aversion ($\\lambda$)?",
          "options": [
            "Approximately $\\lambda \\approx 2.25$ (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "$\\lambda = 0.5$ (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "$\\lambda = 100.0$ (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "$\\lambda = 1.0$ (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))"
          ],
          "answerIndex": 0,
          "explanation": "Empirical studies across global populations estimate lambda between 2.0 and 2.5."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the \"Decoy Effect\" (Asymmetric Dominance) in subscription pricing design?",
          "options": [
            "Introducing a third option that is dominated by target Option A but not Option B, artificially shifting preference toward Option A (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "Offering a 50% discount on black friday (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "Selling products at cost (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "Hiding prices from competitors (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))"
          ],
          "answerIndex": 0,
          "explanation": "The decoy option changes relative choice architecture to make the premium tier look like a bargain."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "How does human risk attitude differ between the domain of gains versus the domain of losses in Prospect Theory?",
          "options": [
            "Risk-seeking in gains, risk-averse in losses (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "Risk-averse in the domain of gains (concave)",
            "Completely neutral in both domains (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "Randomly distributed (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))"
          ],
          "answerIndex": 1,
          "explanation": "People lock in sure gains but gamble to avoid certain losses.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What cognitive phenomenon describes consumers overvaluing products they participated in assembling or customizing?",
          "options": [
            "The IKEA / Endowment Effect (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "The Gambler's Fallacy (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "The Hawthorne Effect (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))",
            "The Placebo Effect (Synthesize Behavioral Economics principles KahnemanTversky Prospect Theory (U5))"
          ],
          "answerIndex": 0,
          "explanation": "The IKEA effect shows cognitive effort creates emotional ownership and higher perceived value.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1105, Lesson 5: The Economist Decoy Pricing Ex"
  },
  "b110-u4-l4": {
    "id": "b110-u4-l4",
    "unit": "b110-u4",
    "level": "Advanced",
    "objective": "Network Externalities, Metcalfe's Law & Two-Sided Platform Dynamics (Direct network effects ($V \\propto n^2$, Metcalfe's Law; $V \\propto 2^n$, Reed's Law) vs Indirect network effects (cross-side externalities in two-sided platforms); The Critical Mass tipping point $n_{\\text{crit}}$; Pricing architecture on two-sided platforms: subsidizing the price-sensitive \"money-side\" vs monetization of the subsidy-side (Rochet & Tirole 2003)).",
    "presentation": {
      "explanation": "Network Externalities, Critical Mass, and Two-Sided Platform Economics:\n- **Direct Network Effects & Laws of Network Value**:\n  - Occur when the utility of a product to a user increases directly as other users join;\n  - **Metcalfe's Law (Robert Metcalfe 1980)**: Network value is proportional to the number of potential pairwise connections between $n$ nodes:\n    $$V(n) = c \\cdot \\frac{n(n-1)}{2} \\approx O(n^2)$$\n  - **Reed's Law**: For networks supporting subgroup formation, potential sub-networks scale as $V(n) \\propto 2^n$;\n- **The Critical Mass Tipping Point ($n_{\\text{crit}}$)**:\n  - Below critical mass, user drop-off exceeds new arrivals, and the platform collapses into a \"death spiral\";\n  - Once active user count surpasses $n_{\\text{crit}}$, self-sustaining positive feedback loops drive explosive viral adoption toward market dominance (**Winner-Take-Most / Winner-Take-All Dynamics**);\n- **Two-Sided Platform Economics (Jean-Charles Rochet & Jean Tirole 2003)**:\n  - Platforms connecting two distinct user groups (e.g., Drivers and Riders in Uber; Gamers and Game Developers in PlayStation; Buyers and Sellers in Airbnb);\n  - **Cross-Side (Indirect) Externalities**: Value to side $A$ depends on the number of participants on side $B$;\n  - **Asymmetric Pricing Architecture**:\n    - One side is the **\"Subsidy Side\"** (price-elastic, high cross-side externality generator; offered free or subsidized access);\n    - The other side is the **\"Money Side\"** (price-inelastic, captures immense value from access to the subsidy side; charged transaction fees/commissions).",
      "examples": [
        {
          "target": "Two-sided platform pricing subsidizes the price-sensitive user side to generate cross-side externalities that monetize the money side.",
          "reading": "Two-sided platform pricing...",
          "translation": "Two-sided platform pricing subsidizes the price-sensitive user side to generate cross-side externalities that monetize the money side."
        }
      ],
      "mnemonics": [
        "Metcalfe's Law (V ~ n^2 pairwise connections)! Reed's Law (V ~ 2^n subgroups)! Critical Mass Tipping Point n_crit! Two-Sided Platforms (Rochet & Tirole 2003)! Subsidy Side vs Money Side! Cross-side network effects!"
      ],
      "culturalNotes": [
        "Jean Tirole was awarded the Nobel Memorial Prize in Economic Sciences in 2014 in part for his mathematical analysis of market power and two-sided platform regulation."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "According to Metcalfe's Law, how does the theoretical value V of a communication network scale with the number of participating nodes n?",
          "options": [
            "V is proportional to n^2 (Network Externalities (U4))",
            "V is strictly linear (Network Externalities (U4))",
            "V is logarithmic (Network Externalities (U4))",
            "V is constant (Network Externalities (U4))"
          ],
          "answerIndex": 0,
          "explanation": "V is proportional to n^2."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In two-sided platform economics, which user group is typically subsidized with free access or rewards to attract the other side of the market?",
          "options": [
            "The price-sensitive \"Subsidy Side\" with high cross-side externality value (Network Externalities (U4))",
            "The platform owners (Network Externalities (U4))",
            "The regulatory agencies (Network Externalities (U4))",
            "The \"Money Side\" (Network Externalities (U4))"
          ],
          "answerIndex": 0,
          "explanation": "The price-sensitive \"Subsidy Side\"."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Cross-side network externalities in two-sided platforms dictate asymmetric pricing, subsidizing the user base that creates the greatest participation pull for the monetized side.\"",
          "options": [
            "Cross-side network externalities in two-sided platforms dictate asymmetric pricing, subsidizing the user base that creates the greatest participation pull for the monetized side. (Network Externalities (U4))",
            "Two-sided platforms must charge exactly equal flat fees to all participants. (Network Externalities (U4))",
            "Critical mass has no impact on platform survival. (Network Externalities (U4))",
            "Metcalfe's law proves that networks lose value as more nodes join. (Network Externalities (U4))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Two-sided platform analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What economic threshold represents the minimum user scale required for self-sustaining positive feedback loops to outpace user churn in a platform network?",
          "options": [
            "Market Ceiling (Network Externalities (U4))",
            "Break-even Point (Network Externalities (U4))",
            "Carrying Capacity (Network Externalities (U4))",
            "Critical Mass (Network Externalities (U4))"
          ],
          "answerIndex": 3,
          "explanation": "Critical Mass (Tipping Point).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1104, Lesson 1: Network Externalities"
  },
  "b110-u4-l3": {
    "id": "b110-u4-l3",
    "unit": "b110-u4",
    "level": "Advanced",
    "objective": "Crossing the Chasm: Moore's Technology Adoption Lifecycle & Segment Transitions (Geoffrey Moore's framework: Innovators (Tech Enthusiasts, 2.5%), Early Adopters (Visionaries, 13.5%), The Chasm, Early Majority (Pragmatists, 34%), Late Majority (Conservatives, 34%), Laggards (Skeptics, 16%); The Whole Product Concept, Bowling Pin Strategy, and crossing from visionary disruption to pragmatic utility).",
    "presentation": {
      "explanation": "Crossing the Chasm and the Technology Adoption Lifecycle (Geoffrey Moore 1991):\n- **The Traditional Smooth Curve Illusion vs The Chasm Reality**:\n  - Classical diffusion models assume smooth, continuous progression across adopter segments: Innovators $\\to$ Early Adopters $\\to$ Early Majority $\\to$ Late Majority $\\to$ Laggards;\n  - **The Chasm**: A deep, perilous gulf between **Early Adopters (Visionaries)** and the **Early Majority (Pragmatists)** where over 90% of high-tech startups fail;\n- **The Psychographic Divide Across the Chasm**:\n  - **Early Adopters (Visionaries - 13.5%)**:\n    - Driven by revolutionary breakthroughs; willing to tolerate bugs, incomplete APIs, and lack of support to gain 10x competitive advantage;\n  - **Early Majority (Pragmatists - 34%)**:\n    - Driven by risk mitigation, standardization, proven ROI, and peer references; they only buy products with established reference customers in their exact industry;\n  - **The Catch-22**: Pragmatists will not buy without references from other pragmatists, making visionary references useless to them;\n- **Strategies for Crossing the Chasm**:\n  - **1. The Bowling Pin Strategy**: Target a hyper-specific, narrow niche vertical (the \"lead bowling pin\") where the pain point is so acute that pragmatists are forced to adopt;\n  - **2. The Whole Product Solution**: Deliver 100% of the complete ecosystem solution (software + training + integrations + compliance) so the customer requires zero custom hacking.",
      "examples": [
        {
          "target": "Crossing the Chasm requires securing a pragmatic reference beachhead through a 100% complete whole product solution.",
          "reading": "Crossing the Chasm requires...",
          "translation": "Crossing the Chasm requires securing a pragmatic reference beachhead through a 100% complete whole product solution."
        }
      ],
      "mnemonics": [
        "Technology Adoption Lifecycle! Innovators (2.5%), Early Adopters (13.5%), THE CHASM, Early Majority Pragmatists (34%), Late Majority (34%), Laggards (16%)! Visionaries vs Pragmatists! Bowling Pin Strategy! Whole Product Concept!"
      ],
      "culturalNotes": [
        "Geoffrey Moore's 1991 book \"Crossing the Chasm\" is considered the bible of Silicon Valley go-to-market strategy and enterprise B2B product positioning."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Between which two psychographic adopter segments does \"The Chasm\" exist in Geoffrey Moore's Technology Adoption Lifecycle?",
          "options": [
            "Between Innovators and Early Adopters (Crossing the Chasm (U4))",
            "Between Early Majority and Late Majority (Crossing the Chasm (U4))",
            "Between Late Majority and Laggards (Crossing the Chasm (U4))",
            "Between Early Adopters (Visionaries)"
          ],
          "answerIndex": 3,
          "explanation": "Between Early Adopters (Visionaries) and the Early Majority (Pragmatists)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What market entry strategy involves dominating a hyper-specific niche vertical before knocking down adjacent market segments like bowling pins?",
          "options": [
            "The Spray and Pray Strategy (Crossing the Chasm (U4))",
            "The Mass Market Advertising Campaign (Crossing the Chasm (U4))",
            "The Freemium Strategy (Crossing the Chasm (U4))",
            "The Bowling Pin Strategy (Crossing the Chasm (U4))"
          ],
          "answerIndex": 3,
          "explanation": "The Bowling Pin Strategy (Beachhead Strategy)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Pragmatist buyers in the early majority require established references from peer enterprises and a complete whole-product solution before committing capital.\"",
          "options": [
            "Visionary early adopters always wait for five years of customer references. (Crossing the Chasm (U4))",
            "The Chasm occurs only after the entire market is 100% saturated. (Crossing the Chasm (U4))",
            "Pragmatists prefer software with maximum bugs and zero customer support. (Crossing the Chasm (U4))",
            "Pragmatist buyers in the early majority require established references from peer enterprises and a complete whole-product solution before committing capital. (Crossing the Chasm (U4))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Crossing the Chasm analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What percentage of the total market potential is represented by the Early Majority segment in the classical adoption distribution?",
          "options": [
            "50% (Crossing the Chasm (U4))",
            "13.5% (Crossing the Chasm (U4))",
            "34% (Crossing the Chasm (U4))",
            "2.5% (Crossing the Chasm (U4))"
          ],
          "answerIndex": 2,
          "explanation": "34% (Thirty-four percent).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Crossing the Chasm"
  },
  "b110-u4-l2": {
    "id": "b110-u4-l2",
    "unit": "b110-u4",
    "level": "Advanced",
    "objective": "Estimating Market Peak Timing, Peak Adoption Volume & Bass Regression (Calculating time to peak sales adoption $T^* = \\frac{\\ln(q) - \\ln(p)}{p + q}$; peak sales rate $S(T^*) = M \\frac{(p+q)^2}{4q}$; Ordinary Least Squares (OLS) regression on historical discrete time-series: $S_t = \\alpha_1 + \\alpha_2 A_{t-1} + \\alpha_3 A_{t-1}^2$; recovering structural parameters $p, q, M$).",
    "presentation": {
      "explanation": "Estimating Peak Adoption Timing and Structural Econometrics of the Bass Model:\n- **Derivation of Peak Time ($T^*$)**:\n  - Taking the first derivative of the sales rate $S(t)$ with respect to $t$ and setting $S'(t) = 0$ yields the analytical inflection point of maximum sales adoption velocity:\n    $$T^* = \\frac{\\ln(q) - \\ln(p)}{p + q} = \\frac{\\ln(q/p)}{p + q}$$\n  - Note that a peak occurs in positive time ($T^* > 0$) if and only if **$q > p$** (social imitation exceeds spontaneous innovation);\n- **Peak Adoption Volume $S(T^*)$**:\n  - At the peak moment $T^*$, the cumulative adoption fraction is $F(T^*) = \\frac{1}{2} - \\frac{p}{2q}$, and the instantaneous peak sales volume is:\n    $$S(T^*) = M \\cdot \\frac{(p + q)^2}{4q}$$\n- **Econometric Estimation via OLS Regression**:\n  - Discretizing the continuous differential equation into discrete periods $t=1, 2, \\dots, T$:\n    $$S_t = \\alpha_1 + \\alpha_2 A_{t-1} + \\alpha_3 A_{t-1}^2 + \\epsilon_t$$\n    where $S_t$ is sales in period $t$ and $A_{t-1} = \\sum_{k=1}^{t-1} S_k$ is cumulative historical sales;\n  - **Recovering Structural Parameters from OLS Coefficients $\\hat{\\alpha}_1, \\hat{\\alpha}_2, \\hat{\\alpha}_3$**:\n    - $M = \\frac{-\\hat{\\alpha}_2 - \\sqrt{\\hat{\\alpha}_2^2 - 4 \\hat{\\alpha}_1 \\hat{\\alpha}_3}}{2 \\hat{\\alpha}_3}$;\n    - $p = \\frac{\\hat{\\alpha}_1}{M}$;\n    - $q = -\\hat{\\alpha}_3 M$.",
      "examples": [
        {
          "target": "The peak adoption timing T* is calculated analytically as ln(q/p) / (p+q), occurring only when imitation q exceeds innovation p.",
          "reading": "The peak adoption timing...",
          "translation": "The peak adoption timing T* is calculated analytically as ln(q/p) / (p+q), occurring only when imitation q exceeds innovation p."
        }
      ],
      "mnemonics": [
        "Peak Adoption Timing T* = ln(q/p) / (p+q)! Peak Sales S(T*) = M * (p+q)^2 / (4q)! OLS Regression: S_t = alpha_1 + alpha_2 * A_{t-1} + alpha_3 * A_{t-1}^2! Recover M, p, q algebraically!"
      ],
      "culturalNotes": [
        "Companies like Apple and Tesla use Bass peak estimation to plan supply chain manufacturing capacity and component procurement schedules years in advance."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Under what condition will an innovation display a true sales peak (inflection point) at a positive time T* > 0 in the Bass model?",
          "options": [
            "When the imitation coefficient q is strictly greater than the innovation coefficient p (Estimating Market Peak Timing (U4))",
            "When p > q. (Estimating Market Peak Timing (U4))",
            "When M = 0. (Estimating Market Peak Timing (U4))",
            "When p = 0. (Estimating Market Peak Timing (U4))"
          ],
          "answerIndex": 0,
          "explanation": "When the imitation coefficient q is strictly greater than the innovation coefficient p (q > p)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "If an OLS regression of discrete sales on cumulative sales yields alpha_1 = 100 and market potential is solved as M = 10,000, what is the estimated innovation coefficient p?",
          "options": [
            "p = 100 * 10,000 = 1,000,000 (Estimating Market Peak Timing (U4))",
            "p = 0.50 (Estimating Market Peak Timing (U4))",
            "p = 10.0 (Estimating Market Peak Timing (U4))",
            "p = 100 / 10,000 = 0.01 (Estimating Market Peak Timing (U4))"
          ],
          "answerIndex": 3,
          "explanation": "p = 100 / 10,000 = 0.01."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The analytical peak timing formula allows forecasting the precise quarter of maximum adoption velocity before market saturation begins.\"",
          "options": [
            "Market potential M must be infinite for all consumer electronics. (Estimating Market Peak Timing (U4))",
            "OLS regression cannot estimate Bass parameters from discrete sales data. (Estimating Market Peak Timing (U4))",
            "The analytical peak timing formula allows forecasting the precise quarter of maximum adoption velocity before market saturation begins. (Estimating Market Peak Timing (U4))",
            "Peak sales volume always occurs on the first day of product launch. (Estimating Market Peak Timing (U4))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Bass peak analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What mathematical regression technique fits historical discrete sales against linear and quadratic cumulative sales to recover Bass parameters?",
          "options": [
            "K-Means Clustering (Estimating Market Peak Timing (U4))",
            "Ordinary Least Squares (Estimating Market Peak Timing (U4))",
            "Singular Value Decomposition (Estimating Market Peak Timing (U4))",
            "Principal Component Analysis (Estimating Market Peak Timing (U4))"
          ],
          "answerIndex": 1,
          "explanation": "Ordinary Least Squares (OLS Regression).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1104, Lesson 3: Estimating Market Peak Timing"
  },
  "b110-u4-l1": {
    "id": "b110-u4-l1",
    "unit": "b110-u4",
    "level": "Unit 4",
    "objective": "Formulate the Bass Diffusion Model for new product adoption, innovation ($p$) vs imitation ($q$) coefficients, and S-curve market saturation.",
    "presentation": {
      "explanation": "The Bass Diffusion Model (Frank Bass, 1969) mathematically describes the process by which novel innovations, technologies, and consumer products diffuse through a population.\n\n1. Mathematical Formulation:\nLet $M$ be total market potential, $N(t)$ cumulative adopters at time $t$, and $S(t) = \\frac{dN(t)}{dt}$ the rate of new adoption:\n$$\\frac{S(t)}{M - N(t)} = p + q \\cdot \\left( \\frac{N(t)}{M} \\right)$$\n- $p$: Coefficient of Innovation (external mass-media influence / early innovators, typically $0.01 \\le p \\le 0.03$).\n- $q$: Coefficient of Imitation (internal word-of-mouth / social contagion network effects, typically $0.30 \\le q \\le 0.50$).\n\n2. Closed-Form Cumulative Adoption $N(t)$:\n$$N(t) = M \\cdot \\left( \\frac{1 - e^{-(p+q)t}}{1 + \\frac{q}{p} e^{-(p+q)t}} \\right)$$\n\n3. Time to Peak Adoption ($t^*$):\n$$t^* = \\frac{1}{p+q} \\ln\\left( \\frac{q}{p} \\right)$$\nPeak sales occur when cumulative adoption reaches $N(t^*) = M \\cdot \\left( \\frac{1}{2} - \\frac{p}{2q} \\right)$.",
      "examples": [
        {
          "target": "Bass Model Calculation:\nMarket M = 10,000,000, Innovation p = 0.02, Imitation q = 0.38:\nTime to peak sales t* = (1 / 0.40) * ln(0.38 / 0.02) = 2.5 * ln(19) = 2.5 * 2.944 = 7.36 years.\nPeak sales rate S(t*) occurs when cumulative adoption reaches ~47% of total market potential.",
          "reading": "Executive Forecasting Model",
          "translation": "Used by tech executives to project hardware/SaaS hardware growth cycles and manufacturing capacity."
        }
      ],
      "mnemonics": [
        "p = Pioneers / Innovators, q = Quick imitators / Social contagion!"
      ],
      "culturalNotes": [
        "The Bass Model is recognized by Management Science as one of the top 10 most influential mathematical papers in marketing history, accurately predicting adoption for smartphones, color TVs, solar panels, and electric vehicles."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the Bass Diffusion Model, what force does the coefficient $q$ represent?",
          "options": [
            "Government taxation (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "Manufacturing defect rate (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "External television advertising only (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "Imitation driven by word-of-mouth, network effects, and social proof (Formulate the Bass Diffusion Model for new product adoption (U4))"
          ],
          "answerIndex": 3,
          "explanation": "q represents the internal peer-to-peer imitation and viral network diffusion."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What shape does the cumulative adoption curve $N(t)$ exhibit when imitation $q > p$?",
          "options": [
            "A characteristic Sigmoidal S-Curve (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "A straight downward diagonal line (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "A hyperbola approaching zero (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "A flat horizontal line (Formulate the Bass Diffusion Model for new product adoption (U4))"
          ],
          "answerIndex": 0,
          "explanation": "Adoption begins convexly during early pioneer adoption, hits inflection at peak sales, and turns concave toward saturation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "At what point in the product lifecycle does the rate of new adopters $S(t)$ reach its absolute maximum?",
          "options": [
            "Only after the product is discontinued (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "At time $t^* = \\frac{1}{p+q} \\ln (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "At time $t = 0$ (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "When the market is 100% saturated (Formulate the Bass Diffusion Model for new product adoption (U4))"
          ],
          "answerIndex": 1,
          "explanation": "Peak sales occur at the mathematical inflection point $t^*$.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If a product has a very high $q/p$ ratio, how does the adoption curve behave?",
          "options": [
            "Slow initial start followed by explosive, viral rapid growth (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "Instantaneous 100% adoption on day 1 (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "Linear steady growth with no acceleration (Formulate the Bass Diffusion Model for new product adoption (U4))",
            "Zero adoption (Formulate the Bass Diffusion Model for new product adoption (U4))"
          ],
          "answerIndex": 0,
          "explanation": "High q/p indicates strong viral word-of-mouth momentum following initial seed adoption.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1104, Lesson 4: Formulate the Bass Diffusion Model for new product adoption"
  },
  "b110-u3-l4": {
    "id": "b110-u3-l4",
    "unit": "b110-u3",
    "level": "Advanced",
    "objective": "Customer Equity Valuation & Migration Matrix Markov Models (Customer Equity as the sum of discounted CLVs across all current and future cohorts; Customer Migration Markov chains $\\mathbf{v}_{t+1} = \\mathbf{v}_t \\mathbf{P}$; Transition probability matrix $\\mathbf{P}$; Steady-state customer distribution $\\boldsymbol{\\pi} = \\boldsymbol{\\pi} \\mathbf{P}$; multi-state recency/tier transitions and enterprise valuation).",
    "presentation": {
      "explanation": "Customer Equity and Markov Chain Migration Models:\n- **Customer Equity ($CE$)**:\n  - The total discounted lifetime values of all current customers plus all future acquired customers across the enterprise horizon:\n    $$CE = \\sum_{i=1}^{N_{\\text{current}}} \\text{CLV}_i + \\sum_{t=1}^{\\infty} \\frac{\\text{New Cohort Value}_t - \\text{Acquisition Cost}_t}{(1 + d)^t}$$\n- **Markov Chain Customer Migration Matrix**:\n  - Customers occupy distinct states based on activity tiers (e.g., State 1: Active VIP, State 2: Active Standard, State 3: At-Risk, State 4: Dormant, State 5: Absorbing Churn);\n  - Let $\\mathbf{P}$ be the $K \\times K$ transition probability matrix where $P_{ij} = P(S_{t+1} = j | S_t = i)$:\n    $$\\mathbf{P} = \\begin{pmatrix} p_{11} & p_{12} & \\cdots & p_{1K} \\\\ p_{21} & p_{22} & \\cdots & p_{2K} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ p_{K1} & p_{K2} & \\cdots & p_{KK} \\end{pmatrix}$$\n  - The state vector of customer counts evolves as $\\mathbf{v}_{t} = \\mathbf{v}_0 \\mathbf{P}^t$;\n- **Steady-State Distribution $\\boldsymbol{\\pi}$**:\n  - For ergodic (non-absorbing) chains, the long-run stationary distribution satisfies $\\boldsymbol{\\pi} \\mathbf{P} = \\boldsymbol{\\pi}$ subject to $\\sum \\pi_i = 1$;\n  - Enables precise projection of multi-year corporate cash flows by assigning margin vector $\\mathbf{m}$ to states: $\\text{Revenue}_t = \\mathbf{v}_t \\mathbf{m}^T$.",
      "examples": [
        {
          "target": "Markov migration matrices model customer state transitions across activity tiers to project multi-year enterprise customer equity.",
          "reading": "Markov migration matrices...",
          "translation": "Markov migration matrices model customer state transitions across activity tiers to project multi-year enterprise customer equity."
        }
      ],
      "mnemonics": [
        "Customer Equity (Total discounted CLV of all current + future cohorts)! Markov Migration Matrix P! State vector v_{t+1} = v_t * P! Steady-state distribution pi * P = pi! Absorbing churn vs Active tiers!"
      ],
      "culturalNotes": [
        "Roland Rust, Katherine Lemon, and Valarie Zeithaml formalized Customer Equity as the primary financial asset of modern firms in their 2004 framework."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In a Markov customer migration model, what mathematical operation projects customer state distribution from time t to time t+1 using transition matrix P?",
          "options": [
            "v_{t+1} = v_t * P (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "v_{t+1} = P / v_t (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "v_{t+1} = det (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "v_{t+1} = v_t + P (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))"
          ],
          "answerIndex": 0,
          "explanation": "v_{t+1} = v_t * P."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What state in a Markov churn model has a transition probability of 1.0 of staying in that state (P_ii = 1.0) and 0.0 of transitioning out?",
          "options": [
            "An Absorbing State (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "A Transient State (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "A Periodic State (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "An Ergodic State (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))"
          ],
          "answerIndex": 0,
          "explanation": "An Absorbing State (Permanent Churn)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The Markov transition probability matrix projects the longitudinal migration of customers across engagement tiers, generating multi-period discounted cash flows for enterprise valuation.\"",
          "options": [
            "The Markov transition probability matrix projects the longitudinal migration of customers across engagement tiers, generating multi-period discounted cash flows for enterprise valuation. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "Customer equity equals total company warehouse real estate value. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "Markov models assume all customers remain in tier 1 forever. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "Transition probabilities in a row can sum to any arbitrary negative number. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Markov customer equity analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What condition must the sum of probabilities across each row of a valid Markov transition probability matrix P satisfy?",
          "options": [
            "The sum must equal 100. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "The sum must equal zero. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "The sum must equal the total customer count. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))",
            "The sum of probabilities in each row must equal exactly 1.0. (Customer Equity Valuation  Migration Matrix Markov Models Customer Equity as the sum of discounted CLVs across all current and future cohorts (U3))"
          ],
          "answerIndex": 3,
          "explanation": "The sum of probabilities in each row must equal exactly 1.0.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 4: Exchange Rate Systems & The Mundell-Fleming Model"
  },
  "b110-u3-l3": {
    "id": "b110-u3-l3",
    "unit": "b110-u3",
    "level": "Advanced",
    "objective": "Customer Acquisition Cost (CAC) to LTV Dynamics, Payback Period & Unit Economics (The venture capital unit economics benchmarks: $\\text{LTV} / \\text{CAC} \\ge 3.0$; fully-loaded CAC formula: $\\text{CAC} = \\frac{\\text{Total Sales \\& Marketing Expense}}{\\text{New Customers Acquired}}$; CAC Payback Period $= \\frac{\\text{CAC}}{\\text{ARPU} \\times \\text{Gross Margin \\%}} \\le 12\\text{ months}$; Net Revenue Retention (NRR) $\\ge 120\\%$ and negative churn dynamics).",
    "presentation": {
      "explanation": "CAC/LTV Ratio, Payback Period, and SaaS Unit Economics:\n- **The Golden Ratio of Unit Economics: $\\text{LTV} / \\text{CAC}$**:\n  - **$\\text{LTV} / \\text{CAC} < 1.0$**: Value destruction (the business loses money on every customer acquired);\n  - **$\\text{LTV} / \\text{CAC} = 1.0 - 2.0$**: Weak economics, vulnerable to churn and overhead costs;\n  - **$\\text{LTV} / \\text{CAC} \\ge 3.0$**: Healthy, sustainable, high-growth venture capital benchmark;\n  - **$\\text{LTV} / \\text{CAC} > 5.0$**: Under-investing in marketing (growth is sub-optimally slow; should increase acquisition spend);\n- **Fully-Loaded Customer Acquisition Cost (CAC)**:\n  - Must include salaries of sales reps (SDRs, AEs), marketing ad spend, agency retainers, CRM software licenses, and onboarding expenses:\n    $$\\text{CAC} = \\frac{\\text{Total Sales \\& Marketing Costs (Period } t)}{\\text{New Customers Acquired (Period } t)}$$\n- **CAC Payback Period (Capital Efficiency)**:\n  - Months required to recover initial acquisition cost from gross margin contributions:\n    $$\\text{Payback Period (Months)} = \\frac{\\text{CAC}}{\\text{MRR per Customer} \\times \\text{Gross Margin \\%}}$$\n  - Elite enterprise benchmark: **$\\le 12$ months**;\n- **Net Revenue Retention (NRR) & Negative Churn**:\n  - $\\text{NRR} = \\frac{\\text{Beginning ARR} + \\text{Expansion} - \\text{Contraction} - \\text{Churn}}{\\text{Beginning ARR}} \\times 100\\%$;\n  - When expansion from retained customers exceeds lost revenue from churned customers, $\\text{NRR} > 100\\%$ (**Net Negative Churn**), allowing revenue to grow even with zero new acquisitions.",
      "examples": [
        {
          "target": "Healthy SaaS unit economics require an LTV/CAC ratio >= 3.0 and a CAC payback period under 12 months.",
          "reading": "Healthy SaaS unit economics...",
          "translation": "Healthy SaaS unit economics require an LTV/CAC ratio >= 3.0 and a CAC payback period under 12 months."
        }
      ],
      "mnemonics": [
        "LTV/CAC >= 3.0 (Golden Ratio)! Fully-loaded CAC (Salaries + Ad spend)! CAC Payback <= 12 months! Net Revenue Retention (NRR >= 120%)! Net Negative Churn (Expansion > Churn)!"
      ],
      "culturalNotes": [
        "David Skok's seminal \"SaaS Metrics 2.0\" established the definitive analytical vocabulary used by venture capital firms and CFOs worldwide."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the widely accepted venture capital benchmark for the LTV/CAC ratio in a healthy, scalable business model?",
          "options": [
            "LTV / CAC >= 3.0 (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "LTV / CAC = 0.5 (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "LTV / CAC = 1.0 (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "LTV / CAC >= 50.0 (Customer Acquisition Cost CAC to LTV Dynamics (U3))"
          ],
          "answerIndex": 0,
          "explanation": "LTV / CAC >= 3.0."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What state of SaaS unit economics occurs when expansion revenue from existing customers exceeds total lost revenue from downgrades and churn (NRR > 100%)?",
          "options": [
            "Net Negative Churn (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "Bankruptcy (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "Market Saturation (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "Linear Decay (Customer Acquisition Cost CAC to LTV Dynamics (U3))"
          ],
          "answerIndex": 0,
          "explanation": "Net Negative Churn."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"A CAC payback period under twelve months ensures rapid capital recycling, enabling the enterprise to reinvest operating cash flows into customer acquisition.\"",
          "options": [
            "CAC should never include sales team salaries. (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "An LTV/CAC ratio of 0.8 represents hyper-growth profitability. (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "Net Revenue Retention cannot exceed 100% in any software company. (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "A CAC payback period under twelve months ensures rapid capital recycling, enabling the enterprise to reinvest operating cash flows into customer acquisition. (Customer Acquisition Cost CAC to LTV Dynamics (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Accurate SaaS Unit Economics analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If a company spends $120,000 on sales and marketing in Q1 and acquires 100 new customers, what is the fully-loaded CAC per customer?",
          "options": [
            "$120 (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "$12,000 (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "$1,200 (Customer Acquisition Cost CAC to LTV Dynamics (U3))",
            "$100 (Customer Acquisition Cost CAC to LTV Dynamics (U3))"
          ],
          "answerIndex": 2,
          "explanation": "$1,200.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 3: International Trade & Comparative Advantage"
  },
  "b110-u3-l2": {
    "id": "b110-u3-l2",
    "unit": "b110-u3",
    "level": "Advanced",
    "objective": "Contractual vs Non-Contractual Churn: Geometric Decay vs The Pareto/NBD & BG/NBD Models (Fader-Hardie framework; Contractual settings (SaaS, subscriptions) with observable discrete churn vs Non-Contractual settings (e-commerce, retail) where churn is unobservable; BG/NBD probabilistic model modeling transaction rate $\\lambda$ via Gamma distribution and churn probability $p$ via Beta distribution).",
    "presentation": {
      "explanation": "Contractual vs Non-Contractual Churn: The Fader-Hardie Probabilistic Framework:\n- **The Structural Distinction**:\n  - **Contractual Setting (Observable Churn)**: Subscriptions, SaaS, telco, gym memberships. When a customer ends the relationship, they explicitly cancel or fail to renew. Modeled via discrete-time hazard models and geometric retention rates;\n  - **Non-Contractual Setting (Unobservable Churn / \"Alive or Dead\" Problem)**: E-commerce, grocery, hospitality, retail. A customer never officially cancels; they simply stop purchasing. You never know with certainty whether a silent customer is \"dead\" (churned) or merely in a long inter-purchase lull;\n- **The Pareto/NBD & BG/NBD Models (Schmittlein 1987 / Fader & Hardie 2005)**:\n  - **BG/NBD (Beta-Geometric / Negative Binomial Distribution)**:\n    - **1. Transaction Process**: While active, customer $i$ makes purchases according to a Poisson process with rate $\\lambda_i$. Across customers, $\\lambda \\sim \\text{Gamma}(r, \\alpha)$;\n    - **2. Dropout Process**: After any transaction, customer $i$ becomes inactive with probability $p_i$. Across customers, $p \\sim \\text{Beta}(a, b)$;\n  - **Predictive Power**: Computes exact conditional expectations $E[X(t, t+T) | x, t_x, T]$—the expected number of future transactions given individual purchase history (recency $t_x$, frequency $x$, and observation tenure $T$) and individual probability of being active $P(\\text{Alive} | x, t_x, T)$.",
      "examples": [
        {
          "target": "The BG/NBD model solves the non-contractual unobservable churn problem by estimating P(Alive) using individual transaction recency and frequency.",
          "reading": "The BG/NBD model...",
          "translation": "The BG/NBD model solves the non-contractual unobservable churn problem by estimating P(Alive) using individual transaction recency and frequency."
        }
      ],
      "mnemonics": [
        "Contractual (Observable cancellation in SaaS) vs Non-Contractual (Unobservable silent churn in E-commerce)! BG/NBD Model (Fader-Hardie)! Poisson/Gamma for frequency lambda! Beta-Geometric for churn probability p! P(Alive | recency, frequency, tenure)!"
      ],
      "culturalNotes": [
        "Peter Fader (Wharton) and Bruce Hardie (London Business School) revolutionized quantitative marketing analytics by releasing open-source implementations of probability models for customer base analysis."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why is predicting customer churn fundamentally more challenging in non-contractual retail settings (like Amazon) than in contractual settings (like Netflix)?",
          "options": [
            "Because retail data contains no timestamps. (Contractual vs NonContractual Churn (U3))",
            "Because retail customers always have a retention rate of 1.0. (Contractual vs NonContractual Churn (U3))",
            "Because credit cards cannot be processed in retail. (Contractual vs NonContractual Churn (U3))",
            "Because customers never formally cancel in non-contractual settings, making churn unobservable. (Contractual vs NonContractual Churn (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Because customers never formally cancel in non-contractual settings."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In the BG/NBD customer lifetime model, what two statistical distributions govern the purchase rate lambda and the dropout probability p across the customer population?",
          "options": [
            "Normal distribution and Cauchy distribution (Contractual vs NonContractual Churn (U3))",
            "Uniform distribution and Binomial distribution (Contractual vs NonContractual Churn (U3))",
            "Exponential distribution and Poisson distribution (Contractual vs NonContractual Churn (U3))",
            "Gamma distribution (for lambda)"
          ],
          "answerIndex": 3,
          "explanation": "Gamma distribution (for lambda) and Beta distribution (for p)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The BG/NBD probability model computes the exact probability that a customer is still active (P(Alive)) using observed historical recency and transaction frequency.\"",
          "options": [
            "In SaaS subscription businesses, churn is unobservable. (Contractual vs NonContractual Churn (U3))",
            "Pareto/NBD models assume all customers have identical purchase behavior. (Contractual vs NonContractual Churn (U3))",
            "The BG/NBD probability model computes the exact probability that a customer is still active (Alive)",
            "Recency has zero statistical value in predicting repeat customer transactions. (Contractual vs NonContractual Churn (U3))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate BG/NBD model analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What metric in non-contractual customer analytics measures the time elapsed between a customer's first transaction and their most recent transaction?",
          "options": [
            "Churn rate (Contractual vs NonContractual Churn (U3))",
            "Recency (Contractual vs NonContractual Churn (U3))",
            "Tenure (Contractual vs NonContractual Churn (U3))",
            "Frequency (Contractual vs NonContractual Churn (U3))"
          ],
          "answerIndex": 1,
          "explanation": "Recency (t_x).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 2: Endogenous Growth & R&D Spillovers"
  },
  "b110-u3-l1": {
    "id": "b110-u3-l1",
    "unit": "b110-u3",
    "level": "Unit 3",
    "objective": "Formulate Customer Lifetime Value (CLV), finite vs infinite geometric series discounting, retention rates, and CAC-to-LTV ratio optimization.",
    "presentation": {
      "explanation": "Customer Lifetime Value (CLV) quantifies the net present value (NPV) of future cash flows attributed to an ongoing customer relationship.\n\n1. Infinite Horizon Geometric Formulation:\nAssuming constant margin contribution $M$, constant retention rate $r$, and discount rate $d$:\n$$CLV = \\sum_{t=0}^{\\infty} M \\cdot \\frac{r^t}{(1+d)^t} = M \\cdot \\left( \\frac{1 + d}{1 + d - r} \\right)$$\nIf margin occurs at period end (post-period):\n$$CLV = M \\cdot \\left( \\frac{r}{1 + d - r} \\right)$$\n\n2. Customer Acquisition Cost (CAC) & Payback Dynamics:\n- $LTV : CAC \\ge 3:1$ is the canonical venture benchmark for sustainable unit economics.\n- CAC Payback Period $= \\frac{CAC}{\\text{Monthly Gross Margin Per Customer}} \\le 12 \\text{ months}$.",
      "examples": [
        {
          "target": "Example Calculation:\nMonthly Margin M = $50, Annual Discount Rate d = 10% (monthly ~0.8%), Monthly Retention r = 95%:\nCLV = $50 * (0.95 / (1 + 0.008 - 0.95)) = $50 * (0.95 / 0.058) = $818.96.\nIf CAC = $200, LTV:CAC = 818.96 / 200 = 4.09x (Strong Unit Economics).",
          "reading": "Unit Economics Dashboard",
          "translation": "Quantifies profitability threshold for customer acquisition spend."
        }
      ],
      "mnemonics": [
        "LTV:CAC >= 3:1 = Golden ratio of SaaS unit economics!"
      ],
      "culturalNotes": [
        "Pioneered by database marketers in the 1980s (Blattberg & Deighton), CLV modeling became the universal valuation standard for subscription software, e-commerce, and direct-to-consumer businesses."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In subscription business models, what is the standard recommended benchmark ratio for LTV to CAC?",
          "options": [
            "At least 3:1 (Formulate Customer Lifetime Value CLV (U3))",
            "1:1 (Formulate Customer Lifetime Value CLV (U3))",
            "100:1 only (Formulate Customer Lifetime Value CLV (U3))",
            "0.5:1 (Formulate Customer Lifetime Value CLV (U3))"
          ],
          "answerIndex": 0,
          "explanation": "3:1 provides sufficient gross profit buffer after acquisition, operational overhead, and churn."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "If retention rate $r$ increases from 80% to 90% while discount rate $d=10%$, what happens to the CLV multiplier $\\frac{r}{1+d-r}$?",
          "options": [
            "It stays constant (Formulate Customer Lifetime Value CLV (U3))",
            "It drops to zero (Formulate Customer Lifetime Value CLV (U3))",
            "It decreases linearly (Formulate Customer Lifetime Value CLV (U3))",
            "It more than doubles (Formulate Customer Lifetime Value CLV (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Retention has a highly convex, non-linear compounding multiplier on customer valuation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What happens to CLV as the annual customer churn rate approaches zero (retention $r \\to 1$)?",
          "options": [
            "CLV becomes negative (Formulate Customer Lifetime Value CLV (U3))",
            "CLV approaches $M \\cdot \\frac{1+d}{d}$ (Formulate Customer Lifetime Value CLV (U3))",
            "CAC increases to infinity (Formulate Customer Lifetime Value CLV (U3))",
            "CLV drops to zero (Formulate Customer Lifetime Value CLV (U3))"
          ],
          "answerIndex": 1,
          "explanation": "At 100% retention, customer value equals a perpetual discounted cash flow annuity.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which metric measures how many months of customer gross margin are needed to recoup marketing acquisition cost?",
          "options": [
            "CAC Payback Period (Formulate Customer Lifetime Value CLV (U3))",
            "Gross Margin Return on Inventory (Formulate Customer Lifetime Value CLV (U3))",
            "Asset Turnover (Formulate Customer Lifetime Value CLV (U3))",
            "Net Promoter Score (Formulate Customer Lifetime Value CLV (U3))"
          ],
          "answerIndex": 0,
          "explanation": "CAC Payback Period = CAC / Monthly Gross Margin.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 1: The Solow-Swan Neoclassical Growth Model"
  },
  "b110-u2-l5": {
    "id": "b110-u2-l5",
    "unit": "b110-u2",
    "level": "Unit 2",
    "objective": "C2 Synthesis on Market Simulation Engines: Share of Preference, First-Choice Rule, and Sensitivity Sensitivity Optimization.",
    "presentation": {
      "explanation": "Market Simulation Engines use respondent part-worth matrices to forecast market shares under counterfactual product launch and competitive scenarios.\n\n1. **Share of Preference (Logit Simulation Rule)**:\nFor a simulated market of $K$ competitive profiles across $N$ respondents:\n$$\\text{Market Share}_j = \\frac{1}{N} \\sum_{i=1}^N \\frac{\\exp(U_{ij})}{\\sum_{k=1}^K \\exp(U_{ik})}$$\nAssumes probabilistic choice, accounting for consumer uncertainty and unobserved attributes.\n\n2. **First-Choice Rule (Maximum Utility Rule)**:\nRespondent $i$ allocates 100% of their purchase to the alternative with the highest total utility:\n$$\\text{Choice}_{ij} = \\begin{cases} 1 & \\text{if } U_{ij} = \\max_k(U_{ik}) \\\\ 0 & \\text{otherwise} \\end{cases}, \\quad \\text{Market Share}_j = \\frac{1}{N} \\sum_{i=1}^N \\text{Choice}_{ij}$$\nAccurate for high-involvement, infrequent, expensive purchases (automobiles, B2B enterprise software).\n\n3. **Sensitivity Analysis & Product Line Optimization**:\nSimulating competitive price wars, cannibalization of existing product lines, and finding the Pareto-optimal feature configuration maximizing Total Contribution Margin:\n$$\\Pi = Q_{\\text{total}} \\times \\sum_{j \\in \\text{Firm}} \\text{Share}_j \\times (P_j - \\text{MC}_j)$$",
      "examples": [
        {
          "target": "A market simulator tests adding 5G to a $399 smartphone, forecasting a 14% increase in market share with 4% cannibalization of the firm's flagship model.",
          "reading": "Conjoint Market Simulator Optimization",
          "translation": "A market simulator tests adding 5G to a $399 smartphone, forecasting a 14% increase in market share with 4% cannibalization of the firm's flagship model."
        }
      ],
      "mnemonics": [
        "Market Simulator: Logit Rule (Probabilistic share) vs First-Choice Rule (Winner-take-all for high involvement)! Optimizes Price x Share x Margin!"
      ],
      "culturalNotes": [
        "Sawtooth Software is the global industry standard platform used by Fortune 500 companies to run conjoint market simulations."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which conjoint market simulation rule is most appropriate for modeling high-involvement, expensive durable purchases like luxury automobiles?",
          "options": [
            "First-Choice (Maximum Utility)",
            "Share of Preference (Logit)",
            "Equal Division Rule (C2 Synthesis on Market Simulation Engines (U2))",
            "Random Walk Rule (C2 Synthesis on Market Simulation Engines (U2))"
          ],
          "answerIndex": 0,
          "explanation": "First-Choice (Maximum Utility) Rule."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What risk can a multi-product firm evaluate in a conjoint market simulator when introducing a cheaper sub-brand?",
          "options": [
            "Increase in global interest rates (C2 Synthesis on Market Simulation Engines (U2))",
            "Foreign exchange devaluations (C2 Synthesis on Market Simulation Engines (U2))",
            "Server hardware failures (C2 Synthesis on Market Simulation Engines (U2))",
            "Cannibalization of its own high-margin premium products (C2 Synthesis on Market Simulation Engines (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Cannibalization of its own high-margin premium products."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate and evaluate: \"A market simulator aggregates individual-level utility part-worths to predict aggregate market share responses to competitor price changes and new product introductions.\"",
          "options": [
            "True: Conjoint market simulators evaluate counterfactual market scenarios by calculating choice probabilities across respondent segments. (C2 Synthesis on Market Simulation Engines (U2))",
            "False: Market simulators require no respondent survey data. (C2 Synthesis on Market Simulation Engines (U2))",
            "True only for monopoly markets. (C2 Synthesis on Market Simulation Engines (U2))",
            "False: Conjoint simulators can only predict historical sales from five years ago. (C2 Synthesis on Market Simulation Engines (U2))"
          ],
          "answerIndex": 0,
          "explanation": "True.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What objective function does a firm maximize when running sensitivity sweeps across price points in a conjoint simulator?",
          "options": [
            "Total gross revenue with zero cost consideration (C2 Synthesis on Market Simulation Engines (U2))",
            "Number of survey respondents (C2 Synthesis on Market Simulation Engines (U2))",
            "Lowest possible selling price (C2 Synthesis on Market Simulation Engines (U2))",
            "Total Profit Contribution Margin: Sum (C2 Synthesis on Market Simulation Engines (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Total Profit Contribution Margin.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 5: Fiscal Policy & Keynesian Multipliers"
  },
  "b110-u2-l4": {
    "id": "b110-u2-l4",
    "unit": "b110-u2",
    "level": "Unit 2",
    "objective": "Calculate Marginal Willingness-to-Pay (WTP) and Marginal Rates of Substitution (MRS) from Part-Worth Utilities.",
    "presentation": {
      "explanation": "Willingness-to-Pay (WTP) quantifies the exact monetary value consumers place on specific feature improvements.\n\n1. **Marginal Rate of Substitution (MRS)**:\nThe rate at which a consumer trades off Attribute $j$ for a reduction in Price ($P$):\n$$\\text{MRS}_{j, P} = -\\frac{\\partial U / \\partial X_j}{\\partial U / \\partial P} = -\\frac{\\beta_j}{\\beta_{\\text{price}}}$$\n\n2. **Marginal Willingness-to-Pay (WTP)**:\nFor a discrete feature improvement from level $A$ to level $B$:\n$$\\text{WTP}_{A \\to B} = -\\frac{\\beta_{j, B} - \\beta_{j, A}}{\\beta_{\\text{price}}}$$\nwhere $\\beta_{\\text{price}} < 0$ is the marginal utility of price (price slope).\n\n3. **Managerial Application in Pricing Strategy**:\nIf moving from 128GB to 512GB storage increases utility by $\\Delta \\beta = +0.60$, and the price coefficient $\\beta_{\\text{price}} = -0.005$ per dollar, then:\n$$\\text{WTP} = -\\frac{+0.60}{-0.005} = \\$120$$\nThe firm can price the 512GB upgrade up to $\\$120$ without reducing customer surplus below the baseline.",
      "examples": [
        {
          "target": "If the utility gain for Leather Seats is +1.2 and beta_price = -0.001 per dollar, WTP = -1.2 / -0.001 = $1,200.",
          "reading": "Willingness-to-Pay calculation",
          "translation": "If the utility gain for Leather Seats is +1.2 and beta_price = -0.001 per dollar, WTP = -1.2 / -0.001 = $1,200."
        }
      ],
      "mnemonics": [
        "WTP = -(Delta Beta_feature) / Beta_price! Price slope Beta_price is negative! Converts abstract utility points into exact dollar value!"
      ],
      "culturalNotes": [
        "WTP estimation from conjoint analysis is used by Apple, Tesla, and pharmaceutical companies to set profit-maximizing tiered product pricing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How is the marginal Willingness-to-Pay (WTP) for a feature upgrade calculated from conjoint part-worth utilities?",
          "options": [
            "WTP = Beta_feature * Price (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "WTP = Beta_feature + Beta_price (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "WTP = Price / Beta_feature (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "WTP = - (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))"
          ],
          "answerIndex": 3,
          "explanation": "WTP = - (Delta Beta_feature) / Beta_price."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "If the price coefficient in a conjoint study is beta_price = -0.02 per dollar and upgrading battery life gives Delta beta = +0.80, what is the consumer WTP for the upgrade?",
          "options": [
            "$40.00 (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "$80.00 (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "$16.00 (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "$20.00 (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))"
          ],
          "answerIndex": 0,
          "explanation": "$40.00."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Why is the price coefficient (beta_price) negative in standard consumer demand models?",
          "options": [
            "Because surveyed customers are irrational. (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "Because negative numbers simplify matrix math. (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "Because companies lose revenue when prices rise. (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "Because as price increases, consumer utility decreases (law of downward-sloping demand)"
          ],
          "answerIndex": 3,
          "explanation": "Because as price increases, consumer utility decreases.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What strategic business decision can a product manager optimize using conjoint WTP estimates?",
          "options": [
            "Factory inventory barcodes. (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "Employee payroll deductions. (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "Value-based tiered pricing and profitable feature bundling. (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))",
            "Corporate tax filings. (Calculate Marginal WillingnesstoPay WTP and Marginal Rates of Substitution MRS from PartWorth Utilities (U2))"
          ],
          "answerIndex": 2,
          "explanation": "Value-based tiered pricing and profitable feature bundling.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 4: Aggregate Demand & Aggregate Supply (AD-AS Model)"
  },
  "b110-u2-l3": {
    "id": "b110-u2-l3",
    "unit": "b110-u2",
    "level": "Unit 2",
    "objective": "Derive Discrete Choice Modeling (Choice-Based Conjoint - CBC), Multinomial Logit (MNL), and Independence of Irrelevant Alternatives (IIA).",
    "presentation": {
      "explanation": "In **Choice-Based Conjoint (CBC)**, respondents choose their preferred profile from a choice set $C_t = \\{1, 2, \\dots, J\\}$ (plus a \"None\" option).\n\n1. **Random Utility Theory (McFadden, 1974 - Nobel Prize 2000)**:\nUtility $U_{ijt} = V_{ijt} + \\epsilon_{ijt}$, where $V_{ijt} = \\mathbf{X}_{ijt} \\boldsymbol{\\beta}$ is deterministic utility and $\\epsilon_{ijt} \\sim \\text{i.i.d. Gumbel (Extreme Value Type I)}$.\n\n2. **Multinomial Logit (MNL) Choice Probability**:\nThe probability $P_{ijt}$ that consumer $i$ chooses profile $j$ from choice set $C$ is:\n$$P_{ijt} = \\frac{e^{V_{ijt}}}{\\sum_{k \\in C} e^{V_{ikt}}} = \\frac{\\exp(\\mathbf{X}_{ijt} \\boldsymbol{\\beta})}{\\sum_{k \\in C} \\exp(\\mathbf{X}_{ikt} \\boldsymbol{\\beta})}$$\n\n3. **The IIA Property (Red Bus / Blue Bus Paradox)**:\n$$\\frac{P(j)}{P(k)} = \\frac{e^{V_j}}{e^{V_k}} = e^{V_j - V_k}$$\nThe ratio of choice probabilities between any two alternatives is independent of the existence of any other alternatives in the choice set. Overcoming IIA requires **Hierarchical Bayes (HB) Estimation** or **Mixed Logit Models**.",
      "examples": [
        {
          "target": "If Product A has deterministic utility V_A = 2.0 and Product B has V_B = 1.0, P(A) = e^2 / (e^2 + e^1) = 7.389 / (7.389 + 2.718) = 73.1%.",
          "reading": "MNL Choice Probability Calculation",
          "translation": "If Product A has deterministic utility V_A = 2.0 and Product B has V_B = 1.0, P(A) = e^2 / (e^2 + e^1) = 7.389 / (7.389 + 2.718) = 73.1%."
        }
      ],
      "mnemonics": [
        "MNL Choice: P(j) = e^(V_j) / Sum(e^(V_k))! Daniel McFadden Nobel Prize 2000! IIA Property (Red Bus / Blue Bus paradox solved by Hierarchical Bayes)!"
      ],
      "culturalNotes": [
        "Daniel McFadden won the Nobel Memorial Prize in Economic Sciences in 2000 for developing discrete choice econometric models (originally used to forecast BART subway ridership in San Francisco)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Under the Multinomial Logit (MNL) choice model, what formula gives the probability of choosing alternative j from set C?",
          "options": [
            "P (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "P (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2)) [Option 2]",
            "P (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2)) [Option 3]",
            "P (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2)) [Option 4]"
          ],
          "answerIndex": 0,
          "explanation": "P(j) = exp(V_j) / sum_{k in C} exp(V_k)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous paradox illustrates the limitation of the Independence of Irrelevant Alternatives (IIA) assumption in standard logit models?",
          "options": [
            "The Red Bus / Blue Bus Paradox (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "The Monty Hall Problem (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "The St. Petersburg Paradox (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "Arrow's Impossibility Theorem (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))"
          ],
          "answerIndex": 0,
          "explanation": "The Red Bus / Blue Bus Paradox."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "If three products have utilities V_1 = 0, V_2 = 0, V_3 = 0 in a choice set, what is the probability of choosing Product 1?",
          "options": [
            "0.0% (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "50.0% (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "33.3% (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "100.0% (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))"
          ],
          "answerIndex": 2,
          "explanation": "33.3%.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which advanced Bayesian econometric method estimates individual-level part-worth distributions to resolve the IIA restriction in market simulations?",
          "options": [
            "Ordinary Least Squares (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "Hierarchical Bayes (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "K-Means clustering (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))",
            "PCA decomposition (Derive Discrete Choice Modeling ChoiceBased Conjoint  CBC (U2))"
          ],
          "answerIndex": 1,
          "explanation": "Hierarchical Bayes (HB) Estimation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 3: Unemployment & Labor Market Dynamics"
  },
  "b110-u2-l2": {
    "id": "b110-u2-l2",
    "unit": "b110-u2",
    "level": "Unit 2",
    "objective": "Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies.",
    "presentation": {
      "explanation": "In conjoint studies with multiple attributes, the total number of full-profile combinations grows exponentially: $N = \\prod_{j=1}^J L_j$ (e.g., 4 attributes with 3 levels each $= 3^4 = 81$ profiles), causing respondent fatigue.\n\n1. **Orthogonal Fractional Factorial Design**:\nA mathematically selected subset of profiles ($M \\ll N$) that preserves two critical properties:\n- **Balance**: Each level of an attribute appears an equal number of times across the experimental cards.\n- **Orthogonality**: Every pair of levels across two different attributes appears together with equal frequency.\n- Ensures zero correlation ($\\text{Cov}(X_j, X_k) = 0$) between attribute columns in the design matrix $X$.\n\n2. **Statistical Efficiency ($D$-Efficiency)**:\n$$D\\text{-Efficiency} = 100 \\times \\left( \\frac{1}{M \\cdot \\det(X^T X)^{-1/p}} \\right)$$\nOrthogonal designs maximize the determinant $\\det(X^T X)$, minimizing standard errors of part-worth estimates with minimal respondent burden (e.g., reducing 81 profiles down to 9 or 16 cards).",
      "examples": [
        {
          "target": "A fractional factorial design reduces a 3^4 = 81 profile experiment down to 9 orthogonal cards while estimating all main effects without bias.",
          "reading": "Fractional Factorial Orthogonal Array",
          "translation": "A fractional factorial design reduces a 3^4 = 81 profile experiment down to 9 orthogonal cards while estimating all main effects without bias."
        }
      ],
      "mnemonics": [
        "Orthogonal Design: 1. Balance (Equal frequency of levels), 2. Orthogonality (Zero correlation Cov=0 between attributes)! Maximizes D-Efficiency!"
      ],
      "culturalNotes": [
        "Jacques Hadamard introduced Hadamard matrices in 1893; Genichi Taguchi popularized orthogonal arrays for industrial quality engineering and marketing research."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What statistical condition is satisfied when an experimental design is \"orthogonal\"?",
          "options": [
            "The covariance between all pairs of attribute columns in the design matrix is zero (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "All profiles cost the same price. (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "The sample size is greater than 1,000. (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "All part-worths are positive. (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))"
          ],
          "answerIndex": 0,
          "explanation": "The covariance between all pairs of attribute columns is zero."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the primary benefit of using a fractional factorial orthogonal design in consumer conjoint surveys?",
          "options": [
            "It makes survey results identical across all countries. (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "It drastically reduces the number of survey evaluation cards while maintaining unbiased main-effect parameter estimation. (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "It guarantees 100% market share. (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "It eliminates the need for price attributes. (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))"
          ],
          "answerIndex": 1,
          "explanation": "It drastically reduces the number of survey evaluation cards."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "If a full factorial design requires 3 x 3 x 3 x 3 = 81 profiles, what standard Taguchi orthogonal array can estimate all main effects in just 9 profiles?",
          "options": [
            "L81 Full Matrix (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "L9 Orthogonal Array (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "L2 Binary Array (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "L100 Matrix (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))"
          ],
          "answerIndex": 1,
          "explanation": "L9 Orthogonal Array.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What mathematical metric evaluates the overall precision and variance minimization of a conjoint experimental design matrix X?",
          "options": [
            "D-Efficiency (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "Gini index (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "R-squared only (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))",
            "Beta coefficient (Construct Fractional Factorial Orthogonal Experimental Designs and Hadamard Matrices for Conjoint Studies (U2))"
          ],
          "answerIndex": 0,
          "explanation": "D-Efficiency.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 2: Inflation, CPI & Real vs Nominal Interest Rates"
  },
  "b110-u2-l1": {
    "id": "b110-u2-l1",
    "unit": "b110-u2",
    "level": "Core",
    "objective": "Master full-profile conjoint analysis algorithms, fractional factorial orthogonal arrays, and part-worth utility estimation.",
    "presentation": {
      "explanation": "In B110 Unit 2, we master Conjoint Analysis—the premier quantitative method for measuring consumer preference trade-offs:\n\n1. Conjoint Utility Model:\n   The total value (utility) consumer $i$ derives from product bundle $j$ is decomposed into a linear combination of discrete part-worths:\n   $$U_{ij} = \\sum_{k=1}^K \\sum_{l=1}^{L_k} \\beta_{ikl} X_{jkl} + \\epsilon_{ij}$$\n   - $K$: Number of product attributes (e.g. Price, Battery Life, Brand, Screen Size)\n   - $\\beta_{ikl}$: Part-worth utility of level $l$ of attribute $k$ for individual $i$.\n\n2. Fractional Factorial Design:\n   - Full factorial ($3 \\times 4 \\times 3 \\times 2 = 72$ profiles) causes respondent fatigue.\n   - Orthogonal arrays reduce survey burden to 16 profiles while ensuring zero multicollinearity ($r=0$) between attribute columns!\n\n3. Willingness-to-Pay (WTP) Derivation:\n   $$\\text{WTP}_{\\text{attribute}} = \\frac{\\Delta \\text{Utility}_{\\text{attribute}}}{\\left|\\frac{\\Delta \\text{Utility}_{\\text{price}}}{\\Delta \\text{Price}}\\right|}$$",
      "examples": [
        {
          "target": "Smartphone Conjoint: Upgrading from 128GB to 512GB gains +2.4 utils. Price sensitivity is 0.02 utils/$. WTP = 2.4 / 0.02 = $120 premium.",
          "reading": "Willingness-to-Pay Calculation",
          "translation": "Optimal pricing calculation from conjoint part-worths."
        }
      ],
      "mnemonics": [
        "CONJOINT: Decompose bundle utility into additive part-worths -> Divide by price slope for WTP!"
      ],
      "culturalNotes": [
        "Widely used by Apple, Tesla, and McKinsey for new product pricing and feature bundle optimization."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why are orthogonal fractional factorial designs used in conjoint surveys instead of full factorials?",
          "options": [
            "To eliminate the need for survey respondents (Master fullprofile conjoint analysis algorithms (U2))",
            "To make the survey completely random (Master fullprofile conjoint analysis algorithms (U2))",
            "Because full factorials are illegal (Master fullprofile conjoint analysis algorithms (U2))",
            "To dramatically reduce respondent fatigue while maintaining zero multicollinearity among attributes (Master fullprofile conjoint analysis algorithms (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Orthogonal fractional factorials balance attributes and minimize respondent fatigue."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "If an OLED screen upgrade gives +1.8 utils and the price slope is -0.03 utils per dollar, what is the customer WTP?",
          "options": [
            "$180 (Master fullprofile conjoint analysis algorithms (U2))",
            "$54 (Master fullprofile conjoint analysis algorithms (U2))",
            "$18 (Master fullprofile conjoint analysis algorithms (U2))",
            "$60 (Master fullprofile conjoint analysis algorithms (U2))"
          ],
          "answerIndex": 3,
          "explanation": "WTP = 1.8 / 0.03 = $60."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "In conjoint analysis, what does a \"part-worth\" represent?",
          "options": [
            "The discrete utility value a consumer places on a specific level of a product attribute (Master fullprofile conjoint analysis algorithms (U2))",
            "The wholesale cost of shipping (Master fullprofile conjoint analysis algorithms (U2))",
            "The total price of the bundle (Master fullprofile conjoint analysis algorithms (U2))",
            "The profit margin of the factory (Master fullprofile conjoint analysis algorithms (U2))"
          ],
          "answerIndex": 0,
          "explanation": "Part-worths quantify the utility contributed by each specific attribute level.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What statistical technique is standardly used to estimate individual-level part-worths from conjoint choice data?",
          "options": [
            "Simple linear addition (Master fullprofile conjoint analysis algorithms (U2))",
            "K-means clustering alone (Master fullprofile conjoint analysis algorithms (U2))",
            "Random coin tossing (Master fullprofile conjoint analysis algorithms (U2))",
            "Hierarchical Bayesian (Master fullprofile conjoint analysis algorithms (U2))"
          ],
          "answerIndex": 3,
          "explanation": "Hierarchical Bayes (HB) is the global gold standard for choice-based conjoint estimation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 1: Measuring National Income & GDP Accounting"
  },
  "b110-u3-l5": {
    "id": "b110-u3-l5",
    "unit": "b110-u3",
    "level": "Advanced",
    "objective": "Unit 3 Capstone: Customer Base Valuation & Cohort Equity Dynamics (Integrated analytics: linking BG/NBD transaction forecasts with discounted cash flow CLV and Markov customer migration matrices for enterprise valuation).",
    "presentation": {
      "explanation": "Unit 3 Capstone: The Integrated Customer Equity Engine:\n- Synthesizes individual BG/NBD probability models ($P(\\text{Alive})$) with multi-cohort DCF valuation;\n- Calibrates acquisition budgets: $\\text{Max CAC} \\le \\text{CLV} / 3.0$;\n- Tracks migration across engagement tiers using Markov transition matrices ($mathbf{v}_{t+1} = mathbf{v}_t mathbf{P}$).",
      "examples": [
        {
          "target": "Customer base valuation integrates BG/NBD probabilistic transaction forecasting with cohort discounted cash flows.",
          "reading": "Customer base valuation...",
          "translation": "Customer base valuation integrates BG/NBD probabilistic transaction forecasting with cohort discounted cash flows."
        }
      ],
      "mnemonics": [
        "Customer Equity Capstone! BG/NBD P(Alive) + DCF CLV + Markov Migration P! Max CAC <= CLV / 3! Complete customer analytics mastery!"
      ],
      "culturalNotes": [
        "Wall Street equity research analysts use these exact customer-based corporate valuation (CBCV) models to value public tech companies like Spotify and DoorDash."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which quantitative framework links non-contractual transaction predictions with enterprise financial discounted cash flows?",
          "options": [
            "Fixed Asset Depreciation (Unit 3 Capstone (U3))",
            "Inventory Turnover (Unit 3 Capstone (U3))",
            "Cost-Plus Markup (Unit 3 Capstone (U3))",
            "Customer-Based Corporate Valuation (Unit 3 Capstone (U3))"
          ],
          "answerIndex": 3,
          "explanation": "Customer-Based Corporate Valuation (CBCV)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What parameter in SaaS unit economics ensures that customer lifetime value exceeds customer acquisition costs by at least 3x?",
          "options": [
            "LTV / CAC >= 3.0 (Unit 3 Capstone (U3))",
            "LTV / CAC = 0.1 (Unit 3 Capstone (U3))",
            "CAC Payback = 100 years (Unit 3 Capstone (U3))",
            "Churn = 100% (Unit 3 Capstone (U3))"
          ],
          "answerIndex": 0,
          "explanation": "LTV / CAC >= 3.0."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Customer base corporate valuation establishes that enterprise equity is fundamentally driven by the net present value of cash flows generated across customer cohorts.\"",
          "options": [
            "Enterprise valuation is based solely on office furniture value. (Unit 3 Capstone (U3))",
            "Discounted cash flows cannot be applied to customer margins. (Unit 3 Capstone (U3))",
            "Customer base corporate valuation establishes that enterprise equity is fundamentally driven by the net present value of cash flows generated across customer cohorts. (Unit 3 Capstone (U3))",
            "Customer churn has zero impact on stock price. (Unit 3 Capstone (U3))"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Customer base valuation analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What probability model estimates P(Alive) in non-contractual retail using recency and frequency?",
          "options": [
            "Linear Regression (Unit 3 Capstone (U3))",
            "BG/NBD Model (Unit 3 Capstone (U3))",
            "K-Means Clustering (Unit 3 Capstone (U3))",
            "Logistic Regression (Unit 3 Capstone (U3))"
          ],
          "answerIndex": 1,
          "explanation": "BG/NBD Model.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 5: Behavioral Economics & Prospect Theory"
  },
  "b110-u4-l5": {
    "id": "b110-u4-l5",
    "unit": "b110-u4",
    "level": "Advanced",
    "objective": "Unit 4 Capstone: Innovation Diffusion, S-Curve Dynamics & Platform Scaling (Synthesizing the Bass differential model, Geoffrey Moore's crossing the chasm strategies, and two-sided platform network externalities).",
    "presentation": {
      "explanation": "Unit 4 Capstone: Innovation Diffusion and Platform Scaling Engine:\n- Bass S-Curve Trajectory: Predicting peak adoption velocity $T^* = \\frac{\\ln(q/p)}{p+q}$ and market potential $M$;\n- Crossing the Chasm: Securing the pragmatic early majority beachhead via the whole product solution;\n- Platform Network Effects: Reaching critical mass $n_{\\text{crit}}$ and monetizing the money-side while subsidizing the price-elastic side.",
      "examples": [
        {
          "target": "Platform scaling synthesizes Bass diffusion S-curves with critical mass network externalities and asymmetric two-sided pricing.",
          "reading": "Platform scaling...",
          "translation": "Platform scaling synthesizes Bass diffusion S-curves with critical mass network externalities and asymmetric two-sided pricing."
        }
      ],
      "mnemonics": [
        "Innovation Capstone! Bass Diffusion S-curve! Moore's Chasm Crossing! Metcalfe's Law Network Value ~ n^2! Two-Sided Platform Asymmetric Pricing!"
      ],
      "culturalNotes": [
        "Companies like Uber, Airbnb, and Apple App Store achieved multi-hundred-billion-dollar market caps by executing this exact platform scaling playbook."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which pricing strategy is essential in two-sided platforms to reach critical mass network externalities?",
          "options": [
            "Subsidizing the price-sensitive user side while monetizing the price-inelastic side (Unit 4 Capstone (U4))",
            "Giving away 100% of all assets for free forever (Unit 4 Capstone (U4))",
            "Operating with zero users (Unit 4 Capstone (U4))",
            "Charging equal maximum fees to all users (Unit 4 Capstone (U4))"
          ],
          "answerIndex": 0,
          "explanation": "Subsidizing the price-sensitive user side while monetizing the price-inelastic side."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the analytical formula for time to peak sales adoption T* in the Bass diffusion model when q > p?",
          "options": [
            "T* = ln (Unit 4 Capstone (U4))",
            "T* = M / 2 (Unit 4 Capstone (U4))",
            "T* = p * q * M (Unit 4 Capstone (U4))",
            "T* = 1 / (Unit 4 Capstone (U4))"
          ],
          "answerIndex": 0,
          "explanation": "T* = ln(q / p) / (p + q)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Crossing the chasm from visionary early adopters to pragmatic mainstream buyers requires establishing a defensible beachhead through a complete whole-product ecosystem.\"",
          "options": [
            "Pragmatists always buy unproven beta software with zero references. (Unit 4 Capstone (U4))",
            "Crossing the chasm from visionary early adopters to pragmatic mainstream buyers requires establishing a defensible beachhead through a complete whole-product ecosystem. (Unit 4 Capstone (U4))",
            "The Bass model predicts that sales will decrease linearly every day. (Unit 4 Capstone (U4))",
            "Network externalities decrease platform value as more users join. (Unit 4 Capstone (U4))"
          ],
          "answerIndex": 1,
          "explanation": "Accurate Innovation diffusion analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What law states that the value of a telecommunications network is proportional to the square of the number of connected users (n^2)?",
          "options": [
            "Metcalfe's Law (Unit 4 Capstone (U4))",
            "Moore's Law (Unit 4 Capstone (U4))",
            "Amdahl's Law (Unit 4 Capstone (U4))",
            "Zipf's Law (Unit 4 Capstone (U4))"
          ],
          "answerIndex": 0,
          "explanation": "Metcalfe's Law.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4 Capstone"
  },
  "b110-u5-l5": {
    "id": "b110-u5-l5",
    "unit": "b110-u5",
    "level": "Advanced",
    "objective": "B110 Master Capstone: Quantitative Consumer Psychology, Price Architecture & Commercial Strategy (Final comprehensive synthesis of discrete choice conjoint, lifetime customer valuation, innovation diffusion dynamics, and behavioral economic price architecture).",
    "presentation": {
      "explanation": "B110 Master Capstone: The Sovereign Quantitative Consumer & Pricing Engine:\n- 1. Multi-Attribute Choice (Units 1 & 2): Hierarchical Bayes Conjoint and willingness-to-pay decomposition ($\\text{WTP} = -\\Delta\\beta / \\beta_{\\text{price}}$);\n- 2. Longitudinal Customer Economics (Unit 3): Probabilistic BG/NBD lifetime value and multi-cohort Markov equity migration;\n- 3. Market Penetration Dynamics (Unit 4): Bass innovation diffusion ($p, q, M$), chasm crossing, and platform network scaling;\n- 4. Behavioral Price Optimization (Unit 5): Reference-dependent prospect theory ($\\lambda \\approx 2.25$), asymmetric decoy framing, and Good-Better-Best SaaS tier architecture.",
      "examples": [
        {
          "target": "B110 completes the mastery of quantitative consumer psychology, conjoint choice simulation, customer lifetime valuation, and behavioral pricing.",
          "reading": "B110 completes...",
          "translation": "B110 completes the mastery of quantitative consumer psychology, conjoint choice simulation, customer lifetime valuation, and behavioral pricing."
        }
      ],
      "mnemonics": [
        "B110 Master Capstone! Conjoint & WTP! BG/NBD CLV! Bass Diffusion S-curve! Prospect Theory Loss Aversion (2.25x)! Asymmetric Decoy Menu Architecture! Complete University Mastery!"
      ],
      "culturalNotes": [
        "This end-to-end curriculum reflects the exact syllabus taught in elite MBA and PhD quantitative marketing programs at Stanford GSB, Wharton, and Harvard Business School."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What complete curriculum does mastering B110 represent?",
          "options": [
            "Complete University-Level Mastery of Market Dynamics, Consumer Psychology, and Quantitative Pricing Optimization (B110 Master Capstone (U5))",
            "Basic salesmanship (B110 Master Capstone (U5))",
            "Elementary bookkeeping (B110 Master Capstone (U5))",
            "Social media blogging (B110 Master Capstone (U5))"
          ],
          "answerIndex": 0,
          "explanation": "Complete University-Level Mastery of Market Dynamics, Consumer Psychology, and Quantitative Pricing Optimization (25 Sessions)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which behavioral economic principle explains why losses hurt approximately 2.25 times more than equal monetary gains?",
          "options": [
            "The Master Theorem (B110 Master Capstone (U5))",
            "Loss Aversion in Prospect Theory (B110 Master Capstone (U5))",
            "The Law of Supply (B110 Master Capstone (U5))",
            "Metcalfe's Law (B110 Master Capstone (U5))"
          ],
          "answerIndex": 1,
          "explanation": "Loss Aversion in Prospect Theory (lambda ≈ 2.25)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The quantitative consumer psychology capstone unites discrete choice conjoint analysis, customer lifetime value modeling, innovation diffusion, and behavioral price framing into a predictive commercial strategy engine.\"",
          "options": [
            "The quantitative consumer psychology capstone unites discrete choice conjoint analysis, customer lifetime value modeling, innovation diffusion, and behavioral price framing into a predictive commercial strategy engine. (B110 Master Capstone (U5))",
            "Consumer behavior cannot be modeled using mathematics. (B110 Master Capstone (U5))",
            "Pricing should always be decided by flipping a coin. (B110 Master Capstone (U5))",
            "Conjoint analysis is only used in agriculture. (B110 Master Capstone (U5))"
          ],
          "answerIndex": 0,
          "explanation": "Accurate B110 Master Capstone analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What foundational microeconomic axiom is violated when adding an asymmetrically dominated decoy shifts consumer preference toward a target option?",
          "options": [
            "Law of Diminishing Marginal Utility (B110 Master Capstone (U5))",
            "Equi-marginal Principle (B110 Master Capstone (U5))",
            "Revealed Preference Axiom (B110 Master Capstone (U5))",
            "Independence of Irrelevant Alternatives (B110 Master Capstone (U5))"
          ],
          "answerIndex": 3,
          "explanation": "Independence of Irrelevant Alternatives (IIA).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "B110 Master Capstone"
  }
};
  var CURRICULUM = { id: 'b110', name: "B110: Market Dynamics & Consumer Psychology", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['b110'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
