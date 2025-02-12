import DataTable from "react-data-table-component";

function PostDataTable({ posts }) {
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          src={row.image}
          alt="User"
          width="50"
          height="50"
          style={{ borderRadius: "5px" }}
        />
      ),
      sortable: true,
      style: { padding: "10px" }, // ✅ Added padding for spacing
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      style: { padding: "10px", textAlign: "left" }, // ✅ Added spacing
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex gap-1">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded 
                ${
                  row.status === "Published"
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
          >
            {row.status}
          </span>
        </div>
      ),
      sortable: true,
      style: { padding: "10px" }, // ✅ Added spacing
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Edit
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded">
            Delete
          </button>
          <button className="bg-gray-500 text-white px-3 py-1 rounded">
            Read
          </button>
        </div>
      ),
      sortable: true,
      style: { padding: "10px", textAlign: "center" }, // ✅ Centering & spacing
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={posts}
      pagination={true}
      paginationPerPage={5}
      customStyles={{
        headCells: {
          style: {
            padding: "15px", // ✅ Increased spacing in header
            fontWeight: "bold",
            fontSize: "16px",
            backgroundColor: "#f8f9fa",
          },
        },
        cells: {
          style: {
            padding: "12px", // ✅ Added more spacing inside cells
          },
        },
      }}
    />
  );
}

export default PostDataTable;
