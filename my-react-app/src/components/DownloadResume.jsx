import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Resume from "../assets/resume.svg";

const DownloadResume = () => {
    const { t, i18n } = useTranslation();

    const downloadFile = () => {
        if (i18n.language === "en") {
            window.open('/src/assets/EN-CV.pdf', '_blank');
        } else if (i18n.language === "da") {
            window.open('/src/assets/DA-CV.pdf', '_blank');
        }
    };

    return (
        <Download onClick={downloadFile}>
            <img src={Resume} alt="Github. Source: https://www.svgrepo.com/svg/290046/curriculum-resume" />
            {/*{t("download.resume")}*/}
        </Download>
    );
};

export default DownloadResume;

const Download = styled.button`
    width: auto;
    max-width: 3rem;
    height: 3rem;
    max-height: 3rem;
    border-radius: 5%;
    background-color: transparent;
    cursor: pointer;
    border: 3px solid yellow;
    overflow: hidden;

    .img {
    width: 1rem;
    height: 1rem;

    &:hover {
        transform: scale(1.05);
        transition: all 0.35s linear;
    }
}`;