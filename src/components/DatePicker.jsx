/* eslint-disable */
const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // This updates the selectedDate in the parent
    console.log("Date selected: ", e.target.value);
  };

  return (
    <div className="flex flex-col justify-center">
      <label
        htmlFor="date-picker"
        className="mb-2 text-lg font-medium text-gray-700"
      >
        Select a Date:
      </label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
        className="rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {selectedDate && (
        <p className="mt-4 text-lg text-gray-800">
          You selected: {selectedDate}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
