from flask_mail import Message


def instructor_form(mail, form, resume):
    subject = f"Instructor App: {form['firstName']} {form['lastName']}"
    body = f"""Instructor Application
---------

Name: {form["firstName"]} {form["lastName"]}
Email: {form["email"]}
Phone: {form["phone"]}
Address: {form["address"]}, {form["city"]}
University: {form["uni"]} (graduation {form["grad"]})
Comments: {form["comments"]}

---------
    """
    mail_form(mail, subject, body, resume)


def school_form(mail, form):
    subject = f"School App: {form['school']}"
    body = f"""School Application
---------

School: {form["school"]}
Contact: {form["contact"]}
Email: {form["email"]}
Phone: {form["phone"]}
Address: {form["address"]}, {form["city"]}
Request: {form["request"]}

---------
    """
    mail_form(mail, subject, body)


def mail_form(mail, subject, body, attachment=None):
    message = Message(
        subject=subject,
        body=body,
        attachments=None,
        recipients=["lemmanetwork@gmail.com"]
    )
    if attachment is not None:
        message.attach(attachment.filename,
                       "application/octect-stream",
                       attachment.read())
    mail.send(message)
