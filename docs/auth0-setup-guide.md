# Auth0 Setup Guide for Warren Gazette CMS

This guide walks you through setting up Auth0 for authenticating users to the Warren Gazette CMS.

## 1. Create an Auth0 Account

1. Go to [Auth0](https://auth0.com/) and sign up for an account if you don't already have one.
2. After signing in, you'll be taken to the Auth0 Dashboard.

## 2. Create a New Application

1. In the Auth0 Dashboard, click on "Applications" in the left sidebar.
2. Click the "Create Application" button.
3. Enter a name for your application (e.g., "Warren Gazette CMS").
4. Select "Single Page Web Application" as the application type.
5. Click "Create".

## 3. Configure Application Settings

After creating the application, you'll be directed to its settings. Configure the following:

1. **Allowed Callback URLs:**
   - Add: `https://your-site-url.netlify.app/admin/`
   - For local development, also add: `http://localhost:8080/admin/`

2. **Allowed Logout URLs:**
   - Add: `https://your-site-url.netlify.app/admin/`
   - For local development, also add: `http://localhost:8080/admin/`

3. **Allowed Web Origins:**
   - Add: `https://your-site-url.netlify.app`
   - For local development, also add: `http://localhost:8080`

4. Scroll down and click "Save Changes".

## 4. Get Your Application Credentials

1. On the same settings page, find the following values:
   - **Domain:** Look like `your-tenant.auth0.com`
   - **Client ID:** A long alphanumeric string

2. Copy these values as you will need them to configure the CMS.

## 5. Update Netlify CMS Configuration

1. Open `src/admin/config.yml` in your project.
2. Replace the existing backend configuration with:

```yaml
backend:
  name: auth0
  domain: YOUR_AUTH0_DOMAIN.auth0.com # Replace with your Auth0 domain
  clientId: YOUR_AUTH0_CLIENT_ID # Replace with your Auth0 client ID
  audience: https://api.netlify.com/
  scope: openid profile email
  responseType: token id_token
  branch: main
```

## 6. Managing Users

1. In the Auth0 Dashboard, click on "User Management" > "Users".
2. Here you can:
   - Create new users
   - View user details
   - Block or delete users
   - Assign roles or permissions

## 7. Optional: Configure Email Templates

1. In the Auth0 Dashboard, go to "Brand & Customize" > "Email Templates".
2. Here you can customize the emails that Auth0 sends for:
   - Verification emails
   - Password reset emails
   - Welcome emails

## 8. Optional: Enable Social Logins

If you want to allow users to log in with social accounts:

1. Go to "Authentication" > "Social" in the Auth0 Dashboard.
2. Choose a social provider (e.g., Google, GitHub, etc.).
3. Follow the provider-specific instructions to set it up.

## Troubleshooting

- **CORS Issues:** If you encounter CORS errors, verify that your allowed origins are correctly set in Auth0.
- **Login Failures:** Check that your client ID and domain are correctly copied into the config.yml file.
- **Redirect Errors:** Ensure your callback URLs are correctly set in the Auth0 application settings.

For more information, refer to the [Auth0 Documentation](https://auth0.com/docs/) and [Netlify CMS Auth0 Documentation](https://www.netlifycms.org/docs/authentication-backends/#auth0).
