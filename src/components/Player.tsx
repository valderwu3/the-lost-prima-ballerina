export default function Player() {
  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-card shadow-lg mb-8">
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/D2pCT-xwR_U"
        title="The Lost Prima Ballerina Full Movie | ReelShort"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}