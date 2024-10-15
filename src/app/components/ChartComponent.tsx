interface ChartComponentProps {
  data: number[];
}

export default function ChartComponent({ data }: ChartComponentProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Gráfico de Vendas</h2>
      <ul>
        {data.map((value, index) => (
          <li key={index} className="mb-2">
            Dia {index + 1}: {value} vendas
          </li>
        ))}
      </ul>
    </div>
  );
}
