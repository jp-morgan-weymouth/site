// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../utils/supabaseClient";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const access_token = await supabase.auth.session()?.access_token;
  return res.status(200).json({ access_token: access_token });
}
