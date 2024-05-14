// declare module "firebase/app" {
//     export interface FirebaseApp {
//         name?: string;
//         options?: any;
//         automaticDataCollectionEnabled(): boolean;
//         delete(): Promise<void>;
//         firestore(): FirebaseFirestore;
//         functions(region?: string): FirebaseFunctions;
//         messaging(): FirebaseMessaging;
//         performance(): FirebasePerformance;
//         remoteConfig(): FirebaseRemoteConfig;
//         storage(url?: string): FirebaseStorage;
//     }

//     export function initializeApp(options: Object, name?: string): FirebaseApp;
//     export function getApp(name?: string): FirebaseApp;
//     export function getApps(): FirebaseApp[];

//     export namespace app {
//         export namespace Distribution {
//             export const FIREBASE_APP_CHECK: string;
//             export const FIREBASE_AUTH: string;
//             export const FIREBASE_FUNCTIONS: string;
//             export const FIREBASE_INSTALLATIONS: string;
//             export const FIREBASE_MESSAGING: string;
//             export const FIREBASE_PERFORMANCE: string;
//             export const FIREBASE_REMOTE_CONFIG: string;
//             export const FIREBASE_STORAGE: string;
//             export const GROWTH: string;
//         }
//     }
// }

// declare module "firebase/auth" {
//     export interface Auth {
//         app: FirebaseApp;
//         currentUser?: User | null;
//         languageCode: string | null;
//         settings: AuthSettings;
//         applyActionCode(code: string): Promise<void>;
//         checkActionCode(code: string): Promise<ActionCodeInfo>;
//         confirmPasswordReset(code: string, newPassword: string): Promise<void>;
//         createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential>;
//         fetchSignInMethodsForEmail(email: string): Promise<string[]>;
//         getRedirectResult(): Promise<UserCredential>;
//         isSignInWithEmailLink(emailLink: string): boolean;
//         onAuthStateChanged(nextOrObserver: NextOrObserver<User | null>, error?: (a: Error) => any, completed?: Unsubscribe): Unsubscribe;
//         onIdTokenChanged(nextOrObserver: NextOrObserver<User | null>, error?: (a: Error) => any, completed?: Unsubscribe): Unsubscribe;
//         sendPasswordResetEmail(email: string, actionCodeSettings?: ActionCodeSettings | null): Promise<void>;
//         sendSignInLinkToEmail(email: string, actionCodeSettings: ActionCodeSettings): Promise<void>;
//         setPersistence(persistence: Persistence): Promise<void>;
//         signInAnonymously(): Promise<UserCredential>;
//         signInWithCredential(credential: AuthCredential): Promise<UserCredential>;
//         signInWithCustomToken(token: string): Promise<UserCredential>;
//         signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential>;
//         signInWithEmailLink(email: string, emailLink?: string): Promise<UserCredential>;
//         signInWithPhoneNumber(phoneNumber: string, applicationVerifier: ApplicationVerifier): Promise<ConfirmationResult>;
//         signInWithPopup(provider: AuthProvider): Promise<UserCredential>;
//         signInWithRedirect(provider: AuthProvider): Promise<void>;
//         signOut(): Promise<void>;
//         updateCurrentUser(user: User | null): Promise<void>;
//         useDeviceLanguage(): void;
//         verifyPasswordResetCode(code: string): Promise<string>;
//     }

//     export interface AuthSettings {
//         appVerificationDisabledForTesting: boolean;
//         isPopupRedirectEnabled: boolean;
//         popupRedirectResolver: any;
//     }

//     export type Persistence = "SESSION" | "LOCAL" | "NONE";

//     export interface ApplicationVerifier {
//         type: string;
//         verify(): Promise<string>;
//     }

//     export interface ConfirmationResult {
//         additionalUserInfo: AdditionalUserInfo | null;
//         user: User | null;
//         confirm(verificationCode: string): Promise<UserCredential>;
//         verificationId: string;
//     }

//     export interface ActionCodeSettings {
//         android: {
//             installApp?: boolean;
//             minimumVersion?: string;
//             packageName: string;
//             fallbackUrl?: string;
//         };
//         handleCodeInApp?: boolean;
//         iOS: {
//             bundleId: string;
//             appStoreId?: string;
//             minimumVersion?: string;
//             fallbackUrl?: string;
//         };
//         url: string;
//     }

//     export interface AdditionalUserInfo {
//         isNewUser: boolean;
//         profile: Object | null;
//         providerId: string;
//         username: string | null;
//     }

//     export interface AuthCredential {
//         providerId: string;
//         signInMethod: string;
//     }

//     export interface ActionCodeInfo {
//         data: {
//             email: string;
//         };
//         operation: string;
//     }

//     export interface UserCredential {
//         additionalUserInfo?: AdditionalUserInfo | null;
//         credential?: AuthCredential | null;
//         operationType?: string | null;
//         user: User | null;
//     }

//     export interface UserMetadata {
//         creationTime?: string;
//         lastSignInTime?: string;
//     }

//     export interface User extends UserInfo {
//         delete(): Promise<void>;
//         emailVerified: boolean;
//         getIdToken(forceRefresh?: boolean): Promise<string>;
//         getIdTokenResult(forceRefresh?: boolean): Promise<IdTokenResult>;
//         isAnonymous: boolean;
//         metadata: UserMetadata;
//         phoneNumber: string | null;
//         providerData: UserInfo[];
//         refreshToken: string;
//         reload(): Promise<void>;
//         toJSON(): Object;
//     }

//     export interface UserInfo {
//         displayName: string | null;
//         email: string | null;
//         phoneNumber: string | null;
//         photoURL: string | null;
//         providerId: string;
//         uid: string;
//     }

//     export interface IdTokenResult {
//         authTime: string;
//         claims: object;
//         expirationTime: string;
//         issuedAtTime: string;
//         signInProvider: string | null;
//         token: string;
//     }

//     export function getAuth(app?: FirebaseApp): Auth;
// }

// declare module "firebase/firestore" {
//     export interface Firestore {
//         app: FirebaseApp;
//         collection(collectionPath: string): CollectionReference;
//         doc(documentPath: string): DocumentReference;
//         FieldPath: FieldPath;
//         FieldValue: FieldValue;
//         GeoPoint: GeoPoint;
//         Timestamp: Timestamp;
//         enableIndexedDbPersistence(): Promise<void>;
//         enableMultiTabIndexedDbPersistence(synchronizeTabs?: boolean): Promise<void>;
//         setLogLevel(logLevel: LogLevel): void;
//     }

//     export interface Settings {
//         cacheSizeBytes?: number;
//         experimentalForceLongPolling?: boolean;
//         experimentalAutoDetectLongPolling?: boolean;
//         host?: string;
//         ssl?: boolean;
//         ignoreUndefinedProperties?: boolean;
//     }

//     export interface CollectionReference extends Query {
//         id: string;
//         parent: DocumentReference | null;
//         path: string;
//         add(data: DocumentData): Promise<DocumentReference>;
//         withConverter<T>(converter: FirestoreDataConverter<T>): CollectionReference<T>;
//     }

//     export interface DocumentReference {
//         id: string;
//         parent: CollectionReference;
//         path: string;
//         collection(collectionPath: string): CollectionReference;
//         delete(): Promise<void>;
//         get(options?: GetOptions): Promise<DocumentSnapshot>;
//         set(data: DocumentData, options?: SetOptions): Promise<void>;
//         update(data: UpdateData): Promise<void>;
//         withConverter<T>(converter: FirestoreDataConverter<T>): DocumentReference<T>;
//     }

//     export interface Query {
//         firestore: Firestore;
//     }

//     export interface DocumentData {
//         [field: string]: any;
//     }

//     export interface GetOptions {
//         source?: "default" | "server" | "cache";
//     }

//     export interface SetOptions {
//         merge?: boolean;
//         mergeFields?: Array<string | FieldPath>;
//     }

//     export interface UpdateData {
//         [fieldPath: string]: any;
//     }

//     export interface DocumentSnapshot<T = DocumentData> {
//         data(options?: SnapshotOptions): T | undefined;
//         exists: boolean;
//         id: string;
//         metadata: SnapshotMetadata;
//         ref: DocumentReference<T>;
//     }

//     export interface SnapshotOptions {
//         serverTimestamps?: "estimate" | "previous" | "none";
//     }

//     export interface SnapshotMetadata {
//         fromCache: boolean;
//         hasPendingWrites: boolean;
//     }

//     export interface QueryDocumentSnapshot<T = DocumentData> extends DocumentSnapshot<T> {
//         data(options?: SnapshotOptions): T;
//     }

//     export interface QuerySnapshot<T = DocumentData> {
//         docChanges(options?: SnapshotListenOptions): Array<DocumentChange<T>>;
//         docs: Array<QueryDocumentSnapshot<T>>;
//         empty: boolean;
//         metadata: SnapshotMetadata;
//         query: Query;
//         size: number;
//     }

//     export interface DocumentChange<T = DocumentData> {
//         doc: QueryDocumentSnapshot<T>;
//         newIndex: number;
//         oldIndex: number;
//         type: "added" | "removed" | "modified";
//     }

//     export interface SnapshotListenOptions {
//         includeMetadataChanges?: boolean;
//     }

//     export interface FieldPath {
//         isEqual(other: FieldPath): boolean;
//     }

//     export interface FieldValue {
//         arrayRemove(...elements: any[]): FieldValue;
//         arrayUnion(...elements: any[]): FieldValue;
//         delete(): FieldValue;
//         increment(n: number): FieldValue;
//         serverTimestamp(): FieldValue;
//     }

//     export interface FirestoreDataConverter<T> {
//         fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T;
//         toFirestore(modelObject: T): DocumentData;
//     }

//     export interface Transaction {
//         delete(documentRef: DocumentReference): Transaction;
//         get(documentRef: DocumentReference): Promise<DocumentSnapshot>;
//         set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): Transaction;
//         update(documentRef: DocumentReference, data: UpdateData): Transaction;
//     }

//     export interface WriteBatch {
//         commit(): Promise<void>;
//         delete(documentRef: DocumentReference): WriteBatch;
//         set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): WriteBatch;
//         update(documentRef: DocumentReference, data: UpdateData): WriteBatch;
//     }

//     export interface GeoPoint {
//         latitude: number;
//         longitude: number;
//         isEqual(other: GeoPoint): boolean;
//     }

//     export interface Timestamp {
//         nanoseconds: number;
//         seconds: number;
//         toDate(): Date;
//         toMillis(): number;
//         isEqual(other: Timestamp): boolean;
//     }

//     export type LogLevel = "debug" | "error" | "silent";
//     export function setLogLevel(level: LogLevel): void;

//     export function collection(collectionPath: string): CollectionReference;
//     export function doc(documentPath: string): DocumentReference;
//     export function runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T>;
//     export function batch(): WriteBatch;
// }

// declare module "firebase/functions" {
//     export interface FirebaseFunctions {
//         app: FirebaseApp;
//         useEmulator(host: string, port: number): void;
//     }

//     export interface HttpsCallableOptions {
//         timeout?: number;
//         signal?: AbortSignal;
//     }

//     export interface HttpsCallableResult {
//         data: any;
//     }

//     export interface HttpsCallable {
//         (data?: any): Promise<HttpsCallableResult>;
//     }

//     export function httpsCallable(name: string, options?: HttpsCallableOptions): HttpsCallable;
// }

// declare module "firebase/messaging" {
//     export interface FirebaseMessaging {
//         app: FirebaseApp;
//     }

//     export interface MessagingOptions {
//         serviceWorkerRegistration?: ServiceWorkerRegistration;
//         apiKey?: string;
//         projectId?: string;
//         messagingSenderId?: string;
//     }

//     export function getToken(messaging: FirebaseMessaging, options?: MessagingOptions): Promise<string>;
// }

// declare module "firebase/performance" {
//     export interface FirebasePerformance {
//         app: FirebaseApp;
//     }
// }

// declare module "firebase/remote-config" {
//     export interface FirebaseRemoteConfig {
//         app: FirebaseApp;
//     }
// }

// declare module "firebase/storage" {
//     export interface FirebaseStorage {
//         app: FirebaseApp;
//         maxOperationRetryTime: number;
//         maxUploadRetryTime: number;
//         ref(storagePath?: string): Reference;
//         refFromURL(url: string): Reference;
//         setMaxOperationRetryTime(time: number): void;
//         setMaxUploadRetryTime(time: number): void;
//     }

//     export interface Reference {
//         bucket: string;
//         fullPath: string;
//         name: string;
//         parent: Reference | null;
//         root: Reference;
//         child(path: string): Reference;
//         delete(): Promise<void>;
//         getDownloadURL(): Promise<string>;
//         getMetadata(): Promise<Metadata>;
//         list(options?: ListOptions): Promise<ListResult>;
//         put(data: Blob | Uint8Array | ArrayBuffer, metadata?: Metadata): UploadTask;
//         putString(data: string, format?: string, metadata?: Metadata): UploadTask;
//         update(metadata: Metadata): Promise<Metadata>;
//     }

//     export interface UploadTask {
//         cancel(): boolean;
//         catch(onRejected: (a: Error) => any): Promise<any>;
//         on(event: string, nextOrObserver: (a: UploadTaskSnapshot) => any, error?: (a: Error) => any, complete?: () => any): (a: UploadTaskSnapshot) => any;
//         pause(): boolean;
//         resume(): boolean;
//         snapshot: UploadTaskSnapshot;
//         then(onFulfilled?: ((a: any) => any) | null, onRejected?: ((a: Error) => any) | null): Promise<any>;
//     }

//     export interface Metadata {
//         bucket: string;
//         generation: string;
//         metageneration: string;
//         name: string;
//         size: number;
//         timeCreated: string;
//         updated: string;
//     }

//     export interface ListOptions {
//         maxResults?: number;
//         pageToken?: string;
//     }

//     export interface ListResult {
//         prefixes: string[];
//         items: Reference[];
//         nextPageToken?: string;
//     }

//     export interface UploadTaskSnapshot {
//         bytesTransferred: number;
//         metadata: Metadata;
//         ref: Reference;
//         state: string;
//         task: UploadTask;
//         totalBytes: number;
//     }
// }