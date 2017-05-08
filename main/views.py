from django.template.response import TemplateResponse

def home (request):
    context = {}
    return TemplateResponse(request, 'index.html', context)
