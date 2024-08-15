export default function Input({ label, invalid, ...props }) {
  let labelClassese = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClassese = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClassese += " text-red-400";
    inputClassese += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClassese += " text-stone-300";
    inputClassese += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClassese}>{label}</label>
      <input className={inputClassese} {...props} />
    </p>
  );
}
