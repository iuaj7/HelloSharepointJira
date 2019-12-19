import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IHalloJiraWebPartProps {
    description: string;
}
export default class HalloJiraWebPart extends BaseClientSideWebPart<IHalloJiraWebPartProps> {
    render(): void;
    protected strJiraIssue(): string;
    protected gibJiraIssue(): Promise<string>;
    protected getJiraIssue(): Promise<string>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
