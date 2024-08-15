import {groq} from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "@/typing";

const query = groq`
    *[_type == "social"]
`;

export async function GET(request: Request) {
    const socials : Social[] = await sanityClient.fetch(query);
    return Response.json(socials)
}