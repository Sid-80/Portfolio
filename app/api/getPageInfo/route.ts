import {groq} from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typing";

const query = groq`
    *[_type == "pageInfo"][0]
`;

export async function GET(request: Request) {
    const pageInfo : PageInfo = await sanityClient.fetch(query);
    return Response.json(pageInfo)
}