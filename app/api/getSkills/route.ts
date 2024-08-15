import {groq} from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "@/typing";

const query = groq`
    *[_type == "skill"]
`;

export async function GET(request: Request) {
    const skills : Skill[] = await sanityClient.fetch(query);
    return Response.json(skills)
}