import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Heading, Paragraph, Text } from "../../components/Typography";
import routeNames from "../../route/routes";

type Gift = {
  name: string;
  price: string;
  link?: string;
  cartLink?: string;
  taken?: boolean;
  isPrayer?: boolean; 
};

const birthdayDate = new Date("2026-03-20");

const initialGifts: Gift[] = [
  { name: "Perfume", price: "₦50,000 - ₦120,000" },
  {
    name: "Clear my Shein cart",
    price: "$200 - $400",
    link: "https://www.shein.com/cart",
  },
  { name: "Spa Day", price: "₦40,000 - ₦70,000" },
  { name: "Cake", price: "₦20,000 - ₦40,000" },
  {
    name: "Washing Machine",
    price: "₦150,000 - ₦200,000",
    link: "https://www.jumia.com.ng/hisense-7.5kg-twin-tub-washing-machine-wsqb-753-jf-43279760.html",
  },
  {
    name: "Clear my Skin care cart",
    price: "₦100,000 - ₦200,000",
    link: "https://www.shein.com/cart",
  },
  {
    name: "A new iPhone (my current one is struggling (bad screen) 😅)",
    price: "Any model will be appreciated!",
  },
  { name: "Staycation for a night or 2", price: "₦200,000 - ₦400,000" },
  { name: "Send a Prayer or Well Wish", price: "", isPrayer: true },
];

export default function Landing() {
  const [gifts] = useState<Gift[]>(initialGifts);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [countdown, setCountdown] = useState("");
  const [showPrayerForm, setShowPrayerForm] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Countdown timer
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = birthdayDate.getTime() - now;

    if (diff <= 0) {
      setCountdown("It's my birthday! 🎉");
      confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } });
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const copyAccount = () => {
    navigator.clipboard.writeText("7039379012");
    setToastMessage("Copied! Thank you so much, I LOVE you 💖");
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handlePrayerSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPrayerForm(false);
      setToastMessage("Prayer received! Thank you! I love you so much 💌");
      setTimeout(() => setToastMessage(null), 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Heading className="text-4xl font-bold">
            Chioma's Birthday Wishlist 🎂
          </Heading>
          <Paragraph className="text-gray-600 mt-4">
            Hi! My birthday is coming up in{" "}
            <span className="text-xl font-bold text-pink-600 mt-2">
              {countdown}
            </span>{" "}
            If you'd like to get me something, here are a few things I’d
            absolutely LOVE ❤️
          </Paragraph>
        </div>

        {/* Subtle notice about checking gifts */}
        <div className="mb-6 text-center text-gray-600">
          💌 Feel free to check back here to see received gifts and feedback!{" "}
          <br />
          <a
            href={routeNames.giftListing}
            className="text-pink-500 underline hover:text-pink-600"
          >
            View all gifts
          </a>
        </div>

        {/* Gift Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {gifts.map((gift, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-6"
            >
              <Heading level={5}>{gift.name}</Heading>
              {gift.price && (
                <Text className="text-gray-500 block mb-2 mt-1">
                  Budget: {gift.price}
                </Text>
              )}
              {gift.isPrayer ? (
                <button
                  onClick={() => setShowPrayerForm(true)}
                  className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 mb-2"
                >
                  Let me pray for me 💌
                </button>
              ) : (
                <button
                  onClick={() => setSelectedGift(gift)}
                  className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 mb-2"
                  disabled={gift.taken}
                >
                  {gift.taken ? "Taken ✅" : "Let me get this for you"}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          Made with ❤️ by Chioma
        </div>
      </div>

      {/* Gift Modal */}
      {selectedGift && !selectedGift.isPrayer && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 relative">
            <Heading level={4}>{selectedGift.name}</Heading>
            <Paragraph className="mt-2">Budget: {selectedGift.price}</Paragraph>
            {selectedGift.link && (
              <a
                href={selectedGift.link}
                target="_blank"
                rel="noreferrer"
                className="block mt-3 text-blue-600 underline"
              >
                See item(s)
              </a>
            )}
            {selectedGift.cartLink && (
              <a
                href={selectedGift.cartLink}
                target="_blank"
                rel="noreferrer"
                className="block mt-2 text-blue-600 underline"
              >
                See item(s)
              </a>
            )}
            <div className="mt-4 border-t pt-4">
              <Paragraph>Bank: Opay</Paragraph>
              <Paragraph>Name: Chioma Theresa Nwabugwu</Paragraph>
              <Paragraph>Account: 7039379012</Paragraph>
              <button
                onClick={copyAccount}
                className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
              >
                Copy Account Number
              </button>
            </div>
            <button
              onClick={() => setSelectedGift(null)}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Prayer Form Modal */}
      {showPrayerForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 relative">
            <Heading level={4}>Send a Prayer 💌</Heading>
            <textarea
              className="w-full border mt-4 p-3 rounded-lg"
              rows={4}
              placeholder="Write your prayer or birthday wish..."
            />
            <button
              onClick={handlePrayerSubmit}
              disabled={loading}
              className={`mt-4 px-4 py-2 rounded-lg text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600"}`}
            >
              {loading ? "Sending..." : "Send Wish"}
            </button>
            <button
              onClick={() => setShowPrayerForm(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-3 rounded-lg z-50
                  max-w-xs sm:max-w-sm md:max-w-md w-auto break-words text-center"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
