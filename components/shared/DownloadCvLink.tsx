type DownloadCvLinkProps = {
    className?: string;
    label: string;
    children?: React.ReactNode;
};

const CV_PATH = "/cv/Fabrice_Chamaret_CV.pdf";

export function DownloadCvLink({
                                   className = "", label
                               }: DownloadCvLinkProps) {

    return (
        <a
            href={CV_PATH}
            download="Fabrice_Chamaret_CV.pdf"
            className={className}
        >
            {label}
        </a>
    );
}
