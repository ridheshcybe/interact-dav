// src/pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "@/lib/supabase"; // Import Supabase client

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Insert data into the Supabase table (replace 'contacts' with your table name)
      const { data, error } = await supabaseClient
        .from("contacts") // Ensure you have a table named 'contacts'
        .insert([{ name, email, message }]);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: "Message sent successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Failed to send message" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
