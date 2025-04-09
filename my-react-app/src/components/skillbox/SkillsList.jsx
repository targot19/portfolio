import styled from "styled-components";

const SkillsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    border: 3px solid green;
    
    li {
        display: inline-block;
        font-size: 0.9em;
        padding: 0.3em 0.3em;
        border: 2px solid red;
        border-radius: 5px;
        gap: 1em;
        }`

export default SkillsList;