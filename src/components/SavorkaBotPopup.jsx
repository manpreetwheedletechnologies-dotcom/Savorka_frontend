import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  X,
  RotateCcw,
  Send,
  Zap,
  Wrench,
  Settings,
  BatteryCharging,
  HardHat,
  Building2,
  MessageCircleQuestion,
  ArrowLeft,
  ClipboardList,
  User,
  Mail,
  Phone,
  MapPin,
  Pencil,
  CheckSquare,
} from "lucide-react";
import savorkaLogo from "../assets/svorka_bot.svg";
import API_BASE_URL from "../config/api";
const SERVICE_OPTIONS = [
  { label: "Efficient On-Grid Solar Power Solutions", icon: Zap },
  { label: "Solar Structuring and Manufacturing", icon: Wrench },
  { label: "Solar Operation & Maintenance (O&M)", icon: Settings },
  { label: "Off-Grid & Hybrid Solar Solutions", icon: BatteryCharging },
  { label: "Solar EPC & Installation Support", icon: HardHat },
  {
    label: "Residential, Commercial & Industrial Solar Services",
    icon: Building2,
  },
  { label: "Other", icon: MessageCircleQuestion },
];

const BOT_REPLIES = {
  "Efficient On-Grid Solar Power Solutions":
    "Our on-grid solar solutions help reduce electricity bills and work best where stable grid access is available.",
  "Solar Structuring and Manufacturing":
    "We provide durable solar structures designed for strong support, long life, and reliable installation.",
  "Solar Operation & Maintenance (O&M)":
    "Our O&M service includes cleaning, monitoring, inspections, and preventive maintenance for better performance.",
  "Off-Grid & Hybrid Solar Solutions":
    "Off-grid and hybrid systems are ideal for backup and independent power needs with battery support.",
  "Solar EPC & Installation Support":
    "We offer end-to-end EPC and installation support including planning, engineering, procurement, and execution.",
  "Residential, Commercial & Industrial Solar Services":
    "We provide customized solar solutions for homes, offices, factories, and institutions based on energy needs.",
};

const FORM_STEPS = {
  QUERY: "query",
  NAME: "name",
  MOBILE: "mobile",
  EMAIL: "email",
  ADDRESS: "address",
  DONE: "done",
};

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <img
        src={savorkaLogo}
        alt="Bot"
        className="h-8 w-8 shrink-0 object-contain"
      />
      <div className="rounded-[16px] rounded-bl-[6px] bg-white px-3 py-2 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#4AA489] [animation-delay:-0.2s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#4AA489] [animation-delay:-0.1s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#4AA489]" />
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value, children }) {
  return (
    <div className="grid grid-cols-[18px_54px_1fr] items-start gap-2.5">
      <div className="pt-[1px]">
        <Icon size={14} className="text-[#1d67b3]" strokeWidth={2.1} />
      </div>

      <p className="text-[12.5px] font-medium text-[#6f7e95]">{label}</p>

      <div className="min-w-0">
        {value ? (
          <p className="break-words text-[12.5px] font-semibold leading-[1.4] text-[#111]">
            {value}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

function QueryPreview({ query, onReadMore }) {
  const words = query?.trim()?.split(/\s+/).filter(Boolean) || [];
  const isLongQuery = words.length > 15;

  if (!query) {
    return <p className="text-[12.5px] font-semibold text-[#111]">-</p>;
  }

  if (!isLongQuery) {
    return (
      <p className="break-words text-[12.5px] font-semibold leading-[1.4] text-[#111]">
        {query}
      </p>
    );
  }

  const shortText = words.slice(0, 15).join(" ") + "...";

  return (
    <div className="space-y-1">
      <p className="break-words text-[12.5px] font-semibold leading-[1.4] text-[#111]">
        {shortText}
      </p>
      <button
        type="button"
        onClick={onReadMore}
        className="text-[11.5px] font-semibold text-[#1565c0] underline underline-offset-2"
      >
        Read more
      </button>
    </div>
  );
}

function FullQueryPopup({ query, onClose }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center rounded-[22px] bg-black/20 px-3">
      <div className="w-full max-w-[250px] rounded-[18px] border border-white/40 bg-white p-4 shadow-[0_14px_30px_rgba(0,0,0,0.22)]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h4 className="text-[14px] font-bold text-[#1565c0]">Full Query</h4>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3f5f8] text-[#333]"
          >
            <X size={14} />
          </button>
        </div>

        <div className="max-h-[180px] overflow-y-auto rounded-[12px] bg-[#f8fafc] p-3 text-[12.5px] font-medium leading-[1.5] text-[#222]">
          {query}
        </div>
      </div>
    </div>
  );
}

function ConfirmDetailsPopup({ data, onConfirm, onEdit }) {
  const [showFullQuery, setShowFullQuery] = useState(false);

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/15 px-2 py-3">
      <div className="relative w-full max-w-[292px] rounded-[22px] border border-white/35 bg-gradient-to-b from-[#DBEC25] to-[#4AA489] p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.20)]">
        <div className="rounded-[18px] border border-white/30 bg-white/14 px-3 py-3.5 backdrop-blur-[2px]">
          <h3 className="mb-4 text-center text-[15px] font-bold leading-tight text-[#1565c0]">
            Please confirm your details
          </h3>

          <div className="space-y-3">
            <DetailRow icon={ClipboardList} label="Issue">
              <QueryPreview
                query={data.query}
                onReadMore={() => setShowFullQuery(true)}
              />
            </DetailRow>

            <DetailRow icon={User} label="Name" value={data.name} />
            <DetailRow icon={Mail} label="Email" value={data.email} />
            <DetailRow icon={Phone} label="Phone" value={data.mobile} />
            <DetailRow icon={MapPin} label="Address" value={data.address} />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex items-center justify-center gap-1.5 rounded-[16px] border border-white/60 bg-white px-3 py-2.5 text-[13px] font-semibold text-[#333] shadow-sm transition hover:bg-[#f5f5f5]"
            >
              <Pencil size={14} />
              Edit
            </button>

            <button
              type="button"
              onClick={onConfirm}
              className="inline-flex items-center justify-center gap-1.5 rounded-[16px] bg-[#5b97d4] px-3 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              <CheckSquare size={14} />
              Confirm
            </button>
          </div>
        </div>

        {showFullQuery && (
          <FullQueryPopup
            query={data.query}
            onClose={() => setShowFullQuery(false)}
          />
        )}
      </div>
    </div>
  );
}

export default function SavorkaBotPopup({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [conversationStep, setConversationStep] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const [otherFormData, setOtherFormData] = useState({
    query: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const messagesEndRef = useRef(null);
  const timeoutsRef = useRef([]);

  const welcomeText = useMemo(
    () => "Hello! I'm Savorka Assistant. How can I help you?",
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isOpen) return;
    scrollToBottom();
  }, [messages, isTyping, showServices, showInput, isOpen]);

  const addBotMessageWithTyping = (text, cb) => {
    setIsTyping(true);

    const t = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          sender: "bot",
          type: "text",
          text,
        },
      ]);
      if (cb) cb();
    }, 1100);

    timeoutsRef.current.push(t);
  };

  const startInitialChat = () => {
    clearAllTimeouts();
    setMessages([]);
    setIsTyping(true);
    setShowServices(false);
    setShowInput(false);
    setShowConfirmPopup(false);
    setInputValue("");
    setConversationStep(null);
    setOtherFormData({
      query: "",
      name: "",
      mobile: "",
      email: "",
      address: "",
    });

    const t1 = setTimeout(() => {
      setIsTyping(false);
      setMessages([
        {
          id: Date.now(),
          sender: "bot",
          type: "text",
          text: welcomeText,
        },
      ]);
      setShowServices(true);
    }, 1000);

    timeoutsRef.current = [t1];
  };

  const restartOtherFlow = () => {
    clearAllTimeouts();
    setShowServices(false);
    setShowConfirmPopup(false);
    setShowInput(false);
    setInputValue("");
    setConversationStep(null);
    setOtherFormData({
      query: "",
      name: "",
      mobile: "",
      email: "",
      address: "",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "bot",
        type: "text",
        text: "Please type your query.",
      },
    ]);

    setConversationStep(FORM_STEPS.QUERY);
    setShowInput(true);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0 && !isTyping) {
      startInitialChat();
    }

    return () => {
      clearAllTimeouts();
    };
  }, [isOpen]); // eslint-disable-line

  const handleServiceClick = (service) => {
    if (isTyping) return;

    const selectedLabel = typeof service === "string" ? service : service.label;

    setShowServices(false);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        type: "text",
        text: selectedLabel,
      },
    ]);

    if (selectedLabel === "Other") {
      setIsTyping(true);

      const t = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "bot",
            type: "text",
            text: "Please type your query.",
          },
        ]);
        setConversationStep(FORM_STEPS.QUERY);
        setShowInput(true);
      }, 1400);

      timeoutsRef.current.push(t);
      return;
    }

    setIsTyping(true);

    const t = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          type: "text",
          text: BOT_REPLIES[selectedLabel],
        },
        {
          id: Date.now() + 2,
          sender: "bot",
          type: "previous",
        },
      ]);
    }, 1500);

    timeoutsRef.current.push(t);
  };

  const handlePrevious = () => {
    if (isTyping) return;

    setShowInput(false);
    setShowConfirmPopup(false);
    setInputValue("");
    setConversationStep(null);
    setIsTyping(true);

    const t = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          type: "text",
          text: "Please select another service.",
        },
      ]);
      setShowServices(true);
    }, 1100);

    timeoutsRef.current.push(t);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidMobile = (mobile) => /^[0-9]{10}$/.test(mobile);

const handleConfirmDetails = async () => {
  setShowConfirmPopup(false);
  setShowInput(false);

  // Send data to API
  try {
    await fetch(`${API_BASE_URL}/chatbot-query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: otherFormData.name,
        email: otherFormData.email,
        phone: otherFormData.mobile,   // mapped mobile → phone
        address: otherFormData.address,
        query: otherFormData.query,
        agree: true,
      }),
    });
  } catch (err) {
    console.error("Chatbot API error:", err);
  }

  addBotMessageWithTyping("Thank you. We will contact you soon.", () => {
    setConversationStep(FORM_STEPS.DONE);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 10,
        sender: "bot",
        type: "previous",
      },
    ]);
  });
};

  const handleEditDetails = () => {
    restartOtherFlow();
  };

  const handleSubmitInput = () => {
    const value = inputValue.trim();
    if (!value || isTyping) return;

    if (conversationStep === FORM_STEPS.MOBILE && !isValidMobile(value)) {
      addBotMessageWithTyping("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (conversationStep === FORM_STEPS.EMAIL && !isValidEmail(value)) {
      addBotMessageWithTyping("Please enter a valid email address.");
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        type: "text",
        text: value,
      },
    ]);

    setInputValue("");

    if (conversationStep === FORM_STEPS.QUERY) {
      setOtherFormData((prev) => ({ ...prev, query: value }));
      setShowInput(false);

      addBotMessageWithTyping("Please enter your name.", () => {
        setConversationStep(FORM_STEPS.NAME);
        setShowInput(true);
      });
      return;
    }

    if (conversationStep === FORM_STEPS.NAME) {
      setOtherFormData((prev) => ({ ...prev, name: value }));
      setShowInput(false);

      addBotMessageWithTyping("Please enter your mobile number.", () => {
        setConversationStep(FORM_STEPS.MOBILE);
        setShowInput(true);
      });
      return;
    }

    if (conversationStep === FORM_STEPS.MOBILE) {
      setOtherFormData((prev) => ({ ...prev, mobile: value }));
      setShowInput(false);

      addBotMessageWithTyping("Please enter your email address.", () => {
        setConversationStep(FORM_STEPS.EMAIL);
        setShowInput(true);
      });
      return;
    }

    if (conversationStep === FORM_STEPS.EMAIL) {
      setOtherFormData((prev) => ({ ...prev, email: value }));
      setShowInput(false);

      addBotMessageWithTyping("Please enter your address.", () => {
        setConversationStep(FORM_STEPS.ADDRESS);
        setShowInput(true);
      });
      return;
    }

    if (conversationStep === FORM_STEPS.ADDRESS) {
      setOtherFormData((prev) => {
        const updatedData = { ...prev, address: value };

        setTimeout(() => {
          setShowConfirmPopup(true);
        }, 200);

        return updatedData;
      });

      setShowInput(false);
      setConversationStep(FORM_STEPS.DONE);
    }
  };

  const handleRefresh = () => {
    startInitialChat();
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[9996] transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto bg-black/10 opacity-100"
            : "pointer-events-none bg-black/0 opacity-0"
        }`}
      />

      <div
        className={`
          fixed bottom-4 right-4 z-[9997]
          w-[calc(100vw-24px)] max-w-[320px]
          origin-bottom-right transition-all duration-300 ease-out
          sm:bottom-5 sm:right-5 sm:max-w-[345px]
          ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }
        `}
      >
        <div className="relative overflow-hidden rounded-[22px] border border-white/20 bg-gradient-to-b from-[#DBEC25] to-[#4AA489] shadow-[0_16px_40px_rgba(0,0,0,0.20)]">
          <div className="relative border-b border-white/15 px-3 pt-3 pb-2">
            <div className="absolute right-3 top-3 flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#222] shadow-sm transition hover:scale-105"
                aria-label="Refresh chat"
              >
                <RotateCcw size={15} />
              </button>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#222] shadow-sm transition hover:scale-105"
                aria-label="Close bot"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex items-center gap-3 pr-20">
              <img
                src={savorkaLogo}
                alt="Savorka Logo"
                className="h-[58px] w-[58px] shrink-0 object-contain"
              />

              <div className="leading-tight text-white">
                <p className="text-[15px] font-medium">Hello,</p>
                <h2 className="text-[21px] font-extrabold leading-none">
                  Green thinker!
                </h2>
                <p className="mt-1 text-[11px] text-white/85">
                  Savorka Assistant
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 py-3">
            <div className="h-[390px] overflow-y-auto pr-1 custom-bot-scroll">
              <div className="space-y-3">
                {messages.map((msg) => {
                  if (msg.type === "previous") {
                    return (
                      <div key={msg.id} className="flex items-start gap-2">
                        <img
                          src={savorkaLogo}
                          alt="Bot"
                          className="h-8 w-8 shrink-0 object-contain"
                        />

                        <div className="max-w-[84%]">
                          <button
                            type="button"
                            onClick={handlePrevious}
                            disabled={isTyping}
                            className="inline-flex items-center gap-2 rounded-full border border-[#d6d6d6] bg-white px-3 py-2 text-[11px] font-medium text-[#111] shadow-sm transition hover:bg-[#f5f5f5]"
                          >
                            <ArrowLeft size={14} />
                            Previous
                          </button>
                        </div>
                      </div>
                    );
                  }

                  if (msg.sender === "bot") {
                    return (
                      <div key={msg.id} className="flex items-end gap-2">
                        <img
                          src={savorkaLogo}
                          alt="Bot"
                          className="h-8 w-8 shrink-0 object-contain"
                        />
                        <div className="max-w-[84%] rounded-[16px] rounded-bl-[6px] bg-white px-3 py-2 text-[12.5px] leading-[1.45] text-[#3b3b3b] shadow-sm">
                          {msg.text}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={msg.id} className="flex justify-end">
                      <div className="max-w-[84%] rounded-[16px] rounded-br-[6px] bg-[#2F8F78] px-3 py-2 text-[12.5px] leading-[1.45] text-white shadow-sm">
                        {msg.text}
                      </div>
                    </div>
                  );
                })}

                {isTyping && <TypingIndicator />}

                {showServices && !showInput && !showConfirmPopup && (
                  <div className="flex items-start gap-2">
                    <img
                      src={savorkaLogo}
                      alt="Bot"
                      className="h-8 w-8 shrink-0 object-contain"
                    />

                    <div className="max-w-[84%]">
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((service) => {
                          const Icon = service.icon;

                          return (
                            <button
                              key={service.label}
                              type="button"
                              onClick={() => handleServiceClick(service)}
                              disabled={isTyping}
                              className="inline-flex items-center gap-2 rounded-full border border-[#d6d6d6] bg-white px-3 py-1.5 text-[10.5px] font-medium leading-[1.2] text-[#111] shadow-sm transition hover:bg-[#4AA489]"
                            >
                              <Icon size={13} className="text-[#4AA489]" />
                              <span>{service.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {showInput && !showConfirmPopup && (
              <div className="mt-3 flex items-center gap-2">
                <input
                  type={
                    conversationStep === FORM_STEPS.EMAIL
                      ? "email"
                      : conversationStep === FORM_STEPS.MOBILE
                      ? "tel"
                      : "text"
                  }
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmitInput();
                  }}
                  placeholder={
                    conversationStep === FORM_STEPS.QUERY
                      ? "Type your query..."
                      : conversationStep === FORM_STEPS.NAME
                      ? "Enter your name"
                      : conversationStep === FORM_STEPS.MOBILE
                      ? "Enter mobile number"
                      : conversationStep === FORM_STEPS.EMAIL
                      ? "Enter email address"
                      : "Enter your address"
                  }
                  className="flex-1 rounded-full border border-white/40 bg-white px-4 py-3 text-[13px] text-[#333] outline-none placeholder:text-[#8c8c8c]"
                />
                <button
                  type="button"
                  onClick={handleSubmitInput}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#4AA489] shadow-sm transition hover:scale-105"
                >
                  <Send size={18} />
                </button>
              </div>
            )}
          </div>

          {showConfirmPopup && (
            <ConfirmDetailsPopup
              data={otherFormData}
              onConfirm={handleConfirmDetails}
              onEdit={handleEditDetails}
            />
          )}
        </div>
      </div>
    </>
  );
}



// import React, { useEffect, useMemo, useRef, useState } from "react";
// import {
//   X,
//   RotateCcw,
//   Send,
//   Zap,
//   Wrench,
//   Settings,
//   BatteryCharging,
//   HardHat,
//   Building2,
//   MessageCircleQuestion,
//   ArrowLeft,
// } from "lucide-react";
// import savorkaLogo from "../assets/svorka_bot.svg";

// const SERVICE_OPTIONS = [
//   {
//     label: "Efficient On-Grid Solar Power Solutions",
//     icon: Zap,
//   },
//   {
//     label: "Solar Structuring and Manufacturing",
//     icon: Wrench,
//   },
//   {
//     label: "Solar Operation & Maintenance (O&M)",
//     icon: Settings,
//   },
//   {
//     label: "Off-Grid & Hybrid Solar Solutions",
//     icon: BatteryCharging,
//   },
//   {
//     label: "Solar EPC & Installation Support",
//     icon: HardHat,
//   },
//   {
//     label: "Residential, Commercial & Industrial Solar Services",
//     icon: Building2,
//   },
//   {
//     label: "Other",
//     icon: MessageCircleQuestion,
//   },
// ];

// const BOT_REPLIES = {
//   "Efficient On-Grid Solar Power Solutions":
//     "Our on-grid solar solutions help reduce electricity bills and work best where stable grid access is available.",

//   "Solar Structuring and Manufacturing":
//     "We provide durable solar structures designed for strong support, long life, and reliable installation.",

//   "Solar Operation & Maintenance (O&M)":
//     "Our O&M service includes cleaning, monitoring, inspections, and preventive maintenance for better performance.",

//   "Off-Grid & Hybrid Solar Solutions":
//     "Off-grid and hybrid systems are ideal for backup and independent power needs with battery support.",

//   "Solar EPC & Installation Support":
//     "We offer end-to-end EPC and installation support including planning, engineering, procurement, and execution.",

//   "Residential, Commercial & Industrial Solar Services":
//     "We provide customized solar solutions for homes, offices, factories, and institutions based on energy needs.",
// };

// const FORM_STEPS = {
//   QUERY: "query",
//   NAME: "name",
//   MOBILE: "mobile",
//   EMAIL: "email",
//   DONE: "done",
// };

// function TypingIndicator() {
//   return (
//     <div className="flex items-end gap-2">
//       <img
//         src={savorkaLogo}
//         alt="Bot"
//         className="h-8 w-8 shrink-0 object-contain"
//       />
//       <div className="rounded-[16px] rounded-bl-[6px] bg-white px-3 py-2 shadow-sm">
//         <div className="flex items-center gap-1.5">
//           <span className="h-2 w-2 animate-bounce rounded-full bg-[#4AA489] [animation-delay:-0.2s]" />
//           <span className="h-2 w-2 animate-bounce rounded-full bg-[#4AA489] [animation-delay:-0.1s]" />
//           <span className="h-2 w-2 animate-bounce rounded-full bg-[#4AA489]" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function SavorkaBotPopup({ isOpen, onClose }) {
//   const [messages, setMessages] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [showServices, setShowServices] = useState(false);
//   const [showInput, setShowInput] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [conversationStep, setConversationStep] = useState(null);

//   const [otherFormData, setOtherFormData] = useState({
//     query: "",
//     name: "",
//     mobile: "",
//     email: "",
//   });

//   const messagesEndRef = useRef(null);
//   const timeoutsRef = useRef([]);

//   const welcomeText = useMemo(
//     () => "Hello! I'm Savorka Assistant. How can I help you?",
//     []
//   );

//   useEffect(() => {
//     if (!isOpen) return;

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") onClose();
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen, onClose]);

//   const clearAllTimeouts = () => {
//     timeoutsRef.current.forEach(clearTimeout);
//     timeoutsRef.current = [];
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     if (!isOpen) return;
//     scrollToBottom();
//   }, [messages, isTyping, showServices, showInput, isOpen]);

//   const addBotMessageWithTyping = (text, cb) => {
//     setIsTyping(true);

//     const t = setTimeout(() => {
//       setIsTyping(false);
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + Math.random(),
//           sender: "bot",
//           type: "text",
//           text,
//         },
//       ]);
//       if (cb) cb();
//     }, 1100);

//     timeoutsRef.current.push(t);
//   };

//   const startInitialChat = () => {
//     clearAllTimeouts();
//     setMessages([]);
//     setIsTyping(true);
//     setShowServices(false);
//     setShowInput(false);
//     setInputValue("");
//     setConversationStep(null);
//     setOtherFormData({
//       query: "",
//       name: "",
//       mobile: "",
//       email: "",
//     });

//     const t1 = setTimeout(() => {
//       setIsTyping(false);
//       setMessages([
//         {
//           id: Date.now(),
//           sender: "bot",
//           type: "text",
//           text: welcomeText,
//         },
//       ]);
//       setShowServices(true);
//     }, 1000);

//     timeoutsRef.current = [t1];
//   };

//   useEffect(() => {
//     if (isOpen && messages.length === 0 && !isTyping) {
//       startInitialChat();
//     }

//     return () => {
//       clearAllTimeouts();
//     };
//   }, [isOpen]); // eslint-disable-line

//   const handleServiceClick = (service) => {
//     if (isTyping) return;

//     const selectedLabel = typeof service === "string" ? service : service.label;

//     setShowServices(false);

//     setMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         sender: "user",
//         type: "text",
//         text: selectedLabel,
//       },
//     ]);

//     if (selectedLabel === "Other") {
//       setIsTyping(true);

//       const t = setTimeout(() => {
//         setIsTyping(false);
//         setMessages((prev) => [
//           ...prev,
//           {
//             id: Date.now() + 1,
//             sender: "bot",
//             type: "text",
//             text: "Please type your query.",
//           },
//         ]);
//         setConversationStep(FORM_STEPS.QUERY);
//         setShowInput(true);
//       }, 1400);

//       timeoutsRef.current.push(t);
//       return;
//     }

//     setIsTyping(true);

//     const t = setTimeout(() => {
//       setIsTyping(false);
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           sender: "bot",
//           type: "text",
//           text: BOT_REPLIES[selectedLabel],
//         },
//         {
//           id: Date.now() + 2,
//           sender: "bot",
//           type: "previous",
//         },
//       ]);
//     }, 1500);

//     timeoutsRef.current.push(t);
//   };

//   const handlePrevious = () => {
//     if (isTyping) return;

//     setShowInput(false);
//     setInputValue("");
//     setConversationStep(null);
//     setIsTyping(true);

//     const t = setTimeout(() => {
//       setIsTyping(false);
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           sender: "bot",
//           type: "text",
//           text: "Please select another service.",
//         },
//       ]);
//       setShowServices(true);
//     }, 1100);

//     timeoutsRef.current.push(t);
//   };

//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const isValidMobile = (mobile) => {
//     return /^[0-9]{10}$/.test(mobile);
//   };

//   const handleSubmitInput = () => {
//     const value = inputValue.trim();
//     if (!value || isTyping) return;

//     if (conversationStep === FORM_STEPS.MOBILE && !isValidMobile(value)) {
//       addBotMessageWithTyping("Please enter a valid 10-digit mobile number.");
//       return;
//     }

//     if (conversationStep === FORM_STEPS.EMAIL && !isValidEmail(value)) {
//       addBotMessageWithTyping("Please enter a valid email address.");
//       return;
//     }

//     setMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         sender: "user",
//         type: "text",
//         text: value,
//       },
//     ]);

//     setInputValue("");

//     if (conversationStep === FORM_STEPS.QUERY) {
//       setOtherFormData((prev) => ({ ...prev, query: value }));
//       setShowInput(false);

//       addBotMessageWithTyping("Please enter your name.", () => {
//         setConversationStep(FORM_STEPS.NAME);
//         setShowInput(true);
//       });
//       return;
//     }

//     if (conversationStep === FORM_STEPS.NAME) {
//       setOtherFormData((prev) => ({ ...prev, name: value }));
//       setShowInput(false);

//       addBotMessageWithTyping("Please enter your mobile number.", () => {
//         setConversationStep(FORM_STEPS.MOBILE);
//         setShowInput(true);
//       });
//       return;
//     }

//     if (conversationStep === FORM_STEPS.MOBILE) {
//       setOtherFormData((prev) => ({ ...prev, mobile: value }));
//       setShowInput(false);

//       addBotMessageWithTyping("Please enter your email address.", () => {
//         setConversationStep(FORM_STEPS.EMAIL);
//         setShowInput(true);
//       });
//       return;
//     }

//     if (conversationStep === FORM_STEPS.EMAIL) {
//       setOtherFormData((prev) => ({ ...prev, email: value }));
//       setShowInput(false);

//       addBotMessageWithTyping("Thank you. We will contact you soon.", () => {
//         setConversationStep(FORM_STEPS.DONE);
//         setMessages((prev) => [
//           ...prev,
//           {
//             id: Date.now() + 10,
//             sender: "bot",
//             type: "previous",
//           },
//         ]);
//       });
//     }
//   };

//   const handleRefresh = () => {
//     startInitialChat();
//   };

//   return (
//     <>
//       <div
//         onClick={onClose}
//         className={`fixed inset-0 z-[9996] transition-all duration-300 ${
//           isOpen
//             ? "pointer-events-auto bg-black/10 opacity-100"
//             : "pointer-events-none bg-black/0 opacity-0"
//         }`}
//       />

//       <div
//         className={`
//           fixed bottom-4 right-4 z-[9997]
//           w-[calc(100vw-24px)] max-w-[320px]
//           origin-bottom-right transition-all duration-300 ease-out
//           sm:bottom-5 sm:right-5 sm:max-w-[345px]
//           ${
//             isOpen
//               ? "translate-y-0 scale-100 opacity-100"
//               : "pointer-events-none translate-y-4 scale-95 opacity-0"
//           }
//         `}
//       >
//         <div className="overflow-hidden rounded-[22px] border border-white/20 bg-gradient-to-b from-[#DBEC25] to-[#4AA489] shadow-[0_16px_40px_rgba(0,0,0,0.20)]">
//           {/* Header */}
//           <div className="relative border-b border-white/15 px-3 pt-3 pb-2">
//             <div className="absolute right-3 top-3 flex items-center gap-2">
//               <button
//                 onClick={handleRefresh}
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#222] shadow-sm transition hover:scale-105"
//                 aria-label="Refresh chat"
//               >
//                 <RotateCcw size={15} />
//               </button>

//               <button
//                 onClick={onClose}
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#222] shadow-sm transition hover:scale-105"
//                 aria-label="Close bot"
//               >
//                 <X size={16} />
//               </button>
//             </div>

//             <div className="flex items-center gap-3 pr-20">
//               <img
//                 src={savorkaLogo}
//                 alt="Savorka Logo"
//                 className="h-[58px] w-[58px] shrink-0 object-contain"
//               />

//               <div className="leading-tight text-white">
//                 <p className="text-[15px] font-medium">Hello,</p>
//                 <h2 className="text-[21px] font-extrabold leading-none">
//                   Green thinker!
//                 </h2>
//                 <p className="mt-1 text-[11px] text-white/85">
//                   Savorka Assistant
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Chat Body */}
//           <div className="px-3 py-3">
//             <div className="h-[320px] overflow-y-auto pr-1 custom-bot-scroll">
//               <div className="space-y-3">
//                 {messages.map((msg) => {
//                   if (msg.type === "previous") {
//                     return (
//                       <div key={msg.id} className="flex items-start gap-2">
//                         <img
//                           src={savorkaLogo}
//                           alt="Bot"
//                           className="h-8 w-8 shrink-0 object-contain"
//                         />

//                         <div className="max-w-[84%]">
//                           <button
//                             type="button"
//                             onClick={handlePrevious}
//                             disabled={isTyping}
//                             className="inline-flex items-center gap-2 rounded-full border border-[#d6d6d6] bg-white px-3 py-2 text-[11px] font-medium text-[#111] shadow-sm transition hover:bg-[#f5f5f5]"
//                           >
//                             <ArrowLeft size={14} />
//                             Previous
//                           </button>
//                         </div>
//                       </div>
//                     );
//                   }

//                   if (msg.sender === "bot") {
//                     return (
//                       <div key={msg.id} className="flex items-end gap-2">
//                         <img
//                           src={savorkaLogo}
//                           alt="Bot"
//                           className="h-8 w-8 shrink-0 object-contain"
//                         />
//                         <div className="max-w-[84%] rounded-[16px] rounded-bl-[6px] bg-white px-3 py-2 text-[12.5px] leading-[1.45] text-[#3b3b3b] shadow-sm">
//                           {msg.text}
//                         </div>
//                       </div>
//                     );
//                   }

//                   return (
//                     <div key={msg.id} className="flex justify-end">
//                       <div className="max-w-[84%] rounded-[16px] rounded-br-[6px] bg-[#2F8F78] px-3 py-2 text-[12.5px] leading-[1.45] text-white shadow-sm">
//                         {msg.text}
//                       </div>
//                     </div>
//                   );
//                 })}

//                 {isTyping && <TypingIndicator />}

//                 {showServices && !showInput && (
//                   <div className="flex items-start gap-2">
//                     <img
//                       src={savorkaLogo}
//                       alt="Bot"
//                       className="h-8 w-8 shrink-0 object-contain"
//                     />

//                     <div className="max-w-[84%]">
//                       <div className="flex flex-wrap gap-2">
//                         {SERVICE_OPTIONS.map((service) => {
//                           const Icon = service.icon;

//                           return (
//                             <button
//                               key={service.label}
//                               type="button"
//                               onClick={() => handleServiceClick(service)}
//                               disabled={isTyping}
//                               className="inline-flex items-center gap-2 rounded-full border border-[#d6d6d6] bg-white px-3 py-1.5 text-[10.5px] font-medium leading-[1.2] text-[#111] shadow-sm transition hover:bg-[#f5f5f5]"
//                             >
//                               <Icon size={13} className="text-[#4AA489]" />
//                               <span>{service.label}</span>
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div ref={messagesEndRef} />
//               </div>
//             </div>

//             {showInput && (
//               <div className="mt-3 flex items-center gap-2">
//                 <input
//                   type={
//                     conversationStep === FORM_STEPS.EMAIL
//                       ? "email"
//                       : conversationStep === FORM_STEPS.MOBILE
//                       ? "tel"
//                       : "text"
//                   }
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") handleSubmitInput();
//                   }}
//                   placeholder={
//                     conversationStep === FORM_STEPS.QUERY
//                       ? "Type your query..."
//                       : conversationStep === FORM_STEPS.NAME
//                       ? "Enter your name"
//                       : conversationStep === FORM_STEPS.MOBILE
//                       ? "Enter mobile number"
//                       : "Enter email address"
//                   }
//                   className="flex-1 rounded-full border border-white/40 bg-white px-4 py-3 text-[13px] text-[#333] outline-none placeholder:text-[#8c8c8c]"
//                 />
//                 <button
//                   type="button"
//                   onClick={handleSubmitInput}
//                   className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#4AA489] shadow-sm transition hover:scale-105"
//                 >
//                   <Send size={18} />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }