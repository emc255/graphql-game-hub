import { writeFile } from "fs";

export const saveData = (data: any[], filePath: string) => {
  writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Data added to reviews.json");
    }
  });
};
