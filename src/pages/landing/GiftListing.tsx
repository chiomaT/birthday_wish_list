import { Heading, Paragraph } from "../../components/Typography";

export default function GiftListing() {
  return (
    <div className="min-h-screen p-6 bg-pink-50 flex flex-col items-center justify-center">
      <Heading className="text-3xl font-bold mb-4">Gifts Received 🎁</Heading>
      <Paragraph className="text-gray-600 text-center mb-6">
        This page will show all received gifts and messages. Check back soon!
      </Paragraph>
      <div className="text-gray-400">No gifts have been recorded yet.</div>
    </div>
  );
}