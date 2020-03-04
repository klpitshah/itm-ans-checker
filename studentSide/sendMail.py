# -*- coding: utf-8 -*-

import smtplib
import sys

s = smtplib.SMTP('smtp.gmail.com', 587) 
s.starttls() 
s.login("daiict.exam.portal@gmail.com", "@daiictexamportal@")
# print(str(sys.argv[1]))
# print(str(sys.argv[2]))
SUBJECT = "Registration request"
text = "Welcome to the GTU Exam Portal \nUsername= " + str(sys.argv[1]) + "\nPassword= " + str(sys.argv[2]) + "\nBest of luck"

message = 'Subject: {}\n\n{}'.format(SUBJECT, text)
s.sendmail("sender_email_id", str(sys.argv[1]) + "gtu@gmail.com", message)


# #for pranav's testing, reverting all mails to kalpit's daiict id
# s.sendmail("sender_email_id", "201601441@daiict.ac.in", message)
s.quit() 

