import { PageHeaderWrapper, RightSideHeader } from './atm.page-header.styles'

interface IPageHeader {
  pageName: string,
  children?: React.ReactNode | string
}

export const PageHeader: React.FC<IPageHeader> = ({ pageName, children }) => {
  return <PageHeaderWrapper>{pageName} {children && <RightSideHeader>{children}</RightSideHeader>}</PageHeaderWrapper>
}
