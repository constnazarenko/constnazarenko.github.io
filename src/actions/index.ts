import { SkillsAction } from "../types/actions";

export const loadSkills = (): SkillsAction => ({
    type: 'SKILLS_LOAD',
    payload: {
        skills: [{"title": "Frontend", "rating": 8, "type": "frontend", "description": "Javascript, <strong>React</strong>, Redux, TypeScript, HTML, CSS, SASS ... and many other"}]
    }
});
