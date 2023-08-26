// imports
import { useFloraContext } from '../hooks/useFloraContext';

const Stats = () => {
  const { floras } = useFloraContext();

  const families = {
    amount: floras.filter(flora => flora.family).length,
    names: floras.map(flora => flora.family).join(', ')
  };

  const colors = {
    amount: floras.filter(flora => flora.color).length,
    names: floras.map(flora => flora.color).join(', ')
  };

  const areas = {
    amount: floras.filter(flora => flora.area).length,
    names: floras.map(flora => flora.area).join(', ')
  };

  const plantTypes = {
    amount: floras.filter(flora => flora.plantType).length,
    names: floras.map(flora => flora.plantType).join(', ')
  };

  const avgSize = floras.map(flora => flora.size).reduce((sum, i) => sum + i, 0) / floras.length;

  const soilTypes = {
    amount: floras.filter(flora => flora.soilType).length,
    names: floras.map(flora => flora.soilType).join(', ')
  };

  const avgSoilPh = floras.map(flora => flora.soilPh).reduce((sum, i) => sum + i, 0) / floras.length;

  const bloomTimes = {
    amount: floras.filter(flora => flora.bloomTime).length,
    names: floras.map(flora => flora.bloomTime).join(', ')
  };

  return (
    <div>
      <ul className="bg-white py-4 px-6 rounded-md shadow-md">
        <p className="text-2xl font-semibold mb-4">Statistics</p>
        <li className="mb-2 text-lg">
          Total floras: <span className="font-semibold ml-2">{floras.length}</span>
        </li>
        <li className="mb-2 text-lg">
          Families:
          <span className="font-semibold ml-2">
            {floras ? (
              <>
                {families.amount}
                {families.names && ` (${families.names})`}
              </>
            ) : (
              0
            )}
          </span>
        </li>
        <li className="mb-2 text-lg">
          Colors:
          <span className="font-semibold ml-2">
            {floras ? (
              <>
                {colors.amount}
                {colors.names && ` (${colors.names})`}
              </>
            ) : (
              0
            )}
          </span>
        </li>
        <li className="mb-2 text-lg">
          Areas:
          <span className="font-semibold ml-2">
            {floras ? (
              <>
                {areas.amount}
                {areas.names && ` (${areas.names})`}
              </>
            ) : (
              0
            )}
          </span>
        </li>
        <li className="mb-2 text-lg">
          Plant Types:
          <span className="font-semibold ml-2">
            {floras ? (
              <>
                {plantTypes.amount}
                {plantTypes.names && ` (${plantTypes.names})`}
              </>
            ) : (
              0
            )}
          </span>
        </li>
        <li className="mb-2 text-lg">
          Average Size: <span className="font-semibold ml-2">{avgSize ? avgSize.toFixed(2) : 0}</span>
        </li>
        <li className="mb-2 text-lg">
          Soil Types:
          <span className="font-semibold ml-2">
            {floras ? (
              <>
                {soilTypes.amount}
                {soilTypes.names && ` (${soilTypes.names})`}
              </>
            ) : (
              0
            )}
          </span>
        </li>
        <li className="mb-2 text-lg">
          Average Soil Ph: <span className="font-semibold ml-2">{avgSoilPh ? avgSoilPh.toFixed(2) : 0}</span>
        </li>
        <li className="mb-2 text-lg">
          Bloom Times:
          <span className="font-semibold ml-2">
            {floras ? (
              <>
                {bloomTimes.amount}
                {bloomTimes.names && ` (${bloomTimes.names})`}
              </>
            ) : (
              0
            )}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
