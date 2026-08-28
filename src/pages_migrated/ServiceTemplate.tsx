"use client";
import Image from "next/image";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../components/ServiceHero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Layout,
  ClipboardList,
  Rocket,
  Database,
  ShieldCheck,
  BarChart3,
  Target,
} from "lucide-react";
import { Hero } from "../components/Hero";

export default function CloudAdvisory({
  wordpressData,
}: {
  wordpressData?: any;
}) {
  useEffect(() => {
    document.title = "Cloud Advisory Services | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;
  const sf = wordpressData?.serviceFields;

  const defaultMethodology = [
    {
      id: "step1",
      title: sf?.methodologyStep1Title,
      subtitle: sf?.methodologyStep1Subtitle,
      icon:
        sf?.methodologyStep1Icon?.node?.sourceUrl ||
        sf?.methodologyStep1Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep1Points,
    },
    {
      id: "step2",
      title: sf?.methodologyStep2Title,
      subtitle: sf?.methodologyStep2Subtitle,
      icon:
        sf?.methodologyStep2Icon?.node?.sourceUrl ||
        sf?.methodologyStep2Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep2Points,
    },
    {
      id: "step3",
      title: sf?.methodologyStep3Title,
      subtitle: sf?.methodologyStep3Subtitle,
      icon:
        sf?.methodologyStep3Icon?.node?.sourceUrl ||
        sf?.methodologyStep3Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep3Points,
    },
    {
      id: "step4",
      title: sf?.methodologyStep4Title,
      subtitle: sf?.methodologyStep4Subtitle,
      icon:
        sf?.methodologyStep4Icon?.node?.sourceUrl ||
        sf?.methodologyStep4Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep4Points,
    },
    {
      id: "step5",
      title: sf?.methodologyStep5Title,
      subtitle: sf?.methodologyStep5Subtitle,
      icon:
        sf?.methodologyStep5Icon?.node?.sourceUrl ||
        sf?.methodologyStep5Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep5Points,
    },
    {
      id: "step6",
      title: sf?.methodologyStep6Title,
      subtitle: sf?.methodologyStep6Subtitle,
      icon:
        sf?.methodologyStep6Icon?.node?.sourceUrl ||
        sf?.methodologyStep6Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep6Points,
    },
    {
      id: "step7",
      title: sf?.methodologyStep7Title,
      subtitle: sf?.methodologyStep7Subtitle,
      icon:
        sf?.methodologyStep7Icon?.node?.sourceUrl ||
        sf?.methodologyStep7Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep7Points,
    },
    {
      id: "step8",
      title: sf?.methodologyStep8Title,
      subtitle: sf?.methodologyStep8Subtitle,
      icon:
        sf?.methodologyStep8Icon?.node?.sourceUrl ||
        sf?.methodologyStep8Icon?.node?.mediaItemUrl,
      points: sf?.methodologyStep8Points,
    },
  ].filter((step) => step.title); // Filter out empty steps

  // If no dynamic steps are provided in ACF, we fall back to an empty array (or we could keep the hardcoded ones, but let's assume they want ACF control).
  // Actually, we must preserve the layout. If `defaultMethodology.length > 0`, use it.

  return (
    <>
      <ServiceHero
        title={renderHeroTitle(
          heroData?.heroS1Title || (
            <>
              Cloud <br />
              <span className="text-[#f99d1c]">Advisory</span>
            </>
          ),
        )}
        description={
          formatQuotesToBold(
            heroData?.heroS1Desc ||
              "From 'Cloud Ambition' to ^Real Business Outcomes^ through strategic foresight.",
          ) as any
        }
        category="Cloud Advisory"
        image={
          heroData?.heroS1ImageUrl ||
          heroData?.heroS1Image?.node?.sourceUrl ||
          "https://images.unsplash.com/photo-1660058550844-02d4eaa79667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwZGlnaXRhbCUyMGRhdGElMjBmbG93JTIwYmx1ZSUyMG9yYW5nZSUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NzE5MzIyNzl8MA&ixlib=rb-4.1.0&q=80&w=1920"
        }
        ctaText={heroData?.heroS1Button?.title}
        ctaLink={heroData?.heroS1Button?.url}
      />

      {/* Intro Section: Moving to the cloud */}
      <section className="py-20 bg-[#fdfbf7] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                {formatQuotesToBold(
                  sf?.introHeading ||
                    "Moving to the cloud is not just a technology shift, ^it is a strategic business decision.^",
                )}
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-medium leading-relaxed italic">
                {sf?.introParagraph ||
                  'The real question is not "Should we move to the cloud?" It is "How do we move in a way that creates measurable value?"'}
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-[#11253e] text-lg leading-relaxed font-light">
                {formatQuotesToBold(
                  sf?.introSubParagraph ||
                    "Our Cloud Advisory Services enable you to architect a future-ready transformation roadmap that accelerates growth and resilience. We work alongside your team to create a secure, financially responsible and future-ready cloud strategy that supports growth, resilience and innovation.",
                )}
              </p>
              <div className="w-20 h-px bg-[#f99d1c]"></div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* 1. Our Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-sm overflow-hidden shadow-3xl">
              <ImageWithFallback
                src={
                  sf?.approachImage?.node?.sourceUrl ||
                  sf?.approachImage?.node?.mediaItemUrl ||
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                }
                alt="Business Strategy Planning"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#11253e]/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-12 p-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">01</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">
                  {formatQuotesToBold(sf?.approachTitle || "Our 'Approach'")}
                </h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">
                  {formatQuotesToBold(
                    sf?.approachSubtitle ||
                      "Lead with business strategy, then align the cloud to enable it.",
                  )}
                </h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                {sf?.approachDescription ||
                  "We do not begin with platforms or tools. We begin with your priorities — revenue growth, cost control, customer experience, compliance and speed to market. Our role is to translate these priorities into a practical cloud strategy."}
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  sf?.approachPoint1,
                  sf?.approachPoint2,
                  sf?.approachPoint3,
                  sf?.approachPoint4,
                  sf?.approachPoint5,
                  sf?.approachPoint6,
                  sf?.approachPoint7,
                  sf?.approachPoint8,
                  sf?.approachPoint9,
                  sf?.approachPoint10,
                ]
                  .filter(Boolean)
                  .map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2
                        className="text-[#f99d1c] shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-[#11253e] text-sm font-medium">
                        {formatQuotesToBold(item)}
                      </span>
                    </div>
                  ))}
              </div>

              <div className="p-8 bg-[#11253e] text-white rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <p className="font-light italic leading-relaxed opacity-80">
                    {formatQuotesToBold(
                      sf?.approachQuote ||
                        '"We serve as a strategic advisor to ensure your cloud investments deliver sustained value and operational maturity."',
                    )}
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Methodology Section */}
      <section className="py-20 bg-[#eeede9] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-[#f99d1c] font-black text-6xl">02</span>
              <div className="h-px w-12 bg-[#f99d1c]"></div>
            </div>
            <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">
              {formatQuotesToBold(sf?.methodologyTitle || "Our 'Methodology'")}
            </h2>
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">
              {formatQuotesToBold(
                sf?.methodologySubtitle ||
                  "Structured, and Built for Execution",
              )}
            </h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              {formatQuotesToBold(
                sf?.methodologyDescription ||
                  "Cloud transformation can feel complex. We simplify it through a clear, structured framework.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defaultMethodology.map((step, idx) => (
              <Motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-5 border-b-4 pb-10 border-[#11253e]/10 hover:border-[#f99d1c] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-[#11253e]/5 rounded-sm flex items-center justify-center mb-8 mx-auto">
                  {typeof step.icon === "string" ? (
                    <ImageWithFallback
                      src={step.icon}
                      alt={step.title || ""}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    step.icon || (
                      <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    )
                  )}
                </div>
                <h4 className="text-[#11253e] text-2xl font-medium mb-2 w-full">
                  {formatQuotesToBold(step.title || "")}
                </h4>
                <p className="text-[#f99d1c] text-xs font-bold uppercase tracking-widest mb-6 w-full">
                  {formatQuotesToBold(step.subtitle || "")}
                </p>
                <div className="space-y-4 flex-grow text-left w-full">
                  {(typeof step.points === "string"
                    ? step.points.split("\n")
                    : step.points || []
                  ).map((point: any, i: number) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-1 h-1 rounded-full bg-[#f99d1c] mt-2 shrink-0"></div>
                      <span className="text-[#11253e] text-[15px] leading-relaxed font-normal">
                        {formatQuotesToBold(point)}
                      </span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-[#11253e] text-lg font-medium italic">
              {formatQuotesToBold(
                sf?.methodologyQuote ||
                  "\"The result isn't a slide deck. It's a clear, execution-ready blueprint for transformation.\"",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Tools & Accelerators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 p-5">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">03</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                  {formatQuotesToBold(
                    sf?.toolsTitle || "Tools & 'Accelerators'",
                  )}
                </h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">
                  {formatQuotesToBold(
                    sf?.toolsSubtitle ||
                      "The Right Insights. The Right Platforms. The Right Decisions.",
                  )}
                </h3>
              </div>

              <div className="space-y-6 text-[#11253e] text-lg font-light leading-relaxed">
                <p>
                  {sf?.toolsDescription ||
                    "To give you clear and unbiased recommendations, we combine our advisory expertise with the power of leading cloud ecosystems such as Amazon Web Services, Microsoft Azure, and Google Cloud."}
                </p>
                <p className="font-medium text-[#11253e]">
                  {formatQuotesToBold(
                    sf?.toolsInsight ||
                      "But tools alone don't create value — insight does",
                  )}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  sf?.toolsItem1Text && {
                    text: sf.toolsItem1Text,
                    icon:
                      sf.toolsItem1Icon?.node?.sourceUrl ||
                      sf.toolsItem1Icon?.node?.mediaItemUrl,
                  },
                  sf?.toolsItem2Text && {
                    text: sf.toolsItem2Text,
                    icon:
                      sf.toolsItem2Icon?.node?.sourceUrl ||
                      sf.toolsItem2Icon?.node?.mediaItemUrl,
                  },
                  sf?.toolsItem3Text && {
                    text: sf.toolsItem3Text,
                    icon:
                      sf.toolsItem3Icon?.node?.sourceUrl ||
                      sf.toolsItem3Icon?.node?.mediaItemUrl,
                  },
                  sf?.toolsItem4Text && {
                    text: sf.toolsItem4Text,
                    icon:
                      sf.toolsItem4Icon?.node?.sourceUrl ||
                      sf.toolsItem4Icon?.node?.mediaItemUrl,
                  },
                  sf?.toolsItem5Text && {
                    text: sf.toolsItem5Text,
                    icon:
                      sf.toolsItem5Icon?.node?.sourceUrl ||
                      sf.toolsItem5Icon?.node?.mediaItemUrl,
                  },
                ]
                  .filter(Boolean)
                  .map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      {item.icon ? (
                        <ImageWithFallback
                          src={item.icon}
                          alt=""
                          className="w-5 h-5 shrink-0 mt-1 object-contain"
                        />
                      ) : (
                        <CheckCircle2
                          className="text-[#f99d1c] shrink-0 mt-1"
                          size={18}
                        />
                      )}
                      <span className="text-[#11253e] text-sm font-medium">
                        {formatQuotesToBold(item.text)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-[#11253e] p-1 rounded-sm overflow-hidden shadow-3xl group">
                <ImageWithFallback
                  src={
                    sf?.toolsImage?.node?.sourceUrl ||
                    sf?.toolsImage?.node?.mediaItemUrl ||
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                  }
                  alt="Global Cloud Network"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="absolute -bottom-10 -left-10 bg-[#f99d1c] p-10 text-[#11253e] hidden md:block max-w-xs shadow-2xl">
                <p className="text-base font-light leading-relaxed">
                  {formatQuotesToBold(
                    sf?.toolsQuote ||
                      "'Our accelerators are designed to remove guesswork, shorten decision cycles, and give leadership teams the confidence to move forward faster and smarter.'",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Proposition Section */}
      <section className="py-20 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-[#f99d1c] font-black text-6xl">04</span>
              <div className="h-px w-12 bg-[#f99d1c]"></div>
            </div>
            <h2 className="text-white text-4xl lg:text-5xl font-medium tracking-tight">
              {formatQuotesToBold(sf?.valuePropTitle || "Value 'Proposition'")}
            </h2>
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">
              {formatQuotesToBold(
                sf?.valuePropSubtitle ||
                  "Strategic Clarity. Measurable Business Outcomes.",
              )}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              sf?.valuePropItem1Title && {
                title: sf.valuePropItem1Title,
                desc: sf.valuePropItem1Desc,
              },
              sf?.valuePropItem2Title && {
                title: sf.valuePropItem2Title,
                desc: sf.valuePropItem2Desc,
              },
              sf?.valuePropItem3Title && {
                title: sf.valuePropItem3Title,
                desc: sf.valuePropItem3Desc,
              },
              sf?.valuePropItem4Title && {
                title: sf.valuePropItem4Title,
                desc: sf.valuePropItem4Desc,
              },
              sf?.valuePropItem5Title && {
                title: sf.valuePropItem5Title,
                desc: sf.valuePropItem5Desc,
              },
              sf?.valuePropItem6Title && {
                title: sf.valuePropItem6Title,
                desc: sf.valuePropItem6Desc,
              },
            ]
              .filter(Boolean)
              .map((item, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-[#f99d1c]/50 transition-all group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#f99d1c] flex items-center justify-center text-[#11253e]">
                      <CheckCircle2 size={16} />
                    </div>
                    <h4 className="text-white text-lg font-medium tracking-tight">
                      {formatQuotesToBold(item.title)}
                    </h4>
                  </div>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {formatQuotesToBold(item.desc)}
                  </p>
                </Motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 relative bg-[#e5dfd3] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #11253e 20px, #11253e 21px)`,
          }}
        />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#11253e]/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fdfbf7] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f99d1c]"></div>
            <div className="max-w-xl space-y-4">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight leading-[1.2]">
                {formatQuotesToBold(
                  sf?.ctaHeading || "Ready to architect \n^the future?^",
                )}
              </h2>
              <p className="text-[#11253e] text-base font-light leading-relaxed">
                {sf?.ctaDescription ||
                  "Let our experts design a cloud strategy that scales with your ambition and delivers measurable business value."}
              </p>
            </div>
            <button
              className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#10243c] text-white px-10 py-5 rounded-md transition-all inline-flex items-center space-x-3 uppercase tracking-[0.18em] group shrink-0"
              style={{ fontSize: "13px", fontWeight: 600 }}
            >
              <span>{sf?.ctaButtonText || "START YOUR JOURNEY"}</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Motion.div>
        </div>
      </section>
    </>
  );
}
