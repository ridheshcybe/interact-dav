import { supabaseClient } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name) res.status(400).send("no name");
    if (!email) res.status(400).send("no email");
    if (!message) res.status(400).send("no message");

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
