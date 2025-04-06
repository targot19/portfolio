import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
            {t("download.resume")}
        </Download>
    );
};

export default DownloadResume;

const Download = styled.button`
    width: 10em;
    height: 4em;
    border-radius: 5%;
    background-color: red;
    color: black;
    font-size: 1em;
    cursor: pointer;
    &:hover {
        background-color: darkred;
    }
`;