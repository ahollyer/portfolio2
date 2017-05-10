from django import forms

class ContactForm (forms.Form):
    name = forms.CharField(label='Name', max_length=50)
    email = forms.EmailField(label='Email', max_length=50)
    message = forms.CharField(label='Message', max_length=800)
