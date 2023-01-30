import {
  isValid,
  VerificationFragment,
  utils,
  OpenAttestationEthereumDocumentStoreStatusCode,
} from "@govtechsg/oa-verify";
import { TYPES } from "../constants/VerificationErrorMessages";

interface interpretFragmentsReturnTypes {
  hashValid: boolean;
  issuedValid: boolean;
  identityValid: boolean;
}

/** trying to make interpretation of the fragments for DIDSignedDocStoreRevokedDocuments
 * currently certificateRevoked function from oa-verify does not handle it. (only checks the status codes for ethereumDocStoreVerifier)
 * if we were to be thorough about making this change, would be better to include a new status code for  OpenAttestationDIDDocumentStoreStatusCode and expose a status code getter for it.
 * but the surface impact is huge, so opt to do it at the project level instead.
 */
const certificateRevokedOnDIDIdentified = (fragments: VerificationFragment[]) => {
  const didSignedDocumentStatusFragment = utils.getOpenAttestationDidSignedDocumentStatusFragment(fragments);
  return (
    didSignedDocumentStatusFragment?.reason?.code === OpenAttestationEthereumDocumentStoreStatusCode.DOCUMENT_REVOKED
  );
};

export const interpretFragments = (fragments: VerificationFragment[]): interpretFragmentsReturnTypes => {
  const hashValid = isValid(fragments, ["DOCUMENT_INTEGRITY"]);
  const issuedValid = isValid(fragments, ["DOCUMENT_STATUS"]);
  const identityValid = isValid(fragments, ["ISSUER_IDENTITY"]);
  return { hashValid, issuedValid, identityValid };
};

export const errorMessageHandling = (fragments: VerificationFragment[]): string[] => {
  const { hashValid, issuedValid, identityValid } = interpretFragments(fragments);
  const errors = [];

  if (utils.isDocumentStoreAddressOrTokenRegistryAddressInvalid(fragments)) {
    // if the error is because the address is invalid, only return this one
    return [TYPES.ADDRESS_INVALID];
  }
  if (utils.contractNotFound(fragments)) {
    // if the error is because the contract cannot be found, only return this one
    return [TYPES.CONTRACT_NOT_FOUND];
  }
  if (utils.serverError(fragments)) {
    // if the error is because cannot connect to Ethereum, only return this one
    return [TYPES.SERVER_ERROR];
  }

  if (!hashValid) errors.push(TYPES.HASH);
  if (!identityValid) errors.push(TYPES.IDENTITY);
  if (!issuedValid) {
    if (utils.certificateRevoked(fragments) || certificateRevokedOnDIDIdentified(fragments)) errors.push(TYPES.REVOKED);
    else if (utils.invalidArgument(fragments)) {
      // this error is caused when the merkle root is wrong, and should always be shown with the DOCUMENT_INTEGRITY error
      errors.push(TYPES.INVALID_ARGUMENT);
    } else if (utils.certificateNotIssued(fragments)) errors.push(TYPES.ISSUED);
    else if (!hashValid && !identityValid) {
      // this error is caused when the document is invalid, only keep this one
      return [TYPES.INVALID];
    } else {
      // if it's some unhandled error that we didn't foresee, only keep this one
      return [TYPES.ETHERS_UNHANDLED_ERROR];
    }
  }

  return errors;
};
