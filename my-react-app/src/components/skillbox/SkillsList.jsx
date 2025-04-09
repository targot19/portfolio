import styled from "styled-components";

const SkillsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    
    li {
        display: inline-block;
        font-size: 1em;
        padding: 0.3em 0.3em;
        border: 1px solid black;
        border-radius: 5px;
        gap: 1em;
        }`

export default SkillsList;