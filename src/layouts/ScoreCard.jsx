import ScoreCardBlock from "../components/ScoreCardBlock";

const ScoreCard = () => {
  const scoreCardsData = [
    { id: 1, title: "Application Health", status: "Great" },
    { id: 2, title: "Pipeline Health", status: "Great" },
    { id: 3, title: "Community Health", status: "Great" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full  px-4 py-2 md:px-0">
      {scoreCardsData.map((card) => (
        <ScoreCardBlock key={card.id} title={card.title} status={card.status} />
      ))}
    </div>
  );
};

export default ScoreCard;
