export type TErrorMsg =
  | '_'
  | 'TOO_LOW_ERROR'
  | 'IS_BLANK_ERROR'
  | 'IS_NOT_FOUND'
  | 'INVALID_CHARACTERS_ERROR'
  | 'STRICT_CHECK_FAILED_ERROR'
  | 'TOO_SHORT_ERROR'
  | 'INVALID_FORMAT_ERROR'
  | 'MISSING_FIELD_ERROR'
  | 'NO_SUCH_FIELD_ERROR'
  | 'INVALID_TYPE_ERROR'
  | 'ENTITY_ASSIGN_TO_USER'
  | 'ALREADY_EXISTS_OTHER_CENTER'
  | 'NO_SUCH_CHOICE_ERROR'
  | 'ENTITY_ASSIGN_TO_DLA'
  | 'TOO_LARGE_ERROR'
  | 'NIF_NUMBER_DUPLICATE'
  | 'INVALID_MIME_TYPE_ERROR'
  | 'ERROR_TYPE'
  | 'IS_NOT_FOUND'
  | 'ALREADY_EXISTS'
  | 'ENTITY_ASSIGN'
  | 'DOCUMENT_NUMBER_DUPLICATE'
  | 'DOCUMENT_OTHER_CENTER_DUPLICATE'
  | 'IN_USE'
  | 'ERROR_DATE'
  | 'NOT_FOUND_ERROR'
  | 'ERROR_FORMAT_FILE'
  | 'INVALID_VARIANT_ERROR'
  | 'INCORRECT_SWIFT_CODE_NUMBER'
  | 'INCORRECT_IBAN_CODE_NUMBER'
  | 'ERROR_ALREADY_EXISTS'
  | 'TOO_LONG_ERROR'
  | 'This value should be of type string.'
  | "Already exist. Can't be created"
  | "Contract already exist in date range. Can't be created"
  | 'ERROR_INVOICE_NOT_PUBLISHED'
  | 'ERROR_XML_NOT_PUBLISHED'
  | 'ERROR_SEPA_XML_NOT_FOUND'
  | 'ERROR_MANDATO_NOT_FOUND'
  | 'PAYER_NUMBER_NOT_FOUND'
  | 'CATEGORY_CONTRACT_INCORRECT'
  | 'SELECTED_DATES_ERROR'
  | 'ERROR_CONTENTION_DATA'
  | 'RESIDENT_INACTIVE'
  | 'ERROR_EMAIL_FORMAT'
  | 'REGEX_FAILED_ERROR'
  | 'PERSONAL_OBJECT_ASSIGN_TO_USER'
  | 'ALLERGY_ASSIGN_TO_USER'
  | 'BIRTH_DATE_ERROR'
  | 'GROUP_ASSIGN_TO_CENTER'
  | 'FORMAT_DATE_ERROR'
  | 'ERROR_FORM_VALIDATION_FAILED'
  | 'PERSONAL_OBJECT_INACTIVE'
  | 'ERROR_FORMAT_PAYMENT_TERM'
  | 'ERROR_PAYMENT_TERM_AMOUNT'
  | 'ERROR_SEPA_SIGNED'
  | 'ERROR_SEPA_EXPIRED'
  | 'ERROR_SEPA_ALREADY_EXIST'
  | 'INVOICE_PUBLISHED'
  | 'ERROR_SEPA_EXPIRED_CANCELED'
  | 'ERROR_REGISTER_DATE'
  | 'RESIDENT_BANK_ACCOUNT_ERROR'
  | 'RESIDENT_CONTRACT_ERROR'
  | 'RESIDENT_PAYERS_ERROR'
  | 'RANGE_DATE_ERRROR'
  | 'ERROR_SEPA_RANGE_SIGNED'
  | 'TERM_ASSIGN_TO_INVOICE'
  | 'TERM_PERCENTAGE_ERROR'
  | 'TERM_BALANCE_ERROR'
  | 'TERM_CRITERIA_ERROR'
  | 'ERROR_SEPA_ALREADY_SIGNED'
  | 'ERROR_CUSTOM_DAYS'
  | 'PAYER_AMOUNT_INVOICE_AMOUNT_DONT_MATCH'
  | 'SELECTED_HOUR_ERROR'
  | 'SELECTED_CITY_ERROR';

export interface IErrorObject<T = string, ET = T> {
  section: T;
  row: T;
  field: T;
  row2: T;
  field2: T;
  msg: ET[];
}

export enum EError400Msg {
  'Updated error' = 'Error de Actualizacion',
  'Take updated error' = 'No se puede validar todas las tomas, han pasado más de 4h',
  'Validation swift code number error' = 'Error de número de código Swift de validación',
  'Already in use' = 'Fase en uso',
  'Validation iban code number error' = 'Error de número IBAN de validación',
  "Already exist. Can't be create" = 'Ya existe. No se puede crear',
  "Contract already exist in date range. Can't be created"= 'Ya existe un contrato en el rango de fechas',
  'Invoice already published' = 'La factura ya fue publicada, ya no puede modificarla',
  'Invoice is corrective, it can`t duplicate' = 'La factura es rectificativa, no puede duplicar',
  'Time for activity update was expired.' = 'Solo puede registrar un AVD entre 12 horas antes y 12 horas después a la hora actual.',
  'default' = 'Petición incorrecta',
  'The list was already validated' = 'La lista ya fue validada',
  'Selected dates error' = 'Fecha Fin debe ser mayor a fecha inicio.',
  'The sepa xml were not found' = 'No se pudo generar ningún archivo Débito Directo SEPA XML,<br /> verifique que la factura este publicada,<br /> que no se haya generado un archivo Débito Directo SEPA XML,<br /> que el residente tenga una cuenta bancaria, contrato activo y por lo menos un pagador.',
  'The contention data is not complete' = 'Datos incompletos, verifique que selecciono el residente y el/los tipo(s) de avd.',
  'Status invoice must be published' = 'El estado de la factura debe ser publicado',
  'An error occurred when generating the xml, verify that the invoice is published that there is a payer assigned to the invoice' = 'Ocurrio un error al generar el xml, verifique que la factura esta publicada que exista un pagador asignado a la factura',
  'Payments not found' = 'No se encontro registro de pagadores, La factura no puede ser creada.',
  'The payer info is not complete' ='Los datos de los pagadores estan incompletos, asegurese de incluir Pagador, Importe Pagador e Impuesto Pagador',
  'Invoice contract exist' ='La factura asociada al contrato ya existe',
  'Email not exist' ='Contacto sin mail, actualice los datos',
  'The Mandato Sepa Not Exist' = 'No se tiene un Mandato Sepa valido y firmado por el residente.',
  'Resident bank account error' = 'El residente no tiene cuenta bancaria registrada.',
  'Center bank account error' = 'El centro no tiene cuenta bancaria registrada.',
  'Resident payers error' = 'El residente no tiene pagadores registrados.',
  'Sepa exist error' = 'La factura ya cuenta con un archivo XML de Débito Directo SEPA.',
  'Resident responsible error' = 'El residente no tiene responsables registrados.',
  'The range date error' = 'El rango de fechas debe ser mayor al dia de hoy.',
  'Sepa same dates exist error' = 'No se puede crear un Mandato Sepa con un mismo rango de fechas valido y firmado por el residente.',
  'selected hour error' = 'La Hora Fin debe ser mayor a la Hora de inicio.',
  'resident_inactive_error' = 'El residente no se encuentra o no está activo.'
}

export type TError400Msg = keyof typeof EError400Msg;

export enum EErrorMsgCore {
  validError = 'Validation error',
}
