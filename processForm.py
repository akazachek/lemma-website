from flask_mail import Message


def instructor_form(mail, form):
    print(form)
    mail_form(mail, "test", "hello world")


def mail_form(mail, subject, body, attachments=None):
    message = Message(
        subject=subject,
        body=body,
        attachments=attachments,
        recipients=["lemmanetwork@gmail.com"]
    )
    mail.send(message)
