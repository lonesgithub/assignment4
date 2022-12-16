import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

const ProfileTranslationHistory = ({ translations }) => {
  const translationList = translations.map((translation, index) => (
    <ProfileTranslationHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ));

  return (
    <section className="translation-history-container">
      <h3 className="headerh3 mt-5 mb-3">Your translation history</h3>
      <div className="translation-history">
        {translationList.length === 0 && <p>No translations to recall.</p>}
        <ul className="translated-list">{translationList}</ul>
      </div>
    </section>
  );
};

export default ProfileTranslationHistory;
