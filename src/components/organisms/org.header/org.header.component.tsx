import { HeaderNavbar } from "components";
import { HeaderSpacer, HeaderWrapper } from "./org.header.styles";

export const Header: React.FC<any> = () => {
    return (
        <>
            <HeaderWrapper>
                <HeaderNavbar />
            </HeaderWrapper>
            <HeaderSpacer />
        </>);
}