import { sacraments } from "./sacramentsData";

import styles from "./Sacraments.module.css";
import SacramentIcon from "./SacramentIcon";

type SacramentTabsProps = {
  activeId: string;
  onChange: (id: string) => void;
};

export default function SacramentTabs({
  activeId,
  onChange,
}: SacramentTabsProps) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Таїнства">
      {sacraments.map((sacrament) => {
        const isActive = sacrament.id === activeId;

        return (
          <button
            key={sacrament.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
            onClick={() => onChange(sacrament.id)}
          >
            <SacramentIcon icon={sacrament.icon} className={styles.tabIcon} />
          </button>
        );
      })}
    </div>
  );
}
