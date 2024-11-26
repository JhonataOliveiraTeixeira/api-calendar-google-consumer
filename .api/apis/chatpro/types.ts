import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type AssignLabelBodyParam = FromSchema<typeof schemas.AssignLabel.body>;
export type AssignLabelMetadataParam = FromSchema<typeof schemas.AssignLabel.metadata>;
export type AssignLabelResponse200 = FromSchema<typeof schemas.AssignLabel.response['200']>;
export type AssignLabelResponse400 = FromSchema<typeof schemas.AssignLabel.response['400']>;
export type CreateCopyCopyBodyParam = FromSchema<typeof schemas.CreateCopyCopy.body>;
export type CreateCopyCopyMetadataParam = FromSchema<typeof schemas.CreateCopyCopy.metadata>;
export type CreateCopyCopyResponse200 = FromSchema<typeof schemas.CreateCopyCopy.response['200']>;
export type CreateCopyCopyResponse400 = FromSchema<typeof schemas.CreateCopyCopy.response['400']>;
export type DepartmentsCreateBodyParam = FromSchema<typeof schemas.DepartmentsCreate.body>;
export type DepartmentsCreateMetadataParam = FromSchema<typeof schemas.DepartmentsCreate.metadata>;
export type DepartmentsCreateResponse200 = FromSchema<typeof schemas.DepartmentsCreate.response['200']>;
export type DepartmentsCreateResponse400 = FromSchema<typeof schemas.DepartmentsCreate.response['400']>;
export type DepartmentsGetdepartmentbyidBodyParam = FromSchema<typeof schemas.DepartmentsGetdepartmentbyid.body>;
export type DepartmentsGetdepartmentbyidMetadataParam = FromSchema<typeof schemas.DepartmentsGetdepartmentbyid.metadata>;
export type DepartmentsGetdepartmentbyidResponse200 = FromSchema<typeof schemas.DepartmentsGetdepartmentbyid.response['200']>;
export type DepartmentsGetdepartmentbyidResponse400 = FromSchema<typeof schemas.DepartmentsGetdepartmentbyid.response['400']>;
export type DepartmentsGetusersindepartmentBodyParam = FromSchema<typeof schemas.DepartmentsGetusersindepartment.body>;
export type DepartmentsGetusersindepartmentMetadataParam = FromSchema<typeof schemas.DepartmentsGetusersindepartment.metadata>;
export type DepartmentsGetusersindepartmentResponse200 = FromSchema<typeof schemas.DepartmentsGetusersindepartment.response['200']>;
export type DepartmentsGetusersindepartmentResponse400 = FromSchema<typeof schemas.DepartmentsGetusersindepartment.response['400']>;
export type DepartmentsListBodyParam = FromSchema<typeof schemas.DepartmentsList.body>;
export type DepartmentsListMetadataParam = FromSchema<typeof schemas.DepartmentsList.metadata>;
export type DepartmentsListResponse200 = FromSchema<typeof schemas.DepartmentsList.response['200']>;
export type DepartmentsListResponse400 = FromSchema<typeof schemas.DepartmentsList.response['400']>;
export type EditUserBodyParam = FromSchema<typeof schemas.EditUser.body>;
export type EditUserMetadataParam = FromSchema<typeof schemas.EditUser.metadata>;
export type EditUserResponse200 = FromSchema<typeof schemas.EditUser.response['200']>;
export type EditUserResponse400 = FromSchema<typeof schemas.EditUser.response['400']>;
export type EndingsCreateBodyParam = FromSchema<typeof schemas.EndingsCreate.body>;
export type EndingsCreateMetadataParam = FromSchema<typeof schemas.EndingsCreate.metadata>;
export type EndingsCreateResponse200 = FromSchema<typeof schemas.EndingsCreate.response['200']>;
export type EndingsCreateResponse400 = FromSchema<typeof schemas.EndingsCreate.response['400']>;
export type EndingsGetendingbyidBodyParam = FromSchema<typeof schemas.EndingsGetendingbyid.body>;
export type EndingsGetendingbyidMetadataParam = FromSchema<typeof schemas.EndingsGetendingbyid.metadata>;
export type EndingsGetendingbyidResponse200 = FromSchema<typeof schemas.EndingsGetendingbyid.response['200']>;
export type EndingsGetendingbyidResponse400 = FromSchema<typeof schemas.EndingsGetendingbyid.response['400']>;
export type EndingsListBodyParam = FromSchema<typeof schemas.EndingsList.body>;
export type EndingsListMetadataParam = FromSchema<typeof schemas.EndingsList.metadata>;
export type EndingsListResponse200 = FromSchema<typeof schemas.EndingsList.response['200']>;
export type EndingsListResponse400 = FromSchema<typeof schemas.EndingsList.response['400']>;
export type EndingsUpdateBodyParam = FromSchema<typeof schemas.EndingsUpdate.body>;
export type EndingsUpdateMetadataParam = FromSchema<typeof schemas.EndingsUpdate.metadata>;
export type EndingsUpdateResponse200 = FromSchema<typeof schemas.EndingsUpdate.response['200']>;
export type EndingsUpdateResponse400 = FromSchema<typeof schemas.EndingsUpdate.response['400']>;
export type GetAllUsersByInstanceBodyParam = FromSchema<typeof schemas.GetAllUsersByInstance.body>;
export type GetAllUsersByInstanceMetadataParam = FromSchema<typeof schemas.GetAllUsersByInstance.metadata>;
export type GetAllUsersByInstanceResponse200 = FromSchema<typeof schemas.GetAllUsersByInstance.response['200']>;
export type GetAllUsersByInstanceResponse400 = FromSchema<typeof schemas.GetAllUsersByInstance.response['400']>;
export type GetOrCreateSessionByNumberBodyParam = FromSchema<typeof schemas.GetOrCreateSessionByNumber.body>;
export type GetOrCreateSessionByNumberMetadataParam = FromSchema<typeof schemas.GetOrCreateSessionByNumber.metadata>;
export type GetOrCreateSessionByNumberResponse200 = FromSchema<typeof schemas.GetOrCreateSessionByNumber.response['200']>;
export type GetOrCreateSessionByNumberResponse400 = FromSchema<typeof schemas.GetOrCreateSessionByNumber.response['400']>;
export type GetTemplatesBodyParam = FromSchema<typeof schemas.GetTemplates.body>;
export type GetTemplatesMetadataParam = FromSchema<typeof schemas.GetTemplates.metadata>;
export type GetTemplatesResponse200 = FromSchema<typeof schemas.GetTemplates.response['200']>;
export type GetTemplatesResponse400 = FromSchema<typeof schemas.GetTemplates.response['400']>;
export type GetUserByIdBodyParam = FromSchema<typeof schemas.GetUserById.body>;
export type GetUserByIdMetadataParam = FromSchema<typeof schemas.GetUserById.metadata>;
export type GetUserByIdResponse200 = FromSchema<typeof schemas.GetUserById.response['200']>;
export type GetUserByIdResponse400 = FromSchema<typeof schemas.GetUserById.response['400']>;
export type HistoryReportMetadataParam = FromSchema<typeof schemas.HistoryReport.metadata>;
export type HistoryReportResponse200 = FromSchema<typeof schemas.HistoryReport.response['200']>;
export type HistoryReportResponse400 = FromSchema<typeof schemas.HistoryReport.response['400']>;
export type LeadsCreateBodyParam = FromSchema<typeof schemas.LeadsCreate.body>;
export type LeadsCreateMetadataParam = FromSchema<typeof schemas.LeadsCreate.metadata>;
export type LeadsCreateResponse200 = FromSchema<typeof schemas.LeadsCreate.response['200']>;
export type LeadsCreateResponse400 = FromSchema<typeof schemas.LeadsCreate.response['400']>;
export type LeadsFindbyidBodyParam = FromSchema<typeof schemas.LeadsFindbyid.body>;
export type LeadsFindbyidMetadataParam = FromSchema<typeof schemas.LeadsFindbyid.metadata>;
export type LeadsFindbyidResponse200 = FromSchema<typeof schemas.LeadsFindbyid.response['200']>;
export type LeadsFindbyidResponse400 = FromSchema<typeof schemas.LeadsFindbyid.response['400']>;
export type LeadsFindbyphonenumberBodyParam = FromSchema<typeof schemas.LeadsFindbyphonenumber.body>;
export type LeadsFindbyphonenumberMetadataParam = FromSchema<typeof schemas.LeadsFindbyphonenumber.metadata>;
export type LeadsFindbyphonenumberResponse200 = FromSchema<typeof schemas.LeadsFindbyphonenumber.response['200']>;
export type LeadsFindbyphonenumberResponse400 = FromSchema<typeof schemas.LeadsFindbyphonenumber.response['400']>;
export type LeadsFindlabelsBodyParam = FromSchema<typeof schemas.LeadsFindlabels.body>;
export type LeadsFindlabelsMetadataParam = FromSchema<typeof schemas.LeadsFindlabels.metadata>;
export type LeadsFindlabelsResponse200 = FromSchema<typeof schemas.LeadsFindlabels.response['200']>;
export type LeadsFindlabelsResponse400 = FromSchema<typeof schemas.LeadsFindlabels.response['400']>;
export type LeadsUpdateBodyParam = FromSchema<typeof schemas.LeadsUpdate.body>;
export type LeadsUpdateMetadataParam = FromSchema<typeof schemas.LeadsUpdate.metadata>;
export type LeadsUpdateResponse200 = FromSchema<typeof schemas.LeadsUpdate.response['200']>;
export type LeadsUpdateResponse400 = FromSchema<typeof schemas.LeadsUpdate.response['400']>;
export type MessagesGetallBodyParam = FromSchema<typeof schemas.MessagesGetall.body>;
export type MessagesGetallMetadataParam = FromSchema<typeof schemas.MessagesGetall.metadata>;
export type MessagesGetallResponse200 = FromSchema<typeof schemas.MessagesGetall.response['200']>;
export type MessagesGetallResponse400 = FromSchema<typeof schemas.MessagesGetall.response['400']>;
export type MessagesReadmessagesBodyParam = FromSchema<typeof schemas.MessagesReadmessages.body>;
export type MessagesReadmessagesMetadataParam = FromSchema<typeof schemas.MessagesReadmessages.metadata>;
export type MessagesReadmessagesResponse200 = FromSchema<typeof schemas.MessagesReadmessages.response['200']>;
export type MessagesReadmessagesResponse400 = FromSchema<typeof schemas.MessagesReadmessages.response['400']>;
export type MessagesSendcontactBodyParam = FromSchema<typeof schemas.MessagesSendcontact.body>;
export type MessagesSendcontactMetadataParam = FromSchema<typeof schemas.MessagesSendcontact.metadata>;
export type MessagesSendcontactResponse200 = FromSchema<typeof schemas.MessagesSendcontact.response['200']>;
export type MessagesSendcontactResponse400 = FromSchema<typeof schemas.MessagesSendcontact.response['400']>;
export type MessagesSendfilefromurlBodyParam = FromSchema<typeof schemas.MessagesSendfilefromurl.body>;
export type MessagesSendfilefromurlMetadataParam = FromSchema<typeof schemas.MessagesSendfilefromurl.metadata>;
export type MessagesSendfilefromurlResponse200 = FromSchema<typeof schemas.MessagesSendfilefromurl.response['200']>;
export type MessagesSendfilefromurlResponse400 = FromSchema<typeof schemas.MessagesSendfilefromurl.response['400']>;
export type MessagesSendmessageBodyParam = FromSchema<typeof schemas.MessagesSendmessage.body>;
export type MessagesSendmessageMetadataParam = FromSchema<typeof schemas.MessagesSendmessage.metadata>;
export type MessagesSendmessageResponse200 = FromSchema<typeof schemas.MessagesSendmessage.response['200']>;
export type MessagesSendmessageResponse400 = FromSchema<typeof schemas.MessagesSendmessage.response['400']>;
export type RegisterBodyParam = FromSchema<typeof schemas.Register.body>;
export type RegisterMetadataParam = FromSchema<typeof schemas.Register.metadata>;
export type RegisterResponse200 = FromSchema<typeof schemas.Register.response['200']>;
export type RegisterResponse400 = FromSchema<typeof schemas.Register.response['400']>;
export type SendTemplateBodyParam = FromSchema<typeof schemas.SendTemplate.body>;
export type SendTemplateMetadataParam = FromSchema<typeof schemas.SendTemplate.metadata>;
export type SendTemplateResponse200 = FromSchema<typeof schemas.SendTemplate.response['200']>;
export type SendTemplateResponse400 = FromSchema<typeof schemas.SendTemplate.response['400']>;
export type SessionsAssigndepartmentBodyParam = FromSchema<typeof schemas.SessionsAssigndepartment.body>;
export type SessionsAssigndepartmentMetadataParam = FromSchema<typeof schemas.SessionsAssigndepartment.metadata>;
export type SessionsAssigndepartmentResponse200 = FromSchema<typeof schemas.SessionsAssigndepartment.response['200']>;
export type SessionsAssigndepartmentResponse400 = FromSchema<typeof schemas.SessionsAssigndepartment.response['400']>;
export type SessionsAssigntoBodyParam = FromSchema<typeof schemas.SessionsAssignto.body>;
export type SessionsAssigntoMetadataParam = FromSchema<typeof schemas.SessionsAssignto.metadata>;
export type SessionsAssigntoResponse200 = FromSchema<typeof schemas.SessionsAssignto.response['200']>;
export type SessionsAssigntoResponse400 = FromSchema<typeof schemas.SessionsAssignto.response['400']>;
export type SessionsFinishBodyParam = FromSchema<typeof schemas.SessionsFinish.body>;
export type SessionsFinishMetadataParam = FromSchema<typeof schemas.SessionsFinish.metadata>;
export type SessionsFinishResponse200 = FromSchema<typeof schemas.SessionsFinish.response['200']>;
export type SessionsFinishResponse400 = FromSchema<typeof schemas.SessionsFinish.response['400']>;
export type SessionsGetsessionbyidBodyParam = FromSchema<typeof schemas.SessionsGetsessionbyid.body>;
export type SessionsGetsessionbyidMetadataParam = FromSchema<typeof schemas.SessionsGetsessionbyid.metadata>;
export type SessionsGetsessionbyidResponse200 = FromSchema<typeof schemas.SessionsGetsessionbyid.response['200']>;
export type SessionsGetsessionbyidResponse400 = FromSchema<typeof schemas.SessionsGetsessionbyid.response['400']>;
export type SessionsListBodyParam = FromSchema<typeof schemas.SessionsList.body>;
export type SessionsListMetadataParam = FromSchema<typeof schemas.SessionsList.metadata>;
export type SessionsListResponse200 = FromSchema<typeof schemas.SessionsList.response['200']>;
export type SessionsListResponse400 = FromSchema<typeof schemas.SessionsList.response['400']>;
export type SessionsListfromleadBodyParam = FromSchema<typeof schemas.SessionsListfromlead.body>;
export type SessionsListfromleadMetadataParam = FromSchema<typeof schemas.SessionsListfromlead.metadata>;
export type SessionsListfromleadResponse200 = FromSchema<typeof schemas.SessionsListfromlead.response['200']>;
export type SessionsListfromleadResponse400 = FromSchema<typeof schemas.SessionsListfromlead.response['400']>;
export type ShortcutsCreateBodyParam = FromSchema<typeof schemas.ShortcutsCreate.body>;
export type ShortcutsCreateMetadataParam = FromSchema<typeof schemas.ShortcutsCreate.metadata>;
export type ShortcutsCreateResponse200 = FromSchema<typeof schemas.ShortcutsCreate.response['200']>;
export type ShortcutsCreateResponse400 = FromSchema<typeof schemas.ShortcutsCreate.response['400']>;
export type ShortcutsDeleteBodyParam = FromSchema<typeof schemas.ShortcutsDelete.body>;
export type ShortcutsDeleteMetadataParam = FromSchema<typeof schemas.ShortcutsDelete.metadata>;
export type ShortcutsDeleteResponse200 = FromSchema<typeof schemas.ShortcutsDelete.response['200']>;
export type ShortcutsDeleteResponse400 = FromSchema<typeof schemas.ShortcutsDelete.response['400']>;
export type ShortcutsGetShortcutByIdBodyParam = FromSchema<typeof schemas.ShortcutsGetShortcutById.body>;
export type ShortcutsGetShortcutByIdMetadataParam = FromSchema<typeof schemas.ShortcutsGetShortcutById.metadata>;
export type ShortcutsGetShortcutByIdResponse200 = FromSchema<typeof schemas.ShortcutsGetShortcutById.response['200']>;
export type ShortcutsGetShortcutByIdResponse400 = FromSchema<typeof schemas.ShortcutsGetShortcutById.response['400']>;
export type ShortcutsListBodyParam = FromSchema<typeof schemas.ShortcutsList.body>;
export type ShortcutsListMetadataParam = FromSchema<typeof schemas.ShortcutsList.metadata>;
export type ShortcutsListResponse200 = FromSchema<typeof schemas.ShortcutsList.response['200']>;
export type ShortcutsListResponse400 = FromSchema<typeof schemas.ShortcutsList.response['400']>;
export type ShortcutsUpdateBodyParam = FromSchema<typeof schemas.ShortcutsUpdate.body>;
export type ShortcutsUpdateMetadataParam = FromSchema<typeof schemas.ShortcutsUpdate.metadata>;
export type ShortcutsUpdateResponse200 = FromSchema<typeof schemas.ShortcutsUpdate.response['200']>;
export type ShortcutsUpdateResponse400 = FromSchema<typeof schemas.ShortcutsUpdate.response['400']>;
export type TagsCreateBodyParam = FromSchema<typeof schemas.TagsCreate.body>;
export type TagsCreateMetadataParam = FromSchema<typeof schemas.TagsCreate.metadata>;
export type TagsCreateResponse200 = FromSchema<typeof schemas.TagsCreate.response['200']>;
export type TagsCreateResponse400 = FromSchema<typeof schemas.TagsCreate.response['400']>;
export type TagsGettagbyidBodyParam = FromSchema<typeof schemas.TagsGettagbyid.body>;
export type TagsGettagbyidMetadataParam = FromSchema<typeof schemas.TagsGettagbyid.metadata>;
export type TagsGettagbyidResponse200 = FromSchema<typeof schemas.TagsGettagbyid.response['200']>;
export type TagsGettagbyidResponse400 = FromSchema<typeof schemas.TagsGettagbyid.response['400']>;
export type TagsListleadsbytagBodyParam = FromSchema<typeof schemas.TagsListleadsbytag.body>;
export type TagsListleadsbytagMetadataParam = FromSchema<typeof schemas.TagsListleadsbytag.metadata>;
export type TagsListleadsbytagResponse200 = FromSchema<typeof schemas.TagsListleadsbytag.response['200']>;
export type TagsListleadsbytagResponse400 = FromSchema<typeof schemas.TagsListleadsbytag.response['400']>;
export type TagsUpdateBodyParam = FromSchema<typeof schemas.TagsUpdate.body>;
export type TagsUpdateMetadataParam = FromSchema<typeof schemas.TagsUpdate.metadata>;
export type TagsUpdateResponse200 = FromSchema<typeof schemas.TagsUpdate.response['200']>;
export type TagsUpdateResponse400 = FromSchema<typeof schemas.TagsUpdate.response['400']>;
export type UnassignLabelBodyParam = FromSchema<typeof schemas.UnassignLabel.body>;
export type UnassignLabelMetadataParam = FromSchema<typeof schemas.UnassignLabel.metadata>;
export type UnassignLabelResponse200 = FromSchema<typeof schemas.UnassignLabel.response['200']>;
export type UnassignLabelResponse400 = FromSchema<typeof schemas.UnassignLabel.response['400']>;
export type UpdateOwnerBodyParam = FromSchema<typeof schemas.UpdateOwner.body>;
export type UpdateOwnerMetadataParam = FromSchema<typeof schemas.UpdateOwner.metadata>;
export type UpdateOwnerResponse200 = FromSchema<typeof schemas.UpdateOwner.response['200']>;
export type UpdateOwnerResponse400 = FromSchema<typeof schemas.UpdateOwner.response['400']>;
export type WidgetsCreateBodyParam = FromSchema<typeof schemas.WidgetsCreate.body>;
export type WidgetsCreateMetadataParam = FromSchema<typeof schemas.WidgetsCreate.metadata>;
export type WidgetsCreateResponse200 = FromSchema<typeof schemas.WidgetsCreate.response['200']>;
export type WidgetsCreateResponse400 = FromSchema<typeof schemas.WidgetsCreate.response['400']>;
export type WidgetsGetwidgetbyidBodyParam = FromSchema<typeof schemas.WidgetsGetwidgetbyid.body>;
export type WidgetsGetwidgetbyidMetadataParam = FromSchema<typeof schemas.WidgetsGetwidgetbyid.metadata>;
export type WidgetsGetwidgetbyidResponse200 = FromSchema<typeof schemas.WidgetsGetwidgetbyid.response['200']>;
export type WidgetsGetwidgetbyidResponse400 = FromSchema<typeof schemas.WidgetsGetwidgetbyid.response['400']>;
export type WidgetsListBodyParam = FromSchema<typeof schemas.WidgetsList.body>;
export type WidgetsListMetadataParam = FromSchema<typeof schemas.WidgetsList.metadata>;
export type WidgetsListResponse200 = FromSchema<typeof schemas.WidgetsList.response['200']>;
export type WidgetsListResponse400 = FromSchema<typeof schemas.WidgetsList.response['400']>;
export type WidgetsUpdateBodyParam = FromSchema<typeof schemas.WidgetsUpdate.body>;
export type WidgetsUpdateMetadataParam = FromSchema<typeof schemas.WidgetsUpdate.metadata>;
export type WidgetsUpdateResponse200 = FromSchema<typeof schemas.WidgetsUpdate.response['200']>;
export type WidgetsUpdateResponse400 = FromSchema<typeof schemas.WidgetsUpdate.response['400']>;
