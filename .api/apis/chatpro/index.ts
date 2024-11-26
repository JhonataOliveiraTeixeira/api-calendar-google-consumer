import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'chatpro/unknown (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Cria uma resposta rápida
   *
   * @summary Create
   * @throws FetchError<400, types.ShortcutsCreateResponse400> 400
   */
  shortcutsCreate(body: types.ShortcutsCreateBodyParam, metadata: types.ShortcutsCreateMetadataParam): Promise<FetchResponse<200, types.ShortcutsCreateResponse200>> {
    return this.core.fetch('/shortcuts/create', 'post', body, metadata);
  }

  /**
   * Busca uma resposta rápida pelo id
   *
   * @summary Get shortcut by id
   * @throws FetchError<400, types.ShortcutsGetShortcutByIdResponse400> 400
   */
  shortcutsGetShortcutById(body: types.ShortcutsGetShortcutByIdBodyParam, metadata: types.ShortcutsGetShortcutByIdMetadataParam): Promise<FetchResponse<200, types.ShortcutsGetShortcutByIdResponse200>> {
    return this.core.fetch('/shortcuts/getShortcutById', 'post', body, metadata);
  }

  /**
   * Lista todas as resposta rápidas
   *
   * @summary List
   * @throws FetchError<400, types.ShortcutsListResponse400> 400
   */
  shortcutsList(body: types.ShortcutsListBodyParam, metadata: types.ShortcutsListMetadataParam): Promise<FetchResponse<200, types.ShortcutsListResponse200>> {
    return this.core.fetch('/shortcuts/list', 'post', body, metadata);
  }

  /**
   * Atualiza uma resposta rápida
   *
   * @summary Update
   * @throws FetchError<400, types.ShortcutsUpdateResponse400> 400
   */
  shortcutsUpdate(body: types.ShortcutsUpdateBodyParam, metadata: types.ShortcutsUpdateMetadataParam): Promise<FetchResponse<200, types.ShortcutsUpdateResponse200>> {
    return this.core.fetch('/shortcuts/update', 'post', body, metadata);
  }

  /**
   * Deleta uma resposta rápida
   *
   * @summary Delete
   * @throws FetchError<400, types.ShortcutsDeleteResponse400> 400
   */
  shortcutsDelete(body: types.ShortcutsDeleteBodyParam, metadata: types.ShortcutsDeleteMetadataParam): Promise<FetchResponse<200, types.ShortcutsDeleteResponse200>> {
    return this.core.fetch('/shortcuts/delete', 'post', body, metadata);
  }

  /**
   * Cria um departamento
   *
   * @summary Create
   * @throws FetchError<400, types.DepartmentsCreateResponse400> 400
   */
  departmentsCreate(body: types.DepartmentsCreateBodyParam, metadata: types.DepartmentsCreateMetadataParam): Promise<FetchResponse<200, types.DepartmentsCreateResponse200>> {
    return this.core.fetch('/departments/create', 'post', body, metadata);
  }

  /**
   * Busca um departamento pelo id
   *
   * @summary Get department by id
   * @throws FetchError<400, types.DepartmentsGetdepartmentbyidResponse400> 400
   */
  departmentsGetdepartmentbyid(body: types.DepartmentsGetdepartmentbyidBodyParam, metadata: types.DepartmentsGetdepartmentbyidMetadataParam): Promise<FetchResponse<200, types.DepartmentsGetdepartmentbyidResponse200>> {
    return this.core.fetch('/departments/getDepartmentById', 'post', body, metadata);
  }

  /**
   * Lista todos os departamentos da instância
   *
   * @summary List
   * @throws FetchError<400, types.DepartmentsListResponse400> 400
   */
  departmentsList(body: types.DepartmentsListBodyParam, metadata: types.DepartmentsListMetadataParam): Promise<FetchResponse<200, types.DepartmentsListResponse200>> {
    return this.core.fetch('/departments/list', 'post', body, metadata);
  }

  /**
   * Busca todos os usuários vinculados ao departamento
   *
   * @summary Get users in department
   * @throws FetchError<400, types.DepartmentsGetusersindepartmentResponse400> 400
   */
  departmentsGetusersindepartment(body: types.DepartmentsGetusersindepartmentBodyParam, metadata: types.DepartmentsGetusersindepartmentMetadataParam): Promise<FetchResponse<200, types.DepartmentsGetusersindepartmentResponse200>> {
    return this.core.fetch('/departments/getUsersInDepartment', 'post', body, metadata);
  }

  /**
   * Atualiza um departamento
   *
   * @summary Update
   * @throws FetchError<400, types.CreateCopyCopyResponse400> 400
   */
  createCopyCopy(body: types.CreateCopyCopyBodyParam, metadata: types.CreateCopyCopyMetadataParam): Promise<FetchResponse<200, types.CreateCopyCopyResponse200>> {
    return this.core.fetch('/departments/edit', 'post', body, metadata);
  }

  /**
   * Cria uma etiqueta
   *
   * @summary Create
   * @throws FetchError<400, types.TagsCreateResponse400> 400
   */
  tagsCreate(body: types.TagsCreateBodyParam, metadata: types.TagsCreateMetadataParam): Promise<FetchResponse<200, types.TagsCreateResponse200>> {
    return this.core.fetch('/tags/create', 'post', body, metadata);
  }

  /**
   * Busca uma etiqueta pelo id
   *
   * @summary Get tag by id
   * @throws FetchError<400, types.TagsGettagbyidResponse400> 400
   */
  tagsGettagbyid(body: types.TagsGettagbyidBodyParam, metadata: types.TagsGettagbyidMetadataParam): Promise<FetchResponse<200, types.TagsGettagbyidResponse200>> {
    return this.core.fetch('/tags/getTagById', 'post', body, metadata);
  }

  /**
   * Lista os leads vinculados a etiqueta
   *
   * @summary List leads by tag
   * @throws FetchError<400, types.TagsListleadsbytagResponse400> 400
   */
  tagsListleadsbytag(body: types.TagsListleadsbytagBodyParam, metadata: types.TagsListleadsbytagMetadataParam): Promise<FetchResponse<200, types.TagsListleadsbytagResponse200>> {
    return this.core.fetch('/tags/listLeadsByTag', 'post', body, metadata);
  }

  /**
   * Atualiza a etiqueta
   *
   * @summary Update
   * @throws FetchError<400, types.TagsUpdateResponse400> 400
   */
  tagsUpdate(body: types.TagsUpdateBodyParam, metadata: types.TagsUpdateMetadataParam): Promise<FetchResponse<200, types.TagsUpdateResponse200>> {
    return this.core.fetch('/tags/update', 'post', body, metadata);
  }

  /**
   * Cria um lead
   *
   * @summary Create
   * @throws FetchError<400, types.LeadsCreateResponse400> 400
   */
  leadsCreate(body: types.LeadsCreateBodyParam, metadata: types.LeadsCreateMetadataParam): Promise<FetchResponse<200, types.LeadsCreateResponse200>> {
    return this.core.fetch('/leads/create', 'post', body, metadata);
  }

  /**
   * Atualiza um lead
   *
   * @summary Update
   * @throws FetchError<400, types.LeadsUpdateResponse400> 400
   */
  leadsUpdate(body: types.LeadsUpdateBodyParam, metadata: types.LeadsUpdateMetadataParam): Promise<FetchResponse<200, types.LeadsUpdateResponse200>> {
    return this.core.fetch('/leads/update', 'post', body, metadata);
  }

  /**
   * Lista as etiquetas vinculadas a um lead
   *
   * @summary Get tags by lead id
   * @throws FetchError<400, types.LeadsFindlabelsResponse400> 400
   */
  leadsFindlabels(body: types.LeadsFindlabelsBodyParam, metadata: types.LeadsFindlabelsMetadataParam): Promise<FetchResponse<200, types.LeadsFindlabelsResponse200>> {
    return this.core.fetch('/leads/findLabels', 'post', body, metadata);
  }

  /**
   * Busca um lead pelo id
   *
   * @summary Get lead by id
   * @throws FetchError<400, types.LeadsFindbyidResponse400> 400
   */
  leadsFindbyid(body: types.LeadsFindbyidBodyParam, metadata: types.LeadsFindbyidMetadataParam): Promise<FetchResponse<200, types.LeadsFindbyidResponse200>> {
    return this.core.fetch('/leads/findById', 'post', body, metadata);
  }

  /**
   * Busca um lead pelo número de telefone
   *
   * @summary Get lead by phone number
   * @throws FetchError<400, types.LeadsFindbyphonenumberResponse400> 400
   */
  leadsFindbyphonenumber(body: types.LeadsFindbyphonenumberBodyParam, metadata: types.LeadsFindbyphonenumberMetadataParam): Promise<FetchResponse<200, types.LeadsFindbyphonenumberResponse200>> {
    return this.core.fetch('/leads/findByPhoneNumber', 'post', body, metadata);
  }

  /**
   * Lista todas as mensagens de uma sessão
   *
   * @summary List all message by session
   * @throws FetchError<400, types.MessagesGetallResponse400> 400
   */
  messagesGetall(body: types.MessagesGetallBodyParam, metadata: types.MessagesGetallMetadataParam): Promise<FetchResponse<200, types.MessagesGetallResponse200>> {
    return this.core.fetch('/messages/getAll', 'post', body, metadata);
  }

  /**
   * Envia um arquivo a partir de uma URL
   *
   * @summary Send file from URL
   * @throws FetchError<400, types.MessagesSendfilefromurlResponse400> 400
   */
  messagesSendfilefromurl(body: types.MessagesSendfilefromurlBodyParam, metadata: types.MessagesSendfilefromurlMetadataParam): Promise<FetchResponse<200, types.MessagesSendfilefromurlResponse200>> {
    return this.core.fetch('/messages/sendFileFromUrl', 'post', body, metadata);
  }

  /**
   * Envia uma mensagem de texto
   *
   * @summary Send message
   * @throws FetchError<400, types.MessagesSendmessageResponse400> 400
   */
  messagesSendmessage(body: types.MessagesSendmessageBodyParam, metadata: types.MessagesSendmessageMetadataParam): Promise<FetchResponse<200, types.MessagesSendmessageResponse200>> {
    return this.core.fetch('/messages/sendMessage', 'post', body, metadata);
  }

  /**
   * Lista todas as mensagens de uma sessão
   *
   * @summary Send Contact
   * @throws FetchError<400, types.MessagesSendcontactResponse400> 400
   */
  messagesSendcontact(body: types.MessagesSendcontactBodyParam, metadata: types.MessagesSendcontactMetadataParam): Promise<FetchResponse<200, types.MessagesSendcontactResponse200>> {
    return this.core.fetch('/messages/sendContact', 'post', body, metadata);
  }

  /**
   * Marca as mensagens de uma sessão como lidas
   *
   * @summary Read message
   * @throws FetchError<400, types.MessagesReadmessagesResponse400> 400
   */
  messagesReadmessages(body: types.MessagesReadmessagesBodyParam, metadata: types.MessagesReadmessagesMetadataParam): Promise<FetchResponse<200, types.MessagesReadmessagesResponse200>> {
    return this.core.fetch('/messages/readMessages', 'post', body, metadata);
  }

  /**
   * Busca ou cria uma nova sessão a partir de um número de telefone
   *
   * @summary Get or create session by number
   * @throws FetchError<400, types.GetOrCreateSessionByNumberResponse400> 400
   */
  getOrCreateSessionByNumber(body: types.GetOrCreateSessionByNumberBodyParam, metadata: types.GetOrCreateSessionByNumberMetadataParam): Promise<FetchResponse<200, types.GetOrCreateSessionByNumberResponse200>> {
    return this.core.fetch('/sessions/getOrCreateByNumber', 'post', body, metadata);
  }

  /**
   * Busca uma sessão pelo id
   *
   * @summary Get session by id
   * @throws FetchError<400, types.SessionsGetsessionbyidResponse400> 400
   */
  sessionsGetsessionbyid(body: types.SessionsGetsessionbyidBodyParam, metadata: types.SessionsGetsessionbyidMetadataParam): Promise<FetchResponse<200, types.SessionsGetsessionbyidResponse200>> {
    return this.core.fetch('/sessions/getSessionById', 'post', body, metadata);
  }

  /**
   * Lista as sessões
   *
   * @summary List
   * @throws FetchError<400, types.SessionsListResponse400> 400
   */
  sessionsList(body: types.SessionsListBodyParam, metadata: types.SessionsListMetadataParam): Promise<FetchResponse<200, types.SessionsListResponse200>> {
    return this.core.fetch('/sessions/list', 'post', body, metadata);
  }

  /**
   * Busca as sessões de um lead
   *
   * @summary List from lead
   * @throws FetchError<400, types.SessionsListfromleadResponse400> 400
   */
  sessionsListfromlead(body: types.SessionsListfromleadBodyParam, metadata: types.SessionsListfromleadMetadataParam): Promise<FetchResponse<200, types.SessionsListfromleadResponse200>> {
    return this.core.fetch('/sessions/listFromLead', 'post', body, metadata);
  }

  /**
   * Atribui uma sessão a um usuário
   *
   * @summary Assign to user
   * @throws FetchError<400, types.SessionsAssigntoResponse400> 400
   */
  sessionsAssignto(body: types.SessionsAssigntoBodyParam, metadata: types.SessionsAssigntoMetadataParam): Promise<FetchResponse<200, types.SessionsAssigntoResponse200>> {
    return this.core.fetch('/sessions/assignTo', 'post', body, metadata);
  }

  /**
   * Atribui uma sessão a um departamento
   *
   * @summary Assign to department
   * @throws FetchError<400, types.SessionsAssigndepartmentResponse400> 400
   */
  sessionsAssigndepartment(body: types.SessionsAssigndepartmentBodyParam, metadata: types.SessionsAssigndepartmentMetadataParam): Promise<FetchResponse<200, types.SessionsAssigndepartmentResponse200>> {
    return this.core.fetch('/sessions/assignDepartment', 'post', body, metadata);
  }

  /**
   * Finaliza uma sessão aberta
   *
   * @summary Finish
   * @throws FetchError<400, types.SessionsFinishResponse400> 400
   */
  sessionsFinish(body: types.SessionsFinishBodyParam, metadata: types.SessionsFinishMetadataParam): Promise<FetchResponse<200, types.SessionsFinishResponse200>> {
    return this.core.fetch('/sessions/finish', 'post', body, metadata);
  }

  /**
   * Cria um motivo de finalização
   *
   * @summary Create
   * @throws FetchError<400, types.EndingsCreateResponse400> 400
   */
  endingsCreate(body: types.EndingsCreateBodyParam, metadata?: types.EndingsCreateMetadataParam): Promise<FetchResponse<200, types.EndingsCreateResponse200>> {
    return this.core.fetch('/endings/create', 'post', body, metadata);
  }

  /**
   * Lista os motivos de finalização
   *
   * @summary List
   * @throws FetchError<400, types.EndingsListResponse400> 400
   */
  endingsList(body: types.EndingsListBodyParam, metadata?: types.EndingsListMetadataParam): Promise<FetchResponse<200, types.EndingsListResponse200>> {
    return this.core.fetch('/endings/list', 'post', body, metadata);
  }

  /**
   * Busca um motivo de finalização pelo id
   *
   * @summary Get ending by id
   * @throws FetchError<400, types.EndingsGetendingbyidResponse400> 400
   */
  endingsGetendingbyid(body: types.EndingsGetendingbyidBodyParam, metadata?: types.EndingsGetendingbyidMetadataParam): Promise<FetchResponse<200, types.EndingsGetendingbyidResponse200>> {
    return this.core.fetch('/endings/getEndingById', 'post', body, metadata);
  }

  /**
   * Atualiza um motivo de finalização
   *
   * @summary Update
   * @throws FetchError<400, types.EndingsUpdateResponse400> 400
   */
  endingsUpdate(body: types.EndingsUpdateBodyParam, metadata?: types.EndingsUpdateMetadataParam): Promise<FetchResponse<200, types.EndingsUpdateResponse200>> {
    return this.core.fetch('/endings/update', 'post', body, metadata);
  }

  /**
   * Get user by id
   *
   * @throws FetchError<400, types.GetUserByIdResponse400> 400
   */
  getUserById(body: types.GetUserByIdBodyParam, metadata: types.GetUserByIdMetadataParam): Promise<FetchResponse<200, types.GetUserByIdResponse200>> {
    return this.core.fetch('/users/getUserById', 'post', body, metadata);
  }

  /**
   * Get all users by instance
   *
   * @throws FetchError<400, types.GetAllUsersByInstanceResponse400> 400
   */
  getAllUsersByInstance(body: types.GetAllUsersByInstanceBodyParam, metadata: types.GetAllUsersByInstanceMetadataParam): Promise<FetchResponse<200, types.GetAllUsersByInstanceResponse200>> {
    return this.core.fetch('/users/getAllInstanceUsers', 'post', body, metadata);
  }

  /**
   * Atualiza os dados de um usuário
   *
   * @summary Edit user
   * @throws FetchError<400, types.EditUserResponse400> 400
   */
  editUser(body: types.EditUserBodyParam, metadata: types.EditUserMetadataParam): Promise<FetchResponse<200, types.EditUserResponse200>> {
    return this.core.fetch('/users/editInstanceUser', 'post', body, metadata);
  }

  /**
   * Register
   *
   * @throws FetchError<400, types.RegisterResponse400> 400
   */
  register(body: types.RegisterBodyParam, metadata: types.RegisterMetadataParam): Promise<FetchResponse<200, types.RegisterResponse200>> {
    return this.core.fetch('/waba/register', 'post', body, metadata);
  }

  /**
   * Busca os templates da cloud
   *
   * @summary Get templates
   * @throws FetchError<400, types.GetTemplatesResponse400> 400
   */
  getTemplates(body: types.GetTemplatesBodyParam, metadata: types.GetTemplatesMetadataParam): Promise<FetchResponse<200, types.GetTemplatesResponse200>> {
    return this.core.fetch('/waba/getTemplates', 'post', body, metadata);
  }

  /**
   * Envia um template
   *
   * @summary Send template
   * @throws FetchError<400, types.SendTemplateResponse400> 400
   */
  sendTemplate(body: types.SendTemplateBodyParam, metadata: types.SendTemplateMetadataParam): Promise<FetchResponse<200, types.SendTemplateResponse200>> {
    return this.core.fetch('/waba/sendTemplate', 'post', body, metadata);
  }

  /**
   * Cria um widget
   *
   * @summary Create
   * @throws FetchError<400, types.WidgetsCreateResponse400> 400
   */
  widgetsCreate(body: types.WidgetsCreateBodyParam, metadata: types.WidgetsCreateMetadataParam): Promise<FetchResponse<200, types.WidgetsCreateResponse200>> {
    return this.core.fetch('/widgets/create', 'post', body, metadata);
  }

  /**
   * Atualiza um widget
   *
   * @summary Update
   * @throws FetchError<400, types.WidgetsUpdateResponse400> 400
   */
  widgetsUpdate(body: types.WidgetsUpdateBodyParam, metadata: types.WidgetsUpdateMetadataParam): Promise<FetchResponse<200, types.WidgetsUpdateResponse200>> {
    return this.core.fetch('/widgets/update', 'post', body, metadata);
  }

  /**
   * Busca um Widget pelo id
   *
   * @summary Get widget by id
   * @throws FetchError<400, types.WidgetsGetwidgetbyidResponse400> 400
   */
  widgetsGetwidgetbyid(body: types.WidgetsGetwidgetbyidBodyParam, metadata: types.WidgetsGetwidgetbyidMetadataParam): Promise<FetchResponse<200, types.WidgetsGetwidgetbyidResponse200>> {
    return this.core.fetch('/widgets/getWidgetById', 'post', body, metadata);
  }

  /**
   * Busca os widgets da instância
   *
   * @summary List
   * @throws FetchError<400, types.WidgetsListResponse400> 400
   */
  widgetsList(body: types.WidgetsListBodyParam, metadata: types.WidgetsListMetadataParam): Promise<FetchResponse<200, types.WidgetsListResponse200>> {
    return this.core.fetch('/widgets/list', 'post', body, metadata);
  }

  /**
   * Adicionar uma etiqueta ao lead.
   *
   * @summary Assign label
   * @throws FetchError<400, types.AssignLabelResponse400> 400
   */
  assignLabel(body?: types.AssignLabelBodyParam, metadata?: types.AssignLabelMetadataParam): Promise<FetchResponse<200, types.AssignLabelResponse200>> {
    return this.core.fetch('/leads/assignLabel', 'post', body, metadata);
  }

  /**
   * Remover etiqueta de um lead.
   *
   * @summary Unassign label
   * @throws FetchError<400, types.UnassignLabelResponse400> 400
   */
  unassignLabel(body?: types.UnassignLabelBodyParam, metadata?: types.UnassignLabelMetadataParam): Promise<FetchResponse<200, types.UnassignLabelResponse200>> {
    return this.core.fetch('/leads/unassignLabel', 'post', body, metadata);
  }

  /**
   * Retorna um arquivo csv contendo o histórico de atendimentos do chatPro.
   *
   * @summary reports
   * @throws FetchError<400, types.HistoryReportResponse400> 400
   */
  historyReport(metadata?: types.HistoryReportMetadataParam): Promise<FetchResponse<200, types.HistoryReportResponse200>> {
    return this.core.fetch('/reports', 'get', metadata);
  }

  /**
   * Atualiza o usuário "dono" do lead fornecido (carteirização)
   *
   * @summary Update owner
   * @throws FetchError<400, types.UpdateOwnerResponse400> 400
   */
  updateOwner(body: types.UpdateOwnerBodyParam, metadata: types.UpdateOwnerMetadataParam): Promise<FetchResponse<200, types.UpdateOwnerResponse200>> {
    return this.core.fetch('/leads/updateOwner', 'post', body, metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AssignLabelBodyParam, AssignLabelMetadataParam, AssignLabelResponse200, AssignLabelResponse400, CreateCopyCopyBodyParam, CreateCopyCopyMetadataParam, CreateCopyCopyResponse200, CreateCopyCopyResponse400, DepartmentsCreateBodyParam, DepartmentsCreateMetadataParam, DepartmentsCreateResponse200, DepartmentsCreateResponse400, DepartmentsGetdepartmentbyidBodyParam, DepartmentsGetdepartmentbyidMetadataParam, DepartmentsGetdepartmentbyidResponse200, DepartmentsGetdepartmentbyidResponse400, DepartmentsGetusersindepartmentBodyParam, DepartmentsGetusersindepartmentMetadataParam, DepartmentsGetusersindepartmentResponse200, DepartmentsGetusersindepartmentResponse400, DepartmentsListBodyParam, DepartmentsListMetadataParam, DepartmentsListResponse200, DepartmentsListResponse400, EditUserBodyParam, EditUserMetadataParam, EditUserResponse200, EditUserResponse400, EndingsCreateBodyParam, EndingsCreateMetadataParam, EndingsCreateResponse200, EndingsCreateResponse400, EndingsGetendingbyidBodyParam, EndingsGetendingbyidMetadataParam, EndingsGetendingbyidResponse200, EndingsGetendingbyidResponse400, EndingsListBodyParam, EndingsListMetadataParam, EndingsListResponse200, EndingsListResponse400, EndingsUpdateBodyParam, EndingsUpdateMetadataParam, EndingsUpdateResponse200, EndingsUpdateResponse400, GetAllUsersByInstanceBodyParam, GetAllUsersByInstanceMetadataParam, GetAllUsersByInstanceResponse200, GetAllUsersByInstanceResponse400, GetOrCreateSessionByNumberBodyParam, GetOrCreateSessionByNumberMetadataParam, GetOrCreateSessionByNumberResponse200, GetOrCreateSessionByNumberResponse400, GetTemplatesBodyParam, GetTemplatesMetadataParam, GetTemplatesResponse200, GetTemplatesResponse400, GetUserByIdBodyParam, GetUserByIdMetadataParam, GetUserByIdResponse200, GetUserByIdResponse400, HistoryReportMetadataParam, HistoryReportResponse200, HistoryReportResponse400, LeadsCreateBodyParam, LeadsCreateMetadataParam, LeadsCreateResponse200, LeadsCreateResponse400, LeadsFindbyidBodyParam, LeadsFindbyidMetadataParam, LeadsFindbyidResponse200, LeadsFindbyidResponse400, LeadsFindbyphonenumberBodyParam, LeadsFindbyphonenumberMetadataParam, LeadsFindbyphonenumberResponse200, LeadsFindbyphonenumberResponse400, LeadsFindlabelsBodyParam, LeadsFindlabelsMetadataParam, LeadsFindlabelsResponse200, LeadsFindlabelsResponse400, LeadsUpdateBodyParam, LeadsUpdateMetadataParam, LeadsUpdateResponse200, LeadsUpdateResponse400, MessagesGetallBodyParam, MessagesGetallMetadataParam, MessagesGetallResponse200, MessagesGetallResponse400, MessagesReadmessagesBodyParam, MessagesReadmessagesMetadataParam, MessagesReadmessagesResponse200, MessagesReadmessagesResponse400, MessagesSendcontactBodyParam, MessagesSendcontactMetadataParam, MessagesSendcontactResponse200, MessagesSendcontactResponse400, MessagesSendfilefromurlBodyParam, MessagesSendfilefromurlMetadataParam, MessagesSendfilefromurlResponse200, MessagesSendfilefromurlResponse400, MessagesSendmessageBodyParam, MessagesSendmessageMetadataParam, MessagesSendmessageResponse200, MessagesSendmessageResponse400, RegisterBodyParam, RegisterMetadataParam, RegisterResponse200, RegisterResponse400, SendTemplateBodyParam, SendTemplateMetadataParam, SendTemplateResponse200, SendTemplateResponse400, SessionsAssigndepartmentBodyParam, SessionsAssigndepartmentMetadataParam, SessionsAssigndepartmentResponse200, SessionsAssigndepartmentResponse400, SessionsAssigntoBodyParam, SessionsAssigntoMetadataParam, SessionsAssigntoResponse200, SessionsAssigntoResponse400, SessionsFinishBodyParam, SessionsFinishMetadataParam, SessionsFinishResponse200, SessionsFinishResponse400, SessionsGetsessionbyidBodyParam, SessionsGetsessionbyidMetadataParam, SessionsGetsessionbyidResponse200, SessionsGetsessionbyidResponse400, SessionsListBodyParam, SessionsListMetadataParam, SessionsListResponse200, SessionsListResponse400, SessionsListfromleadBodyParam, SessionsListfromleadMetadataParam, SessionsListfromleadResponse200, SessionsListfromleadResponse400, ShortcutsCreateBodyParam, ShortcutsCreateMetadataParam, ShortcutsCreateResponse200, ShortcutsCreateResponse400, ShortcutsDeleteBodyParam, ShortcutsDeleteMetadataParam, ShortcutsDeleteResponse200, ShortcutsDeleteResponse400, ShortcutsGetShortcutByIdBodyParam, ShortcutsGetShortcutByIdMetadataParam, ShortcutsGetShortcutByIdResponse200, ShortcutsGetShortcutByIdResponse400, ShortcutsListBodyParam, ShortcutsListMetadataParam, ShortcutsListResponse200, ShortcutsListResponse400, ShortcutsUpdateBodyParam, ShortcutsUpdateMetadataParam, ShortcutsUpdateResponse200, ShortcutsUpdateResponse400, TagsCreateBodyParam, TagsCreateMetadataParam, TagsCreateResponse200, TagsCreateResponse400, TagsGettagbyidBodyParam, TagsGettagbyidMetadataParam, TagsGettagbyidResponse200, TagsGettagbyidResponse400, TagsListleadsbytagBodyParam, TagsListleadsbytagMetadataParam, TagsListleadsbytagResponse200, TagsListleadsbytagResponse400, TagsUpdateBodyParam, TagsUpdateMetadataParam, TagsUpdateResponse200, TagsUpdateResponse400, UnassignLabelBodyParam, UnassignLabelMetadataParam, UnassignLabelResponse200, UnassignLabelResponse400, UpdateOwnerBodyParam, UpdateOwnerMetadataParam, UpdateOwnerResponse200, UpdateOwnerResponse400, WidgetsCreateBodyParam, WidgetsCreateMetadataParam, WidgetsCreateResponse200, WidgetsCreateResponse400, WidgetsGetwidgetbyidBodyParam, WidgetsGetwidgetbyidMetadataParam, WidgetsGetwidgetbyidResponse200, WidgetsGetwidgetbyidResponse400, WidgetsListBodyParam, WidgetsListMetadataParam, WidgetsListResponse200, WidgetsListResponse400, WidgetsUpdateBodyParam, WidgetsUpdateMetadataParam, WidgetsUpdateResponse200, WidgetsUpdateResponse400 } from './types';
