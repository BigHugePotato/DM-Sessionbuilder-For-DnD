import style from "./Monster-Card.module.css";
import { CardImage } from "../Card-Build-Components/Card-Image";
import { CardAcHp } from "../Card-Build-Components/Card-AcHp";
import { useState, useEffect } from "react";
import { CardSpeed } from "../Card-Build-Components/Card-Speed";
import { CardCreatureDetails } from "../Card-Build-Components/Card-Creature-Details";
import { CardSkills } from "../Card-Build-Components/Card-Skills";
import { CardSaves } from "../Card-Build-Components/Card-Saves";
import { CardLegendaryActions } from "../Card-Build-Components/Card-LegendaryActions";
import { CardReactions } from "../Card-Build-Components/Card-Reactions";
import { SelectButton } from "../Card-Build-Components/Card-Select";
import { useSearchStore } from "../../../stores/Search-Store";

export const MonsterDisplayCard = ({ monsterId, isSelected }) => {
  const [monsterDetails, setMonsterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!monsterId) return;

    const fetchDetails = async () => {
      setLoading(true); // Ensure loading is true at the start of data fetch
      try {
        // Trigger the fetchCardDetails action and wait for it to complete
        await useSearchStore.getState().fetchCardDetails('monsters', monsterId);

        // After fetching, access the stored cardDetails from the store
        const fetchedDetails = useSearchStore.getState().cardDetails;
        
        // Update the component state with the fetched data
        setMonsterDetails(fetchedDetails);
        setError(null); // Clear any previous errors
      } catch (fetchError) {
        console.error("Failed to fetch monster details:", fetchError);
        setError(fetchError);
      } finally {
        setLoading(false); // Ensure loading is set to false after fetch completes
      }
    };

    fetchDetails();
  }, [monsterId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const {
    name,
    hit_points,
    armor_class,
    speed,
    damage_immunities,
    damage_resistances,
    senses,
    condition_immunities,
    legendary_actions,
    reactions,
    skills,
    img_main,
  } = monsterDetails || {};

  return (
    <div
      className={`${style.monsterCard} ${isSelected ? style.highlighted : ""}`}
    >
      <h2 className={style.name}>{name}</h2>
      <SelectButton cardId={monsterId} />
      <div className={style.topSection}>
        {img_main && (
          <div className={style.imageContainer}>
            <CardImage imgSrc={img_main} altText={name || "Monster Image"} />
          </div>
        )}
        <CardAcHp armorClass={armor_class} hitPoints={hit_points} />
      </div>
      <div className={style.statsContainer}>
        <div className={style.speedContainer}>
          <CardSpeed speed={speed} />
        </div>
      </div>
      <div className={style.bottomSection}>
        <CardCreatureDetails
          immunities={damage_immunities}
          resistances={damage_resistances}
          conditionImmunities={condition_immunities}
          senses={senses}
        />
        {legendary_actions && legendary_actions.length > 0 && (
          <CardLegendaryActions actions={legendary_actions} />
        )}
        {reactions && reactions.length > 0 && (
          <CardReactions reactions={reactions} />
        )}
        <CardSkills skillsObj={skills} />
        <CardSaves saveValues={monsterDetails} />
      </div>
    </div>
  );
};
