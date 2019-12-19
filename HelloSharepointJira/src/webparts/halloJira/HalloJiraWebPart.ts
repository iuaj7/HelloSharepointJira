import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HalloJiraWebPart.module.scss';
import * as strings from 'HalloJiraWebPartStrings';
import JiraClient from 'jira-connector';

export interface IHalloJiraWebPartProps {
  description: string;
}

export default class HalloJiraWebPart extends BaseClientSideWebPart<IHalloJiraWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.halloJira }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint Jira!</span>
              <p class="${ styles.description }">${escape(this.strJiraIssue())}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected strJiraIssue(): string {
    let jiraIssueString: string = '';
    this.gibJiraIssue().then((data) => {
      console.log(data);
      jiraIssueString = data;
    });
    return 'Jira Issue: ' + jiraIssueString;
  }

  protected async gibJiraIssue(): Promise<string> {
    const value = await this.getJiraIssue();
    return value;
  }

  protected getJiraIssue(): Promise<string> {
    let jira = new JiraClient({
      host: 'https://jira.*.*',
      basic_auth: {
        base64: 'SecretBase64Str'
      }
    });

    const issue = jira.issue.getIssue({ issueKey: 'JWR-19' });
    console.log('Jira issue: ', issue);

    return new Promise((resolve, reject) => {
      resolve(issue);
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
