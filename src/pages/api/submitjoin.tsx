// pages/api/submitApplication.ts

import { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "@/lib/supabase"; // Make sure this path is correct

const supabase = supabaseClient;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, grade, reason } = req.body;

    try {
      const { data, error } = await supabase
        .from("club_applications") // Replace with your table name
        .insert([{ name, email, grade, reason }]);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: "Application submitted successfully!" });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to submit application", serialized: err });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
