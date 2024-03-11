import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line
declare let System: any;

export function getRsaEncryptedSekurityKey() {
  const xmlParams = `<RSAKeyValue>
        <Modulus>
          ${process.env.SECURITY_KEY_MODULUS}
        </Modulus>
        <Exponent>${process.env.SECURITY_KEY_EXPONENT}</Exponent>
      </RSAKeyValue>`;
  const rsa = new System.Security.Cryptography.RSACryptoServiceProvider();
  rsa.FromXmlString(xmlParams);
  const data = uuidv4();
  // Encrypt
  const decryptedBytes = System.Text.Encoding.UTF8.GetBytes(data);
  const doOaepPadding = false;
  const encryptedBytes = rsa.Encrypt(decryptedBytes, doOaepPadding);
  const encryptedString = System.Convert.ToBase64String(encryptedBytes);
  return encryptedString;
}
