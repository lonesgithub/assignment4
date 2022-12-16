import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

const ProfileTranslationHistory = ({ translations }) => {
  const translationList = translations.map((translation, index) => (
    <ProfileTranslationHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ));

  return (
    <section>
      <h3 className="headerh3 mt-5 mb-3">Your translation history</h3>
      {translationList.length === 0 && <p>No translations to recall.</p>}
      <ul className="translated-list">{translationList}</ul>
    </section>
  );
};

export default ProfileTranslationHistory;
