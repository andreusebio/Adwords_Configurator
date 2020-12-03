import expressLoader from "./express";
import mysqlLoader from "./mysql";

export default async ({ expressApp }) => {
  const mysqlSequelize = await mysqlLoader();
  console.log("✌️ DB loaded and connected!");

  await expressLoader({ app: expressApp });
  console.log("✌️ Express loaded");
};
