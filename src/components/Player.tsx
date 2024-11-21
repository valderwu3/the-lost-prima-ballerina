// export default function Player() {
//   return (
//     <div className="aspect-video rounded-lg overflow-hidden bg-card shadow-lg mb-8">
//       <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
//         <iframe 
//           src="https://geo.dailymotion.com/player.html?video=x9938js"
//           style={{
//             width: '100%',
//             height: '100%',
//             position: 'absolute',
//             left: 0,
//             top: 0,
//             overflow: 'hidden',
//             border: 'none'
//           }}
//           allowFullScreen
//           title="Dailymotion Video Player"
//           allow="web-share"
//         />
//       </div>
//     </div>
//   );
// }

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
