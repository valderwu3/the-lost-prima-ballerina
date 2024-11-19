export default function Player() {
  return (
    <div className="rounded-lg overflow-hidden bg-card shadow-lg mb-8">
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe 
          src="https://geo.dailymotion.com/player.html?video=x985mga"
          style={{ 
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            overflow: 'hidden',
            border: 'none'
          }}
          allowFullScreen
          title="Dailymotion Video Player"
          allow="web-share"
        />
      </div>
    </div>
  );
}