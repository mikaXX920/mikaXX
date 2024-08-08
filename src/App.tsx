import React, { useState } from "react";

interface BookInfo {
  degree: string;
  os: string;
  year: string;
  subject: string;
  book_id: string;
  book_type: string;
  book_year: string;
  book_subject: string;
  book_grade: string;
  book_name: string;
}

const BookInfoTable = () => {
  const [bookInfo, setBookInfo] = useState<BookInfo>({
    degree: "j",
    os: "pc",
    year: "1131",
    subject: "history",
    book_id: "K1131history_J1",
    book_type: "PC_Windows",
    book_year: "113上",
    book_subject: "國中歷史",
    book_grade: "國中1年級",
    book_name: "1131國中歷史1上"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const handleOsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let bookType = "";
    switch (e.target.value) {
      case "pc":
        bookType = "PC_Windows";
        break;
      case "mac":
        bookType = "PC_Mac";
        break;
      case "app":
        bookType = "App";
        break;
      default:
        bookType = "";
    }
    setBookInfo({ ...bookInfo, os: e.target.value, book_type: bookType });
  };

  const handleExport = () => {
    const json = JSON.stringify(bookInfo, null, 4);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bookConfig.json";
    a.click();
  };

  return (
    <div className="container mx-auto p-4">
      <table className="bg-gray-400 bg-opacity-10 w-[360px] ">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Degree</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="degree"
                value={bookInfo.degree}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">OS</td>
            <td className="border px-4 py-2">
              <select
                name="os"
                value={bookInfo.os}
                onChange={handleOsChange}
                className="w-full"
              >
                <option value="pc">PC</option>
                <option value="mac">Mac</option>
                <option value="app">App</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Year</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="year"
                value={bookInfo.year}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Subject</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="subject"
                value={bookInfo.subject}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Book ID</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="book_id"
                value={bookInfo.book_id}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Book Type</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="book_type"
                value={bookInfo.book_type}
                readOnly
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Book Year</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="book_year"
                value={bookInfo.book_year}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Book Subject</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="book_subject"
                value={bookInfo.book_subject}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Book Grade</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="book_grade"
                value={bookInfo.book_grade}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Book Name</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="book_name"
                value={bookInfo.book_name}
                onChange={handleInputChange}
                className="w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleExport}
      >
        匯出JSON
      </button>
    </div>
  );
};

export default BookInfoTable;
