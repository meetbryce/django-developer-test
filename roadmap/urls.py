from django.conf.urls import patterns, url


urlpatterns = patterns(
    'roadmap.views',
    url(r'^$', 'dashboard', name='dashboard')
)