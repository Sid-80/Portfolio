import {groq} from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typing";

const query = groq`
    *[_type == "experience"]
`;

export async function GET(request: Request) {
    const experience : Experience = await sanityClient.fetch(query);
    return Response.json(experience)
}