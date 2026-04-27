export default function SamplingTable() {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">

      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">
          Sampling Plan for Shipment Inspection
        </h1>
        <p className="text-gray-600 mt-2">
          Acceptance level at AQL 2.5, AQL 4 and AQL 6.5
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="w-full border border-orange-400 text-sm text-center">

          {/* Header */}
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-3 border">Lot or Batch size</th>
              <th className="p-3 border">Sample size Code Letter</th>
              <th className="p-3 border">Sample Size (Level-I)</th>
              <th colSpan={6} className="p-3 border">
                Acceptable Quality level (AQL)
              </th>
            </tr>

            <tr className="bg-orange-400">
              <th></th>
              <th></th>
              <th></th>
              <th colSpan={2} className="border">2.5</th>
              <th colSpan={2} className="border">4</th>
              <th colSpan={2} className="border">6.5</th>
            </tr>

            <tr className="bg-orange-300 text-black">
              <th></th>
              <th></th>
              <th></th>
              <th className="border">Ac</th>
              <th className="border">Re</th>
              <th className="border">Ac</th>
              <th className="border">Re</th>
              <th className="border">Ac</th>
              <th className="border">Re</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>

            <tr className="bg-gray-100">
              <td className="border p-2">2–8</td>
              <td className="border p-2">A</td>
              <td className="border p-2">2</td>
              <td className="border p-2">0</td>
              <td className="border p-2">1</td>
              <td className="border p-2">0</td>
              <td className="border p-2">1</td>
              <td className="border p-2">0</td>
              <td className="border p-2">1</td>
            </tr>

            <tr className="bg-yellow-50">
              <td className="border p-2">9–15</td>
              <td className="border p-2">B</td>
              <td className="border p-2">3</td>
              <td className="border p-2">0</td>
              <td className="border p-2">1</td>
              <td className="border p-2">0</td>
              <td className="border p-2">1</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border p-2">15–25</td>
              <td className="border p-2">C</td>
              <td className="border p-2">5</td>
              <td className="border p-2">0</td>
              <td className="border p-2">1</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
            </tr>

            <tr className="bg-yellow-50">
              <td className="border p-2">26–50</td>
              <td className="border p-2">D</td>
              <td className="border p-2">8</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
              <td className="border p-2">2</td>
              <td className="border p-2">3</td>
              <td className="border p-2">3</td>
              <td className="border p-2">4</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border p-2">51–90</td>
              <td className="border p-2">E</td>
              <td className="border p-2">13</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
              <td className="border p-2">2</td>
              <td className="border p-2">3</td>
              <td className="border p-2">3</td>
              <td className="border p-2">4</td>
            </tr>

            <tr className="bg-yellow-50">
              <td className="border p-2">91–150</td>
              <td className="border p-2">F</td>
              <td className="border p-2">20</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
              <td className="border p-2">3</td>
              <td className="border p-2">4</td>
              <td className="border p-2">5</td>
              <td className="border p-2">6</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border p-2">151–280</td>
              <td className="border p-2">G</td>
              <td className="border p-2">32</td>
              <td className="border p-2">2</td>
              <td className="border p-2">3</td>
              <td className="border p-2">3</td>
              <td className="border p-2">4</td>
              <td className="border p-2">5</td>
              <td className="border p-2">6</td>
            </tr>

            <tr className="bg-yellow-50">
              <td className="border p-2">251–500</td>
              <td className="border p-2">H</td>
              <td className="border p-2">50</td>
              <td className="border p-2">3</td>
              <td className="border p-2">4</td>
              <td className="border p-2">5</td>
              <td className="border p-2">6</td>
              <td className="border p-2">7</td>
              <td className="border p-2">8</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border p-2">501–1200</td>
              <td className="border p-2">J</td>
              <td className="border p-2">80</td>
              <td className="border p-2">5</td>
              <td className="border p-2">6</td>
              <td className="border p-2">7</td>
              <td className="border p-2">8</td>
              <td className="border p-2">10</td>
              <td className="border p-2">11</td>
            </tr>

            <tr className="bg-yellow-50">
              <td className="border p-2">1201–3200</td>
              <td className="border p-2">K</td>
              <td className="border p-2">125</td>
              <td className="border p-2">7</td>
              <td className="border p-2">8</td>
              <td className="border p-2">10</td>
              <td className="border p-2">11</td>
              <td className="border p-2">14</td>
              <td className="border p-2">15</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border p-2">3201–10000</td>
              <td className="border p-2">L</td>
              <td className="border p-2">200</td>
              <td className="border p-2">10</td>
              <td className="border p-2">11</td>
              <td className="border p-2">14</td>
              <td className="border p-2">15</td>
              <td className="border p-2">21</td>
              <td className="border p-2">22</td>
            </tr>

            <tr className="bg-yellow-50">
              <td className="border p-2">10001–35000</td>
              <td className="border p-2">M</td>
              <td className="border p-2">315</td>
              <td className="border p-2">14</td>
              <td className="border p-2">15</td>
              <td className="border p-2">19</td>
              <td className="border p-2">20</td>
              <td className="border p-2">22</td>
              <td className="border p-2">23</td>
            </tr>

          </tbody>

        </table>
      </div>
    </section>
  );
}










// export default function SamplingTable() {
//   const data = [
//     ["2–8", "A", 2, [0,1], [0,1], [0,1]],
//     ["9–15", "B", 3, [0,1], [0,1], [1,2]],
//     ["15–25", "C", 5, [0,1], [1,2], [1,2]],
//     ["26–50", "D", 8, [1,2], [2,3], [3,4]],
//     ["51–90", "E", 13, [1,2], [2,3], [3,4]],
//     ["91–150", "F", 20, [1,2], [3,4], [5,6]],
//     ["151–280", "G", 32, [2,3], [3,4], [5,6]],
//     ["251–500", "H", 50, [3,4], [5,6], [7,8]],
//     ["501–1200", "J", 80, [5,6], [7,8], [10,11]],
//     ["1201–3200", "K", 125, [7,8], [10,11], [14,15]],
//     ["3201–10000", "L", 200, [10,11], [14,15], [21,22]],
//     ["10001–35000", "M", 315, [14,15], [19,20], [22,23]],
//   ];

//   return (
//     <section className="p-6 bg-gray-100 min-h-screen">
      
//       {/* Title Section */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-black">
//           Sampling Plan for Shipment Inspection
//         </h1>
//         <p className="text-gray-600 mt-2">
//           Acceptance level at AQL 2.5, AQL 4 and AQL 6.5
//         </p>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto bg-white rounded-xl shadow-md">
//         <table className="w-full border border-orange-400 text-sm text-center">
          
//           {/* Header */}
//           <thead className="bg-orange-500 text-white">
//             <tr>
//               <th className="p-3 border">Lot or Batch size</th>
//               <th className="p-3 border">Sample size Code Letter</th>
//               <th className="p-3 border">Sample Size (Level-I)</th>
//               <th colSpan={6} className="p-3 border">
//                 Acceptable Quality level (AQL)
//               </th>
//             </tr>
//             <tr className="bg-orange-400">
//               <th></th>
//               <th></th>
//               <th></th>
//               <th colSpan={2} className="border">2.5</th>
//               <th colSpan={2} className="border">4</th>
//               <th colSpan={2} className="border">6.5</th>
//             </tr>
//             <tr className="bg-orange-300 text-black">
//               <th></th>
//               <th></th>
//               <th></th>
//               <th className="border">Ac</th>
//               <th className="border">Re</th>
//               <th className="border">Ac</th>
//               <th className="border">Re</th>
//               <th className="border">Ac</th>
//               <th className="border">Re</th>
//             </tr>
//           </thead>

//           {/* Body */}
//           <tbody>
//             {data.map((row, index) => (
//               <tr
//                 key={index}
//                 className={index % 2 === 0 ? "bg-gray-100" : "bg-yellow-50"}
//               >
//                 <td className="p-2 border">{row[0]}</td>
//                 <td className="p-2 border">{row[1]}</td>
//                 <td className="p-2 border">{row[2]}</td>

//                 <td className="p-2 border">{row[3][0]}</td>
//                 <td className="p-2 border">{row[3][1]}</td>

//                 <td className="p-2 border">{row[4][0]}</td>
//                 <td className="p-2 border">{row[4][1]}</td>

//                 <td className="p-2 border">{row[5][0]}</td>
//                 <td className="p-2 border">{row[5][1]}</td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//     </section>
//   );
// }