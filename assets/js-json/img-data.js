const dbData = require('./db.json');
const imageUrls = dbData.images;

function App() {
  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={`/${imageUrl}`} alt={`Image ${index}`} />
      ))}
      {/* 其他內容 */}
    </div>
  );
}

export default App;