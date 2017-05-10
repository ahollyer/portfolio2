from django.template.response import TemplateResponse
from forms import *
from django import http
from django.core.mail import send_mail

def home (request):
    form = ContactForm(request.POST or None)

    if request.method == 'POST':
        if form.is_valid():
            message =  "Name: {}\n\nMessage: {}\n\nEmail: {}".format(
                form.cleaned_data['name'],
                form.cleaned_data['message'],
                form.cleaned_data['email']
            )
            send_mail(
                'Contact Form Submission',
                message,
                'aspen.hollyer@gmail.com',
                ['me@aspenhollyer.com'],
                fail_silently=False,
            )
            return http.HttpResponseRedirect('/thanks')
        print(form.errors)
    context = {
        'form': form
    }
    return TemplateResponse(request, 'index.html', context)

def thanks (request):
    context = {}
    return TemplateResponse(request, 'thanks.html', context)
