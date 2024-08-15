import {groq} from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "@/typing";

const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`;



export async function GET(request: Request) {
    const projects : Project[] = await sanityClient.fetch(query);
    return Response.json(projects)
}