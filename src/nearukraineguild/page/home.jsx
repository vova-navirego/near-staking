const HomeSections = ["hero", "explore", "connect", "participate", "support"];

return (
  <>
    {HomeSections.map((it) => (
      <Widget
        src={`truthful-circle.testnet/widget/nearukraineguild.components.island.${it}`}
        props={{ ...props }}
      />
    ))}
  </>
);
