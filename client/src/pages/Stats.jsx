// imports
import Back from '../components/shared/Back';
import { useFloraContext } from '../hooks/useFloraContext';

const Stats = () => {
  const { floras } = useFloraContext();

  const getUniquePropertyStats = property => {
    const uniqueValuesSet = new Set();
    const filteredFloras = floras.filter(flora => flora[property]);

    const amount = filteredFloras.reduce((count, flora) => {
      if (!uniqueValuesSet.has(flora[property])) {
        uniqueValuesSet.add(flora[property]);
        return count + 1;
      }
      return count;
    }, 0);

    const names = [...uniqueValuesSet].join(', ');

    return { amount, names };
  };

  const families = getUniquePropertyStats('family');
  const colors = getUniquePropertyStats('color');
  const areas = getUniquePropertyStats('area');
  const plantTypes = getUniquePropertyStats('plantType');
  const soilTypes = getUniquePropertyStats('soilType');
  const bloomTimes = getUniquePropertyStats('bloomTime');

  const avgSize = floras.map(flora => flora.size).reduce((sum, i) => sum + i, 0) / floras.length;
  const avgSoilPh = floras.map(flora => flora.soilPh).reduce((sum, i) => sum + i, 0) / floras.length;

  return (
    <>
      {/* Go back to where you came from */}
      <Back />

      <ul className="bg-white py-4 px-6 rounded-md shadow-md break-words">
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
    </>
  );
};

export default Stats;
