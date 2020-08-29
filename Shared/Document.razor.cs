using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ImagineTaiTokerau.Shared {
    public class Document : ComponentBase, IDisposable
    {
        [Inject]
        protected IJSRuntime JsRuntime { get; set; }

        [Inject]
        protected NavigationManager NavigationManager { get; set; }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
                NavigationManager.LocationChanged -= LocationChanged;
        }

        protected override void OnInitialized()
        {
            NavigationManager.LocationChanged += LocationChanged;
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if(!firstRender) return;

            await SetTitle(new Uri(NavigationManager.Uri));
        }

        private async Task SetTitle(Uri uri)
        {
            var pageName = uri.Segments.Last();
            await JsRuntime.InvokeVoidAsync("JsFunctions.setDocumentTitle", PageTitleGenerator.Create(pageName));
        }

        private async void LocationChanged(object sender, Microsoft.AspNetCore.Components.Routing.LocationChangedEventArgs e)
        {
            await SetTitle(new Uri(e.Location));
        }
        
        private class PageTitleGenerator
        {
            private const string _domain = "Imagine Tai Tokerauorg";
    
            public static string Create(string title)
            {
                if (string.IsNullOrWhiteSpace(title))
                    throw new ArgumentException("Value cannot be null or whitespace.", nameof(title));
		    
                string pageTitle;
                var textInfo = CultureInfo.CurrentCulture.TextInfo;

                title = title.Replace('-', ' ');

                switch (title)
                {
                    case "/":
                        pageTitle = _domain;
                        break;
                    default:
                        pageTitle = $"{textInfo.ToTitleCase(title)} | {_domain}";
                        break;
                }

                return pageTitle;
            }
        }

    }
}