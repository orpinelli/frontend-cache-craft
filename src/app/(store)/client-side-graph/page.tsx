// src/app/client-side-graph/page.tsx

"use client";
import { useEffect, useState } from 'react';
import { LocalStorageService } from '../../infrastructure/cache/localStorageService';
import ChartComponent from '../../components/ChartComponent';

export default function ClientSideGraph() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const cachedData = LocalStorageService.getItem<number[]>('graphData');
    if (cachedData) {
      setData(cachedData);
    } else {
      const generatedData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
      setData(generatedData);
      LocalStorageService.setItem('graphData', generatedData);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex-grow items-center mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Gráfico de Dados (Cache Client-Side)</h1>
        <ChartComponent data={data} />
      </div>
    </div>
  );
}
