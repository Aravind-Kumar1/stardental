# EmailJS Setup Guide for Dental Appointments

To enable email notifications for your appointment bookings, follow these steps in your [EmailJS Dashboard](https://dashboard.emailjs.com/).

## 1. Create a Service
- Connect your email provider (e.g., Gmail, Outlook).
- Your **Service ID** is: `service_6u39ytm` (already updated in code).

## 2. Create a Template
- Go to "Email Templates" and click "Create New Template".
- Paste the following into the **Content** area (switch to the **Plain Text** or **Editor** view as needed):

### Email Notification Message (Copy & Paste this)
```text
Hello Venkateswara Dental Team,

You have received a new Appointment Request through the official website. 
Please find the patient's details below:

==========================================
PATIENT INFORMATION
==========================================
Patient Name:        {{user_name}}
Phone Number:        {{user_phone}}
------------------------------------------
APPOINTMENT DETAILS
------------------------------------------
Appointment Date:    {{appointment_date}}
Preferred Time:      {{selected_slot}}
Service Requested:   {{selected_service}}
==========================================

Action Required:
Please contact the patient within 24 hours to confirm the scheduling.

This is an automated message from the Venkateswara Dental Hospital Portal.
```

- **Template Settings**:
  - **To Email**: `starsmilesdentalcare@gmail.com`
  - **Subject**: 🦷 New Appointment: {{user_name}} - {{selected_service}}
  - **Reply-To**: (Leave blank)

- Copy your **Template ID** (e.g., `template_xxxxxx`).

## 3. Account Public Key
- Your **Public Key** is: `bvHJ1reCcpNiEgHg3` (already updated in code).

## 4. Final Step
Open these files and replace `"YOUR_TEMPLATE_ID"` with your actual Template ID:
1. `src/components/ui/Popup.tsx`
2. `src/components/sections/Contact.tsx`
3. `src/app/book-appointment/page.tsx`
