import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { territoryAPI } from '../services/api';

export default function TerritoryList() {
  const [territories, setTerritories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerritories = async () => {
      try {
        const { data } = await territoryAPI.getTerritories();
        setTerritories(data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.error || 'Failed to load territories');
        setLoading(false);
      }
    };
    fetchTerritories();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return (
    <div className="text-center p-8">
      <p className="text-red-600 mb-4">{error}</p>
      <button onClick={() => window.location.reload()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Retry
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Territories</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {territories.map((territory) => (
          <div key={territory.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">{territory.name}</h2>
            <div className="space-y-2">
              {territory.neighborhoods?.filter(nb => nb?.id)?.map((nb) => (
                <Link
                  key={nb.id}
                  to={`/neighborhood/${nb.id}`}
                  state={{ neighborhoodName: nb.name }}
                  className="block bg-gray-50 p-2 rounded hover:bg-gray-100"
                >
                  {nb.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
