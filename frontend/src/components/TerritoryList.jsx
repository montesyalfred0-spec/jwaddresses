import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { territoryAPI } from '../services/api';

export default function TerritoryList() {
  const [territories, setTerritories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTerritories = async () => {
      try {
        const { data } = await territoryAPI.getTerritories();
        setTerritories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching territories:', error);
        setLoading(false);
      }
    };
    fetchTerritories();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Territories</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {territories.map((territory) => (
          <div key={territory.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">{territory.name}</h2>
            <div className="space-y-2">
              {territory.neighborhoods?.map((nb) => (
                <Link
                  key={nb.id}
                  to={`/neighborhood/${nb.id}`}
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
