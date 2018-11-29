
class Ctor {
    /**
     * @param {MTProtoClient} client
     */
    constructor(client){
        if (client instanceof MTProtoClient) {
            /**
             * @property {MTProtoClient}
             */
            this.__client = client
        }
        else {
            throw new Error('{client} must be instanceOf {MTProtoClient}')
        }
    }
}

class Contest extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveDeveloperInfo.md}
     * @param {object} config
     * @property {int} config.vk_id
     * @property {string} config.name
     * @property {string} config.phone_number
     * @property {int} config.age
     * @property {string} config.city
     * @returns {Bool}
     */
    saveDeveloperInfo(config) {
        return this.__client.request('contest.saveDeveloperInfo', config)
    }
}

class Auth extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendCode.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.allow_flashcall
     * @property {string} config.phone_number
     * @property {Bool} config.current_number
     * @property {int} config.api_id
     * @property {string} config.api_hash
     * @returns {auth.SentCode}
     */
    sendCode(config) {
        return this.__client.request('auth.sendCode', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/signUp.md}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @property {string} config.first_name
     * @property {string} config.last_name
     * @returns {auth.Authorization}
     */
    signUp(config) {
        return this.__client.request('auth.signUp', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/signIn.md}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @returns {auth.Authorization}
     */
    signIn(config) {
        return this.__client.request('auth.signIn', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/logOut.md}
     * @returns {Bool}
     */
    logOut() {
        return this.__client.request('auth.logOut')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resetAuthorizations.md}
     * @returns {Bool}
     */
    resetAuthorizations() {
        return this.__client.request('auth.resetAuthorizations')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/exportAuthorization.md}
     * @param {object} config
     * @property {int} config.dc_id
     * @returns {auth.ExportedAuthorization}
     */
    exportAuthorization(config) {
        return this.__client.request('auth.exportAuthorization', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/importAuthorization.md}
     * @param {object} config
     * @property {int} config.id
     * @property {bytes} config.bytes
     * @returns {auth.Authorization}
     */
    importAuthorization(config) {
        return this.__client.request('auth.importAuthorization', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/bindTempAuthKey.md}
     * @param {object} config
     * @property {long} config.perm_auth_key_id
     * @property {long} config.nonce
     * @property {int} config.expires_at
     * @property {bytes} config.encrypted_message
     * @returns {Bool}
     */
    bindTempAuthKey(config) {
        return this.__client.request('auth.bindTempAuthKey', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/importBotAuthorization.md}
     * @param {object} config
     * @property {int} config.flags
     * @property {int} config.api_id
     * @property {string} config.api_hash
     * @property {string} config.bot_auth_token
     * @returns {auth.Authorization}
     */
    importBotAuthorization(config) {
        return this.__client.request('auth.importBotAuthorization', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/checkPassword.md}
     * @param {object} config
     * @property {InputCheckPasswordSRP} config.password
     * @returns {auth.Authorization}
     */
    checkPassword(config) {
        return this.__client.request('auth.checkPassword', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/requestPasswordRecovery.md}
     * @returns {auth.PasswordRecovery}
     */
    requestPasswordRecovery() {
        return this.__client.request('auth.requestPasswordRecovery')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/recoverPassword.md}
     * @param {object} config
     * @property {string} config.code
     * @returns {auth.Authorization}
     */
    recoverPassword(config) {
        return this.__client.request('auth.recoverPassword', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resendCode.md}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @returns {auth.SentCode}
     */
    resendCode(config) {
        return this.__client.request('auth.resendCode', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/cancelCode.md}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @returns {Bool}
     */
    cancelCode(config) {
        return this.__client.request('auth.cancelCode', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/dropTempAuthKeys.md}
     * @param {object} config
     * @property {Vector.<long>} config.except_auth_keys
     * @returns {Bool}
     */
    dropTempAuthKeys(config) {
        return this.__client.request('auth.dropTempAuthKeys', config)
    }
}

class Account extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/registerDevice.md}
     * @param {object} config
     * @property {int} config.token_type
     * @property {string} config.token
     * @property {Bool} config.app_sandbox
     * @property {bytes} config.secret
     * @property {Vector.<int>} config.other_uids
     * @returns {Bool}
     */
    registerDevice(config) {
        return this.__client.request('account.registerDevice', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/unregisterDevice.md}
     * @param {object} config
     * @property {int} config.token_type
     * @property {string} config.token
     * @property {Vector.<int>} config.other_uids
     * @returns {Bool}
     */
    unregisterDevice(config) {
        return this.__client.request('account.unregisterDevice', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updateNotifySettings.md}
     * @param {object} config
     * @property {InputNotifyPeer} config.peer
     * @property {InputPeerNotifySettings} config.settings
     * @returns {Bool}
     */
    updateNotifySettings(config) {
        return this.__client.request('account.updateNotifySettings', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getNotifySettings.md}
     * @param {object} config
     * @property {InputNotifyPeer} config.peer
     * @returns {PeerNotifySettings}
     */
    getNotifySettings(config) {
        return this.__client.request('account.getNotifySettings', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resetNotifySettings.md}
     * @returns {Bool}
     */
    resetNotifySettings() {
        return this.__client.request('account.resetNotifySettings')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updateProfile.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {string} config.first_name
     * @property {string} config.last_name
     * @property {string} config.about
     * @returns {User}
     */
    updateProfile(config) {
        return this.__client.request('account.updateProfile', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updateStatus.md}
     * @param {object} config
     * @property {Bool} config.offline
     * @returns {Bool}
     */
    updateStatus(config) {
        return this.__client.request('account.updateStatus', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getWallPapers.md}
     * @returns {Vector.<WallPaper>}
     */
    getWallPapers() {
        return this.__client.request('account.getWallPapers')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/reportPeer.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {ReportReason} config.reason
     * @returns {Bool}
     */
    reportPeer(config) {
        return this.__client.request('account.reportPeer', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/checkUsername.md}
     * @param {object} config
     * @property {string} config.username
     * @returns {Bool}
     */
    checkUsername(config) {
        return this.__client.request('account.checkUsername', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updateUsername.md}
     * @param {object} config
     * @property {string} config.username
     * @returns {User}
     */
    updateUsername(config) {
        return this.__client.request('account.updateUsername', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPrivacy.md}
     * @param {object} config
     * @property {InputPrivacyKey} config.key
     * @returns {account.PrivacyRules}
     */
    getPrivacy(config) {
        return this.__client.request('account.getPrivacy', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setPrivacy.md}
     * @param {object} config
     * @property {InputPrivacyKey} config.key
     * @property {Vector.<InputPrivacyRule>} config.rules
     * @returns {account.PrivacyRules}
     */
    setPrivacy(config) {
        return this.__client.request('account.setPrivacy', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteAccount.md}
     * @param {object} config
     * @property {string} config.reason
     * @returns {Bool}
     */
    deleteAccount(config) {
        return this.__client.request('account.deleteAccount', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAccountTTL.md}
     * @returns {AccountDaysTTL}
     */
    getAccountTTL() {
        return this.__client.request('account.getAccountTTL')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setAccountTTL.md}
     * @param {object} config
     * @property {AccountDaysTTL} config.ttl
     * @returns {Bool}
     */
    setAccountTTL(config) {
        return this.__client.request('account.setAccountTTL', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendChangePhoneCode.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.allow_flashcall
     * @property {string} config.phone_number
     * @property {Bool} config.current_number
     * @returns {auth.SentCode}
     */
    sendChangePhoneCode(config) {
        return this.__client.request('account.sendChangePhoneCode', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/changePhone.md}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @returns {User}
     */
    changePhone(config) {
        return this.__client.request('account.changePhone', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updateDeviceLocked.md}
     * @param {object} config
     * @property {int} config.period
     * @returns {Bool}
     */
    updateDeviceLocked(config) {
        return this.__client.request('account.updateDeviceLocked', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAuthorizations.md}
     * @returns {account.Authorizations}
     */
    getAuthorizations() {
        return this.__client.request('account.getAuthorizations')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resetAuthorization.md}
     * @param {object} config
     * @property {long} config.hash
     * @returns {Bool}
     */
    resetAuthorization(config) {
        return this.__client.request('account.resetAuthorization', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPassword.md}
     * @returns {account.Password}
     */
    getPassword() {
        return this.__client.request('account.getPassword')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPasswordSettings.md}
     * @param {object} config
     * @property {InputCheckPasswordSRP} config.password
     * @returns {account.PasswordSettings}
     */
    getPasswordSettings(config) {
        return this.__client.request('account.getPasswordSettings', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updatePasswordSettings.md}
     * @param {object} config
     * @property {InputCheckPasswordSRP} config.password
     * @property {account.PasswordInputSettings} config.new_settings
     * @returns {Bool}
     */
    updatePasswordSettings(config) {
        return this.__client.request('account.updatePasswordSettings', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendConfirmPhoneCode.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.allow_flashcall
     * @property {string} config.hash
     * @property {Bool} config.current_number
     * @returns {auth.SentCode}
     */
    sendConfirmPhoneCode(config) {
        return this.__client.request('account.sendConfirmPhoneCode', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/confirmPhone.md}
     * @param {object} config
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @returns {Bool}
     */
    confirmPhone(config) {
        return this.__client.request('account.confirmPhone', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getTmpPassword.md}
     * @param {object} config
     * @property {InputCheckPasswordSRP} config.password
     * @property {int} config.period
     * @returns {account.TmpPassword}
     */
    getTmpPassword(config) {
        return this.__client.request('account.getTmpPassword', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getWebAuthorizations.md}
     * @returns {account.WebAuthorizations}
     */
    getWebAuthorizations() {
        return this.__client.request('account.getWebAuthorizations')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resetWebAuthorization.md}
     * @param {object} config
     * @property {long} config.hash
     * @returns {Bool}
     */
    resetWebAuthorization(config) {
        return this.__client.request('account.resetWebAuthorization', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resetWebAuthorizations.md}
     * @returns {Bool}
     */
    resetWebAuthorizations() {
        return this.__client.request('account.resetWebAuthorizations')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAllSecureValues.md}
     * @returns {Vector.<SecureValue>}
     */
    getAllSecureValues() {
        return this.__client.request('account.getAllSecureValues')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getSecureValue.md}
     * @param {object} config
     * @property {Vector.<SecureValueType>} config.types
     * @returns {Vector.<SecureValue>}
     */
    getSecureValue(config) {
        return this.__client.request('account.getSecureValue', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveSecureValue.md}
     * @param {object} config
     * @property {InputSecureValue} config.value
     * @property {long} config.secure_secret_id
     * @returns {SecureValue}
     */
    saveSecureValue(config) {
        return this.__client.request('account.saveSecureValue', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteSecureValue.md}
     * @param {object} config
     * @property {Vector.<SecureValueType>} config.types
     * @returns {Bool}
     */
    deleteSecureValue(config) {
        return this.__client.request('account.deleteSecureValue', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAuthorizationForm.md}
     * @param {object} config
     * @property {int} config.bot_id
     * @property {string} config.scope
     * @property {string} config.public_key
     * @returns {account.AuthorizationForm}
     */
    getAuthorizationForm(config) {
        return this.__client.request('account.getAuthorizationForm', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/acceptAuthorization.md}
     * @param {object} config
     * @property {int} config.bot_id
     * @property {string} config.scope
     * @property {string} config.public_key
     * @property {Vector.<SecureValueHash>} config.value_hashes
     * @property {SecureCredentialsEncrypted} config.credentials
     * @returns {Bool}
     */
    acceptAuthorization(config) {
        return this.__client.request('account.acceptAuthorization', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendVerifyPhoneCode.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.allow_flashcall
     * @property {string} config.phone_number
     * @property {Bool} config.current_number
     * @returns {auth.SentCode}
     */
    sendVerifyPhoneCode(config) {
        return this.__client.request('account.sendVerifyPhoneCode', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/verifyPhone.md}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @returns {Bool}
     */
    verifyPhone(config) {
        return this.__client.request('account.verifyPhone', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendVerifyEmailCode.md}
     * @param {object} config
     * @property {string} config.email
     * @returns {account.SentEmailCode}
     */
    sendVerifyEmailCode(config) {
        return this.__client.request('account.sendVerifyEmailCode', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/verifyEmail.md}
     * @param {object} config
     * @property {string} config.email
     * @property {string} config.code
     * @returns {Bool}
     */
    verifyEmail(config) {
        return this.__client.request('account.verifyEmail', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/initTakeoutSession.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.contacts
     * @property {true} config.message_users
     * @property {true} config.message_chats
     * @property {true} config.message_megagroups
     * @property {true} config.message_channels
     * @property {true} config.files
     * @property {int} config.file_max_size
     * @returns {account.Takeout}
     */
    initTakeoutSession(config) {
        return this.__client.request('account.initTakeoutSession', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/finishTakeoutSession.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.success
     * @returns {Bool}
     */
    finishTakeoutSession(config) {
        return this.__client.request('account.finishTakeoutSession', config)
    }
}

class Users extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getUsers.md}
     * @param {object} config
     * @property {Vector.<InputUser>} config.id
     * @returns {Vector.<User>}
     */
    getUsers(config) {
        return this.__client.request('users.getUsers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getFullUser.md}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {UserFull}
     */
    getFullUser(config) {
        return this.__client.request('users.getFullUser', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setSecureValueErrors.md}
     * @param {object} config
     * @property {InputUser} config.id
     * @property {Vector.<SecureValueError>} config.errors
     * @returns {Bool}
     */
    setSecureValueErrors(config) {
        return this.__client.request('users.setSecureValueErrors', config)
    }
}

class Contacts extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getStatuses.md}
     * @returns {Vector.<ContactStatus>}
     */
    getStatuses() {
        return this.__client.request('contacts.getStatuses')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getContacts.md}
     * @param {object} config
     * @property {int} config.hash
     * @returns {contacts.Contacts}
     */
    getContacts(config) {
        return this.__client.request('contacts.getContacts', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/importContacts.md}
     * @param {object} config
     * @property {Vector.<InputContact>} config.contacts
     * @returns {contacts.ImportedContacts}
     */
    importContacts(config) {
        return this.__client.request('contacts.importContacts', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteContact.md}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {contacts.Link}
     */
    deleteContact(config) {
        return this.__client.request('contacts.deleteContact', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteContacts.md}
     * @param {object} config
     * @property {Vector.<InputUser>} config.id
     * @returns {Bool}
     */
    deleteContacts(config) {
        return this.__client.request('contacts.deleteContacts', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/block.md}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {Bool}
     */
    block(config) {
        return this.__client.request('contacts.block', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/unblock.md}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {Bool}
     */
    unblock(config) {
        return this.__client.request('contacts.unblock', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getBlocked.md}
     * @param {object} config
     * @property {int} config.offset
     * @property {int} config.limit
     * @returns {contacts.Blocked}
     */
    getBlocked(config) {
        return this.__client.request('contacts.getBlocked', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/exportCard.md}
     * @returns {Vector.<int>}
     */
    exportCard() {
        return this.__client.request('contacts.exportCard')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/importCard.md}
     * @param {object} config
     * @property {Vector.<int>} config.export_card
     * @returns {User}
     */
    importCard(config) {
        return this.__client.request('contacts.importCard', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/search.md}
     * @param {object} config
     * @property {string} config.q
     * @property {int} config.limit
     * @returns {contacts.Found}
     */
    search(config) {
        return this.__client.request('contacts.search', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resolveUsername.md}
     * @param {object} config
     * @property {string} config.username
     * @returns {contacts.ResolvedPeer}
     */
    resolveUsername(config) {
        return this.__client.request('contacts.resolveUsername', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getTopPeers.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.correspondents
     * @property {true} config.bots_pm
     * @property {true} config.bots_inline
     * @property {true} config.phone_calls
     * @property {true} config.groups
     * @property {true} config.channels
     * @property {int} config.offset
     * @property {int} config.limit
     * @property {int} config.hash
     * @returns {contacts.TopPeers}
     */
    getTopPeers(config) {
        return this.__client.request('contacts.getTopPeers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resetTopPeerRating.md}
     * @param {object} config
     * @property {TopPeerCategory} config.category
     * @property {InputPeer} config.peer
     * @returns {Bool}
     */
    resetTopPeerRating(config) {
        return this.__client.request('contacts.resetTopPeerRating', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/resetSaved.md}
     * @returns {Bool}
     */
    resetSaved() {
        return this.__client.request('contacts.resetSaved')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getSaved.md}
     * @returns {Vector.<SavedContact>}
     */
    getSaved() {
        return this.__client.request('contacts.getSaved')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/toggleTopPeers.md}
     * @param {object} config
     * @property {Bool} config.enabled
     * @returns {Bool}
     */
    toggleTopPeers(config) {
        return this.__client.request('contacts.toggleTopPeers', config)
    }
}

class Messages extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getMessages.md}
     * @param {object} config
     * @property {Vector.<InputMessage>} config.id
     * @returns {messages.Messages}
     */
    getMessages(config) {
        return this.__client.request('messages.getMessages', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getDialogs.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.exclude_pinned
     * @property {int} config.offset_date
     * @property {int} config.offset_id
     * @property {InputPeer} config.offset_peer
     * @property {int} config.limit
     * @property {int} config.hash
     * @returns {messages.Dialogs}
     */
    getDialogs(config) {
        return this.__client.request('messages.getDialogs', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getHistory.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.offset_id
     * @property {int} config.offset_date
     * @property {int} config.add_offset
     * @property {int} config.limit
     * @property {int} config.max_id
     * @property {int} config.min_id
     * @property {int} config.hash
     * @returns {messages.Messages}
     */
    getHistory(config) {
        return this.__client.request('messages.getHistory', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/search.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {InputPeer} config.peer
     * @property {string} config.q
     * @property {InputUser} config.from_id
     * @property {MessagesFilter} config.filter
     * @property {int} config.min_date
     * @property {int} config.max_date
     * @property {int} config.offset_id
     * @property {int} config.add_offset
     * @property {int} config.limit
     * @property {int} config.max_id
     * @property {int} config.min_id
     * @property {int} config.hash
     * @returns {messages.Messages}
     */
    search(config) {
        return this.__client.request('messages.search', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/readHistory.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.max_id
     * @returns {messages.AffectedMessages}
     */
    readHistory(config) {
        return this.__client.request('messages.readHistory', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteHistory.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.just_clear
     * @property {InputPeer} config.peer
     * @property {int} config.max_id
     * @returns {messages.AffectedHistory}
     */
    deleteHistory(config) {
        return this.__client.request('messages.deleteHistory', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteMessages.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.revoke
     * @property {Vector.<int>} config.id
     * @returns {messages.AffectedMessages}
     */
    deleteMessages(config) {
        return this.__client.request('messages.deleteMessages', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/receivedMessages.md}
     * @param {object} config
     * @property {int} config.max_id
     * @returns {Vector.<ReceivedNotifyMessage>}
     */
    receivedMessages(config) {
        return this.__client.request('messages.receivedMessages', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setTyping.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {SendMessageAction} config.action
     * @returns {Bool}
     */
    setTyping(config) {
        return this.__client.request('messages.setTyping', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendMessage.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.no_webpage
     * @property {true} config.silent
     * @property {true} config.background
     * @property {true} config.clear_draft
     * @property {InputPeer} config.peer
     * @property {int} config.reply_to_msg_id
     * @property {string} config.message
     * @property {long} config.random_id
     * @property {ReplyMarkup} config.reply_markup
     * @property {Vector.<MessageEntity>} config.entities
     * @returns {Updates}
     */
    sendMessage(config) {
        return this.__client.request('messages.sendMessage', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendMedia.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.silent
     * @property {true} config.background
     * @property {true} config.clear_draft
     * @property {InputPeer} config.peer
     * @property {int} config.reply_to_msg_id
     * @property {InputMedia} config.media
     * @property {string} config.message
     * @property {long} config.random_id
     * @property {ReplyMarkup} config.reply_markup
     * @property {Vector.<MessageEntity>} config.entities
     * @returns {Updates}
     */
    sendMedia(config) {
        return this.__client.request('messages.sendMedia', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/forwardMessages.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.silent
     * @property {true} config.background
     * @property {true} config.with_my_score
     * @property {true} config.grouped
     * @property {InputPeer} config.from_peer
     * @property {Vector.<int>} config.id
     * @property {Vector.<long>} config.random_id
     * @property {InputPeer} config.to_peer
     * @returns {Updates}
     */
    forwardMessages(config) {
        return this.__client.request('messages.forwardMessages', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/reportSpam.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @returns {Bool}
     */
    reportSpam(config) {
        return this.__client.request('messages.reportSpam', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/hideReportSpam.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @returns {Bool}
     */
    hideReportSpam(config) {
        return this.__client.request('messages.hideReportSpam', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPeerSettings.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @returns {PeerSettings}
     */
    getPeerSettings(config) {
        return this.__client.request('messages.getPeerSettings', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/report.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {Vector.<int>} config.id
     * @property {ReportReason} config.reason
     * @returns {Bool}
     */
    report(config) {
        return this.__client.request('messages.report', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getChats.md}
     * @param {object} config
     * @property {Vector.<int>} config.id
     * @returns {messages.Chats}
     */
    getChats(config) {
        return this.__client.request('messages.getChats', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getFullChat.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @returns {messages.ChatFull}
     */
    getFullChat(config) {
        return this.__client.request('messages.getFullChat', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editChatTitle.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {string} config.title
     * @returns {Updates}
     */
    editChatTitle(config) {
        return this.__client.request('messages.editChatTitle', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editChatPhoto.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {InputChatPhoto} config.photo
     * @returns {Updates}
     */
    editChatPhoto(config) {
        return this.__client.request('messages.editChatPhoto', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/addChatUser.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {InputUser} config.user_id
     * @property {int} config.fwd_limit
     * @returns {Updates}
     */
    addChatUser(config) {
        return this.__client.request('messages.addChatUser', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteChatUser.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {InputUser} config.user_id
     * @returns {Updates}
     */
    deleteChatUser(config) {
        return this.__client.request('messages.deleteChatUser', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/createChat.md}
     * @param {object} config
     * @property {Vector.<InputUser>} config.users
     * @property {string} config.title
     * @returns {Updates}
     */
    createChat(config) {
        return this.__client.request('messages.createChat', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getDhConfig.md}
     * @param {object} config
     * @property {int} config.version
     * @property {int} config.random_length
     * @returns {messages.DhConfig}
     */
    getDhConfig(config) {
        return this.__client.request('messages.getDhConfig', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/requestEncryption.md}
     * @param {object} config
     * @property {InputUser} config.user_id
     * @property {int} config.random_id
     * @property {bytes} config.g_a
     * @returns {EncryptedChat}
     */
    requestEncryption(config) {
        return this.__client.request('messages.requestEncryption', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/acceptEncryption.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {bytes} config.g_b
     * @property {long} config.key_fingerprint
     * @returns {EncryptedChat}
     */
    acceptEncryption(config) {
        return this.__client.request('messages.acceptEncryption', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/discardEncryption.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @returns {Bool}
     */
    discardEncryption(config) {
        return this.__client.request('messages.discardEncryption', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setEncryptedTyping.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {Bool} config.typing
     * @returns {Bool}
     */
    setEncryptedTyping(config) {
        return this.__client.request('messages.setEncryptedTyping', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/readEncryptedHistory.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {int} config.max_date
     * @returns {Bool}
     */
    readEncryptedHistory(config) {
        return this.__client.request('messages.readEncryptedHistory', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendEncrypted.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {long} config.random_id
     * @property {bytes} config.data
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncrypted(config) {
        return this.__client.request('messages.sendEncrypted', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendEncryptedFile.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {long} config.random_id
     * @property {bytes} config.data
     * @property {InputEncryptedFile} config.file
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncryptedFile(config) {
        return this.__client.request('messages.sendEncryptedFile', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendEncryptedService.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {long} config.random_id
     * @property {bytes} config.data
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncryptedService(config) {
        return this.__client.request('messages.sendEncryptedService', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/receivedQueue.md}
     * @param {object} config
     * @property {int} config.max_qts
     * @returns {Vector.<long>}
     */
    receivedQueue(config) {
        return this.__client.request('messages.receivedQueue', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/reportEncryptedSpam.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @returns {Bool}
     */
    reportEncryptedSpam(config) {
        return this.__client.request('messages.reportEncryptedSpam', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/readMessageContents.md}
     * @param {object} config
     * @property {Vector.<int>} config.id
     * @returns {messages.AffectedMessages}
     */
    readMessageContents(config) {
        return this.__client.request('messages.readMessageContents', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getStickers.md}
     * @param {object} config
     * @property {string} config.emoticon
     * @property {int} config.hash
     * @returns {messages.Stickers}
     */
    getStickers(config) {
        return this.__client.request('messages.getStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAllStickers.md}
     * @param {object} config
     * @property {int} config.hash
     * @returns {messages.AllStickers}
     */
    getAllStickers(config) {
        return this.__client.request('messages.getAllStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getWebPagePreview.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {string} config.message
     * @property {Vector.<MessageEntity>} config.entities
     * @returns {MessageMedia}
     */
    getWebPagePreview(config) {
        return this.__client.request('messages.getWebPagePreview', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/exportChatInvite.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @returns {ExportedChatInvite}
     */
    exportChatInvite(config) {
        return this.__client.request('messages.exportChatInvite', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/checkChatInvite.md}
     * @param {object} config
     * @property {string} config.hash
     * @returns {ChatInvite}
     */
    checkChatInvite(config) {
        return this.__client.request('messages.checkChatInvite', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/importChatInvite.md}
     * @param {object} config
     * @property {string} config.hash
     * @returns {Updates}
     */
    importChatInvite(config) {
        return this.__client.request('messages.importChatInvite', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getStickerSet.md}
     * @param {object} config
     * @property {InputStickerSet} config.stickerset
     * @returns {messages.StickerSet}
     */
    getStickerSet(config) {
        return this.__client.request('messages.getStickerSet', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/installStickerSet.md}
     * @param {object} config
     * @property {InputStickerSet} config.stickerset
     * @property {Bool} config.archived
     * @returns {messages.StickerSetInstallResult}
     */
    installStickerSet(config) {
        return this.__client.request('messages.installStickerSet', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/uninstallStickerSet.md}
     * @param {object} config
     * @property {InputStickerSet} config.stickerset
     * @returns {Bool}
     */
    uninstallStickerSet(config) {
        return this.__client.request('messages.uninstallStickerSet', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/startBot.md}
     * @param {object} config
     * @property {InputUser} config.bot
     * @property {InputPeer} config.peer
     * @property {long} config.random_id
     * @property {string} config.start_param
     * @returns {Updates}
     */
    startBot(config) {
        return this.__client.request('messages.startBot', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getMessagesViews.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {Vector.<int>} config.id
     * @property {Bool} config.increment
     * @returns {Vector.<int>}
     */
    getMessagesViews(config) {
        return this.__client.request('messages.getMessagesViews', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/toggleChatAdmins.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {Bool} config.enabled
     * @returns {Updates}
     */
    toggleChatAdmins(config) {
        return this.__client.request('messages.toggleChatAdmins', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editChatAdmin.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {InputUser} config.user_id
     * @property {Bool} config.is_admin
     * @returns {Bool}
     */
    editChatAdmin(config) {
        return this.__client.request('messages.editChatAdmin', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/migrateChat.md}
     * @param {object} config
     * @property {int} config.chat_id
     * @returns {Updates}
     */
    migrateChat(config) {
        return this.__client.request('messages.migrateChat', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/searchGlobal.md}
     * @param {object} config
     * @property {string} config.q
     * @property {int} config.offset_date
     * @property {InputPeer} config.offset_peer
     * @property {int} config.offset_id
     * @property {int} config.limit
     * @returns {messages.Messages}
     */
    searchGlobal(config) {
        return this.__client.request('messages.searchGlobal', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/reorderStickerSets.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.masks
     * @property {Vector.<long>} config.order
     * @returns {Bool}
     */
    reorderStickerSets(config) {
        return this.__client.request('messages.reorderStickerSets', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getDocumentByHash.md}
     * @param {object} config
     * @property {bytes} config.sha256
     * @property {int} config.size
     * @property {string} config.mime_type
     * @returns {Document}
     */
    getDocumentByHash(config) {
        return this.__client.request('messages.getDocumentByHash', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/searchGifs.md}
     * @param {object} config
     * @property {string} config.q
     * @property {int} config.offset
     * @returns {messages.FoundGifs}
     */
    searchGifs(config) {
        return this.__client.request('messages.searchGifs', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getSavedGifs.md}
     * @param {object} config
     * @property {int} config.hash
     * @returns {messages.SavedGifs}
     */
    getSavedGifs(config) {
        return this.__client.request('messages.getSavedGifs', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveGif.md}
     * @param {object} config
     * @property {InputDocument} config.id
     * @property {Bool} config.unsave
     * @returns {Bool}
     */
    saveGif(config) {
        return this.__client.request('messages.saveGif', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getInlineBotResults.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {InputUser} config.bot
     * @property {InputPeer} config.peer
     * @property {InputGeoPoint} config.geo_point
     * @property {string} config.query
     * @property {string} config.offset
     * @returns {messages.BotResults}
     */
    getInlineBotResults(config) {
        return this.__client.request('messages.getInlineBotResults', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setInlineBotResults.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.gallery
     * @property {true} config.private
     * @property {long} config.query_id
     * @property {Vector.<InputBotInlineResult>} config.results
     * @property {int} config.cache_time
     * @property {string} config.next_offset
     * @property {InlineBotSwitchPM} config.switch_pm
     * @returns {Bool}
     */
    setInlineBotResults(config) {
        return this.__client.request('messages.setInlineBotResults', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendInlineBotResult.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.silent
     * @property {true} config.background
     * @property {true} config.clear_draft
     * @property {InputPeer} config.peer
     * @property {int} config.reply_to_msg_id
     * @property {long} config.random_id
     * @property {long} config.query_id
     * @property {string} config.id
     * @returns {Updates}
     */
    sendInlineBotResult(config) {
        return this.__client.request('messages.sendInlineBotResult', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getMessageEditData.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.id
     * @returns {messages.MessageEditData}
     */
    getMessageEditData(config) {
        return this.__client.request('messages.getMessageEditData', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editMessage.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.no_webpage
     * @property {true} config.stop_geo_live
     * @property {InputPeer} config.peer
     * @property {int} config.id
     * @property {string} config.message
     * @property {InputMedia} config.media
     * @property {ReplyMarkup} config.reply_markup
     * @property {Vector.<MessageEntity>} config.entities
     * @property {InputGeoPoint} config.geo_point
     * @returns {Updates}
     */
    editMessage(config) {
        return this.__client.request('messages.editMessage', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editInlineBotMessage.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.no_webpage
     * @property {true} config.stop_geo_live
     * @property {InputBotInlineMessageID} config.id
     * @property {string} config.message
     * @property {InputMedia} config.media
     * @property {ReplyMarkup} config.reply_markup
     * @property {Vector.<MessageEntity>} config.entities
     * @property {InputGeoPoint} config.geo_point
     * @returns {Bool}
     */
    editInlineBotMessage(config) {
        return this.__client.request('messages.editInlineBotMessage', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getBotCallbackAnswer.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.game
     * @property {InputPeer} config.peer
     * @property {int} config.msg_id
     * @property {bytes} config.data
     * @returns {messages.BotCallbackAnswer}
     */
    getBotCallbackAnswer(config) {
        return this.__client.request('messages.getBotCallbackAnswer', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setBotCallbackAnswer.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.alert
     * @property {long} config.query_id
     * @property {string} config.message
     * @property {string} config.url
     * @property {int} config.cache_time
     * @returns {Bool}
     */
    setBotCallbackAnswer(config) {
        return this.__client.request('messages.setBotCallbackAnswer', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPeerDialogs.md}
     * @param {object} config
     * @property {Vector.<InputDialogPeer>} config.peers
     * @returns {messages.PeerDialogs}
     */
    getPeerDialogs(config) {
        return this.__client.request('messages.getPeerDialogs', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveDraft.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.no_webpage
     * @property {int} config.reply_to_msg_id
     * @property {InputPeer} config.peer
     * @property {string} config.message
     * @property {Vector.<MessageEntity>} config.entities
     * @returns {Bool}
     */
    saveDraft(config) {
        return this.__client.request('messages.saveDraft', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAllDrafts.md}
     * @returns {Updates}
     */
    getAllDrafts() {
        return this.__client.request('messages.getAllDrafts')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getFeaturedStickers.md}
     * @param {object} config
     * @property {int} config.hash
     * @returns {messages.FeaturedStickers}
     */
    getFeaturedStickers(config) {
        return this.__client.request('messages.getFeaturedStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/readFeaturedStickers.md}
     * @param {object} config
     * @property {Vector.<long>} config.id
     * @returns {Bool}
     */
    readFeaturedStickers(config) {
        return this.__client.request('messages.readFeaturedStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getRecentStickers.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.attached
     * @property {int} config.hash
     * @returns {messages.RecentStickers}
     */
    getRecentStickers(config) {
        return this.__client.request('messages.getRecentStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveRecentSticker.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.attached
     * @property {InputDocument} config.id
     * @property {Bool} config.unsave
     * @returns {Bool}
     */
    saveRecentSticker(config) {
        return this.__client.request('messages.saveRecentSticker', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/clearRecentStickers.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.attached
     * @returns {Bool}
     */
    clearRecentStickers(config) {
        return this.__client.request('messages.clearRecentStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getArchivedStickers.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.masks
     * @property {long} config.offset_id
     * @property {int} config.limit
     * @returns {messages.ArchivedStickers}
     */
    getArchivedStickers(config) {
        return this.__client.request('messages.getArchivedStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getMaskStickers.md}
     * @param {object} config
     * @property {int} config.hash
     * @returns {messages.AllStickers}
     */
    getMaskStickers(config) {
        return this.__client.request('messages.getMaskStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAttachedStickers.md}
     * @param {object} config
     * @property {InputStickeredMedia} config.media
     * @returns {Vector.<StickerSetCovered>}
     */
    getAttachedStickers(config) {
        return this.__client.request('messages.getAttachedStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setGameScore.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.edit_message
     * @property {true} config.force
     * @property {InputPeer} config.peer
     * @property {int} config.id
     * @property {InputUser} config.user_id
     * @property {int} config.score
     * @returns {Updates}
     */
    setGameScore(config) {
        return this.__client.request('messages.setGameScore', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setInlineGameScore.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.edit_message
     * @property {true} config.force
     * @property {InputBotInlineMessageID} config.id
     * @property {InputUser} config.user_id
     * @property {int} config.score
     * @returns {Bool}
     */
    setInlineGameScore(config) {
        return this.__client.request('messages.setInlineGameScore', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getGameHighScores.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.id
     * @property {InputUser} config.user_id
     * @returns {messages.HighScores}
     */
    getGameHighScores(config) {
        return this.__client.request('messages.getGameHighScores', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getInlineGameHighScores.md}
     * @param {object} config
     * @property {InputBotInlineMessageID} config.id
     * @property {InputUser} config.user_id
     * @returns {messages.HighScores}
     */
    getInlineGameHighScores(config) {
        return this.__client.request('messages.getInlineGameHighScores', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getCommonChats.md}
     * @param {object} config
     * @property {InputUser} config.user_id
     * @property {int} config.max_id
     * @property {int} config.limit
     * @returns {messages.Chats}
     */
    getCommonChats(config) {
        return this.__client.request('messages.getCommonChats', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAllChats.md}
     * @param {object} config
     * @property {Vector.<int>} config.except_ids
     * @returns {messages.Chats}
     */
    getAllChats(config) {
        return this.__client.request('messages.getAllChats', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getWebPage.md}
     * @param {object} config
     * @property {string} config.url
     * @property {int} config.hash
     * @returns {WebPage}
     */
    getWebPage(config) {
        return this.__client.request('messages.getWebPage', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/toggleDialogPin.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.pinned
     * @property {InputDialogPeer} config.peer
     * @returns {Bool}
     */
    toggleDialogPin(config) {
        return this.__client.request('messages.toggleDialogPin', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/reorderPinnedDialogs.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.force
     * @property {Vector.<InputDialogPeer>} config.order
     * @returns {Bool}
     */
    reorderPinnedDialogs(config) {
        return this.__client.request('messages.reorderPinnedDialogs', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPinnedDialogs.md}
     * @returns {messages.PeerDialogs}
     */
    getPinnedDialogs() {
        return this.__client.request('messages.getPinnedDialogs')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setBotShippingResults.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {long} config.query_id
     * @property {string} config.error
     * @property {Vector.<ShippingOption>} config.shipping_options
     * @returns {Bool}
     */
    setBotShippingResults(config) {
        return this.__client.request('messages.setBotShippingResults', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setBotPrecheckoutResults.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.success
     * @property {long} config.query_id
     * @property {string} config.error
     * @returns {Bool}
     */
    setBotPrecheckoutResults(config) {
        return this.__client.request('messages.setBotPrecheckoutResults', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/uploadMedia.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {InputMedia} config.media
     * @returns {MessageMedia}
     */
    uploadMedia(config) {
        return this.__client.request('messages.uploadMedia', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendScreenshotNotification.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.reply_to_msg_id
     * @property {long} config.random_id
     * @returns {Updates}
     */
    sendScreenshotNotification(config) {
        return this.__client.request('messages.sendScreenshotNotification', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getFavedStickers.md}
     * @param {object} config
     * @property {int} config.hash
     * @returns {messages.FavedStickers}
     */
    getFavedStickers(config) {
        return this.__client.request('messages.getFavedStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/faveSticker.md}
     * @param {object} config
     * @property {InputDocument} config.id
     * @property {Bool} config.unfave
     * @returns {Bool}
     */
    faveSticker(config) {
        return this.__client.request('messages.faveSticker', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getUnreadMentions.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.offset_id
     * @property {int} config.add_offset
     * @property {int} config.limit
     * @property {int} config.max_id
     * @property {int} config.min_id
     * @returns {messages.Messages}
     */
    getUnreadMentions(config) {
        return this.__client.request('messages.getUnreadMentions', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/readMentions.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @returns {messages.AffectedHistory}
     */
    readMentions(config) {
        return this.__client.request('messages.readMentions', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getRecentLocations.md}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.limit
     * @property {int} config.hash
     * @returns {messages.Messages}
     */
    getRecentLocations(config) {
        return this.__client.request('messages.getRecentLocations', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendMultiMedia.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.silent
     * @property {true} config.background
     * @property {true} config.clear_draft
     * @property {InputPeer} config.peer
     * @property {int} config.reply_to_msg_id
     * @property {Vector.<InputSingleMedia>} config.multi_media
     * @returns {Updates}
     */
    sendMultiMedia(config) {
        return this.__client.request('messages.sendMultiMedia', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/uploadEncryptedFile.md}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {InputEncryptedFile} config.file
     * @returns {EncryptedFile}
     */
    uploadEncryptedFile(config) {
        return this.__client.request('messages.uploadEncryptedFile', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/searchStickerSets.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.exclude_featured
     * @property {string} config.q
     * @property {int} config.hash
     * @returns {messages.FoundStickerSets}
     */
    searchStickerSets(config) {
        return this.__client.request('messages.searchStickerSets', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getSplitRanges.md}
     * @returns {Vector.<MessageRange>}
     */
    getSplitRanges() {
        return this.__client.request('messages.getSplitRanges')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/markDialogUnread.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.unread
     * @property {InputDialogPeer} config.peer
     * @returns {Bool}
     */
    markDialogUnread(config) {
        return this.__client.request('messages.markDialogUnread', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getDialogUnreadMarks.md}
     * @returns {Vector.<DialogPeer>}
     */
    getDialogUnreadMarks() {
        return this.__client.request('messages.getDialogUnreadMarks')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/clearAllDrafts.md}
     * @returns {Bool}
     */
    clearAllDrafts() {
        return this.__client.request('messages.clearAllDrafts')
    }
}

class Updates extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getState.md}
     * @returns {updates.State}
     */
    getState() {
        return this.__client.request('updates.getState')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getDifference.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {int} config.pts
     * @property {int} config.pts_total_limit
     * @property {int} config.date
     * @property {int} config.qts
     * @returns {updates.Difference}
     */
    getDifference(config) {
        return this.__client.request('updates.getDifference', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getChannelDifference.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.force
     * @property {InputChannel} config.channel
     * @property {ChannelMessagesFilter} config.filter
     * @property {int} config.pts
     * @property {int} config.limit
     * @returns {updates.ChannelDifference}
     */
    getChannelDifference(config) {
        return this.__client.request('updates.getChannelDifference', config)
    }
}

class Photos extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updateProfilePhoto.md}
     * @param {object} config
     * @property {InputPhoto} config.id
     * @returns {UserProfilePhoto}
     */
    updateProfilePhoto(config) {
        return this.__client.request('photos.updateProfilePhoto', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/uploadProfilePhoto.md}
     * @param {object} config
     * @property {InputFile} config.file
     * @returns {photos.Photo}
     */
    uploadProfilePhoto(config) {
        return this.__client.request('photos.uploadProfilePhoto', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deletePhotos.md}
     * @param {object} config
     * @property {Vector.<InputPhoto>} config.id
     * @returns {Vector.<long>}
     */
    deletePhotos(config) {
        return this.__client.request('photos.deletePhotos', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getUserPhotos.md}
     * @param {object} config
     * @property {InputUser} config.user_id
     * @property {int} config.offset
     * @property {long} config.max_id
     * @property {int} config.limit
     * @returns {photos.Photos}
     */
    getUserPhotos(config) {
        return this.__client.request('photos.getUserPhotos', config)
    }
}

class Upload extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveFilePart.md}
     * @param {object} config
     * @property {long} config.file_id
     * @property {int} config.file_part
     * @property {bytes} config.bytes
     * @returns {Bool}
     */
    saveFilePart(config) {
        return this.__client.request('upload.saveFilePart', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getFile.md}
     * @param {object} config
     * @property {InputFileLocation} config.location
     * @property {int} config.offset
     * @property {int} config.limit
     * @returns {upload.File}
     */
    getFile(config) {
        return this.__client.request('upload.getFile', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveBigFilePart.md}
     * @param {object} config
     * @property {long} config.file_id
     * @property {int} config.file_part
     * @property {int} config.file_total_parts
     * @property {bytes} config.bytes
     * @returns {Bool}
     */
    saveBigFilePart(config) {
        return this.__client.request('upload.saveBigFilePart', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getWebFile.md}
     * @param {object} config
     * @property {InputWebFileLocation} config.location
     * @property {int} config.offset
     * @property {int} config.limit
     * @returns {upload.WebFile}
     */
    getWebFile(config) {
        return this.__client.request('upload.getWebFile', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getCdnFile.md}
     * @param {object} config
     * @property {bytes} config.file_token
     * @property {int} config.offset
     * @property {int} config.limit
     * @returns {upload.CdnFile}
     */
    getCdnFile(config) {
        return this.__client.request('upload.getCdnFile', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/reuploadCdnFile.md}
     * @param {object} config
     * @property {bytes} config.file_token
     * @property {bytes} config.request_token
     * @returns {Vector.<FileHash>}
     */
    reuploadCdnFile(config) {
        return this.__client.request('upload.reuploadCdnFile', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getCdnFileHashes.md}
     * @param {object} config
     * @property {bytes} config.file_token
     * @property {int} config.offset
     * @returns {Vector.<FileHash>}
     */
    getCdnFileHashes(config) {
        return this.__client.request('upload.getCdnFileHashes', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getFileHashes.md}
     * @param {object} config
     * @property {InputFileLocation} config.location
     * @property {int} config.offset
     * @returns {Vector.<FileHash>}
     */
    getFileHashes(config) {
        return this.__client.request('upload.getFileHashes', config)
    }
}

class Help extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getConfig.md}
     * @returns {Config}
     */
    getConfig() {
        return this.__client.request('help.getConfig')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getNearestDc.md}
     * @returns {NearestDc}
     */
    getNearestDc() {
        return this.__client.request('help.getNearestDc')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAppUpdate.md}
     * @param {object} config
     * @property {string} config.source
     * @returns {help.AppUpdate}
     */
    getAppUpdate(config) {
        return this.__client.request('help.getAppUpdate', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveAppLog.md}
     * @param {object} config
     * @property {Vector.<InputAppEvent>} config.events
     * @returns {Bool}
     */
    saveAppLog(config) {
        return this.__client.request('help.saveAppLog', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getInviteText.md}
     * @returns {help.InviteText}
     */
    getInviteText() {
        return this.__client.request('help.getInviteText')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getSupport.md}
     * @returns {help.Support}
     */
    getSupport() {
        return this.__client.request('help.getSupport')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAppChangelog.md}
     * @param {object} config
     * @property {string} config.prev_app_version
     * @returns {Updates}
     */
    getAppChangelog(config) {
        return this.__client.request('help.getAppChangelog', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setBotUpdatesStatus.md}
     * @param {object} config
     * @property {int} config.pending_updates_count
     * @property {string} config.message
     * @returns {Bool}
     */
    setBotUpdatesStatus(config) {
        return this.__client.request('help.setBotUpdatesStatus', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getCdnConfig.md}
     * @returns {CdnConfig}
     */
    getCdnConfig() {
        return this.__client.request('help.getCdnConfig')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getRecentMeUrls.md}
     * @param {object} config
     * @property {string} config.referer
     * @returns {help.RecentMeUrls}
     */
    getRecentMeUrls(config) {
        return this.__client.request('help.getRecentMeUrls', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getProxyData.md}
     * @returns {help.ProxyData}
     */
    getProxyData() {
        return this.__client.request('help.getProxyData')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getTermsOfServiceUpdate.md}
     * @returns {help.TermsOfServiceUpdate}
     */
    getTermsOfServiceUpdate() {
        return this.__client.request('help.getTermsOfServiceUpdate')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/acceptTermsOfService.md}
     * @param {object} config
     * @property {DataJSON} config.id
     * @returns {Bool}
     */
    acceptTermsOfService(config) {
        return this.__client.request('help.acceptTermsOfService', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getDeepLinkInfo.md}
     * @param {object} config
     * @property {string} config.path
     * @returns {help.DeepLinkInfo}
     */
    getDeepLinkInfo(config) {
        return this.__client.request('help.getDeepLinkInfo', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPassportConfig.md}
     * @param {object} config
     * @property {int} config.hash
     * @returns {help.PassportConfig}
     */
    getPassportConfig(config) {
        return this.__client.request('help.getPassportConfig', config)
    }
}

class Channels extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/readHistory.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {int} config.max_id
     * @returns {Bool}
     */
    readHistory(config) {
        return this.__client.request('channels.readHistory', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteMessages.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {Vector.<int>} config.id
     * @returns {messages.AffectedMessages}
     */
    deleteMessages(config) {
        return this.__client.request('channels.deleteMessages', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteUserHistory.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {InputUser} config.user_id
     * @returns {messages.AffectedHistory}
     */
    deleteUserHistory(config) {
        return this.__client.request('channels.deleteUserHistory', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/reportSpam.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {InputUser} config.user_id
     * @property {Vector.<int>} config.id
     * @returns {Bool}
     */
    reportSpam(config) {
        return this.__client.request('channels.reportSpam', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getMessages.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {Vector.<InputMessage>} config.id
     * @returns {messages.Messages}
     */
    getMessages(config) {
        return this.__client.request('channels.getMessages', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getParticipants.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {ChannelParticipantsFilter} config.filter
     * @property {int} config.offset
     * @property {int} config.limit
     * @property {int} config.hash
     * @returns {channels.ChannelParticipants}
     */
    getParticipants(config) {
        return this.__client.request('channels.getParticipants', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getParticipant.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {InputUser} config.user_id
     * @returns {channels.ChannelParticipant}
     */
    getParticipant(config) {
        return this.__client.request('channels.getParticipant', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getChannels.md}
     * @param {object} config
     * @property {Vector.<InputChannel>} config.id
     * @returns {messages.Chats}
     */
    getChannels(config) {
        return this.__client.request('channels.getChannels', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getFullChannel.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @returns {messages.ChatFull}
     */
    getFullChannel(config) {
        return this.__client.request('channels.getFullChannel', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/createChannel.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.broadcast
     * @property {true} config.megagroup
     * @property {string} config.title
     * @property {string} config.about
     * @returns {Updates}
     */
    createChannel(config) {
        return this.__client.request('channels.createChannel', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editAbout.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {string} config.about
     * @returns {Bool}
     */
    editAbout(config) {
        return this.__client.request('channels.editAbout', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editAdmin.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {InputUser} config.user_id
     * @property {ChannelAdminRights} config.admin_rights
     * @returns {Updates}
     */
    editAdmin(config) {
        return this.__client.request('channels.editAdmin', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editTitle.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {string} config.title
     * @returns {Updates}
     */
    editTitle(config) {
        return this.__client.request('channels.editTitle', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editPhoto.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {InputChatPhoto} config.photo
     * @returns {Updates}
     */
    editPhoto(config) {
        return this.__client.request('channels.editPhoto', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/checkUsername.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {string} config.username
     * @returns {Bool}
     */
    checkUsername(config) {
        return this.__client.request('channels.checkUsername', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updateUsername.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {string} config.username
     * @returns {Bool}
     */
    updateUsername(config) {
        return this.__client.request('channels.updateUsername', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/joinChannel.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @returns {Updates}
     */
    joinChannel(config) {
        return this.__client.request('channels.joinChannel', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/leaveChannel.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @returns {Updates}
     */
    leaveChannel(config) {
        return this.__client.request('channels.leaveChannel', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/inviteToChannel.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {Vector.<InputUser>} config.users
     * @returns {Updates}
     */
    inviteToChannel(config) {
        return this.__client.request('channels.inviteToChannel', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/exportInvite.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @returns {ExportedChatInvite}
     */
    exportInvite(config) {
        return this.__client.request('channels.exportInvite', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteChannel.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @returns {Updates}
     */
    deleteChannel(config) {
        return this.__client.request('channels.deleteChannel', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/toggleInvites.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {Bool} config.enabled
     * @returns {Updates}
     */
    toggleInvites(config) {
        return this.__client.request('channels.toggleInvites', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/exportMessageLink.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {int} config.id
     * @property {Bool} config.grouped
     * @returns {ExportedMessageLink}
     */
    exportMessageLink(config) {
        return this.__client.request('channels.exportMessageLink', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/toggleSignatures.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {Bool} config.enabled
     * @returns {Updates}
     */
    toggleSignatures(config) {
        return this.__client.request('channels.toggleSignatures', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/updatePinnedMessage.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.silent
     * @property {InputChannel} config.channel
     * @property {int} config.id
     * @returns {Updates}
     */
    updatePinnedMessage(config) {
        return this.__client.request('channels.updatePinnedMessage', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAdminedPublicChannels.md}
     * @returns {messages.Chats}
     */
    getAdminedPublicChannels() {
        return this.__client.request('channels.getAdminedPublicChannels')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/editBanned.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {InputUser} config.user_id
     * @property {ChannelBannedRights} config.banned_rights
     * @returns {Updates}
     */
    editBanned(config) {
        return this.__client.request('channels.editBanned', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getAdminLog.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {InputChannel} config.channel
     * @property {string} config.q
     * @property {ChannelAdminLogEventsFilter} config.events_filter
     * @property {Vector.<InputUser>} config.admins
     * @property {long} config.max_id
     * @property {long} config.min_id
     * @property {int} config.limit
     * @returns {channels.AdminLogResults}
     */
    getAdminLog(config) {
        return this.__client.request('channels.getAdminLog', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setStickers.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {InputStickerSet} config.stickerset
     * @returns {Bool}
     */
    setStickers(config) {
        return this.__client.request('channels.setStickers', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/readMessageContents.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {Vector.<int>} config.id
     * @returns {Bool}
     */
    readMessageContents(config) {
        return this.__client.request('channels.readMessageContents', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/deleteHistory.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {int} config.max_id
     * @returns {Bool}
     */
    deleteHistory(config) {
        return this.__client.request('channels.deleteHistory', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/togglePreHistoryHidden.md}
     * @param {object} config
     * @property {InputChannel} config.channel
     * @property {Bool} config.enabled
     * @returns {Updates}
     */
    togglePreHistoryHidden(config) {
        return this.__client.request('channels.togglePreHistoryHidden', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getLeftChannels.md}
     * @param {object} config
     * @property {int} config.offset
     * @returns {messages.Chats}
     */
    getLeftChannels(config) {
        return this.__client.request('channels.getLeftChannels', config)
    }
}

class Bots extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendCustomRequest.md}
     * @param {object} config
     * @property {string} config.custom_method
     * @property {DataJSON} config.params
     * @returns {DataJSON}
     */
    sendCustomRequest(config) {
        return this.__client.request('bots.sendCustomRequest', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/answerWebhookJSONQuery.md}
     * @param {object} config
     * @property {long} config.query_id
     * @property {DataJSON} config.data
     * @returns {Bool}
     */
    answerWebhookJSONQuery(config) {
        return this.__client.request('bots.answerWebhookJSONQuery', config)
    }
}

class Payments extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPaymentForm.md}
     * @param {object} config
     * @property {int} config.msg_id
     * @returns {payments.PaymentForm}
     */
    getPaymentForm(config) {
        return this.__client.request('payments.getPaymentForm', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getPaymentReceipt.md}
     * @param {object} config
     * @property {int} config.msg_id
     * @returns {payments.PaymentReceipt}
     */
    getPaymentReceipt(config) {
        return this.__client.request('payments.getPaymentReceipt', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/validateRequestedInfo.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.save
     * @property {int} config.msg_id
     * @property {PaymentRequestedInfo} config.info
     * @returns {payments.ValidatedRequestedInfo}
     */
    validateRequestedInfo(config) {
        return this.__client.request('payments.validateRequestedInfo', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/sendPaymentForm.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {int} config.msg_id
     * @property {string} config.requested_info_id
     * @property {string} config.shipping_option_id
     * @property {InputPaymentCredentials} config.credentials
     * @returns {payments.PaymentResult}
     */
    sendPaymentForm(config) {
        return this.__client.request('payments.sendPaymentForm', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getSavedInfo.md}
     * @returns {payments.SavedInfo}
     */
    getSavedInfo() {
        return this.__client.request('payments.getSavedInfo')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/clearSavedInfo.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.credentials
     * @property {true} config.info
     * @returns {Bool}
     */
    clearSavedInfo(config) {
        return this.__client.request('payments.clearSavedInfo', config)
    }
}

class Stickers extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/createStickerSet.md}
     * @param {object} config
     * @property {#} config.flags
     * @property {true} config.masks
     * @property {InputUser} config.user_id
     * @property {string} config.title
     * @property {string} config.short_name
     * @property {Vector.<InputStickerSetItem>} config.stickers
     * @returns {messages.StickerSet}
     */
    createStickerSet(config) {
        return this.__client.request('stickers.createStickerSet', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/removeStickerFromSet.md}
     * @param {object} config
     * @property {InputDocument} config.sticker
     * @returns {messages.StickerSet}
     */
    removeStickerFromSet(config) {
        return this.__client.request('stickers.removeStickerFromSet', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/changeStickerPosition.md}
     * @param {object} config
     * @property {InputDocument} config.sticker
     * @property {int} config.position
     * @returns {messages.StickerSet}
     */
    changeStickerPosition(config) {
        return this.__client.request('stickers.changeStickerPosition', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/addStickerToSet.md}
     * @param {object} config
     * @property {InputStickerSet} config.stickerset
     * @property {InputStickerSetItem} config.sticker
     * @returns {messages.StickerSet}
     */
    addStickerToSet(config) {
        return this.__client.request('stickers.addStickerToSet', config)
    }
}

class Phone extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getCallConfig.md}
     * @returns {DataJSON}
     */
    getCallConfig() {
        return this.__client.request('phone.getCallConfig')
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/requestCall.md}
     * @param {object} config
     * @property {InputUser} config.user_id
     * @property {int} config.random_id
     * @property {bytes} config.g_a_hash
     * @property {PhoneCallProtocol} config.protocol
     * @returns {phone.PhoneCall}
     */
    requestCall(config) {
        return this.__client.request('phone.requestCall', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/acceptCall.md}
     * @param {object} config
     * @property {InputPhoneCall} config.peer
     * @property {bytes} config.g_b
     * @property {PhoneCallProtocol} config.protocol
     * @returns {phone.PhoneCall}
     */
    acceptCall(config) {
        return this.__client.request('phone.acceptCall', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/confirmCall.md}
     * @param {object} config
     * @property {InputPhoneCall} config.peer
     * @property {bytes} config.g_a
     * @property {long} config.key_fingerprint
     * @property {PhoneCallProtocol} config.protocol
     * @returns {phone.PhoneCall}
     */
    confirmCall(config) {
        return this.__client.request('phone.confirmCall', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/receivedCall.md}
     * @param {object} config
     * @property {InputPhoneCall} config.peer
     * @returns {Bool}
     */
    receivedCall(config) {
        return this.__client.request('phone.receivedCall', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/discardCall.md}
     * @param {object} config
     * @property {InputPhoneCall} config.peer
     * @property {int} config.duration
     * @property {PhoneCallDiscardReason} config.reason
     * @property {long} config.connection_id
     * @returns {Updates}
     */
    discardCall(config) {
        return this.__client.request('phone.discardCall', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/setCallRating.md}
     * @param {object} config
     * @property {InputPhoneCall} config.peer
     * @property {int} config.rating
     * @property {string} config.comment
     * @returns {Updates}
     */
    setCallRating(config) {
        return this.__client.request('phone.setCallRating', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/saveCallDebug.md}
     * @param {object} config
     * @property {InputPhoneCall} config.peer
     * @property {DataJSON} config.debug
     * @returns {Bool}
     */
    saveCallDebug(config) {
        return this.__client.request('phone.saveCallDebug', config)
    }
}

class Langpack extends Ctor {
    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getLangPack.md}
     * @param {object} config
     * @property {string} config.lang_pack
     * @property {string} config.lang_code
     * @returns {LangPackDifference}
     */
    getLangPack(config) {
        return this.__client.request('langpack.getLangPack', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getStrings.md}
     * @param {object} config
     * @property {string} config.lang_pack
     * @property {string} config.lang_code
     * @property {Vector.<string>} config.keys
     * @returns {Vector.<LangPackString>}
     */
    getStrings(config) {
        return this.__client.request('langpack.getStrings', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getDifference.md}
     * @param {object} config
     * @property {int} config.from_version
     * @returns {LangPackDifference}
     */
    getDifference(config) {
        return this.__client.request('langpack.getDifference', config)
    }

    /**
     * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/method/getLanguages.md}
     * @param {object} config
     * @property {string} config.lang_pack
     * @returns {Vector.<LangPackLanguage>}
     */
    getLanguages(config) {
        return this.__client.request('langpack.getLanguages', config)
    }
}


class MTProtoClient {
    /**
     * @param {ApiManagerInstance} api
     */
    constructor(api){
        /**
         * @property {number}
         */
        this.__errors = 0
        /**
         * @property {ApiManagerInstance}
         */
        this.__connector = api

        const ctor = this.constructor

        
        /**
         * @type {Contest}
         */
        this.contest = new ctor.Contest(this)

        /**
         * @type {Auth}
         */
        this.auth = new ctor.Auth(this)

        /**
         * @type {Account}
         */
        this.account = new ctor.Account(this)

        /**
         * @type {Users}
         */
        this.users = new ctor.Users(this)

        /**
         * @type {Contacts}
         */
        this.contacts = new ctor.Contacts(this)

        /**
         * @type {Messages}
         */
        this.messages = new ctor.Messages(this)

        /**
         * @type {Updates}
         */
        this.updates = new ctor.Updates(this)

        /**
         * @type {Photos}
         */
        this.photos = new ctor.Photos(this)

        /**
         * @type {Upload}
         */
        this.upload = new ctor.Upload(this)

        /**
         * @type {Help}
         */
        this.help = new ctor.Help(this)

        /**
         * @type {Channels}
         */
        this.channels = new ctor.Channels(this)

        /**
         * @type {Bots}
         */
        this.bots = new ctor.Bots(this)

        /**
         * @type {Payments}
         */
        this.payments = new ctor.Payments(this)

        /**
         * @type {Stickers}
         */
        this.stickers = new ctor.Stickers(this)

        /**
         * @type {Phone}
         */
        this.phone = new ctor.Phone(this)

        /**
         * @type {Langpack}
         */
        this.langpack = new ctor.Langpack(this)
    }

    request(query, config) {

        return new Promise((resolve, reject) => {
            this.__connector(query, config)
                .then(res => {
                    this.__errors = 0
                    return resolve(res)
                })
                .catch(err => {
                    if (this.__errors >= 3) {
                        return resolve({
                            code: 429,
                            message: "Flood"
                        })
                    }

                    this.__errors += 1

                    return reject(err)
                })

            setTimeout(() => {
                return resolve({
                    code: 500,
                    message: "Timeout"
                })
            }, 10000)
        })
    }
}

MTProtoClient.Ctor = Ctor

MTProtoClient.Contest = Contest
MTProtoClient.Auth = Auth
MTProtoClient.Account = Account
MTProtoClient.Users = Users
MTProtoClient.Contacts = Contacts
MTProtoClient.Messages = Messages
MTProtoClient.Updates = Updates
MTProtoClient.Photos = Photos
MTProtoClient.Upload = Upload
MTProtoClient.Help = Help
MTProtoClient.Channels = Channels
MTProtoClient.Bots = Bots
MTProtoClient.Payments = Payments
MTProtoClient.Stickers = Stickers
MTProtoClient.Phone = Phone
MTProtoClient.Langpack = Langpack

module.exports = MTProtoClient