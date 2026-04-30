# Firebase Email Domain Verification — DNS Records

## DNS Records to Add at your Domain Registrar

| Domainname | Typ | Wert |
|------------|-----|------|
| gigiluko.com | TXT | `v=spf1 include:_spf.firebasemail.com ~all` |
| gigiluko.com | TXT | `firebase=gigiluko` |
| firebase1._domainkey.gigiluko.com | CNAME | `mail-gigiluko-com.dkim1._domainkey.firebasemail.com.` |
| firebase2._domainkey.gigiluko.com | CNAME | `mail-gigiluko-com.dkim2._domainkey.firebasemail.com.` |

## Steps
1. Log in to your domain registrar (where gigiluko.com is registered)
2. Navigate to DNS Settings
3. Add each of the 4 records above
4. Save changes
5. Wait 15 min – 48 hours for DNS propagation
6. Return to Firebase Console → click "Verify Domain"

## Check Propagation
```bash
nslookup -type=TXT gigiluko.com
```

Or use: https://mxtoolbox.com/

## Timeline
- Add records: ~5 min
- DNS propagation: 15 min – 48 hours (typically 1-2 hours)
- Firebase verification: automatic after propagation

Last Updated: April 30, 2026
