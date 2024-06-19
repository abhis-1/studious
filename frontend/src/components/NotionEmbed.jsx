
const NotionEmbed = () => {
  const notionEmbedUrl = "https://incredible-skateboard-eb2.notion.site/IoT-8c337f4e32ed4b8ebb6a0a257c0452f4"; // Replace with your Notion embed URL

  return (
    <div className="notion-embed-container">
      <iframe
        title="Notion Embed"
        src={notionEmbedUrl}
        frameBorder="0"
        style={{ width: '100%', height: '100vh' }} // Adjust dimensions as needed
        allowFullScreen
      />
    </div>
  );
};

export default NotionEmbed;
