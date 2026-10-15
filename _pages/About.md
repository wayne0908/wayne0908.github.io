---
permalink: /
title: "About Me"
layout: single
author_profile: true
weizhi_content: true
---

{::nomarkdown}
<section class="intro" aria-label="About and research">
      <p>I am currently a researcher at the University of Tennessee Health Science Center. I develop reliable, robust, and data-efficient AI for applications in science and healthcare. I earned my Ph.D. in computer engineering from Arizona State University, my M.S. in electrical engineering from Texas A&amp;M University, and my B.S. in electronic information science and technology from Shandong University. I previously held full-time research positions at Meta, Arizona State University, and Los Alamos National Laboratory.</p>
      <p><strong>Research interests:</strong> reliable and robust machine learning; statistical inference; active learning and experimental design; AI for science and healthcare.</p>
      <p class="opportunity"><strong>I am seeking opportunities as an Assistant Professor, Research Scientist, or Machine Learning Engineer. Please do not hesitate to contact me if you think I am a good fit!</strong></p>
      <h2 id="research-summary-heading">Research Summary</h2>
      <p>My research develops AI integration designs that enable models to operate reliably, robustly, and data-efficiently in high-stakes scientific and healthcare settings. I focus on the layer between AI capability and deployment: how to validate, monitor, adapt, and supply AI systems with informative data when real-world decisions are consequential and operational resources are limited. This agenda is organized around three pillars. <strong>Statistical validity</strong> provides explicit error-rate control for AI-assisted decisions. <strong>Adaptive learning</strong> characterizes and exploits heterogeneity in operating conditions to support robust prediction across diverse and dynamic environments. <strong>Intelligent data acquisition</strong> guides the allocation of limited data-collection resources, including experimental measurements and data annotations. Together, these pillars enable the reliable, robust, and data-efficient integration of AI into high-stakes decision systems.</p>
      <figure class="agenda-figure">
        <div class="agenda-pdf" data-pdf-src="/images/research/ai-integration-design.pdf">
          <canvas hidden role="img" aria-label="AI Integration Design connects AI technologies with high-stakes operating environments through statistical validity, adaptive learning, and intelligent data acquisition."></canvas>
          <img class="agenda-fallback" src="/images/research/ai-integration-design.svg" width="2520" height="774" alt="AI Integration Design connects AI technologies with high-stakes operating environments through statistical validity, adaptive learning, and intelligent data acquisition.">
        </div>
      </figure>
      <script type="module" src="/assets/js/research-diagram.js"></script>
    </section>

    <section aria-labelledby="publications-heading">
      <h2 id="publications-heading">Selected Publications</h2>

      <ul class="papers selected-papers">
        <li>
          <p><strong>Weizhi Li</strong>, Gautam Dasarathy, and Visar Berisha. "<a href="https://arxiv.org/abs/2509.10742">Matched-Pair Experimental Design with Active Learning</a>." Conference on Uncertainty in Artificial Intelligence (UAI), 2026. <span class="pillar-tags"><span>Statistical validity</span><span>Intelligent data acquisition</span></span></p>
          <p class="paper-summary">Integrates machine learning with matched-pair experiments to detect causal treatment effects under limited resources. The proposed design uses agnostic active learning to prioritize treatment-responsive regions while identifying an enclosing region that provides an upper bound on the size of the responder region under the stated assumptions. This supports decisions in multiphase clinical trials: whether a treatment may benefit a sufficiently broad population to justify a larger, more expensive experiment.</p>
          <figure class="paper-visual paper-image paper-image-compact">
            <img src="/images/research/uai-2026.png" width="1884" height="656" loading="lazy" alt="Comparison of random enrollment, enrollment within a subset of the target, and active enrollment covering the high-treatment-effect region.">
          </figure>
        </li>

        <li>
          <p><strong>Weizhi Li</strong>, Natalie Klein, Brendan Gifford, Elizabeth Sklute, Carey Legett, and Samuel Clegg. "<a href="https://doi.org/10.1029/2025JH000990">Regularization via f-Divergence: An Application to Multi-Oxide Spectroscopic Analysis</a>." JGR: Machine Learning and Computation, 2026. <span class="pillar-tags"><span>Adaptive learning</span></span></p>
          <p class="paper-summary">Develops a neural-network training approach for stable spectroscopic characterization of oxide weights under extreme simulated Martian conditions. The approach embeds comparisons between multi-oxide predictions and certified reference weights in an f-divergence loss, guiding the network to learn the underlying multi-oxide distributions. The left diagram shows how f-divergence regularization complements the prediction-error loss during training; the right illustrates large versus small divergence between predicted and reference oxide-weight distributions.</p>
          <div class="paper-figure-pair paper-figure-pair-jgr">
            <figure class="paper-visual paper-image">
              <img src="/images/research/jgr-framework-native.png" width="1669" height="404" loading="lazy" alt="Spectroscopic neural network with mean squared error and f-divergence regularization.">
            </figure>
            <figure class="paper-visual paper-image">
              <img src="/images/research/jgr-divergence.png" width="592" height="223" loading="lazy" alt="Graph illustrations contrasting large and small divergence between two distributions.">
            </figure>
          </div>
        </li>

        <li>
          <p>Pavel Dolin, <strong>Weizhi Li</strong>, Gautam Dasarathy, and Visar Berisha. "<a href="https://papers.nips.cc/paper_files/paper/2025/hash/a540928a972fea5b501b64c51f7829ef-Abstract-Position_Paper_Track.html">Statistically Valid Post-Deployment Monitoring Should Be Standard for AI-Based Digital Health</a>." Conference on Neural Information Processing Systems (NeurIPS), 2025. <span class="pillar-tags"><span>Statistical validity</span></span></p>
          <p class="paper-summary">Healthcare operating conditions are dynamic: patient demographics, clinical practices, equipment, disease patterns, and data-acquisition procedures can shift. Yet a review cited in this paper found that only 9% of FDA-registered AI-based healthcare tools included a post-deployment surveillance plan. The paper argues for statistically valid, label-efficient post-deployment monitoring to detect shifts in data and model performance while controlling explicit error rates.</p>
          <figure class="paper-visual paper-image paper-image-monitoring">
            <img src="/images/research/neurips-2025-monitoring.png" width="1145" height="539" loading="lazy" alt="Digital-health monitoring framework covering data shifts, model performance, and impacted subgroups.">
          </figure>
        </li>

        <li>
          <p><strong>Weizhi Li</strong>, Visar Berisha, and Gautam Dasarathy. "<a href="/Publications/WSC24.pdf">Advanced Tutorial: Label-Efficient Two-Sample Tests</a>." Winter Simulation Conference (WSC), 2024. <span class="pillar-tags"><span>Statistical validity</span><span>Intelligent data acquisition</span></span></p>
          <p class="paper-summary">A tutorial on resource-efficient methods for revealing dependence on an exposure variable in industrial-scale simulation applications. Using the familiar machine-learning variables of features and labels, it presents statistical tools to detect whether labels depend on features before committing to large-scale computation, such as developing AI surrogate models for scientific simulations. These tools enable a pilot study to gauge whether data contain predictive signals and are ready for machine-learning modeling.</p>
          <figure class="paper-visual paper-image paper-image-compact paper-image-wsc">
            <img src="/images/research/WSC-2024.png" width="936" height="396" loading="lazy" alt="A pilot study paired with a neural-network model, illustrating the assessment of data before larger-scale machine-learning modeling.">
          </figure>
        </li>

        <li id="tmlr-paper">
          <p><strong>Weizhi Li</strong>, Prad Kadambi, Pouria Saidi, Karthikeyan Natesan Ramamurthy, Gautam Dasarathy, and Visar Berisha. "<a href="/Publications/TMLR2024.pdf">Active Sequential Two-Sample Testing</a>." Transactions on Machine Learning Research (TMLR), 2024. <span class="pillar-tags"><span>Statistical validity</span><span>Intelligent data acquisition</span></span></p>
          <p class="paper-summary">Proposes a framework for detecting observational dependence between measured features and an exposure or group variable when labels are costly. The design combines machine learning with active, sequential two-sample testing to decide where to collect data and monitor the accumulated evidence. Anytime-valid inference guides the next step: continue collecting data, stop without rejecting when the budget is exhausted, or reject independence to establish evidence of observational dependence.</p>
          <figure class="paper-visual paper-image paper-image-compact">
            <img src="/images/research/tmlr-active-sequential.png" width="1853" height="695" loading="lazy" alt="Active sequential two-sample testing loop: predict, query labels, update the statistic, then reject or continue according to the threshold and budget.">
          </figure>
        </li>

        <li>
          <p><strong>Weizhi Li</strong>, Gautam Dasarathy, Karthikeyan Natesan Ramamurthy, and Visar Berisha. "<a href="/Publications/UAI22.pdf">A Label-Efficient Two-Sample Test</a>." Conference on Uncertainty in Artificial Intelligence (UAI), 2022. <span class="pillar-tags"><span>Statistical validity</span><span>Intelligent data acquisition</span></span></p>
          <p class="paper-summary">Introduces bimodal querying, which reverses the uncertainty-seeking principle of conventional active learning: in binary classification, it requests annotations where the model is most confident in class 0 or class 1. Combined with a two-sample test, this exposes predictive signals with fewer labels. <a href="#tmlr-paper">Subsequent analysis</a> establishes asymptotic maximization of feature-label mutual information under consistency conditions. The approach supports rapid signal assessment, including evaluating whether data contain useful predictive information for an AI task.</p>
          <figure class="paper-visual paper-image paper-image-compact">
            <img src="/images/research/uai-2022.png" width="2339" height="942" loading="lazy" alt="Original data distribution compared with passive querying and bimodal querying that amplifies distributional separation.">
          </figure>
        </li>

        <li>
          <p><strong>Weizhi Li</strong>, Gautam Dasarathy, Karthikeyan Natesan Ramamurthy, and Visar Berisha. "<a href="/Publications/NeurIPS2020.pdf">Finding the Homology of Decision Boundaries with Active Learning</a>." Conference on Neural Information Processing Systems (NeurIPS), 2020. <span class="pillar-tags"><span>Adaptive learning</span><span>Intelligent data acquisition</span></span></p>
          <p class="paper-summary">Proposes an active-learning framework to efficiently estimate the topological properties of a decision-boundary manifold. These properties support evaluating AI tools from a model marketplace using a topology-based comparison metric. The work establishes conditions under which boundary homology is recoverable, grounding the metric's reliability and the selection of models for downstream tasks. The left diagram illustrates the boundary geometry and sampling conditions; the right shows the active homology-estimation pipeline.</p>
          <div class="paper-figure-pair paper-figure-pair-topology">
            <figure class="paper-visual paper-image">
              <img src="/images/research/NeurIPS2020_framework.png" width="1806" height="1172" loading="lazy" alt="Labeled samples, decision-boundary geometry, and tubular neighborhoods used to recover boundary homology.">
            </figure>
            <figure class="paper-visual paper-image">
              <img src="/images/research/neurips-2020-topology.png" width="1012" height="106" loading="lazy" alt="Active-learning pipeline from graph construction and queried labels to simplicial complexes and persistence diagrams.">
            </figure>
          </div>
        </li>

        <li id="aistats-paper">
          <p><strong>Weizhi Li</strong>, Gautam Dasarathy, and Visar Berisha. "<a href="/Publications/AISTATS2020.pdf">Regularization via Structural Label Smoothing</a>." International Conference on Artificial Intelligence and Statistics (AISTATS), 2020. <span class="pillar-tags"><span>Adaptive learning</span></span></p>
          <p class="paper-summary">Characterizes intrinsic structural complexity through local class overlap and develops structural label smoothing to adapt neural-network training to that complexity. By choosing smoothing strengths from the data's structure rather than imposing uniform regularization, the method adapts a general-purpose learning algorithm to a downstream task using its intrinsic structural properties. The figure traces the process from the original data through local complexity estimates to adaptive smoothing strengths.</p>
          <figure class="paper-visual paper-image">
            <img src="/images/research/aistats-2020.png" width="2670" height="495" loading="lazy" alt="Structural label smoothing: (a) original training data, (b) cluster training data, (c) estimate local Bayes error, and (d) infer smoothing strengths.">
            <figcaption class="aistats-steps">
              <span><strong>(a)</strong> Original training data</span>
              <span><strong>(b)</strong> Cluster training data</span>
              <span><strong>(c)</strong> Estimate local Bayes error</span>
              <span><strong>(d)</strong> Infer smoothing strengths</span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>

    <section aria-labelledby="awards-heading">
      <h2 id="awards-heading">Honors and Awards</h2>
      <ul class="awards-list">
        <li>
          <time class="award-date" datetime="2025-10">Oct 2025</time>
          <span class="award-title">NeurIPS Top Reviewer Award</span>
        </li>
        <li>
          <time class="award-date" datetime="2022-06">Jun 2022</time>
          <span class="award-title">UAI Student Scholarship</span>
        </li>
        <li>
          <time class="award-date" datetime="2020-08">Aug 2020</time>
          <span class="award-title">Graduate Travel Award, Arizona State University</span>
        </li>
        <li>
          <span class="award-date"><time datetime="2018">2018</time>, <time datetime="2019">2019</time></span>
          <span class="award-title">Engineering Graduate Fellowship, Arizona State University</span>
        </li>
        <li>
          <time class="award-date" datetime="2017-03">Mar 2017</time>
          <span class="award-title">Poster Award, SWE Region C Conference Poster Competition</span>
        </li>
        <li>
          <time class="award-date" datetime="2016-08">Aug 2016</time>
          <span class="award-title">Graduate Merit Scholarship, Texas A&amp;M University</span>
        </li>
      </ul>
    </section>

    <section aria-labelledby="talks-heading">
      <h2 id="talks-heading">Selected Talks</h2>
      <ul class="talks-list">
        <li>
          <time class="talk-year" datetime="2025">2025</time>
          <div>
            <p class="talk-title">Label-Efficient Two-Sample Tests</p>
            <p class="talk-details"><span class="talk-type">Invited talk</span> &middot; Statistics Seminar, University of New Mexico</p>
          </div>
        </li>
        <li>
          <time class="talk-year" datetime="2024">2024</time>
          <div>
            <p class="talk-title">Label-Efficient Two-Sample Tests</p>
            <p class="talk-details"><span class="talk-type">Tutorial talk</span> &middot; Winter Simulation Conference</p>
          </div>
        </li>
        <li>
          <time class="talk-year" datetime="2024">2024</time>
          <div>
            <p class="talk-title">AI-Enhanced Exploration for Planetary Science</p>
            <p class="talk-details"><span class="talk-type">Invited talk</span> &middot; Applied Machine Learning Summer School, Los Alamos National Laboratory</p>
          </div>
        </li>
        <li>
          <time class="talk-year" datetime="2023">2023</time>
          <div>
            <p class="talk-title">Designing Two-Sample Tests with Local Information</p>
            <p class="talk-details"><span class="talk-type">Invited talk</span> &middot; LIONS Seminar Series, Arizona State University</p>
          </div>
        </li>
      </ul>
    </section>

    <section aria-labelledby="activities-heading">
      <h2 id="activities-heading">Professional Activities</h2>
      <ul class="professional-activities">
        <li><strong>Journal Reviewer:</strong> <em>IEEE Transactions on Information Theory</em>, <em>IEEE Transactions on Artificial Intelligence</em>, <em>Journal of Combinatorial Optimization</em>, and <em>Transactions on Machine Learning Research</em>.</li>
        <li><strong>Program Committee:</strong> NeurIPS, ICML, ICLR, UAI, AISTATS, IJCAI, and AAAI.</li>
      </ul>
    </section>
{:/nomarkdown}
