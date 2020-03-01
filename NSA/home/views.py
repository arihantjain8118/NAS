from django.shortcuts import render
from django.contrib.auth.models import User,auth
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login as auth_login
from django.shortcuts import redirect
from django.shortcuts import render_to_response
from django.template.loader import render_to_string


from django.http import HttpResponse
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import EmailMessage
from newsapi import NewsApiClient



# Create your views here.

from django.http import HttpResponse

def index(request):
    if request.user.is_authenticated :
        print("bhai")
        ctx={'user':request.user}
        newsapi = NewsApiClient(api_key='c50d354b35af4b638057c101ab8d941f')
        top_headlines = newsapi.get_top_headlines(q='bitcoin',
                                          sources='bbc-news,the-verge',
                                          category='business',
                                          language='en',
                                          country='us')
        articles = top_headlines['articles']   

        desc = []
        news = []
        img = []
        for i in range(len(articles)):
            myarticles = articles[i]
            news.append(myarticles['title'])
            desc.append(myarticles['description'])
            img.append(myarticles['urlToImage'])   
            print("kjggyftffrrrrdrdrdrdr")
        mylist = zip(news,desc,img)                             
        ctx={'user':request.user,'mylist':mylist}
        print(top_headlines)

        return render_to_response("home/welcome.html",ctx)
    else:
        return render(request,'home/index.html')

def register(request):
    print("AYYYYAAA")
    first_name=request.POST["first_name"]
    last_name=request.POST["last_name"]
    email=request.POST["email"]
    username=request.POST["username"]
    password=request.POST["password"]

    if User.objects.filter(username=username).exists():
	    return HttpResponse('Username not available')

    user = User.objects.create_user(username=username,email=email,password=password,first_name=first_name,last_name=last_name)
    user.is_active = False
    user.save()
    current_site = get_current_site(request)
    mail_subject = 'Activate your blog account.'
    message = render_to_string('home/verification.html', {
                'user': user,
                'domain': current_site.domain,
                'uid':urlsafe_base64_encode(force_bytes(user.pk)),
                'token':account_activation_token.make_token(user),
            })
    to_email = user.email
    email = EmailMessage(
                        mail_subject, message, to=[to_email]
            )
    email.send()

    return redirect('/')

def loginuser(request):
    print("anad")
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    print(user)
    print("dvjbhv")


	# if user is not  None and profile.is_member is True :
    if user is not None:
        login(request,user)
        print(user)
        print("kdsha")
        ctx={'user':user}
        # return render_to_response("home/welcome.html",ctx)
        return redirect('/')


    else:
        print("jojo")
        print(user)
        # user1= User.objects.get(email = username)
        # username = user1.username
        try:
            user1 = User.objects.get(email=username)
        except User.DoesNotExist:
            user1 = None
        print(username)
        print("bhai")
       
        if user1 is not None:
            username=user1.username
            user = authenticate(request, username=username, password=password)
            login(request,user)
            print("jojo")
            return redirect('/')
            # return render_to_response("home/welcome.html", {'user', user})
        return HttpResponse('Sorry you are not a member')
		# Return an 'invalid login' error message.


def loginregisterpage(request):
    if request.user.is_authenticated:
        print("bhai")
        # ctx={'user':request.user}
        newsapi = NewsApiClient(api_key='c50d354b35af4b638057c101ab8d941f')
        top_headlines = newsapi.get_top_headlines(sources='bbc-news')
        articles = top_headlines['articles']   

        desc = []
        news = []
        img = []
        for i in range(len(articles)):
            myarticles = articles[i]
            news.append(myarticles['title'])
            desc.append(myarticles['description'])
            img.append(myarticles['urlToImage'])   
            print("kjggyftffrrrrdrdrdrdr")
        mylist = zip(news,desc,img)                             
        ctx={'user':request.user,'mylist':mylist}
        print(top_headlines)

        return render_to_response("home/welcome.html",ctx)
   
        # return render(request,'home/welcome.html')
    else:
        return render(request,'home/index.html')

@login_required
def logoutuser(request):
	logout(request)
	return redirect('/')

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        # return redirect('home')
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')
