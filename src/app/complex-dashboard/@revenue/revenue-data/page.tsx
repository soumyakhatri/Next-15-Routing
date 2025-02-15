export default function RevenueData() {
  const revenueData = [
    { month: 'Jan', amount: '$45,000' },
    { month: 'Feb', amount: '$52,300' },
    { month: 'Mar', amount: '$48,900' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Revenue Data</h1>
      <table className="min-w-[300px] border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Month</th>
            <th className="border p-2 text-left">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {revenueData.map((data) => (
            <tr key={data.month}>
              <td className="border p-2">{data.month}</td>
              <td className="border p-2">{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}