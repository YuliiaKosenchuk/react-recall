interface Props {
  total: number;
}

export default function TotalAmount({ total }: Props) {
  return (
    <div className="text-right mt-6">
      <h2 className="text-xl font-bold">
        Total: <span className="text-green-600">₴{total}</span>
      </h2>
    </div>
  );
}
